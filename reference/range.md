---
layout: doc
title: Range class
outline: [2, 3]
---

# {{ $frontmatter.title }}

The `Range` class represents a fragment of a document that can contain nodes and parts of text nodes. Its interface is similar to the native [Range](https://developer.mozilla.org/en-US/docs/Web/API/Range), with some additional properties and methods specifically designed for more efficient manipulation.

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

A boolean value indicating whether the [commonAncestor](#commonancestor) is in the start position of a box.

* Type: `boolean`

Example:

```js
const range = new Range();
const isBoxStart = range.isBoxStart;
```


### isBoxCenter <Badge type="info" text="Read only" />

A boolean value indicating whether the [commonAncestor](#commonancestor) is in the center position of a box.

* Type: `boolean`

Example:

```js
const range = new Range();
const isBoxCenter = range.isBoxCenter;
```


### isBoxEnd <Badge type="info" text="Read only" />

A boolean value indicating whether [commonAncestor](#commonancestor) is in the end position of a box.

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


### setStart()

Sets the start position of the range.

* Parameters:

  `node`

  A [Nodes](/reference/nodes.md) object where the range starts.

  `offset`

  An integer greater than or equal to zero representing the offset for the start of the range.

* Return value:

  None.

Example:

```js
const range = new Range();
range.setStart(query('div').eq(0), 0);
```


### setStartBefore()

Sets the start position of the range to the beginning of the specified node.

* Parameters:

  `node`

  A [Nodes](/reference/nodes.md) object where the range starts.

* Return value:

  None.

Example:

```js
const range = new Range();
range.setStartBefore(query('div').eq(0));
```


### setStartAfter()

Sets the start position of the range to the end of the specified node.

* Parameters:

  `node`

  A [Nodes](/reference/nodes.md) object where the range starts.

* Return value:

  None.

Example:

```js
const range = new Range();
range.setStartAfter(query('div').eq(0));
```


### setEnd()

Sets the end position of the range.

* Parameters:

  `node`

  A [Nodes](/reference/nodes.md) object where the range ends.

  `offset`

  An integer greater than or equal to zero representing the offset for the end of the range.

* Return value:

  None.

Example:

```js
const range = new Range();
range.setEnd(query('div').eq(0), 0);
```


### setEndBefore()

Sets the end position of the range to the beginning of the specified node.

* Parameters:

  `node`

  A [Nodes](/reference/nodes.md) object where the range ends.

* Return value:

  None.

Example:

```js
const range = new Range();
range.setEndBefore(query('div').eq(0));
```


### setEndAfter()

Sets the end position of the range to the end of the specified node.

* Parameters:

  `node`

  A [Nodes](/reference/nodes.md) object where the range ends.

* Return value:

  None.

Example:

```js
const range = new Range();
range.setEndAfter(query('div').eq(0));
```


### collapseToStart()

Collapses the range to its start.

* Parameters:

  None.

* Return value:

  None.

Example:

```js
const range = new Range();
range.selectNode(query('div').eq(0));
range.collapseToStart();
```


### collapseToEnd()

Collapses the range to its end.

* Parameters:

  None.

* Return value:

  None.

Example:

```js
const range = new Range();
range.selectNode(query('div').eq(0));
range.collapseToEnd();
```


### selectNode()

Sets the range to contain the specified node and its contents.

* Parameters:

  `node`

  A [Nodes](/reference/nodes.md) object that will be selected.

* Return value:

  None.

Example:

```js
const range = new Range();
range.selectNode(query('div').eq(0));
```


### selectNodeContents()

Sets the range to contain the contents of the specified node.

* Parameters:

  `node`

  A [Nodes](/reference/nodes.md) object which contents will be selected.

* Return value:

  None.

Example:

```js
const range = new Range();
range.selectNodeContents(query('div').eq(0));
```


### selectBox()

Collapses the range to the center position of the specified box.

* Parameters:

  `boxNode`

  A [Nodes](/reference/nodes.md) object that will be selected.

* Return value:

  None.

Example:

```js
const range = new Range();
range.selectBox(query('lake-box').eq(0));
```


### selectBoxStart()

Collapses the range to the start position of the specified box.

* Parameters:

  `boxNode`

  A [Nodes](/reference/nodes.md) object that will be selected.

* Return value:

  None.

Example:

```js
const range = new Range();
range.selectBoxStart(query('lake-box').eq(0));
```


### selectBoxEnd()

Collapses the range to the end position of the specified box.

* Parameters:

  `boxNode`

  A [Nodes](/reference/nodes.md) object that will be selected.

* Return value:

  None.

Example:

```js
const range = new Range();
range.selectBoxEnd(query('lake-box').eq(0));
```
