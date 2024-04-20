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

First, add the following lines of code in the `<head>` of an HTML page.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lakelib@latest/dist/lake.min.css" />
<script src="https://cdn.jsdelivr.net/npm/lakelib@latest/dist/lake.min.js"></script>
```

Then, in the HTML page add the following HTML code that will serve as a placeholder for an editor instance.

```html
<div class="lake-editor">
  <div class="lake-toolbar-root"></div>
  <div class="lake-root"></div>
</div>
```

Finally, call the following JavaScript code to render the editor.

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

The `root` property can also be a DOM element.

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

First, in the HTML page add the following HTML code that will serve as a placeholder for an editor instance.

```html
<div class="lake-editor">
  <div class="lake-toolbar-root"></div>
  <div class="lake-root"></div>
</div>
```

Then, call the following JavaScript code to render the editor.

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

```js
editor.event.on('statechange', () => {
  console.log("Event 'statechange' emitted");
});
editor.event.on('change', (val: string) => {
  console.log(`Event 'change' emitted, the length of the value is ${val.length}`);
});
```

## Code block

The `code block` feature is based on [CodeMirror](https://codemirror.net/), so if you need the feature, CodeMirror must be included before loading Lake.

* jsDelivr: https://www.jsdelivr.com/package/npm/lake-codemirror
* UNPKG: https://unpkg.com/browse/lake-codemirror/

```html
<script src="https://cdn.jsdelivr.net/npm/lake-codemirror@latest/dist/codemirror.min.js"></script>
```
