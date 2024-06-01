>![[Pasted image 20231024193111.png]]

- In `@backstage/plugin-search-backend-module-<searchEngine>`
	- The actual `SearchEngine` implementation handles the [[indexer]] and [[query handler]]
- In `@backstage/plugin-<pluginId>-backend`
	- Each backend plugin defines how documents are retrieved and mapped to an IndexableDocument.
	- Here we have decorator factories based off of their individual needs.
- In `packages/backend/src/plugins/search.ts`
	- We configure the [[search engines]], [[collator]] and [[decorators]] according to our org.
	- 