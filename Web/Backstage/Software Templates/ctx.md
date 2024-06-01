The `ctx` of a scaffolder action holds a lot of important information:
- `ctx.logger` - provides logging capabilities
- `ctx.workspacePath` - temporary directory where scaffolding takes place. Actions can read and write to this directory.
- `ctx.input` - contains the inputs provided to the action in the template's YAML file.
- `ctx.output` - can set outputs that can be used in subsequent steps.