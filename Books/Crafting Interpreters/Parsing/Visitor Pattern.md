#### Real-World Analogy

Imagine you run a museum with various types of art pieces (paintings, sculptures, installations). You want to offer different kinds of tours for visitors: a general tour, a detailed art history tour, and a tour focusing on the techniques used in the artworks.

- **Art pieces**: These are like the elements in your program (the objects being visited). Each type of art piece can "accept" visitors.
- **Tours (Visitors)**: Each type of tour is like a different implementation of the Visitor interface. The tour guide (visitor) knows how to present each type of art piece to the museum visitors.
- **Adding a new tour**: If you decide to offer a new type of tour, you don't need to change anything about the art pieces themselves; you simply prepare a new tour guide with knowledge (implementation) about how to present the art pieces.

--- 
#### Example
Abstract visitor class, from this, we can make concrete visitor classes that can do some interesting things with its visit methods
```python
class Visitor(ABC):

  @abstractmethod
  def visit_file(self, file: System.File):
    pass
  
  @abstractmethod
  def visit_dir(self, dir: System.Dir):
    pass

```

Building your classes in this hierarchy structure means that you can 
easily recursively drill into components of different types.

We pass in a concrete visitor type into this `accept()` method. The accept method is the thing that calls the individual visitor method, depending on which subclass its in.

```python
class System(ABC):

  @abstractmethod
  def accept(self, visitor: Visitor):
    pass

  class File:
    def __init__(self, name, contents):
      self.name = name
      self.contents = contents

    def accept(self, visitor: Visitor):
      visitor.visit_file(self)

  class Dir:
    def __init__(self, name: str, size: int, content: list[System]):
      self.name = name
      self.size = size
      self.content = content

    def accept(self, visitor: Visitor):
      visitor.visit_dir(self)

```

Here is a concrete visitor implementation that simply performs a search on the files and directories:

```python
class SearchVisitor(Visitor):

  def __init__(self, keyword):
    self.keyword = keyword


  def visit_file(self, file: System.File):
    if file.name == self.keyword:
      print(f'{file.name=} {file.contents=}')


  def visit_dir(self, dir: System.Dir):
    if dir.name == self.keyword:
      print(f'{dir.name=} {[ f"{c.name}" for c in dir.content ]}')
    
    for content in dir.content:
      content.accept(self)
```

And here we actually call and use it.

```python
if __name__ == '__main__':
  
  file_system = System.Dir(
    name='dev',
    size=100,
    content=[
      System.File(name='dog.img', contents='photo of doggy'),
      System.File(name='cat.img', contents='photo of cat'),
      System.Dir(
        name='runway',
        size=12500,
        content=[
          System.File(name='index.ts', contents='<h1>Welcome to Runway</h1>')
        ]
      )
    ]
  )

  search_visitor = SearchVisitor('index.ts')
  file_system.accept(search_visitor)
```