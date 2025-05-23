---
layout: doc
title: Functions
outline: [2, 3]
---

# {{ $frontmatter.title }}

A collection of utility functions.

Example:

```js
import { query, insertContents } from 'lakelib';

// Inserts an HTML string just inside the body element, after its last child.
query(document.body).append('<p>foo</p>');

// Inserts an HTML string into the range.
insertContents(range, '<strong>foo</strong>');
```

## Basics

### query()

Returns a [Nodes](/reference/nodes.md) object representing a collection of the nodes. This function is similar to [jQuery](https://jquery.com/), but its implementation is very simple. It is designed for simplifying DOM manipulation.

* Parameters:

  `content`

  A CSS selector, HTML string, and DOM element.

* Return value:

  A [Nodes](/reference/nodes.md) object.

Example:

```js
// CSS selector
query('.my-content').css('color', 'blue');

// HTML string
const node = query('<p>foo</p>');

// DOM element
query(document.body).append(node);
```


### template()

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


### toHex()

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


### getBox()

Returns an existing [Box](/reference/box.md) instance associated with the provided `boxNode` or generates a new one if none exists. The function handles the creation and storage of [Box](/reference/box.md) instances, storing them either in a temporary or permanent map based on whether the `boxNode` is contained within a container.

* Parameters:

  `boxNode`

  The source used to determine or create a [Box](/reference/box.md) instance. If a `string` is provided, it is treated as a name. If a [Nodes](/reference/nodes.md) object is provided, it is treated as a node.

* Return value:

  The existing or newly created [Box](/reference/box.md) instance.

Example:

```js
// Using a string as boxNode
const boxByName = getBox('myBoxName');

// Using a Nodes instance
const boxByNode = getBox(query('lake-box').eq(0));
```


### createIframeBox()

Creates a [BoxComponent](/reference/types.md#boxcomponent) that is used to embed external content using an iframe. It accepts a configuration object with the following properties:

#### type

The type of the box.

* Type: `'inline' | 'block'`

#### name

The name of the iframe box component.

* Type: `string`

#### width

The default width of the iframe.

* Type: `string`

#### height

The default height of the iframe.

* Type: `string`

#### formDescription

Description text for the form, which can be localized.

* Type: `string | ((locale: TranslationFunctions) => string)`

#### urlLabel <Badge type="info" text="Optional" />

Label for the URL input field, which can be localized.

* Type: `string | ((locale: TranslationFunctions) => string)`

#### urlPlaceholder

Placeholder text for the URL input field.

* Type: `string`

#### embedButtonText

Text for the embed button, which can be localized.

* Type: `string | ((locale: TranslationFunctions) => string)`

#### deleteButtonText

Tooltip text for the delete button, which can be localized.

* Type: `string | ((locale: TranslationFunctions) => string)`

#### validUrl

Function to validate the inputted URL.

* Type: `(url: string) => boolean`

#### urlError

Error message shown if URL validation fails.

* Type: `string | ((locale: TranslationFunctions) => string)`

#### iframePlaceholder <Badge type="info" text="Optional" />

Placeholder icon or text shown while the iframe is loading.

* Type: `HTML string`

#### iframeAttributes

Function to generate attributes for the iframe element.

* Type: `(url: string) => Record<string, string>`

#### beforeIframeLoad <Badge type="info" text="Optional" />

Callback triggered before the iframe loads.

* Type: `(box: Box) => void`

#### resize <Badge type="info" text="Optional" />

If `true`, allows resizing of the iframe. Defaults to `false`.

* Type: `boolean`

Example:

```js
function getId(url: string): string {
  const result = /[\w\-]+$/.exec(url || '');
  return result ? result[0] : '';
}
const youbuteBox = createIframeBox({
  type: 'inline',
  name: 'youtube',
  width: '560px',
  height: '315px',
  formDescription: 'Paste a YouTube link to embed the video.',
  urlLabel: 'Link',
  urlPlaceholder: 'https://www.youtube.com/watch?v=...',
  embedButtonText: 'Embed video',
  deleteButtonText: 'Delete',
  validUrl: url => url.indexOf('https://www.youtube.com/') === 0,
  urlError: 'Invalid YouTube link',
  iframePlaceholder: '<span>YouTube</span>',
  iframeAttributes: url => ({
    src: `https://www.youtube.com/embed/${getId(url)}`,
    title: 'YouTube video player',
    frameborder: '0',
    allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
    referrerpolicy: 'strict-origin-when-cross-origin',
    allowfullscreen: 'true',
  }),
  resize: true,
});
```


## Operations

### insertBookmark()

Inserts a bookmark at the cursor position or a pair of bookmarks at the beginning and end of the range.

* Parameters:

  `range`

  A [Range](/reference/range.md) object.

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


### toBookmark()

Changes the specified range to a range represented by the provided bookmark.

* Parameters:

  `range`

  A [Range](/reference/range.md) object.

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


### insertContents()

Inserts the specified contents into the range.

* Parameters:

  `range`

  A [Range](/reference/range.md) object.

  `contents`

  HTML string, [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node), [DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment), [Nodes](/reference/nodes.md), and [Fragment](/reference/fragment.md).

* Return value:

  None.

Example:

```js
insertContents(range, '<p>foo</p>');
```


### deleteContents()

Removes the contents of the specified range.

* Parameters:

  `range`

  A [Range](/reference/range.md) object.

* Return value:

  None.

Example:

```js
deleteContents(range);
```


### setBlocks()

Adds new blocks or changes the target blocks in the specified range.

* Parameters:

  `range`

  A [Range](/reference/range.md) object.

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


### splitBlock()

Removes the contents of the specified range and then splits the block node at the point of the collapsed range.

* Parameters:

  `range`

  A [Range](/reference/range.md) object.

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


### insertBlock()

Inserts a block into the specified range.

* Parameters:

  `range`

  A [Range](/reference/range.md) object.

  `value`

  An HTML string or [Nodes](/reference/nodes.md) object.

* Return value:

  None.

Example:

```js
insertBlock(range, '<h1>heading</h1>');
```


### splitMarks()

Splits text nodes or mark nodes.

* Parameters:

  `range`

  A [Range](/reference/range.md) object.

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
const parts = splitMarks(range);
console.log(parts.start, parts.center, parts.end);
```


