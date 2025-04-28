---
layout: doc
title: Selection
outline: [2, 3]
---

# {{ $frontmatter.title }}

The `Selection` interface represents the range of content selected by the user or the current cursor position.

:::warning Note
The constructor is not directly accessible. Instead, you can access its properties and methods via the [editor.selection](/reference/editor.md#selection) object.
:::

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
const container = editor.selection.container;
```


### range

A [Range](/reference/range.md) object that can be added to the native selection later.

* Type: [Range](/reference/range.md)

Example:

```js
const range = editor.selection.range;
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
const range = editor.selection.getCurrentRange();
```


### sync()

Adds the [selection.range](#range) to the native selection.

* Parameters:

  None.

* Return value:

  None.

Example:

```js
editor.selection.sync();
```


### updateByRange()

Replaces the [selection.range](#range) with the range of the native selection.

* Parameters:

  None.

* Return value:

  None.

Example:

```js
editor.selection.updateByRange();
```


### updateByBookmark()

Replaces the [selection.range](#range) with the range represented by the bookmark.

* Parameters:

  None.

* Return value:

  None.

Example:

```js
editor.selection.updateByBookmark();
```


### getActiveItems()

Returns a list of items related to the current selection.

* Parameters:

  None.

* Return value:

  An `Array` that contains [ActiveItem](/reference/types.md#activeitem) objects.

Example:

```js
const activeItems = editor.selection.getActiveItems();
```


### cloneContainer()

Creates a deep clone of the current container with its content. If there is a selection within the container, it ensures the selection is also preserved in the cloned container.

* Parameters:

  None.

* Return value:

  A [Nodes](/reference/nodes.md) object.

Example:

```js
const newContainer = editor.selection.cloneContainer();
```


### insertBookmark()

Inserts a bookmark at the cursor position or a pair of bookmarks at the selection boundaries.

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
const bookmark = editor.selection.insertBookmark();
console.log(bookmark.anchor, bookmark.focus);
```


### toBookmark()

Changes [selection.range](#range) to the range represented by the provided bookmark.

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
editor.selection.toBookmark(bookmark);
```


### insertContents()

Inserts the specified content into the selection.

* Parameters:

  `contents`

  An HTML string, [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node), [DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment), [Nodes](/reference/nodes.md), and [Fragment](/reference/fragment.md).

* Return value:

  None.

Example:

```js
editor.selection.insertContents('<p>foo</p>');
```


### deleteContents()

Removes the contents of the selection.

* Parameters:

  None.

* Return value:

  None.

Example:

```js
editor.selection.deleteContents();
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
editor.selection.setBlocks('<h1 />');

// Changes the target blocks to numbered lists.
editor.selection.setBlocks('<ol><li></li></ol>');

// Adds "text-align" CSS property to the target blocks.
editor.selection.setBlocks({
  'text-align': 'center',
});
```


### splitBlock()

Removes the contents of the selection and splits the block node at the cursor position.

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
const parts = editor.selection.splitBlock();
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
editor.selection.insertBlock('<h1>heading</h1>');
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
const parts = editor.selection.splitMarks();
console.log(parts.start, parts.center, parts.end);
```


### addMark()

Adds the specified mark to the selected text.

* Parameters:

  `value`

  An HTML string or [Nodes](/reference/nodes.md) object.

* Return value:

  None.

Example:

```js
// Adds bold.
editor.selection.addMark('<strong />');

// Changes font size.
editor.selection.addMark('<span style="font-size: 18px;" />');
```


### removeMark()

Removes specified marks from the selection.

* Parameters:

  `value` <Badge type="info" text="Optional" />

  An HTML string or [Nodes](/reference/nodes.md) object.

* Return value:

  None.

Example:

```js
// Removes all formatting.
editor.selection.removeMark();

// Removes bold.
editor.selection.removeMark('<strong />');
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
editor.selection.selectBox(query('lake-box').eq(0));
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
editor.selection.insertBox('hr');

// Inserts an emoji.
editor.selection.insertBox('emoji', {
  url: '/assets/emojis/face_blowing_a_kiss_color.svg',
  title: 'Face blowing a kiss',
});
```


### removeBox()

Removes the specified box. If no parameter is given, the selected box is removed.

* Parameters:

  `box` <Badge type="info" text="Optional" />

  A [Box](/reference/box.md) object or [Nodes](/reference/nodes.md) object.

* Return value:

  A [Box](/reference/box.md) object or `null`.

Example:

```js
// Removes selected box.
editor.selection.removeBox();

// Removes a specified box.
editor.selection.removeBox(box);
```
