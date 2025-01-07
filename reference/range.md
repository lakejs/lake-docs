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


### shrinkBefore()

Collapses the range to the deepest point at the beginning of the contents of the specified node.

* Parameters:

  `node`

  A [Nodes](/reference/nodes.md) object to which the range will collpase.

* Return value:

  None.

Example:

```js
const range = new Range();
range.shrinkBefore(query('div').eq(0));
```


### shrinkAfter()

Collapses the range to the deepest point at the end of the contents of the specified node.

* Parameters:

  `node`

  A [Nodes](/reference/nodes.md) object to which the range will collpase.

* Return value:

  None.

Example:

```js
const range = new Range();
range.shrinkAfter(query('div').eq(0));
```


### shrink()

Sets the start and end positions of the range to the deepest start position and end position of the contents of the specified node.

* Parameters:

  `node`

  A [Nodes](/reference/nodes.md) object to which the range will shrink.

* Return value:

  None.

Example:

```js
const range = new Range();
range.shrink(query('div').eq(0));
```


### adjustBox()

Relocates the start and end positions of the range for the boxes.

* Parameters:

  None.

* Return value:

  None.

Example:

```js
const range = new Range();
range.selectNodeContents(query('lake-box').eq(0));
range.adjustBox();
```


### adjustTable()

Relocates the start and end positions of the range for tables.

* Parameters:

  None.

* Return value:

  None.

Example:

```js
const range = new Range();
range.selectNodeContents(query('table').eq(0));
range.adjustTable();
```


### adjustBlock()

Relocates the start and end positions of the range for blocks.

* Parameters:

  None.

* Return value:

  None.

Example:

```js
const range = new Range();
range.selectNode(query('p').eq(0));
range.adjustBlock();
```


### adjust()

Relocates the start and end positions of the range for boxes, tables, and blocks.

* Parameters:

  None.

* Return value:

  None.

Example:

```js
const range = new Range();
range.setStart(query('table').eq(0), 0);
range.setEnd(query('lake-box').eq(0), 0);
range.adjust();
```


### adjustBr()

Relocates the start and end positions of the range for `<br />` elements. In composition mode (e.g., when a user starts entering a Chinese character using a Pinyin IME), uncompleted text is inserted if the cursor is positioned behind a `<br />` tag. To fix this bug, the cursor needs to be moved to the front of the `<br />` tag.

* Parameters:

  None.

* Return value:

  None.

Example:

```js
const range = new Range();
// <p><br /></p>
range.setEnd(query('p').eq(0), 1);
range.collapseToEnd();
range.adjustBr();
```


### getPrevNode()

Returns the node immediately preceding the start position of the range.

* Parameters:

  None.

* Return value:

  A [Nodes](/reference/nodes.md) object.

Example:

```js
const range = new Range();
const prevNode = range.getPrevNode();
```


### getNextNode()

Returns the node immediately following the end position of the range.

* Parameters:

  None.

* Return value:

  A [Nodes](/reference/nodes.md) object.

Example:

```js
const range = new Range();
const nextNode = range.getNextNode();
```


### getBoxes()

Returns the boxes contained within or intersected by the range.

* Parameters:

  None.

* Return value:

  An `Array` that contains [Nodes](/reference/nodes.md) objects.

Example:

```js
const range = new Range();
const boxes = range.getBoxes();
```


### getBlocks()

Returns the blocks contained within or intersected by the range.

* Parameters:

  None.

* Return value:

  An `Array` that contains [Nodes](/reference/nodes.md) objects.

Example:

```js
const range = new Range();
const blocks = range.getBlocks();
```


### getMarks()

Returns the marks and text nodes contained within or intersected by the range.

* Parameters:

  `hasText` <Badge type="info" text="Optional" />

  A boolean value indicating whether the return value includes text nodes. Default value is false.

* Return value:

  An `Array` that contains [Nodes](/reference/nodes.md) objects.

Example:

```js
const range = new Range();
const marks = range.getMarks();
```


### getStartText()

Returns the text from the start position of the closest block to the start position of the range.

* Parameters:

  None.

* Return value:

  A `string` representing the text.

Example:

```js
const range = new Range();
const startText = range.getStartText();
```


### getEndText()

Returns the text from the end position of the range to the end position of the closest block.

* Parameters:

  None.

* Return value:

  A string representing the text.

Example:

```js
const range = new Range();
const endText = range.getEndText();
```


### getCharacterRange()

Returns a new range from the specified character to the start position of the range. The specified character must be preceded by a whitespace or be at the beginning of a paragraph, without being adjacent to other characters. It will return `null` if not.

* Parameters:

  `character`

  A string from which the new range will start.

* Return value:

  A `Range` object or `null`.

Example:

```js
const range = new Range();
const newRange = range.getCharacterRange('@');
```


### clone()

Returns a copy of the range.

* Parameters:

  None.

* Return value:

  A `Range` object.

Example:

```js
const range = new Range();
const newRange = range.clone();
```


### cloneContents()

Returns a document fragment copying the nodes included in the range.

* Parameters:

  None.

* Return value:

  A [DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) object.

Example:

```js
const range = new Range();
const fragment = range.cloneContents();
```


### info()

Prints information about the range, which is used for debugging.

* Parameters:

  None.

* Return value:

  None.

Example:

```js
const range = new Range();
range.info();
```
