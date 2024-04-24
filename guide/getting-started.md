---
layout: doc
title: Getting started
---

# {{ $frontmatter.title }}

## Downloading Lake from CDN

Compressed copies of Lake files are available, you can download them from jsDelivr or UNPKG.

* jsDelivr: https://www.jsdelivr.com/package/npm/lakelib
* UNPKG: https://unpkg.com/browse/lakelib/

## Downloading Lake using npm

Lake is registered as a package on npm. You can install the latest version of Lake with the following npm command.

```bash
npm install lakelib
```

## Quick start with CDN

Add the following lines of code in the `<head>` of an HTML page.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lakelib@latest/dist/lake.min.css" />
<script src="https://cdn.jsdelivr.net/npm/lakelib@latest/dist/lake.min.js"></script>
```

In the HTML page add the following HTML code that will serve as a placeholder for an editor instance.

```html
<div class="lake-editor">
  <div class="lake-toolbar-root"></div>
  <div class="lake-root"></div>
</div>
```

Call the following JavaScript code to render the editor.

```js
const toolbar = new Lake.Toolbar({
  root: '.lake-toolbar-root',
});
const editor = new Lake.Editor({
  root: '.lake-root',
  toolbar,
});
editor.render();
```

The `root` property can also be given a DOM element.

```js
const toolbar = new Lake.Toolbar({
  root: document.querySelector('.lake-toolbar-root'),
});
const editor = new Lake.Editor({
  root: document.querySelector('.lake-root'),
  toolbar,
});
editor.render();
```


## Quick start with npm

In the HTML page add the following HTML code that will serve as a placeholder for an editor instance.

```html
<div class="lake-editor">
  <div class="lake-toolbar-root"></div>
  <div class="lake-root"></div>
</div>
```

Call the following JavaScript code to render the editor.

```js
import 'lakelib/lib/lake.css';
import { Editor, Toolbar } from 'lakelib';

const toolbar = new Toolbar({
  root: '.lake-toolbar-root',
});
const editor = new Editor({
  root: '.lake-root',
  toolbar,
});
editor.render();
```

## Using `change` event

The `change` event is fired when the user modifies the editor's value.

```js
editor.event.on('change', value => {
  console.log(`Event 'change' emitted, the length of the value is ${value.length}`);
});
```

## Image

Uploading and inserting image requires request config. For more details, see [Image Configuration](/reference/editor-config.md#image).

```js
new Editor({
  root: '.lake-root',
  image: {
    requestMethod: 'POST',
    requestAction: '/upload',
    requestTypes: ['image/gif', 'image/jpeg', 'image/png'],
  },
});
```


## Code block

This feature is based on [CodeMirror](https://codemirror.net/), so if you need the feature, CodeMirror must be included before loading Lake.

* jsDelivr: https://www.jsdelivr.com/package/npm/lake-codemirror
* UNPKG: https://unpkg.com/browse/lake-codemirror/

```html
<script src="https://cdn.jsdelivr.net/npm/lake-codemirror@latest/dist/codemirror.min.js"></script>
```
