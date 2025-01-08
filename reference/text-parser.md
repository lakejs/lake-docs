---
layout: doc
title: TextParser
outline: [2, 3]
---

# {{ $frontmatter.title }}

The `TextParser` interface provides the ability to parse a text.

Example:

::: code-group

```js [npm]
import { TextParser } from 'lakelib';

const parser = new TextParser('foo\nbar');
// Outputs "<p>foo</p><p>bar</p>".
console.log(parser.getHTML());
```

```js [CDN]
const parser = new Lake.TextParser('foo\nbar');
// Outputs "<p>foo</p><p>bar</p>".
console.log(parser.getHTML());
```

:::


## Constructor

Creates a new `TextParser` object.

* Parameters:

  `content`

  A string that will be parsed.

Example:

```js
const parser = new TextParser('foo\nbar');
```


## Instance methods

### getHTML()

Returns an HTML string.

* Parameters:

  None.

* Return value:

  The HTML string.

Example:

```js
const parser = new TextParser('foo\nbar');
const html = parser.getHTML();
```


### getFragment()

Returns a [DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) object.

* Parameters:

  None.

* Return value:

  a [DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) object.

Example:

```js
const parser = new TextParser('foo\nbar');
const fragment = parser.getFragment();
```