### addMark()

Adds the specified mark to the texts of the range.

* Parameters:

  `range`

  A [Range](/reference/range.md) object.

  `value`

  An HTML string or [Nodes](/reference/nodes.md) object.

* Return value:

  None.

Example:

```js
// Adds bold.
addMark(range, '<strong />');

// Changes font size.
addMark(range, '<span style="font-size: 18px;" />');
```


### removeMark()

Removes the specified marks in the range.

* Parameters:

  `range`

  A [Range](/reference/range.md) object.

  `value` <Badge type="info" text="Optional" />

  An HTML string or [Nodes](/reference/nodes.md) object.

* Return value:

  None.

Example:

```js
// Removes all formatting.
removeMark(range);

// Removes bold.
removeMark(range, '<strong />');
```


### insertBox()

Inserts a box into the specified range.

* Parameters:

  `range`

  A [Range](/reference/range.md) object.

  `boxName`

  A string that specifies the name of the box.

  `boxValue` <Badge type="info" text="Optional" />

  A key-value object that specifies the data of the box.

* Return value:

  A [Box](/reference/box.md) object or `null`.

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


### removeBox()

Removes a box that contains the specified range.

* Parameters:

  `range`

  A [Range](/reference/range.md) object.

* Return value:

  A `Box` object or `null`.

Example:

```js
removeBox(range);
```


### getContentRules()

Returns the default HTML parsing rules used by [HTMLParser](/reference/html-parser.md).

* Parameters:

  None.

* Return value:

  A [ContentRules](/reference/types.md#contentrules) object.

Example:

```js
const rules = getContentRules();
```
