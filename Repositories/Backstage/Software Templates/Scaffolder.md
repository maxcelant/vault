The scaffolder allows you to create applications quickly by using templates. You fill out the template and the scaffolder will handle the rest.

### Steps
1. **Template Selection:** The user selects the desired template and fills out the form, providing values for the variables defined in the schema.
2. **Template Reading:** Backstage reads the entire template directory, including all files and subdirectories.
3. **Variable Replacement:** Backstage scans through the files, looking for placeholders that match the variables defined in the schema. It replaces these placeholders with the corresponding values provided by the user.
4. **Component Creation:** The populated template is used to create the new component, including all the files and directories, with the user-specified values.
5. **Post-Processing (Optional):** Additional steps might be taken, such as initializing a Git repository, setting up CI/CD pipelines, or other custom actions defined in the template.

### Schema
Part of the `template.yaml` file. It tells Backstage what information to ask for when a user wants to scaffold a new component using the template.

```yaml
apiVersion: backstage.io/v1beta2
kind: Template
metadata:
  name: react-app
  title: React Application
  description: Creates a new React application
spec:
  type: website
  path: ./template
  schema:
    required:
      - name
      - description
    properties:
      name:
        title: Name
        type: string
        description: Name of the component
      description:
        title: Description
        type: string
        description: Brief description of the component
```

In this example, we have `name` and `description` in our `schema`.
****
When a user chooses this template in Backstage, the Scaffolder will prompt them to provide values for these properties, using the titles and descriptions to explain what is needed. The user-provided values will then be used to replace the corresponding placeholders in the template files (e.g., `{{parameters.name}}` and `{{parameters.description}}`).

### Example

Let's say this is our file structure for our FastAPI project.

```bash
template.yaml
template/
├── app/
│   └── main.py            # Main application file
├── tests/
│   └── test_main.py       # Test file
├── .gitignore             # Git ignore file
├── Dockerfile             # Docker configuration
├── requirements.txt       # List of dependencies
└── README.md              # Project documentation

```

These files would contain the actual code and configurations for the FastAPI project, with placeholders for any values that should be customized based on user input.

For example, the `main.py` file might look something like this:

```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to {{values.project_name}}!"}
```

From the `template.yaml`, where you defined `project_name`

```yaml
schema:
  required:
    - project_name
  properties:
    project_name:
      title: Project Name
      type: string
      description: Name of the FastAPI project
```