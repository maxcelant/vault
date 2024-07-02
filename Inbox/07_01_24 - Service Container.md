- Service container is a design pattern to help register and resolve services that rely on each other in a uniform way.
- You have a `container` class where you can `register` new classes along with their dependencies and they will be added to a dict.
- When you need to `resolve` that service, it will resolve all of its dependencies and create an instance of that class.

```typescript
type Constructor<T> = new (...args: any[]) => T;

interface ServiceDefinition {
  definition: Constructor<any>;
  dependencies: string[];
  singleton?: boolean;
}

class ServiceContainer {
  services: { [key: string]: ServiceDefinition } = {};
  singletons: { [key: string]: any } = {};

  register<T>(name: string, definition: Constructor<T>, dependencies: string[] = []): void {
    this.services[name] = { definition, dependencies };
  }

  singleton<T>(name: string, definition: Constructor<T>, dependencies: string[] = []): void {
    this.services[name] = { definition, dependencies, singleton: true };
  }

  resolve<T>(name: string): T {
    if (!this.services[name]) {
      throw new Error(`Service '${name}' not found`);
    }

	// If its a singleton in the container, return it
    if (this.services[name].singleton && this.singletons[name]) {
      return this.singletons[name];
    }

	// Get service, resolve its deps, create the instance.
    const { definition, dependencies } = this.services[name];
    const resolvedDependencies = dependencies.map(dep => this.resolve(dep));
    const instance = new definition(...resolvedDependencies);

	// First time seeing this singleton, save object to singletons
    if (this.services[name].singleton) {
      this.singletons[name] = instance;
    }

    return instance;
  }
}

export const container = new ServiceContainer();
```