---
layout: doc
title: Nodes class
outline: [2, 3]
---

# {{ $frontmatter.title }}

The `Nodes` class represents a collection of the document's nodes. Its methods are similar to those of [jQuery](https://jquery.com/).

Example:

::: code-group

```js [npm]
import { Nodes } from 'lakelib';

const body = new Nodes(document.body);
body.append('<p>foo</p>');
```

```js [CDN]
const body = new Lake.Nodes(document.body);
body.append('<p>foo</p>');
```

:::


## Constructor

Creates a new `Nodes` object.

* Parameters:

  `node`

  A native node or a list of native nodes.

* Return value:

  A new `Nodes` object.

Example:

```js
// A native node.
const body = new Nodes(document.body);
// A list of native nodes.
const nodes = new Nodes([
  document.createElement('p'),
  document.createTextNode('foo'),
]);
```


## Instance properties

### length <Badge type="info" text="Read only" />

The number of nodes in the `Nodes` object.

* Type: `Nodes`

Example:

```js
const nodes = new Nodes([
  document.createElement('p'),
  document.createTextNode('foo'),
]);
// Outputs 2.
console.log(nodes.length);
```


### id <Badge type="info" text="Read only" />

The unique ID of the first node.

* Type: `number`

Example:

```js
const paragraph = new Nodes(document.createElement('p'));
// Outputs a number.
console.log(paragraph.id);
```


### name <Badge type="info" text="Read only" />

The name of the first node.

* Type: `string`

Example:

```js
const paragraph = new Nodes(document.createElement('p'));
// Outputs "p".
console.log(paragraph.name);
```


### isElement <Badge type="info" text="Read only" />

A boolean value indicating whether the first node is an element.

* Type: `boolean`

Example:

```js
const paragraph = new Nodes(document.createElement('p'));
// Outputs true.
console.log(paragraph.isElement);
```


### isText <Badge type="info" text="Read only" />

A boolean value indicating whether the first node is a text.

* Type: `boolean`

Example:

```js
const textNode = new Nodes(document.createTextNode('foo'));
// Outputs true.
console.log(textNode.isText);
```


### isBlock <Badge type="info" text="Read only" />

A boolean value indicating whether the first node is a block.

* Type: `boolean`

Example:

```js
const paragraph = new Nodes(document.createElement('p'));
// Outputs true.
console.log(paragraph.isBlock);
```


### isMark <Badge type="info" text="Read only" />

A boolean value indicating whether the first node is a mark.

* Type: `boolean`

Example:

```js
const strong = new Nodes(document.createElement('strong'));
// Outputs true.
console.log(strong.isMark);
```


### isVoid <Badge type="info" text="Read only" />

A boolean value indicating whether the first node is a void element that cannot have any child nodes.

* Type: `boolean`

Example:

```js
const br = new Nodes(document.createElement('br'));
// Outputs true.
console.log(br.isVoid);
```


### isHeading <Badge type="info" text="Read only" />

A boolean value indicating whether the first node is a heading.

* Type: `boolean`

Example:

```js
const h1 = new Nodes(document.createElement('h1'));
// Outputs true.
console.log(h1.isHeading);
```


### isList <Badge type="info" text="Read only" />

A boolean value indicating whether the first node is a list.

* Type: `boolean`

Example:

```js
const ol = new Nodes(document.createElement('ol'));
// Outputs true.
console.log(ol.isList);
```


### isTable <Badge type="info" text="Read only" />

A boolean value indicating whether the first node is a table.

* Type: `boolean`

Example:

```js
const table = new Nodes(document.createElement('table'));
// Outputs true.
console.log(table.isTable);
```


### isBookmark <Badge type="info" text="Read only" />

A boolean value indicating whether the first node is a bookmark element.

* Type: `boolean`

Example:

```js
const bookmark = new Nodes(document.createElement('lake-bookmark'));
// Outputs true.
console.log(bookmark.isBookmark);
```


### isBox <Badge type="info" text="Read only" />

A boolean value indicating whether the first node is a box element.

* Type: `boolean`

Example:

