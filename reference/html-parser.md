---
layout: doc
title: HTMLParser
outline: [2, 3]
---

# {{ $frontmatter.title }}

The `HTMLParser` interface provides the ability to parse an HTML string by specified rules.

Example:

::: code-group

```js [npm]
import { HTMLParser } from 'lakelib';

const parser = new HTMLParser('<div><p>foo</p><p>bar</p></div>');
console.log(parser.getHTML());
```

```js [CDN]
const parser = new Lake.HTMLParser('<div><p>foo</p><p>bar</p></div>');
console.log(parser.getHTML());
```

:::


## Constructor

Creates a new `HTMLParser` object.

* Parameters:

  `content`

  An HTML string or [Nodes](/reference/nodes.md) object.

  `rules` <Badge type="info" text="Optional" />

  An object representing the rules.

Example:

```js
// The parameter is an HTML string.
const parser = new HTMLParser('<p>foo</p>');
// The parameter is a native node.
const parser = new Box(query('<p>foo</p>'));
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
const parser = new HTMLParser('<p>foo</p>');
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
const parser = new HTMLParser('<p>foo</p>');
const fragment = parser.getFragment();
```
