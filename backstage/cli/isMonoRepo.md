```ts
export async function isMonoRepo(): Promise<boolean> {
  const rootPackageJsonPath = paths.resolveTargetRoot('package.json');
  try {
    const pkg = await fs.readJson(rootPackageJsonPath);
    return Boolean(pkg?.workspaces?.packages);
  } catch (error) {
    return false;
  }
}
```