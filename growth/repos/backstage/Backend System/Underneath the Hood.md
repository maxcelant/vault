`createBackend` calls `createSpecializedBackend`, which just injects a bunch of service factories into it (stuff like logger and cache) and then creates an object of type `BackstageBackend` 

#### `BackstageBackend` Class ([link](https://github.com/backstage/backstage/blob/master/packages/backend-app-api/src/wiring/BackstageBackend.ts))
This class mostly acts as a wrapper / facade for `BackendInitializer`.
- _`#initializer: BackendInitializer`_: the wrapped object that does the heavy lifting
- `constructor` creates an object of type `BackendInitializer` . 
- `add()`: simply calls `add` on the `BackendInitializer` instance.
- `start()`: simply calls `start` on the `BackendInitializer` instance.
- `stop()`: simply calls `stop` on the `BackendInitializer` instance.
- `isPromise()`: Checks to see if the *`value`* is a promise or not.
- `unwrapFeature()`: is used to normalize different ways a `BackendFeature` might be defined or imported.

#### `BackendInitializer` Class ([link](https://github.com/backstage/backstage/blob/master/packages/backend-app-api/src/wiring/BackendInitializer.ts))
- _`#registeredFeatures: Array<Promise<BackendFeature>>`_: Holds all of the backend plugins or modules you make.
- _`#features: Array<InternalBackendFeature>`_: list of backend plugins or modules.
- _`#serviceRegistry: ServiceRegistry`_: services that plugins can use.
- `#getInitDeps()`: Responsible for resolving dependencies required to initialize a plugin or module. Takes a list of deps for a plugin and sees if they are extension points or services. 
- `add()`: Adds a `BackendFeature` object to the `registeredFeatures` list.
- `start()`: Adds listeners to the global process to handle a graceful exit and then calls the `#doStart()` 
- `#doStart()`: 
	- checks for circular dependencies.
	- Adds all the features using `#addFeature()` method.
	- Uses discovery service to look for more features and adds those.
	- Initializes root services like logger, etc.
	- Initializes _`pluginInits`_ and _`modulesInits`_ which are dicts (string, obj)
	- Iterates over all features (which can be plugins or modules).
		- Adds any extension points in that plugin or module to a `provides` set.
		- If the feature is a plugin it adds it to _`pluginInits`_ dict with those extension points, init and dependencies.
		- If the feature is a module, we get the modules of that plugin and then add this module to that dict for that plugin.
	- We get all the plugin and module ids (just ids) and put them into a set _`allPluginIds`_. 
	- Initializes all the plugins in parallel using _`allPluginsIds`_ with a `promise.all` and then a `map` to go through each plugin.
		- Gets the modules of plugin using the `pluginId`.
		-  If there are modules for this plugin...
			- Creates a dependency graph based on what a module consumes and provides.
			- Checks for circular dependencies in the graph.
			- If a module has an extension point that is consumed by another module / plugin, we want it initialized AFTER those other plugins that consume it. Because that module/plugin is extending itself!
		- For the plugin itself...
			- calls `#getInitDeps()` and gets its dependencies.
			- starts the backend plugin.
		- Signal that the plugin was initialized.
- `#addFeature()`: takes a feature (backend plugin or service) and adds it to the appropriate list (either _`#features`_ or _`#serviceRegistry`_). 

#### `BackendFeature` Class