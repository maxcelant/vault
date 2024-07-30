- Having a multistage build allows you to split up the build steps from the final deployment.
- This is important because those intermediate steps may not all be needed for the final deployment.
- For instance, in an Node project, only the necessary `node_modules` are brought over.
- Also the actual js is brought over instead of the ts.
- Things like `eslint`, `jest`, and `webpack` are not brought over to the final build.

