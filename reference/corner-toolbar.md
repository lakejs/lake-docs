---
layout: doc
title: CornerToolbar
outline: [2, 3]
---

# {{ $frontmatter.title }}

The `CornerToolbar` class represents a button group located in the top-right corner of a box.

Example:

```js
import { CornerToolbar } from 'lakelib';

const cornerToolbar = new CornerToolbar({
  root: rootNode,
  items: [
    {
      name: 'remove',
      icon: '<svg>...</svg>',
      tooltip: 'Remove',
      onClick: () => {
        console.log('Button clicked');
      },
    },
  ],
});
cornerToolbar.render();
```

## Constructor

Creates a new `CornerToolbar` instance. It receives a key-value object with the following properties as its parameter.

### `root`

The container element where the toolbar will be appended.

* Type: [CSS selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors) | [DOM element](https://developer.mozilla.org/en-US/docs/Web/API/Element) | [Nodes](/reference/nodes.md)


### `items`

An array of `CornerToolbarItem` objects defining the buttons to be rendered.


### `locale` <Badge type="info" text="Optional" />

A `TranslationFunctions` object for internationalization.


## Instance properties

### container <Badge type="info" text="Read only" />

The element where the toolbar buttons are appended.

* Type: [Nodes](/reference/nodes.md)

Example:

```js
const container = cornerToolbar.container;
```


## Instance methods

### render()

Renders the corner toolbar. If no items are provided in the configuration, this method does nothing.

* Parameters:

  None.

* Return value:

  None.

Example:

```js
cornerToolbar.render();
```
