**[Link](https://github.com/backstage/backstage/blob/master/plugins/search-backend-node/src/IndexBuilder.ts)**

- Orchestrates the process of collecting, decorating and indexing documents for search engines.

- **Constructor (`constructor`):**
   - When an `IndexBuilder` object is created, the constructor initializes empty objects for collators, decorators, and document types, and stores the provided logger and search engine for later use.

- **Get Search Engine (`getSearchEngine`):**
   - This method returns the registered search engine to the caller.

- **Get Document Types (`getDocumentTypes`):**
   - This method returns the registered document types to the caller.

- **Add Collator (`addCollator`):**
   - This method allows the registration of a collator, which collects documents. It logs the addition and stores the collator factory and its schedule for later use.

- **Add Decorator (`addDecorator`):**
   - This method allows the registration of a decorator, which can enhance documents with additional data or transformations. It logs the addition and stores the decorator factory for later use.

- **Build (`build`):**
   - This is where the magic happens! This method creates a scheduler, then iterates through each registered collator, creating a task for each one. 
   - Each task:
     - Instantiates the collator and logs the action.
     - Instantiates any relevant decorators and logs the action.
     - Instantiates an indexer, which will index the documents.
     - Composes the collator, decorators, and indexer into a pipeline, which processes the documents from start to finish.
     - If there's an error during processing, it logs the error and rejects the promise. Otherwise, it logs the success and resolves the promise.
   - Finally, it returns the scheduler with all the tasks added, ready to be started.
   - **BTW**: The `build` method does not directly perform the actions of calling the collator, decorator, and indexer. Instead, it sets up a schedule of tasks to be performed and returns a `scheduler` object with these tasks added to it. The actual execution of these tasks will be managed by the scheduler, which can run them at specified intervals or under specific conditions.

This `IndexBuilder` class effectively organizes and orchestrates the steps needed to collect, enhance, and index documents, making them ready for searching. By registering collators and decorators, and then building a schedule of tasks, it sets up a system for keeping the search index up-to-date with the latest data.