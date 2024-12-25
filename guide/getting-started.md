---
layout: doc
title: Getting started
---

# {{ $frontmatter.title }}

## Downloading Lake from CDN

Compressed files are available under the `dist` directory in the distribution. You can download them from jsDelivr or UNPKG.

* jsDelivr: https://www.jsdelivr.com/package/npm/lakelib
* UNPKG: https://unpkg.com/browse/lakelib/

## Downloading Lake using npm

Lake is published on npm under the [lakelib](https://www.npmjs.com/package/lakelib) package. You can install the latest version with the following command:

```bash
npm install lakelib
```

## Quick start with CDN

Add the following lines of code in the `<head>` of your HTML page.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lakelib@latest/dist/lake.min.css" />
<script src="https://cdn.jsdelivr.net/npm/lakelib@latest/dist/lake.min.js"></script>
```

In the HTML page, add the following code that will serve as placeholders for the toolbar and the editor.

```html
<div class="my-editor">
  <div class="my-toolbar"></div>
  <div class="my-content"></div>
</div>
```

Call the following JavaScript code to render the editor.

```js
const toolbar = new Lake.Toolbar({
  root: '.my-toolbar',
});
const editor = new Lake.Editor({
  root: '.my-content',
  toolbar,
});
editor.render();
```

The `root` property can also be given a DOM element.

```js
const toolbar = new Lake.Toolbar({
  root: document.querySelector('.my-toolbar'),
});
const editor = new Lake.Editor({
  root: document.querySelector('.my-content'),
  toolbar,
});
editor.render();
```


## Quick start with npm

In the HTML page, add the following code that will serve as placeholders for the toolbar and the editor.

```html
<div class="my-editor">
  <div class="my-toolbar"></div>
  <div class="my-content"></div>
</div>
```

Call the following JavaScript code to render the editor.

```js
import 'lakelib/lib/lake.css';
import { Editor, Toolbar } from 'lakelib';

const toolbar = new Toolbar({
  root: '.my-toolbar',
});
const editor = new Editor({
  root: '.my-content',
  toolbar,
});
editor.render();
```

## Binding events

### `change` event

The `change` event is fired when the content of the editor is changed.

```js
editor.event.on('change', value => {
  console.log(value);
});
```

### `statechange` event

The `statechange` event is fired when the current selection of the editor is changed.

```js
editor.event.on('statechange', state => {
  console.log(state);
});
```

## Uploading images

This feature requires configuring the request settings for the image plugin. For more details, see the [image config](/reference/index.md#image).

```js
new Editor({
  root: '.my-content',
  image: {
    requestMethod: 'POST',
    requestAction: '/upload',
    requestTypes: ['image/gif', 'image/jpeg', 'image/png'],
  },
});
```

## Uploading files

This feature requires configuring the request settings for the file plugin. For more details, see the [file config](/reference/index.md#file).

```js
new Editor({
  root: '.my-content',
  file: {
    requestMethod: 'POST',
    requestAction: '/upload',
    requestTypes: ['application/zip', 'application/pdf'],
  },
});
```

## Code block

This feature depends on [CodeMirror](https://codemirror.net/), so you need to add [CodeMirror for Lake](https://www.npmjs.org/package/lake-codemirror) to your HTML page.

### Using CDN

* jsDelivr: https://www.jsdelivr.com/package/npm/lake-codemirror
* UNPKG: https://unpkg.com/browse/lake-codemirror/

```html
<script src="https://cdn.jsdelivr.net/npm/lake-codemirror@latest/dist/codemirror.min.js"></script>
```

### Using npm

```js
import 'lakelib/lib/lake.css';
import * as CodeMirror from 'lake-codemirror';
import { Editor } from 'lakelib';

window.LakeCodeMirror = CodeMirror;

const editor = new Editor({
  root: '.my-content',
});
editor.render();
```

## Mathematical formula

This feature depends on [KaTeX](https://katex.org/), so you need to add KaTeX to your HTML page.

### Using CDN

* jsDelivr: https://www.jsdelivr.com/package/npm/katex
* UNPKG: https://unpkg.com/browse/katex/

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@latest/dist/katex.min.css" />
<script src="https://cdn.jsdelivr.net/npm/katex@latest/dist/katex.min.js"></script>
```

### Using npm

```js
import 'katex/dist/katex.css';
import 'lakelib/lib/lake.css';
import katex from 'katex';
import { Editor } from 'lakelib';

window.katex = katex;

const editor = new Editor({
  root: '.my-content',
});
editor.render();
```