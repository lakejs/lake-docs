---
layout: doc
title: Toolbar config
---

# {{ $frontmatter.title }}

The toolbar can be customized by passing configuration options to the [Toolbar](/reference/toolbar.md) class.

Example:

<script setup>
const heading = {
  name: 'heading',
  type: 'button',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M208,56V200a8,8,0,0,1-16,0V136H64v64a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v64H192V56a8,8,0,0,1,16,0Z"></path></svg>',
  tooltip: 'Heading',
  isSelected: activeItems => !!activeItems.find(item => item.name === 'h3'),
  onClick: editor => {
    editor.command.execute('heading', 'h3');
  },
};
const toolbarItems = [
  'undo',
  'redo',
  '|',
  heading,
  'paragraph',
  '|',
  'bold',
  'moreStyle',
];
</script>

<EmbeddedEditor :toolbar="toolbarItems" />

::: details Source code

```js
const heading = {
  name: 'heading',
  type: 'button',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M208,56V200a8,8,0,0,1-16,0V136H64v64a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v64H192V56a8,8,0,0,1,16,0Z"></path></svg>',
  tooltip: 'Heading',
  isSelected: activeItems => !!activeItems.find(item => item.name === 'h3'),
  onClick: editor => {
    editor.command.execute('heading', 'h3');
  },
};
const toolbarItems = [
  'undo',
  'redo',
  '|',
  heading,
  'paragraph',
  '|',
  'bold',
  'moreStyle',
];
new Toolbar({
  root: '.my-toolbar',
  items: toolbarItems,
  placement: 'top',
});
```

:::


## root

Specifies the element to which the toolbar is appended.

* Type: [CSS selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors) | [DOM element](https://developer.mozilla.org/en-US/docs/Web/API/Element) | [Nodes](/reference/nodes.md)

CSS selector:

```js
new Toolbar({
  root: '.my-toolbar',
});
```

DOM element:

```js
new Toolbar({
  root: document.querySelector('.my-toolbar'),
});
```

Nodes:

```js
new Toolbar({
  root: query('.my-toolbar'),
});
```

## items

Defines the buttons available in the toolbar. The `|` character represents a divider and the `-` character represents a line break, while other strings specify the names of built-in items.

* Type: `(string | ToolbarItem)[]`

Example:

```js
const toolbarItems = [
  'undo',
  'redo',
  '|',
  'bold',
  '-',
  'table',
];
new Toolbar({
  root: '.my-toolbar',
  items: toolbarItems,
});
```


### Built-in items

The following built-in toolbar items are available:

`undo`

A button that undoes the last executed command.

`redo`

A button that redoes the previous undo command.

`selectAll`

A button that selects all of the content.

`heading`

A dropdown that changes a block containing the current selection to a heading.

`paragraph`

A button that changes a block containing the current selection to a paragraph.

`blockQuote`

A button that changes a block containing the current selection to a block quotation.

`list`

A dropdown that changes a block containing the current selection to a list.

`numberedList`

A button that changes a block containing the current selection to a numbered list.

`bulletedList`

A button that changes a block containing the current selection to a bulleted list.

`checklist`

A button that changes a block containing the current selection to a checklist.

`table`

A button that inserts a table into the current selection.

`align`

A dropdown that changes the horizontal alignment.

`alignLeft`

A button that aligns the inline contents to the left.

`alignCenter`

A button that centers the inline contents.

`alignRight`

A button that aligns the inline contents to the right.

`alignJustify`

A button that justifies the inline contents.

`indent`

A dropdown that changes the indent.

`increaseIndent`

A button that increases the indent for the current block.

`decreaseIndent`

A button that decreases the indent for the current block.

`bold`

A button that toggles bold on/off for the current selection.

`italic`

A button that toggles italic on/off for the current selection.

`underline`

A button that toggles underline on/off for the current selection.

`strikethrough`

A button that toggles strikethrough on/off for the current selection.

`superscript`

A button that toggles superscript on/off for the current selection.

`subscript`

A button that toggles subscript on/off for the current selection.

`code`

A button that toggles inline code on/off for the current selection.

`fontFamily`

A dropdown that changes the font name for the current selection.

`fontSize`

A dropdown that changes the font size for the current selection.

`fontColor`

A color picker that changes the font color for the current selection.

`highlight`

A color picker that changes the background color for the current selection.

`removeFormat`

A button that removes all inline formatting for the current selection.

`formatPainter`

A button that replicates the inline formatting of the selected text.

`moreStyle`

A dropdown that includes inline formatting items.

`link`

A button that creates a hyperlink for the selected text.

`hr`

A button that inserts a horizontal line.

`codeBlock`

A button that inserts a code block.

`image`

A button that uploads and inserts an image.

`file`

A button that uploads and inserts a file.

`equation`

A button that inserts a mathematical formula.

`video`

A button that inserts a video from YouTube.

`twitter`

A button that inserts a post from X (Twitter).


### Customizing item

You can also set a custom item, which must conform to the [ToolbarItem](/reference/types.md#toolbaritem) type.

#### Button item

A button item follows the [ToolbarButtonItem](/reference/types.md#toolbarbuttonitem) type.

Example:

```js
import { Toolbar, icons } from 'lakelib';

const heading = {
  name: 'heading',
  type: 'button',
  icon: icons.get('heading'),
  tooltip: 'Heading',
  isSelected: activeItems => !!activeItems.find(item => item.name === 'h3'),
  onClick: editor => {
    editor.command.execute('heading', 'h3');
  },
};
const toolbarItems = [
  heading,
  '|',
  'bold',
];
new Toolbar({
  root: '.my-toolbar',
  items: toolbarItems,
});
```

#### Dropdown item

A dropdown item follows the [ToolbarDropdownItem](/reference/types.md#toolbardropdownitem) type.

Example:

```js
import { Toolbar, icons } from 'lakelib';

const alignMenuItems = [
  {
    icon: icons.get('alignLeft'),
    value: 'left',
    text: locale => locale.toolbar.alignLeft(),
  },
  {
    icon: icons.get('alignCenter'),
    value: 'center',
    text: locale => locale.toolbar.alignCenter(),
  },
  {
    icon: icons.get('alignRight'),
    value: 'right',
    text: locale => locale.toolbar.alignRight(),
  },
];
const align = {
  name: 'align',
  type: 'dropdown',
  downIcon: icons.get('down'),
  icon: icons.get('alignLeft'),
  defaultValue: '',
  tooltip: locale => locale.toolbar.align(),
  width: 'auto',
  menuType: 'list',
  menuItems: alignMenuItems,
  onSelect: (editor, value) => {
    editor.command.execute('align', value);
  },
};
const toolbarItems = [
  align,
];
new Toolbar({
  root: '.my-toolbar',
  items: toolbarItems,
});
```

## placement

Determines whether the toolbar appears above or below the editing area. When set to `bottom`, dropdown menus appear above the toolbar.

* Type: `'top' | 'bottom'`
* Default: `top`

Example:

```js
new Toolbar({
  placement: 'bottom',
});
```
