Look [here](https://backstage.io/docs/features/software-templates/writing-custom-actions/)

Certainly! [Backstage](https://backstage.io/) is a platform for building developer portals. One of its features is the software templates system, which allows you to define and use templates to scaffold new projects. These templates can have associated actions that perform specific tasks as part of the scaffolding process.

Creating a new scaffolder action involves defining a new function that the scaffolder can execute when a template is used. Here's how you can do it:

1. **Set Up Your Backstage Development Environment**

   If you haven't set up a local development environment for Backstage, you should do so by following the [Backstage Development Environment documentation](https://backstage.io/docs/getting-started/development-environment).

2. **Create a New Action**

   Each scaffolder action is essentially a function. Here's a basic example:

   ```typescript
   import { createTemplateAction } from '@backstage/plugin-scaffolder-backend';

   export const yourNewAction = createTemplateAction<{ inputField: string }>({
     id: 'custom:your-action-id',
     schema: {
       input: {
         required: ['inputField'],
         type: 'object',
         properties: {
           inputField: {
             title: 'Input Field',
             type: 'string',
           },
         },
       },
     },
     async handler(ctx) {
       // Your action logic goes here
       const { inputField } = ctx.input;

       // For example, log the input field
       ctx.logger.info(`Received input: ${inputField}`);
     },
   });
   ```

   This code defines a new scaffolder action with an ID of `custom:your-action-id` and a single input field. The actual action logic is placed in the `handler` function.

3. **Integrate the Action into the Scaffolder Backend**

   Once you've defined your action, you need to register it with the scaffolder backend. In your Backstage backend code, locate the `scaffolder.ts` file (or a similar file where you've set up the scaffolder). Add your action to the list of available actions:

   ```typescript
   import { createRouter } from '@backstage/plugin-scaffolder-backend';
   import { yourNewAction } from './your-action-file'; // Adjust the import path

   // ... other code ...

   const router = await createRouter({
     // ... other options ...
     actionRegistry: [
       // ... other actions ...
       yourNewAction,
     ],
   });
   ```

4. **Use the Action in a Template**

   Once the action is registered, you can use it in any Backstage software template. Update your template's `template.yaml` to include your action:

   ```yaml
   apiVersion: backstage.io/v1beta2
   kind: Template
   metadata:
     name: my-template
     # ... other metadata ...
   spec:
     # ... other spec ...
     steps:
       - id: custom-step
         action: custom:your-action-id
         input:
           inputField: "Some value"
   ```

5. **Testing**

   Test your new action by attempting to scaffold a new software project using the template that incorporates the action. Ensure that the action behaves as expected.

6. **Documentation**

   Don't forget to document your custom action, especially if other developers within your organization will be using or extending it.

Remember that the flexibility of Backstage means that your custom scaffolder actions can be as simple or as complex as needed. They can interact with external systems, create files, or even make network requests. The sky's the limit!