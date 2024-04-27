`use` allows you to create shortcuts to a path. We want to always define the parent with the function we are bringing in. So that we can keep track of which items are coming from outside modules.

```rust
mod front_of_house {
  pub mod hosting {
    pub fn add_to_waitlist() {}
  }
}

use crate::front_of_house::hostings;

pub fn eat_at_restaurant() {
  hostings::add_to_waitlist();
}
```

#### Convention for items
This is not the case for structs, enums or other items. We should use the full path down to the item.

```rust
use std::collections::HashMap;

fn main() {
  let mut map = HashMap::new();
  map.insert(1,2);
}
```

#### Renaming with `as`
You can rename what you import using the `as` keyword.

```rust
use std::fmt::Result;
use std::io::Result as IoResult;

fn function1() -> Result {
    Ok(())
}

fn function2() -> IoResult<()> {
    Ok(())
}
```

#### Multiple Imports
You can import multiple items on the same line like so:

```rust
// Before
use std::cmp::Ordering;
use std::io;

// After
use std::{cmp::Ordering, io};
```

#### Glob Operator
Brings all public items into scope.

```rust
use std::collections::*
```