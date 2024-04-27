---
layout: doc
title: Toolbar configuration
---

# {{ $frontmatter.title }}

You can configure the toolbar through the parameter of the `Toolbar` class.

```js
const toolbarItems = [
  'undo',
  'redo',
  '|',
  'heading',
  '|',
  'bold',
];
const toolbar = new Toolbar({
  root: '.my-toolbar',
  items: toolbarItems,
});
const editor = new Editor({
  root: '.my-content',
  toolbar,
});
editor.render();
```

## root

* Type: `CSS selector | DOM element`

An element to which the toolbar is appended.

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

## items

* Type: `(string | ToolbarItem)[]`

The items (button, dropdown, divider, etc.) in the toolbar. The `|` character represents a divider, and other strings represent built-in items. You can also provide a customized item.

```js
import { Toolbar, icons } from 'lakelib';

const heading = {
  name: 'heading',
  type: 'button',
  icon: icons.get('heading'),
  tooltip: 'Heading',
  isSelected: appliedItems => !!appliedItems.find(item => item.name === 'h3'),
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
