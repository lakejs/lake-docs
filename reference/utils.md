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

Returns a `Nodes` object representing a collection of the document's nodes. It is similar to [jQuery](https://jquery.com/) and is designed for simplifying DOM manipulation.

* Parameters:

  `content`

  CSS selector, HTML string, and DOM element.

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

Inserts a bookmark at the cursor position or a pair of bookmarks at the beginning and end of the selected range.

* Parameters:

  `range`

  A `Range` object.

* Return value:

  ```ts
  { anchor: Nodes, focus: Nodes }
  ```

Example:

```js
const bookmark = insertBookmark(range);
```


## toBookmark()

Changes the specified range to the range represented by the bookmark.

* Parameters:

  `range`

  A `Range` object.

  `bookmark`

  ```ts
  { anchor: Nodes, focus: Nodes }
  ```

* Return value:

  None.

Example:

```js
toBookmark(range, bookmark);
```
