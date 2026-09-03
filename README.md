# The Official MC-Build VS Code Extension

Tools for writing MC-Build (`.mcb` and `.mcbt`) files.

## Features

-   Syntax highlighting
-   Snippets for common tasks
-   **Format Document** support

New to MC-Build? Read the docs at [mcbuild.dev](https://mcbuild.dev/).

## Formatting

Run **Format Document** (or turn on format-on-save) to clean up a file. It:

-   Fixes indentation and spacing
-   Puts one statement per line
-   Keeps at most two blank lines in a row
-   Tidies the JSON in `advancement`, `loot_table`, and other JSON files
-   Tidies the JavaScript in `<%% %%>` blocks

**One thing to know:** a comment written directly inside a `template { }` (not inside a
`with`, `tick`, or `load`) gets removed when you format. That's a limitation of MC-Build itself. Comments anywhere else are safe.
