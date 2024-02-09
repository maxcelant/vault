
| Command        | Description                                        |
|----------------|----------------------------------------------------|
| **Navigation** |                                                    |
| `h`            | Move left                                          |
| `j`            | Move down                                          |
| `k`            | Move up                                            |
| `l`            | Move right                                         |
| `w`            | Jump forwards to the start of a word              |
| `e`            | Jump forwards to the end of a word                |
| `b`            | Jump backwards to the start of a word             |
| `0`            | Jump to the start of the line                      |
| `$`            | Jump to the end of the line                        |
| `gg`           | Go to the first line of the document               |
| `G`            | Go to the last line of the document                |
| **Editing**    |                                                    |
| `i`            | Enter insert mode before the cursor                |
| `a`            | Enter insert mode after the cursor                 |
| `o`            | Open a new line below and enter insert mode        |
| `O`            | Open a new line above and enter insert mode        |
| `x`            | Delete the character under the cursor              |
| `dd`           | Delete the current line                            |
| `yy`           | Yank (copy) the current line                       |
| `p`            | Paste the yanked text after the cursor             |
| `P`            | Paste the yanked text before the cursor            |
| `u`            | Undo the last operation                            |
| `Ctrl + r`     | Redo the last undo                                 |
| **Advanced**   |                                                    |
| `:%s/old/new/g`| Find and replace all occurrences of 'old' with 'new' |
| `v`            | Start visual mode (character selection)            |
| `V`            | Start visual line mode                             |
| `Ctrl + v`     | Start visual block mode                            |
| `:e filename`  | Open a file in a new buffer                        |
| `:w`           | Save the file                                      |
| `:q`           | Quit Vim                                           |
| `:wq` or `:x`  | Save and quit                                      |
| `:q!`          | Quit without saving changes                        |
| `:split`       | Split window horizontally                          |
| `:vsplit`      | Split window vertically                            |
| **Macros**     |                                                    |
| `q<letter>`    | Start recording a macro to a register              |
| `q`            | Stop recording the macro                           |
| `@<letter>`    | Execute the macro                                  |