Optimistic concurrency works to prevent race conditions by implementing a check before committing any changes. Here’s how it ensures that race conditions are avoided:

1. **Read with a Version or Timestamp**: When a user reads the data, the system also provides a version number or timestamp that represents the state of the data at the time it was read.
    
2. **Attempt to Update**: The user makes changes and attempts to write the updated data back to the system.
    
3. **Check Version**: Before writing the new data, the system checks the current version or timestamp of the data against the version or timestamp that was read initially.