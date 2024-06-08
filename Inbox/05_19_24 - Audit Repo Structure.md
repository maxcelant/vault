- Branch: `auditRefactor`
- Create an abstract `Job` class which has an `execute()` method.

```python
from abc import ABC, abstractmethod

class Job(ABC):
  def __init__(self, name=''):
    self.name = name
  
  @abstractmethod
  def execute(self, ctx):
    pass
```

- All the main parts will become children of `Job`: 
	- `CreateIssueJob`, `GeneralJob`, `DependabotJob`, `AutomationJob`, `PullRequestJob`

```python
class CreateIssueJob(Job):
  def __init__(self, name='create_issue'):
    self.name = name

  def execute(self, ctx: RepoAuditor):
    ...

class GeneralJob(Job):
  def __init__(self, name='general'):
    self.name = name

  def execute(self, ctx: RepoAuditor):
    ...


class DependabotJob(Job):
  def __init__(self, name='dependabot'):
    self.name = name

  def execute(self, ctx: RepoAuditor):
    ...


class AutomationJob(Job):
  def __init__(self, name='automation'):
    self.name = name

  def execute(self, ctx: RepoAuditor):
    ...


class PullRequestJob(Job):
  def __init__(self, name='prs'):
    self.name = name

  def execute(self, ctx: RepoAuditor):
	...

```

- Use a `JobFactory` to dynamically create these objects _if_ the user requested to use them.

```python
from src.jobs import AutomationJob, CreateIssueJob, DependabotJob, GeneralJob, Job, PullRequestJob

class JobFactory:
  factories = {
    'create_issue': CreateIssueJob,
    'general'     : GeneralJob,
    'dependabot'  : DependabotJob,
    'automation'  : AutomationJob,
    'prs'         : PullRequestJob
  }

  @classmethod
  def create(cls, job: str) -> Job:
    if job in cls.factories:
      return cls.factories[job]()
    else:
      raise ValueError(f'Unknown job type: {job}')
```

- Using strategy pattern, we can decouple the 'single' repo execution for the 'collection' execution.

```python
from abc import ABC, abstractmethod
import datetime
import pandas as pd
from src.repo_audit import RepoAuditor
from src.jobs import Job
from src.utils import Utils

class AuditStrategy(ABC):
  @abstractmethod
  def audit(self, jobs: list[Job], repos: list[str], audit_dir: str | None = None):
    pass

class SingleAuditStrategy(AuditStrategy):
  def audit(self, jobs: list[Job], repos: list[str], audit_dir: str | None = None): 
    repo = repos[0]
    outdir = Utils.create_and_get_output_directory(f'{repo} ({str(datetime.date.today())})')
    try:
      repo_audit = RepoAuditor(outdir=outdir, repo=repo, jobs=jobs)
      repo_audit.execute_jobs()
    except Exception as e:
      print(f"Error auditing {repo}: {e}")
    print('performing single audit...')

class CollectionAuditStrategy(AuditStrategy):
  def audit(self, jobs: list[Job], repos: list[str], audit_dir: str | None = None):
    if not audit_dir:
      audit_dir = 'Audits'
    
    repo_rows = []
    for repo in repos:
      try:
        outdir = Utils.create_and_get_output_directory(repo, audit_directory=audit_dir)
        repo_audit = RepoAuditor(outdir=outdir, repo=repo, jobs=jobs)
        repo_audit.execute_jobs()
        repo_rows.append(repo_audit.get_repo_summary_dict())
      except Exception as e:
        print(f"Error auditing {repo}: {e}")

    repos_df = pd.DataFrame(repo_rows)
    repos_df.to_csv(f"{audit_dir}/All Repos.csv", index=False)

```

- Turn the Auditor class into a context for our strategy.

```python
class AuditorContext:
  def __init__(self, options: AuditOptions):
    self.strategy: AuditStrategy | None = None
    self.audit_type: str | None  = options.audit_type
    self.audit_dir:  str | None  = options.audit_dir
    self.repos: list[str]        = options.repos
    self.jobs                    = [
        options.create_issue,
        options.general,
        options.dependabot,
        options.automation,
        options.prs,
    ]

  def set_strategy(self, strategy: AuditStrategy) -> None:
    self.strategy = strategy

  def audit(self):
    if self.strategy:
        self.strategy.audit(
          jobs=self.jobs, 
          repos=self.repos, 
          audit_dir=self.audit_dir
        )

```