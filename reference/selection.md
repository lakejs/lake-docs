---
layout: doc
title: Selection
outline: [2, 3]
---

# {{ $frontmatter.title }}

The `Selection` interface represents the range of content selected by the user or the current position of the cursor. Since the constructor is not currently available, you can access it using the [selection](/reference/editor.md#selection) property of the [Editor](/reference/editor.md) class.

Example:

```js
editor.selection.insertContents('<strong>foo</strong>');
```


## Instance properties

### container <Badge type="info" text="Read only" />

A [contenteditable](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/contentEditable) element where users can edit the content.

* Type: [Nodes](/reference/nodes.md)

Example:

```js
const container = selection.container;
```


### range

A [Range](/reference/range.md) object which is used to add it to the native selection later.

* Type: [Range](/reference/range.md)

Example:

```js
const range = selection.range;
```


## Instance methods

### getCurrentRange()

Returns a [Range](/reference/range.md) object that is currently selected.

* Parameters:

  None.

* Return value:

  A [Range](/reference/range.md) object.

Example:

```js
const range = selection.getCurrentRange();
```


### sync()

Adds the [selection.range](#range) to the native selection.

* Parameters:

  None.

* Return value:

  None.

Example:

```js
selection.sync();
```


### updateByRange()

Replaces the [selection.range](#range) with the range of the native selection.

* Parameters:

  None.

* Return value:

  None.

Example:

```js
selection.updateByRange();
```


### updateByBookmark()

Replaces the [selection.range](#range) with the range represented by the bookmark.

* Parameters:

  None.

* Return value:

  None.

Example:

```js
selection.updateByBookmark();
```


### getActiveItems()

Returns a list containing the items related to the current selection.

* Parameters:

  None.

* Return value:

  An `Array` that contains `ActiveItem` objects.

  ```ts
  type ActiveItem = {
    node: Nodes;
    name: string;
    attributes: KeyValue;
    styles: KeyValue;
  };
  ```

Example:

```js
const activeItems = selection.getActiveItems();
```


### insertBookmark()

Inserts a bookmark at the cursor position or a pair of bookmarks at the beginning and end of the selection.

* Parameters:

  None.

* Return value:

  ```ts
  {
    anchor: Nodes;
    focus: Nodes;
  }
  ```

Example:

```js
const bookmark = selection.insertBookmark();
console.log(bookmark.anchor, bookmark.focus);
```


### toBookmark()

Changes the [selection.range](#range) to a range represented by the provided bookmark.

* Parameters:

  `bookmark`

  ```ts
  {
    anchor: Nodes;
    focus: Nodes;
  }
  ```

* Return value:

  None.

Example:

```js
selection.toBookmark(bookmark);
```


### insertContents()

Inserts the specified contents into the selection.

* Parameters:

  `contents`

  HTML string, [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node), [DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment), [Nodes](/reference/nodes.md), and [Fragment](/reference/fragment.md).

* Return value:

  None.

Example:

```js
selection.insertContents('<p>foo</p>');
```


### deleteContents()

Removes the contents of the selection.

* Parameters:

  None.

* Return value:

  None.

Example:

```js
selection.deleteContents();
```


### setBlocks()

Adds new blocks or changes the target blocks in the selection.

* Parameters:

  `value`

  An HTML string or key-value object.

* Return value:

  None.

Example:

```js
// Changes the target blocks to headings.
selection.setBlocks('<h1 />');
// Changes the target blocks to numbered lists.
selection.setBlocks('<ol><li></li></ol>');
// Adds "text-align" CSS property to the target blocks.
selection.setBlocks({
  'text-align': 'center',
});
```


### splitBlock()

Removes the contents of the selection and then splits the block node at the point of the cursor.

* Parameters:

  None.

* Return value:

  ```ts
  {
    start: Nodes | null;
    end: Nodes | null;
  }
  ```

Example:

```js
const parts = selection.splitBlock();
console.log(parts.start, parts.end);
```


### insertBlock()

Inserts a block into the selection.

* Parameters:

  `value`

  An HTML string or [Nodes](/reference/nodes.md) object.

* Return value:

  None.

Example:

```js
selection.insertBlock('<h1>heading</h1>');
```


### splitMarks()

Splits text nodes or mark nodes.

* Parameters:

  `removeEmptyMark` <Badge type="info" text="Optional" />

  A boolean value indicating whether the empty mark nodes are removed. Default value is `true`.

* Return value:

  ```ts
  {
    start: Nodes | null;
    center: Nodes | null;
    end: Nodes | null;
  }
  ```

Example:

```js
const parts = selection.splitMarks();
console.log(parts.start, parts.center, parts.end);
```


### addMark()

Adds the specified mark to the texts of the selection.

* Parameters:

  `value`

  An HTML string or [Nodes](/reference/nodes.md) object.

* Return value:

  None.

Example:

```js
// Adds bold.
selection.addMark('<strong />');
// Changes font size.
selection.addMark('<span style="font-size: 18px;" />');
```


### removeMark()

Removes the specified marks in the selection.

* Parameters:

  `value` <Badge type="info" text="Optional" />

  An HTML string or [Nodes](/reference/nodes.md) object.

* Return value:

  None.

Example:

```js
// Removes all formatting.
selection.removeMark();
// Removes bold.
selection.removeMark('<strong />');
```


### selectBox()

Collapses the selection to the center position of the specified box.

* Parameters:

  `box`

  A [Box](/reference/box.md) object or [Nodes](/reference/nodes.md) object.

* Return value:

  None.

Example:

```js
selection.selectBox(query('lake-box').eq(0));
```


### insertBox()

Inserts a box into the selection.

* Parameters:

  `boxName`

  A string that specifies the name of the box.

  `boxValue` <Badge type="info" text="Optional" />

  A key-value object that specifies the data of the box.

* Return value:

  A [Box](/reference/box.md) object.

* Exception:

  Thrown when the box is not inserted.

Example:

```js
// Inserts a horizontal rule.
selection.insertBox('hr');
// Inserts an emoji.
selection.insertBox('emoji', {
  url: '/assets/emojis/face_blowing_a_kiss_color.svg',
  title: 'Face blowing a kiss',
});
```


### removeBox()

Removes the specified box. If not given, the selected box is removed.

* Parameters:

  `box` <Badge type="info" text="Optional" />

  A [Box](/reference/box.md) object or [Nodes](/reference/nodes.md) object.

* Return value:

  A [Box](/reference/box.md) object or `null`.

Example:

```js
// Removes the box that was selected by the user.
selection.removeBox();
// Removes the provided box.
selection.removeBox(box);
```
