---
layout: doc
title: Toolbar config
---

# {{ $frontmatter.title }}

Toolbar config is the parameter of `Toolbar` where you can define the settings of the toolbar.

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
  root: '.lake-toolbar-root',
  items: toolbarItems,
});
const editor = new Editor({
  root: '.lake-root',
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
  root: '.lake-toolbar-root',
});
```

DOM element:
```js
  new Toolbar({
  root: document.querySelector('.lake-toolbar-root'),
});
```

## items

* Type: `(string | ToolbarItem)[]`

The items of the toolbar.

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
  'bold',
];
new Toolbar({
  root: '.lake-root',
  items: toolbarItems,
});
```