```js
const boxNode = new Nodes(document.createElement('lake-box'));
// Outputs true.
console.log(boxNode.isBox);
```


### isInlineBox <Badge type="info" text="Read only" />

A boolean value indicating whether the first node is an inline box element.

* Type: `boolean`

Example:

```js
const boxNode = query('<lake-box type="inline" name="emoji"></lake-box>');
// Outputs true.
console.log(boxNode.isInlineBox);
```


### isBlockBox <Badge type="info" text="Read only" />

A boolean value indicating whether the first node is a block box element.

* Type: `boolean`

Example:

```js
const boxNode = query('<lake-box type="block" name="hr"></lake-box>');
// Outputs true.
console.log(boxNode.isBlockBox);
```


### isContainer <Badge type="info" text="Read only" />

A boolean value indicating whether the first node is a [contenteditable](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/contentEditable) element where users can edit the content.

* Type: `boolean`

Example:

```js
const div = query('<div contenteditable="true" />');
// Outputs true.
console.log(div.isContainer);
```


### isOutside <Badge type="info" text="Read only" />

A boolean value indicating whether the first node does not have an ancestor element which `contenteditable` attribute is `true`.

* Type: `boolean`

Example:

```js
const div = query('<div><div contenteditable="true" /></div>');
// Outputs true.
console.log(div.isOutside);
```


### isInside <Badge type="info" text="Read only" />

A boolean value indicating whether the first node has an ancestor element which `contenteditable` attribute is `true`.

* Type: `boolean`

Example:

```js
const div = query('<div contenteditable="true"><p>foo</p></div>');
// Outputs true.
console.log(div.find('p').isInside);
```


### isTopInside <Badge type="info" text="Read only" />

A boolean value indicating whether the first node's parent element is an element which `contenteditable` attribute is `true`.

* Type: `boolean`

Example:

```js
const div = query('<div contenteditable="true"><p>foo</p></div>');
// Outputs true.
console.log(div.find('p').isTopInside);
```


### isContentEditable <Badge type="info" text="Read only" />

A boolean value indicating whether the first node is editable.

* Type: `boolean`

Example:

```js
const div = query('<div contenteditable="true"><p>foo</p></div>');
// Outputs true.
console.log(div.find('p').isContentEditable);
```


### isIndivisible <Badge type="info" text="Read only" />

A boolean value indicating whether the first node is indivisible.

* Type: `boolean`

Example:

```js
const div = query('<div contenteditable="true" />');
// Outputs true.
console.log(div.isIndivisible);
```


### isEmpty <Badge type="info" text="Read only" />

A boolean value indicating whether the first node is empty.

* Type: `boolean`

Example:

```js
const div = query('<div><p></p></div>');
// Outputs true.
console.log(div.find('p').isEmpty);
```


## Instance methods

### get()

Returns a native node at the specified index.

* Parameters:

  `index`

  Zero-based index of the native node to be returned.

* Return value:

  A [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node) object.

Example:

```js
const div = query('<div><p>foo</p><p>bar</p></div>');
const paragraphs = div.find('p');
// Outputs "foo".
console.log(paragraphs.get(0).innerText);
// Outputs "bar".
console.log(paragraphs.get(1).innerText);
```


### getAll()

Returns all native nodes.

* Parameters:

  None.

* Return value:

  An `Array` object.

Example:

```js
const div = query('<div><p>foo</p><p>bar</p></div>');
const paragraphs = div.find('p').getAll();
// Outputs "foo".
console.log(paragraphs[0].innerText);
// Outputs "bar".
console.log(paragraphs[1].innerText);
```


### eq()

Reduces the nodes of a `Nodes` object to the one at the specified index.

* Parameters:

  `index`

  Zero-based index of the specified node.

* Return value:

  A `Nodes` object.

Example:

```js
const div = query('<div><p>foo</p><p>bar</p></div>');
const paragraphs = div.find('p');
// Outputs "foo".
console.log(paragraphs.eq(0).get(0).innerText);
// Outputs "bar".
console.log(paragraphs.eq(1).get(0).innerText);
```

