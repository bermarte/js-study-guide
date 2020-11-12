# Examples

This repository comes with some libraries to help you create a JS study guide. One will help you include interactive snippets in your web page, the other will help you include read-only code in your web page.  You can see them used together in [./index.html](./index.html)

---

## `<code-along>` Element

To help you build your study guides, this repository comes with a custom HTML element for including interactive code snippets. You can use it just like a normal HTML element, check out the examples in [./code-alongs.html](./code-alongs.html).

You can set the width of the component using `class` or `style`. The height of the element will be set automatically by the component.

There are two important attributes:

- **`src='./path/to/file.js'`**: this is how you load a snippet into your element
- **`js-tutor`**: if this attribute is present, users can open the code in JS Tutor. You will want to add this attribute for code that does not have `prompt`/`alert`/`confirm`
- **`loop-guard`**: if present, a loop guard option will be rendered for this snippet.

---

## Prism.js

If you want to keep things simpler and just have highlighted code snippets, prism will do the trick.  Check out [./prism-snippets.html](./prism-snippets.html) to see this in use.

When using Prism in this repository there are two extra attributes you can use:

- **eval**: when present, the code snippet will have buttons for evaluating the code in the console or debugger.
- **`js-tutor`**: if this attribute is present, users can open the code in JS Tutor. You will want to add this attribute for code that does not have `prompt`/`alert`/`confirm`
