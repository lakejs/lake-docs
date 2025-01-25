---
layout: doc
title: Selection
outline: [2, 3]
---

# {{ $frontmatter.title }}

The `Selection` interface represents the range of text selected by the user or the current position of the cursor. Since the constructor is not currently available, you can access it using the [selection](/reference/editor.md#selection) property of the [Editor](/reference/editor.md) class.

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

