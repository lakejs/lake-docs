---
layout: doc
title: Range class
outline: [2, 3]
---

# {{ $frontmatter.title }}

The `Range` class represents a fragment of a document that can contain nodes and parts of text nodes.

Example:

::: code-group

```js [npm]
import { Range } from 'lakelib';

const range = new Range();
range.selectNode(document.body);
range.collapseToEnd();
```

```js [CDN]
const range = Lake.Range();
range.selectNode(document.body);
range.collapseToEnd();
```

:::


## Constructor

Creates a new `Range` object.

* Parameters:

  `range`

  A native [Range](https://developer.mozilla.org/en-US/docs/Web/API/Range) object.

Example:

```js
// Without range parameter.
const range = new Range();
// With range parameter.
const range = new Range(document.createRange());
```


## Instance properties

### startNode <Badge type="info" text="Read only" />

A node within which the range starts.

* Type: `Nodes`

Example:

```js
const range = new Range();
const startNode = range.startNode;
```


### startOffset <Badge type="info" text="Read only" />

A number representing where in the `startNode` the range starts.

* Type: `number`

Example:

```js
const range = new Range();
const startOffset = range.startOffset;
```


### endNode <Badge type="info" text="Read only" />

A node within which the range ends.

* Type: `Nodes`

Example:

```js
const range = new Range();
const endNode = range.endNode;
```


### endOffset <Badge type="info" text="Read only" />

A number representing where in the `endNode` the range ends.

* Type: `number`

Example:

```js
const range = new Range();
const endOffset = range.endOffset;
```
