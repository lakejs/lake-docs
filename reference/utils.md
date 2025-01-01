---
layout: doc
title: Utils
outline: [2, 3]
---

# {{ $frontmatter.title }}

A collection of utility functions.

Example:

::: code-group

```js [npm]
import { query } from 'lakelib';

query(document.body).append('<p>foo</p>');
```

```js [CDN]
Lake.query(document.body).append('<p>foo</p>');
```

:::


## query()

Returns a [Nodes](/reference/nodes.md) object representing a collection of the document's nodes. This function is similar to [jQuery](https://jquery.com/), but its implementation is very simple. It is designed for simplifying DOM manipulation.

* Parameters:

  `content`

  A CSS selector, HTML string, and DOM element.

* Return value:

  A `Nodes` object.

Example:

```js
// CSS selector
query('.my-content').css('color', 'blue');
// HTML string
const node = query('<p>foo</p>');
// DOM element
query(document.body).append(node);
```


## template()

A tag function that converts all of the reserved characters in the specified string to HTML entities. It also removes empty spaces at the beginning and end of lines.

Example:

```js
const name = '<foo="bar">';
const age = 40;
const content = template`
<div>
  <div>${name}</div>
  <div>
    ${age}
  </div>
</div>
`;
// Outputs "<div><div>&lt;foo=&quot;bar&quot;&gt;</div><div>40</div></div>".
console.log(content);
```


## toHex()

Converts a color in RGB or RGBA format to hex format.

* Parameters:

  `value`

  A string that specifies a color in RGB or RGBA format.

* Return value:

  A color in hex format.

Example:

```js
const color = toHex('rgb(255, 255, 255) none repeat');
// Outputs "#ffffff none repeat"
console.log(color);
```


## insertBookmark()

Inserts a bookmark at the cursor position or a pair of bookmarks at the beginning and end of the range.

* Parameters:

  `range`

  A `Range` object.

* Return value:

  ```ts
  {
    anchor: Nodes;
    focus: Nodes;
  }
  ```

Example:

```js
const bookmark = insertBookmark(range);
console.log(bookmark.anchor, bookmark.focus);
```


## toBookmark()

Changes the specified range to a range represented by the bookmark.

* Parameters:

  `range`

  A `Range` object.

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
toBookmark(range, bookmark);
```


## insertContents()

Inserts the specified contents into the range.

* Parameters:

  `range`

  A `Range` object.

  `contents`

  HTML string, DOM node, `DocumentFragment`, `Nodes`, and `Fragment`.

* Return value:

  None.

Example:

```js
insertContents(range, '<p>foo</p>');
```


## deleteContents()

Removes the contents of the specified range.

* Parameters:

  `range`

  A `Range` object.

* Return value:

  None.

Example:

```js
deleteContents(range);
```


## setBlocks()

Adds new blocks or changes the target blocks in the specified range.

* Parameters:

  `range`

  A `Range` object.

  `value`

  An HTML string or key-value object.

* Return value:

  None.

Example:

```js
// Changes the target blocks to headings.
setBlocks(range, '<h1 />');
// Changes the target blocks to numbered lists.
setBlocks(range, '<ol><li></li></ol>');
// Adds "text-align" CSS property to the target blocks.
setBlocks(range, {
  'text-align': 'center',
});
```


## splitBlock()

Removes the contents of the specified range and then splits the block node at the point of the collapsed range.

* Parameters:

  `range`

  A `Range` object.

* Return value:

  ```ts
  {
    start: Nodes | null;
    end: Nodes | null;
  }
  ```

Example:

```js
const parts = splitBlock(range);
console.log(parts.start, parts.end);
```


## insertBlock()

Inserts a block into the specified range.

* Parameters:

  `range`

  A `Range` object.

  `value`

  An HTML string or `Nodes` object.

* Return value:

  None.

Example:

```js
insertBlock(range, '<h1>heading</h1>');
```


## splitMarks()

Splits text nodes or mark nodes.

* Parameters:

  `range`

  A `Range` object.

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
splitMarks(range);
```


## addMark()

Adds the specified mark to the texts of the range.

* Parameters:

  `range`

  A `Range` object.

  `value`

  An HTML string or `Nodes` object.

* Return value:

  None.

Example:

```js
// Adds bold effect.
addMark(range, '<strong />');
// Changes font size.
addMark(range, '<span style="font-size: 18px;" />');
```


## removeMark()

Removes the specified marks in the range.

* Parameters:

  `range`

  A `Range` object.

  `value` <Badge type="info" text="Optional" />

  An HTML string or `Nodes` object.

* Return value:

  None.

Example:

```js
// Removes all format.
removeMark(range);
// Removes bold effect.
removeMark(range, '<strong />');
```


## insertBox()

Inserts a box into the specified range.

* Parameters:

  `range`

  A `Range` object.

  `boxName`

  A string that specifies the name of the box.

  `boxValue` <Badge type="info" text="Optional" />

  A key-value object that specifies the data of the box.

* Return value:

  A `Box` object or `null`.

Example:

```js
// Inserts a horizontal rule.
insertBox(range, 'hr');
// Inserts an emoji.
insertBox(range, 'emoji', {
  url: '/assets/emojis/face_blowing_a_kiss_color.svg',
  title: 'Face blowing a kiss',
});
```


## removeBox()

Removes a box that contains the specified range.

* Parameters:

  `range`

  A `Range` object.

* Return value:

  A `Box` object or `null`.

Example:

```js
removeBox(range);
```
