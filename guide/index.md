---
layout: doc
title: Getting started
---

# {{ $frontmatter.title }}

## Quick start with npm

Lake is available on npm as the [lakelib](https://www.npmjs.com/package/lakelib) package. Install the latest version using the following command:

```bash
npm install lakelib
```

Place the editor placeholders within your HTML:

```html
<div class="my-editor">
  <div class="my-toolbar"></div>
  <div class="my-content"></div>
</div>
```

Import the required CSS and JavaScript modules, then initialize and render the editor. You can customize the [toolbar](/reference/toolbar-config.md) and [editor](/reference/) config as needed.

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

::: warning Note
Ensure `lake.css` is loaded before rendering the editor.
:::

For a live demonstration, check out the [npm example](https://codesandbox.io/embed/hm39df?module=/src/index.js) on CodeSandbox.

## Quick start with CDN

If you prefer to use plain JavaScript without any build steps, you can load the bundled files directly from a CDN like jsDelivr or UNPKG. You can also download and host the files yourself.

* jsDelivr: https://www.jsdelivr.com/package/npm/lakelib
* UNPKG: https://unpkg.com/browse/lakelib/

Include the following lines in the `<head>` section of your HTML page:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lakelib@0.3/dist/lake.min.css" />
<script src="https://cdn.jsdelivr.net/npm/lakelib@0.3/dist/lake.min.js"></script>
```

Place the editor placeholders within your HTML:

```html
<div class="my-editor">
  <div class="my-toolbar"></div>
  <div class="my-content"></div>
</div>
```

Use the following JavaScript to initialize and render the editor. You can customize the [toolbar](/reference/toolbar-config.md) and [editor](/reference/) config as needed.

```js
const { Editor, Toolbar } = Lake;

const toolbar = new Toolbar({
  root: '.my-toolbar',
});
const editor = new Editor({
  root: '.my-content',
  toolbar,
});
editor.render();
```

For a live demonstration, visit the [CDN example](/assets/cdn){target="_blank"} on this website or try it on [CodeSandbox](https://codesandbox.io/embed/z9p964?module=/index.html).


## Integrating with frameworks

Lake is a plain JavaScript library, which means you can integrate it into any other frameworks, such as [React](https://react.dev/), [Vue](https://vuejs.org/), and [Angular](https://angular.dev/).

::: code-group

<<< @/src/LakeReactExample.js [React]

<<< @/src/LakeVueExample.vue [Vue]

<<< @/src/LakeAngularExample.ts [Angular]

:::

You can visit CodeSandbox to try these examples.

* [React example](https://codesandbox.io/embed/kvv8yq?module=/src/Lake.js)
* [Vue example](https://codesandbox.io/embed/2g4855?module=/Lake.js)


## Getting and setting value

Lake provides the following methods to get and set the editor's content.

### Initializing the editor with a provided value

Use the [value](/reference/#value) config to set the initial content:

```js
const defaultValue = `
  <h1>Title</h1>
  <p>Content<focus /></p>
`;
new Editor({
  root: '.my-content',
  value: defaultValue,
});
```

### Getting value

Get the current content using the [getValue()](/reference/editor.md#getvalue) method:

```js
const content = editor.getValue();
```

### Setting value

Replace the existing content with a new value using the [setValue()](/reference/editor.md#setvalue) method:

```js
editor.setValue('<p>New content</p>');
```


## Binding events

Lake supports event binding through the `editor.event.on()` method.

### `change` event

Fired when the editor's content is changed. The `value` parameter is the current content, which conforms to [LML format](/guide/content-format.md).

```js
editor.event.on('change', value => {
  console.log(value);
});
```

### `statechange` event

Fired when the current selection is changed. The `state` parameter is a [SelectionState](/reference/types.md#selectionstate) object representing the state of the current selection.

```js
editor.event.on('statechange', state => {
  console.log(state);
});
```

For more event options, refer to the [Editor](/reference/editor#instance-events) class.


## Customizing toolbar

Lake allows you to make your own toolbar by setting the [items](/reference/toolbar-config#items) config. For more details, see the [Toolbar config](/reference/toolbar-config.md) page.

```js
const toolbarItems = [
  'undo',
  'redo',
  '|',
  'bold',
];
new Toolbar({
  root: '.my-toolbar',
  items: toolbarItems,
});
```


## Uploading images

Configure the `image` plugin to enable image uploads. Refer to the [image](/reference/index.md#image) config for further details.

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

Similarly, configure the `file` plugin for file uploads. See the [file](/reference/index.md#file) config for more information.

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

The `code block` feature is powered by [CodeMirror](https://codemirror.net/). Since CodeMirror is a large dependency and not all users require this feature, it is disabled by default. To enable it, include [CodeMirror for Lake](https://www.npmjs.org/package/lake-codemirror) in your project:

::: code-group

```js [npm]
import * as CodeMirror from 'lake-codemirror';
window.LakeCodeMirror = CodeMirror;
```

```html [CDN]
<script src="https://cdn.jsdelivr.net/npm/lake-codemirror@2/dist/codemirror.min.js"></script>
```

:::


## Mathematical formula

Similarly, the `formula` feature is disabled by default. Enable it by adding [KaTeX](https://katex.org/):

::: code-group

```js [npm]
import 'katex/dist/katex.css';
import katex from 'katex';
window.katex = katex;
```

```html [CDN]
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16/dist/katex.min.css" />
<script src="https://cdn.jsdelivr.net/npm/katex@0.16/dist/katex.min.js"></script>
```

:::
