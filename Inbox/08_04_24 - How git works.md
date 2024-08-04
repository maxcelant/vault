### Git objects
- Git is made up of a few different pieces
	- **Blob**: just a file.
	- **Tree**: just a directory.
	- **Commit**: commit message, author, date, and the tree it points to.
	- **Tag**: tagger, date, object it points to.

### Inspecting git objects

```bash
git cat-file -p <hash>
```

- This command allows you to examine git objects
- When a new commit is created, Git generates a new tree object that reflects the entire state of the project at that moment. 
- This tree object is a snapshot of the project, including all files and their contents.
- If a blob or tree hasn't changed in the commit, then it will just reuse the existing blob or tree.
- During the initial commit, the entire project is "copied" to these git objects.

### Commits

```typescript
type Commit = {
  parents: Commit[],
  author: string,
  message: string,
}
```


### How blobs are stored
- Blobs store the actual contents of the files.
- File names and permissions are _not_ stored on the blob itself.

```typescript
type Blob = byte[]
```

- Blobs are structured like this:

```html
<type> <size>\0<content>
```

Example

```bash
blob 13\0Hello, World!
```

- It then creates a SHA1 hash of this and stores it in its object database. With the hash being the key.

### How trees work
- These are directories. Tree objects store metadata about files and subdirectories.

```typescript
type Tree = Record<string, Tree | Blob>
```

- Each entry in a tree has this format

```html
<mode> <name>\0<hash>
```

Example

```html
100644 file1.txt\0<hash of blob for file1.txt>
100644 file2.txt\0<hash of blob for file2.txt>
040000 subdir\0<hash of tree for subdir>
```