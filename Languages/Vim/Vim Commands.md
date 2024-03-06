### Horizontal Motions
`f<key>`: jumps forward onto the `key` specified in a line.
`t<key>`: jumps forward to but not on the `key` specified.
`F<key>`: jumps backwards onto the `key` specified.
`T<key>`: jumps backwards to but not on the `key` specified
`;`: jumps forward to the next  `key` (just in that line)
`,`: jumps backwards (just in that line)


`A`: will go to end of line in append mode
`I`: will go to start of line in insert mode
`o`: makes a newline below your cursor and switches to insert mode
`O`: makes newline above your cursor and switches to insert mode

#### Vertical Motions
`{`: Jumps by "paragraph" forward
`}`: Jumps by "paragraph" backwards
`CTRL + D`: jumps a half page down
`CTRL + U`: jumps a half page up
`gg`: top of file
`/<key>`: finding that `key`
	`n`: goes to next `key` found
	`SHIFT + n`: goes to prev `key` found
`* (while on key)`: will find all of that `key`

#### Advanced Motions
`:%s/<before>/<after>/g` To change `before` to `after` within a file