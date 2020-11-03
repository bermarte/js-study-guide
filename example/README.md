# `<code-along>` Example

To help you build your study guides, this repository comes with a custom HTML element. You can use it just like a normal HTML element, check out the examples in `./index.html`.

You can set the width of the component using `class` or `style`. The height of the element will be set automatically by the component.

There are two important attributes:

- **`src='./path/to/file.js'`**: this is how you load a snippet into your element
- **`js-tutor`**: if this attribute is present, users can open the code in JS Tutor. You will want to add this attribute for code that does not have `prompt`/`alert`/`confirm`
- **`loop-guard`**: if present, a loop guard option will be rendered for this snippet.
