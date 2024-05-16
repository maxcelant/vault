- Backstage has an overarching function that resolves different paths when JUST given the `__dirname`. This would be a good way to consolidate that information.

```ts
export type ResolveFunc = (...paths: string[]) => string;

export type Paths = {
  // Root dir of the cli itself, containing package.json
  ownDir: string;

  // Monorepo root dir of the cli itself. Only accessible when running inside Runway repo.
  ownRoot: string;

  // The location of the app that the cli is being executed in
  targetDir: string;

  // The monorepo root package of the app that the cli is being executed in.
  targetRoot: string;

  // Resolve a path relative to own repo
  resolveOwn: ResolveFunc;

  // Resolve a path relative to own monorepo root. Only accessible when running inside Backstage repo.
  resolveOwnRoot: ResolveFunc;

  // Resolve a path relative to the app
  resolveTarget: ResolveFunc;

  // Resolve a path relative to the app repo root
  resolveTargetRoot: ResolveFunc;
};
```


### findRootPath
- Looks for the `package.json` with a workspace config to identify the root of the repo.
- If the path to the package is real and it passes the filter, then it is returned.
- It's important to note that the directory name is what is returned and not the path to the `package.json`.
```ts
export function findRootPath(
  searchDir: string,
  filterFunc: (pkgJsonPath: string) => boolean,
): string | undefined {
  let path = searchDir;

  // Some confidence check to avoid infinite loop
  for (let i = 0; i < 1000; i++) {
    const packagePath = resolvePath(path, 'package.json');
    const exists = fs.existsSync(packagePath);
    if (exists && filterFunc(packagePath)) {
      return path;
    }

    const newPath = dirname(path);
    if (newPath === path) {
      return undefined;
    }
    path = newPath;
  }

  throw new Error(
    `Iteration limit reached when searching for root package.json at ${searchDir}`,
  );
}
```

### findOwnDir
- Finds the root of a given package.
- Since the filter is just `() => true`, this will return on the first `package.json` it finds.
```ts
export function findOwnDir(searchDir: string) {
  const path = findRootPath(searchDir, () => true);
  if (!path) {
    throw new Error(
      `No package.json found while searching for package root of ${searchDir}`,
    );
  }
  return path;
}
```

### findOwnRootDir
- Finds the root of the monorepo that the package exists in.
- Only accessible when running inside Backstage repo.
```ts
export function findOwnRootDir(ownDir: string) {
  const isLocal = fs.existsSync(resolvePath(ownDir, 'src'));
  if (!isLocal) {
    throw new Error(
      'Tried to access monorepo package root dir outside of Backstage repository',
    );
  }

  return resolvePath(ownDir, '../..');
}
```

### findPaths
- This is a large function that returns an object of paths.
- Ex: `const paths = findPaths(__dirname)`
```ts
export function findPaths(searchDir: string): Paths {
  const ownDir = findOwnDir(searchDir);
  
  const targetDir = fs
    .realpathSync(process.cwd())
    .replace(/^[a-z]:/, str => str.toLocaleUpperCase('en-US'));
```



```ts
  let ownRoot = '';
  const getOwnRoot = () => {
    if (!ownRoot) {
      ownRoot = findOwnRootDir(ownDir);
    }
    return ownRoot;
  };
```

- Uses the `findRootPath` function to see if the `package.json`contains `data.workspaces.packages`, if it does, then its a monorepo!
- If it isn't, then it returns `targetDir`, which is the root of where the package is installed as a dependency.

```ts
  let targetRoot = '';
  const getTargetRoot = () => {
    if (!targetRoot) {
      targetRoot =
        findRootPath(targetDir, path => {
          try {
            const content = fs.readFileSync(path, 'utf8');
            const data = JSON.parse(content);
            return Boolean(data.workspaces?.packages);
          } catch (error) {
            throw new Error(
              `Failed to parse package.json file while searching for root, ${error}`,
            );
          }
        }) ?? targetDir;
    }
    return targetRoot;
  };
```

- This is the object that **findPaths** returns.

```ts
  return {
    ownDir,
    get ownRoot() {
      return getOwnRoot();
    },
    targetDir,
    get targetRoot() {
      return getTargetRoot();
    },
    resolveOwn: (...paths) => resolvePath(ownDir, ...paths),
    resolveOwnRoot: (...paths) => resolvePath(getOwnRoot(), ...paths),
    resolveTarget: (...paths) => resolvePath(targetDir, ...paths),
    resolveTargetRoot: (...paths) => resolvePath(getTargetRoot(), ...paths),
  };
}
```