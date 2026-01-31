---
layout: doc
title: Resizer
outline: [2, 3]
---

# {{ $frontmatter.title }}

The `Resizer` class represents a UI component used to resize images or videos.

Example:

```js
import { Resizer } from 'lakelib';

const resizer = new Resizer({
  root: '.root',
  target: '.target',
  onResize: (width, height) => {
    console.log(`Resizing to: ${width}x${height}`);
  },
  onStop: (width, height) => {
    console.log(`Final size: ${width}x${height}`);
  },
});

resizer.render();
```

## Constructor

Creates a new `Resizer` instance. It receives a key-value object with the following properties as its parameter.

### `root`

The element to which the resizer UI is appended.

* Type: [CSS selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors) | [DOM element](https://developer.mozilla.org/en-US/docs/Web/API/Element) | [Nodes](/reference/nodes.md)


### `target`

The target element to be resized.

* Type: [CSS selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors) | [DOM element](https://developer.mozilla.org/en-US/docs/Web/API/Element) | [Nodes](/reference/nodes.md)


### `onStop`

A callback function executed when the resizing process is completed.

* Type: `(width: number, height: number) => void`


### `onResize` <Badge type="info" text="Optional" />

A callback function executed during the resizing process.

* Type: `(width: number, height: number) => void`


## Instance properties

### container <Badge type="info" text="Read only" />

The element representing the resizer container, including the resizing handles and the dimension information overlay.

* Type: [Nodes](/reference/nodes.md)

Example:

```js
const container = resizer.container;
```


## Instance methods

### render()

Renders the resizer component. This method binds pointer events to the resizing handles and appends the resizer container to the root element.

* Parameters:

  None.

* Return value:

  None.

Example:

```js
resizer.render();
```
