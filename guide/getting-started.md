---
layout: doc
title: Getting started
---

# {{ $frontmatter.title }}

## Downloading Lake from CDN

Compressed copies of Lake files are available, you can download them from jsDelivr or UNPKG.

* jsDelivr: https://www.jsdelivr.com/package/npm/lakelib
* UNPKG: https://unpkg.com/browse/lakelib/

Note: These files do not include CodeMirror, so if you need the code block feature, addtioanaly including CodeMirror to your page is needed.

* jsDelivr: https://www.jsdelivr.com/package/npm/lake-codemirror
* UNPKG: https://unpkg.com/browse/lake-codemirror/

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
