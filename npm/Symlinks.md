- This symlink acts like a shortcut or a reference, rather than being a copy of the file itself.
- **Symlink Creation:** Npm reads the `bin` entry in the `package.json` file of the installed package and creates a symlink in `node_modules/.bin` pointing to the executable file specified.
- **Unified Access:** When you modify the file at `node_modules/.bin`, you are actually modifying the original file in the package's bin directory, because the symlink just points to that original file.

```ad-note
Since its just a reference to the `bin` in the directory, when it executes, it is actually executing within the packages directory and NOT in the `node_modules/.bin` directory
```

