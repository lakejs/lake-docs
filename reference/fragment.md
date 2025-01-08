---
layout: doc
title: Fragment
outline: [2, 3]
---

# {{ $frontmatter.title }}

The `Fragment` interface represents a minimal document object that has no parent. It contains the native [DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment), designed for more efficient manipulation.

Example:

::: code-group

```js [npm]
import { Fragment } from 'lakelib';

const fragment = new Fragment();
fragment.append('<div>foo</div><div>bar</div>');
```

```js [CDN]
const fragment = new Lake.Fragment();
fragment.append('<div>foo</div><div>bar</div>');
```

:::


## Constructor

Creates a new `Fragment` object.

* Parameters:

  `fragment` <Badge type="info" text="Optional" />

  A native [DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) object.

Example:

```js
// Without fragment parameter.
const fragment = new Fragment();
// With fragment parameter.
const fragment = new Fragment(document.createDocumentFragment());
```


## Instance methods

### get()

Returns a native [DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) object from the fragment.

* Parameters:

  None.

* Return value:

  A native [DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) object.

Example:

```js
const fragment = new Fragment();
const nativeFragment = fragment.get();
```


### find()

Returns the descendants of the fragment that match the specified CSS selector.

* Parameters:

  `selector`

  A `string` that specifies CSS selector.

* Return value:

  A `Nodes` object.

Example:

```js
const nativeFragment = document.createDocumentFragment();
nativeFragment.appendChild(query('<div>foo</div>').get(0));
nativeFragment.appendChild(query('<div>bar</div>').get(0));
const fragment = new Fragment(nativeFragment);
// Outputs "foo".
console.log(fragment.find('div').get(0).innerText);
```


### append()

Inserts the specified content just inside the fragment, after its last child.

* Parameters:

  `content`

  HTML string, [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node), and `Nodes` object.

* Return value:

  None.

Example:

```js
const fragment = new Fragment();
fragment.append('<div>foo</div><div>bar</div>');
```
