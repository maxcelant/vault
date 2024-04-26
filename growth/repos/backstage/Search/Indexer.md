- While the [[Collator]] organize the data into structured formats, the indexing process takes that organized data and optimizes it for search queries.
- Indexer contains references to the documents and info on how the terms in the documents relate to each other, enabling the search engines to quickly find relevant info.

---
#### Example

1. **Collation (Using Collators):**
   - A collator would go through the library's database and collect data about each book such as its title, author, publication date, genre, and a brief description.
   - It then organizes this data into a specific format known as documents. Each document represents a book and contains fields for the book's details. For example, a document might look like this:
   ```json
   {
     "title": "To Kill a Mockingbird",
     "author": "Harper Lee",
     "publication_date": "1960",
     "genre": "Fiction",
     "description": "A novel about the injustices of the 1930s Deep South..."
   }
   ```

2. **Indexing:**
   - The indexing process takes all these documents and creates an index. The index is like a big table of contents that tells the search engine where to find each word in the documents.
   - For example, the index might have entries like:
     - "To" → Document 1
     - "Kill" → Document 1
     - "Mockingbird" → Document 1
     - "Harper" → Document 1
     - "Lee" → Document 1
     - ...and so on for every word in every document.
   - The index helps the search engine quickly find which documents contain the words a user is searching for. So if a user searches for "Harper Lee", the search engine can look at the index, find out which documents mention "Harper Lee", and return those documents as the search results.

This way, the collator helps in gathering and organizing the necessary data, and the indexing process helps in creating a structure that allows the search engine to quickly and efficiently find relevant information based on user queries.