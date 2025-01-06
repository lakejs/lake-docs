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

* Type: [Nodes](/reference/nodes.md)

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

* Type: [Nodes](/reference/nodes.md)

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


### commonAncestor <Badge type="info" text="Read only" />

The deepest — or furthest down the document tree — node that contains both boundary points of the range.

* Type: [Nodes](/reference/nodes.md)

Example:

```js
const range = new Range();
const commonAncestor = range.commonAncestor;
```


### isCollapsed <Badge type="info" text="Read only" />

A boolean value indicating whether the range's start and end points are at the same position.

* Type: `boolean`

Example:

```js
const range = new Range();
const isCollapsed = range.isCollapsed;
```


### isBox <Badge type="info" text="Read only" />

A boolean value indicating whether the range's start point is in a box.

* Type: `boolean`

Example:

```js
const range = new Range();
const isBox = range.isBox;
```


### isBoxStart <Badge type="info" text="Read only" />

A boolean value indicating whether the [commonAncestor](#commonancestor) is in the start strip of a box.

* Type: `boolean`

Example:

```js
const range = new Range();
const isBoxStart = range.isBoxStart;
```


### isBoxCenter <Badge type="info" text="Read only" />

A boolean value indicating whether the [commonAncestor](#commonancestor) is in the center of a box.

* Type: `boolean`

Example:

```js
const range = new Range();
const isBoxCenter = range.isBoxCenter;
```


### isBoxEnd <Badge type="info" text="Read only" />

A boolean value indicating whether [commonAncestor](#commonancestor) is in the end strip of a box.

* Type: `boolean`

Example:

```js
const range = new Range();
const isBoxEnd = range.isBoxEnd;
```


### isInsideBox <Badge type="info" text="Read only" />

A boolean value indicating whether [commonAncestor](#commonancestor) is inside the container of a box.

* Type: `boolean`

Example:

```js
const range = new Range();
const isInsideBox = range.isInsideBox;
```


### isInoperative <Badge type="info" text="Read only" />

A boolean value indicating whether the range is inoperative.

* Type: `boolean`

Example:

```js
const range = new Range();
const isInoperative = range.isInoperative;
```


## Instance methods

### get()

Returns a native [Range](https://developer.mozilla.org/en-US/docs/Web/API/Range) object from the range.

* Parameters:

  None.

* Return value:

  A native [Range](https://developer.mozilla.org/en-US/docs/Web/API/Range) object.

Example:

```js
const range = new Range();
const nativeRange = range.get();
```


### getRect()

Returns the size and position of the range.

* Parameters:

  None.

* Return value:

  A [DOMRect](https://developer.mozilla.org/en-US/docs/Web/API/DOMRect) object.

Example:

```js
const range = new Range();
const rect = range.getRect();
```


### comparePoint()

Returns -1, 0, or 1 depending on whether the specified node is before, the same as, or after the range.

* Parameters:

  `node`

  A [Nodes](/reference/nodes.md) object to compare with the range.

  `offset`

  An integer greater than or equal to zero representing the offset inside the node.

* Return value:

  −1 if the point is before the range. 0 if the point is in the range. 1 if the point is after the range.

Example:

```js
const range = new Range();
range.selectNode(query('div').eq(0));
const returnValue = range.comparePoint(query('p').eq(0), 1);
```


### compareBeforeNode()

Returns -1, 0, or 1 depending on whether the beginning of the specified node is before, the same as, or after the range.

* Parameters:

  `node`

  A [Nodes](/reference/nodes.md) object to compare with the range.

* Return value:

  −1 if the beginning of the node is before the range. 0 if the beginning of the node is in the range. 1 if the beginning of the node is after the range.

Example:

```js
const range = new Range();
range.selectNode(query('div').eq(0));
const returnValue = range.compareBeforeNode(query('p').eq(0));
```


### compareAfterNode()

Returns -1, 0, or 1 depending on whether the end of the specified node is before, the same as, or after the range.

* Parameters:

  `node`

  A [Nodes](/reference/nodes.md) object to compare with the range.

* Return value:

  −1 if the end of the node is before the range. 0 if the end of the node is in the range. 1 if the end of the node is after the range.

Example:

```js
const range = new Range();
range.selectNode(query('div').eq(0));
const returnValue = range.compareAfterNode(query('p').eq(0));
```


### intersectsNode()

Returns a boolean value indicating whether the specified node is part of the range or intersects the range.

* Parameters:

  `node`

  A [Nodes](/reference/nodes.md) object to compare with the range.

* Return value:

  `true` if the node intersects the range. `false` if not.

Example:

```js
const range = new Range();
range.selectNode(query('div').eq(0));
const returnValue = range.intersectsNode(query('p').eq(0));
```
