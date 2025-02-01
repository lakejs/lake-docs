---
layout: doc
title: Toolbar
outline: [2, 3]
---

# {{ $frontmatter.title }}

The `Toolbar` interface provides properties and methods for rendering and manipulating the toolbar.

Example:

```js
import { Toolbar } from 'lakelib';

const toolbarItems = [
  'undo',
  'redo',
  '|',
  'bold',
  'moreStyle',
];
const toolbar = new Toolbar({
  root: '.my-toolbar',
  items: toolbarItems,
});
```


## Constructor

Creates a new `Toolbar` object.

* Parameters:

  `config`

  A key-value object containing configuration options. For more details, see the [Toolbar config](/reference/toolbar-config.md) page.

* Return value:

  A new `Toolbar` object.

Example:

```js
const toolbar = new Toolbar({
  root: '.my-toolbar',
});
```


## Instance properties

### root <Badge type="info" text="Read only" />

The element to which the toolbar is appended.

* Type: [Nodes](/reference/nodes.md)

Example:

```js
const root = toolbar.root;
```


### container <Badge type="info" text="Read only" />

The element where toolbar items are appended.

* Type: [Nodes](/reference/nodes.md)

Example:

```js
const container = toolbar.container;
```


## Instance methods

### updateState()

Updates the state of each toolbar item, such as whether it is selected or disabled.

* Parameters:

  `state`

  A [SelectionState](/reference/types.md#selectionstate) object that specifies the state of the current selection.

* Return value:

  None.

Example:

```js
const activeItems = editor.selection.getActiveItems();
toolbar.updateState({
  activeItems,
});
```


### render()

Renders the toolbar for the specified editor.

* Parameters:

  `editor`

  An [Editor](./editor.md) object.

* Return value:

  None.

Example:

```js
toolbar.render(editor);
```


### unmount()

Destroys the toolbar instance, removing it from the DOM.

* Parameters:

  None.

* Return value:

  None.

Example:

```js
toolbar.unmount();
```
