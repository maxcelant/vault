- With `flex-direction: row`, the _primary axis_ runs horizontally, from left to right. When we flip to `flex-direction: column`, the primary axis runs vertically, from top to bottom.

>![[Pasted image 20240111223515.png]]

- Unlike `justify-content` and `align-items`, `align-self` is applied to the _child element_, not the container. It allows us to change the alignment of a specific child along the cross axis:

> ![[Pasted image 20240111223843.png]]

- In Flexbox, items are distributed along the primary axis. By default, they're nicely lined up, side-by-side. I can draw a straight horizontal line that skewers _all_ of the children, like a kebab?:

![[Pasted image 20240111224014.png]]
- The cross axis is different, though. A straight vertical line will only ever intersect _one_ of the children.
- It's less like a kebab, and more like a group of cocktail wieners?:
- There's a significant difference here. With the cocktail wieners, each item can move along its stick _without interfering_ with any of the other items:

>![[Pasted image 20240111224109.png]]

- By contrast, with our primary axis skewering each sibling, a single item _can’t_ move along its stick without bumping into its siblings!
- In _Flexbox_, however, the `width` property is implemented differently. It's more of a suggestion than a hard constraint.

# flex-basis
- **To put it simply:** In a Flex row, `flex-basis` does the same thing as `width`. In a Flex column, `flex-basis` does the same thing as `height`.
- It allows us to set the _hypothetical size_ of an element in the primary-axis direction, regardless of whether that's horizontal or vertical.
>![[Pasted image 20240111225012.png]]


# flex-grow
- `flex-grow` controls how the _extra space is distributed_ when the items are smaller than their container.
- By default, elements in a Flex context will shrink down to their minimum comfortable size along the primary axis. This often creates extra space.
- We can specify how that space should be consumed with the `flex-grow` property

> ![[Pasted image 20240111224956.png]]

- **What if _multiple_ children set `flex-grow`?** In this case, the extra space is divvied up between children, proportionally based on their `flex-grow` value.

# flex-shrink
- `flex-shrink` controls how _space is removed_ when the items are bigger than their container.
- The Flexbox algorithm might shrink elements below this desired size, but by default, they'll always scale together, preserving the ratio between both elements.
- Now, what if we _don't_ want our elements to scale down proportionally? **That's where the `flex-shrink` property comes in.**
- We have a total deficit of _100px_. Normally, each child would pay ½, but because we've tinkered with `flex-shrink`, the first element winds up paying ¾ (75px), and the second element pays ¼ (25px).

>![[Pasted image 20240111225500.png]]

- When we set `flex-shrink` to 0, **we essentially “opt out” of the shrinking process altogether.**

# Minimum size gotcha
- The Flexbox algorithm refuses to shrink a child below its minimum size. The content will overflow rather than shrink further, _no matter how high we crank `flex-shrink`!_

>![[Pasted image 20240111230629.png]]

- By setting `min-width: 0px` directly on the Flex child, we tell the Flexbox algorithm to overwrite the “built-in” minimum width.

>![[Pasted image 20240111230641.png]]
# Gaps
- `gap` allows us to create space _in-between_ each Flex child. This is great for things like navigation headers:

>![[Pasted image 20240111230706.png]]

# Auto margins
- Auto margins will **gobble up the extra space, and apply it to the element's margin.** It gives us precise control over where to distribute the extra space.

>![[Pasted image 20240111230830.png]]

- With `margin-left: 0` and `margin-right: auto` we can make this sort of nav display:

>![[Pasted image 20240111230931.png]]

# Wrapping
- When we set `flex-wrap: wrap`, **items won't shrink below their hypothetical size**. At least, not when wrapping onto the next row/column is an option!
- Each row is its own mini Flexbox environment. `align-items` will move each item up or down within the invisible box that wraps around each row.

>![[Pasted image 20240111233012.png]]

But what if we want to _align the rows themselves_? We can do that with the `align-content` property:

> ![[Pasted image 20240111233050.png]]

- `flex-wrap: wrap` gives us two rows of stuff.
- Within each row, `align-items` lets us slide each individual child up or down
- Zooming out, however, we have these two rows within a single Flex context! The cross axis will now intersect _two_ rows, not one. And so, we can't move the rows individually, we need to distribute them _as a group_.
- Using our definitions from above, we're dealing with _content_, not _items_. But we're also still talking about the cross axis! And so the property we want is `align-content`.

