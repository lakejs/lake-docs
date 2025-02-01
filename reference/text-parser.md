---
layout: doc
title: TextParser
outline: [2, 3]
---

# {{ $frontmatter.title }}

The `TextParser` interface enables parsing of text into structured HTML.

Example:

```js
import { TextParser } from 'lakelib';

const parser = new TextParser('foo\nbar');
// Outputs "<p>foo</p><p>bar</p>".
console.log(parser.getHTML());
```


## Constructor

Creates a new `TextParser` instance.

* Parameters:

  `content`

  A string that specifies the text content to be parsed.

Example:

```js
const parser = new TextParser('foo\nbar');
```


## Instance methods

### getHTML()

Converts the parsed text into an HTML string.

* Parameters:

  None.

* Return value:

  An HTML string.

Example:

```js
const parser = new TextParser('foo\nbar');
const html = parser.getHTML();
```


### getFragment()

Generates a [DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) object that represents the parsed text.

* Parameters:

  None.

* Return value:

  a [DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) object.

Example:

```js
const parser = new TextParser('foo\nbar');
const fragment = parser.getFragment();
```
