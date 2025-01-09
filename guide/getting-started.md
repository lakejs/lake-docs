---
layout: doc
title: Getting started
---

# {{ $frontmatter.title }}

## Downloading Lake using npm

Lake is published on npm under the [lakelib](https://www.npmjs.com/package/lakelib) package. You can install the latest version with the following command:

```bash
npm install lakelib
```


## Downloading Lake from CDN

Bundled files are available in the `dist` folder of the distribution. You can download them from jsDelivr or UNPKG.

* jsDelivr: https://www.jsdelivr.com/package/npm/lakelib
* UNPKG: https://unpkg.com/browse/lakelib/


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

The `root` property can also be given a DOM element.

```js
const toolbar = new Toolbar({
  root: document.querySelector('.my-toolbar'),
});
const editor = new Editor({
  root: document.querySelector('.my-content'),
  toolbar,
});
editor.render();
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


## Default content

Set the default content using the [value](/reference/#value) config when initializing the editor.

```js
const defaultValue = `
  <h1>title</h1>
  <p>content<focus /></p>
`;
new Editor({
  root: '.my-content',
  toolbar,
  value: defaultValue,
});
```


## Binding events

Set up an event using the `editor.event.on()` method. You can find all events in the [Editor](/reference/editor#instance-events) class.

### `change` event

Fired when the content of the editor is changed.

```js
editor.event.on('change', value => {
  console.log(value);
});
```

### `statechange` event

Fired when the current selection is changed.

```js
editor.event.on('statechange', state => {
  console.log(state);
});
```


## Uploading images

This feature requires configuring the request settings for the image plugin. For more details, see the [image](/reference/index.md#image) config.

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

This feature requires configuring the request settings for the file plugin. For more details, see the [file](/reference/index.md#file) config.

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

::: code-group

```js [npm]
import * as CodeMirror from 'lake-codemirror';
window.LakeCodeMirror = CodeMirror;
```

```html [CDN]
<script src="https://cdn.jsdelivr.net/npm/lake-codemirror@latest/dist/codemirror.min.js"></script>
```

:::


## Mathematical formula

This feature depends on [KaTeX](https://katex.org/), so you need to add KaTeX to your HTML page.

::: code-group

```js [npm]
import 'katex/dist/katex.css';
import katex from 'katex';
window.katex = katex;
```

```html [CDN]
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@latest/dist/katex.min.css" />
<script src="https://cdn.jsdelivr.net/npm/katex@latest/dist/katex.min.js"></script>
```

:::
