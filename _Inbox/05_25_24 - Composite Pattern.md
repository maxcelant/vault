
- Created a composite object called `CompositeJob` that can run all the jobs plugged-in through the same interface as the jobs themselves.

```python
class CompositeJob(Job):
  def __init__(self, jobs: list[Job], name: str = 'composite'):
    self.name = name
    self.jobs = jobs

  def execute(self, ctx: RepoAuditor):
    for job in self.jobs:
      try:
        job.execute(ctx=ctx)
      except Exception as e:
        print(f'{job.name} failed: {e}')

class CreateIssueJob(Job):
  ...

class GeneralJob(Job):
  ...

class DependabotJob(Job):
  ...

class AutomationJob(Job):
  ...

class PrsJob(Job):
  ...
```

- Here is the Composite being created in the factory, adding some jobs to it depending on what the user wants.

```python
class JobFactory:
  @classmethod
  def is_true(cls, flag: str) -> bool:
    return flag.lower() in ['true', '1', 't']
  
  @classmethod
  def create(cls, args: list[str]) -> list[Job]:
    jobs: list[Job] = []

    if cls.is_true(args[0]): 
      jobs.append(CreateIssueJob())
    if cls.is_true(args[1]):
      jobs.append(DependabotJob())
    if cls.is_true(args[2]):
      jobs.append(DependabotJob())
    if cls.is_true(args[3]):
      jobs.append(AutomationJob())
    if cls.is_true(args[4]):
      jobs.append(PrsJob())

    return CompositeJob(jobs=jobs);
```

- Since it acts as a `Job` itself, we can run it using `execute()`.

```python
class RepoAuditor:
    def __init__(...):
        ...
        
    def audit_repo(self):
        self.composite.execute(ctx=self)
```