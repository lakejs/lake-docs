---
layout: doc
title: HTMLParser
outline: [2, 3]
---

# {{ $frontmatter.title }}

The `HTMLParser` interface provides the ability to parse an HTML string according to specified rules.

Example:

```js
import { HTMLParser } from 'lakelib';

const parser = new HTMLParser('<div><p>foo</p><p>bar</p></div>');
console.log(parser.getHTML());
```


## Constructor

Creates a new `HTMLParser` instance.

* Parameters:

  `content`

  An HTML string or [Nodes](/reference/nodes.md) object.

  `rules` <Badge type="info" text="Optional" />

  A [ContentRules](/reference/types.md#contentrules) object that defines parsing rules. Defaults to the return value of [getContentRules()](/reference/functions.md#getcontentrules).


## Instance methods

### getHTML()

Returns the parsed HTML as a string.

* Parameters:

  None.

* Return value:

  An HTML string.

Example:

```js
const parser = new HTMLParser('<p>foo</p>');
const html = parser.getHTML();
```


### getFragment()

Returns the parsed content as a [DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) object.

* Parameters:

  None.

* Return value:

  a [DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) object.

Example:

```js
const parser = new HTMLParser('<p>foo</p>');
const fragment = parser.getFragment();
```
