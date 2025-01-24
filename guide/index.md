---
layout: doc
title: Getting started
---

# {{ $frontmatter.title }}

## Quick start using npm

Lake is published on npm under the [lakelib](https://www.npmjs.com/package/lakelib) package. Install the latest version with the following command:

```bash
npm install lakelib
```

In your HTML page, add the following code that will serve as placeholders for the editor.

```html
<div class="my-editor">
  <div class="my-toolbar"></div>
  <div class="my-content"></div>
</div>
```

Call the following JavaScript code to render the editor. You can change the configuration through the [Toolbar](/reference/toolbar-config.md) and [Editor](/reference/) config.

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

Visit the [npm example](https://codesandbox.io/embed/hm39df?module=/src/index.js) on CodeSandbox to see the result of rendering the editor by running the code above.

::: warning Note
`lake.css` should be included when rendering the editor.
:::


## Quick start using CDN

If you prefer plain JavaScript without any build steps, you can use the bundled files directly from the `dist` folder in the distribution. You can also download these files and host them yourself.

* jsDelivr: https://www.jsdelivr.com/package/npm/lakelib
* UNPKG: https://unpkg.com/browse/lakelib/

In the `<head>` of your HTML page, add the following lines of code.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lakelib@0.3/dist/lake.min.css" />
<script src="https://cdn.jsdelivr.net/npm/lakelib@0.3/dist/lake.min.js"></script>
```

In the HTML page, add the following code that will serve as placeholders for the editor.

```html
<div class="my-editor">
  <div class="my-toolbar"></div>
  <div class="my-content"></div>
</div>
```

Call the following JavaScript code to render the editor using default config. You can change the config through the [Toolbar](/reference/toolbar-config.md) and [Editor](/reference/) config.

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

Directly visit the local [CDN example](/assets/cdn){target="_blank"} to see the result of running the code above. The same example is also available on [CodeSandbox](https://codesandbox.io/embed/z9p964?module=/index.html).


## Integrating with frameworks

Lake is a plain JavaScript library, which means you can integrate it into any other frameworks, such as [React](https://react.dev/), [Vue](https://vuejs.org/), and [Angular](https://angular.dev/).

::: code-group

<<< @/src/LakeReactExample.js [React]

<<< @/src/LakeVueExample.vue [Vue]

<<< @/src/LakeAngularExample.ts [Angular]

:::

You can go to CodeSandbox to try the code above.

* [React example](https://codesandbox.io/embed/kvv8yq?module=/src/Lake.js)
* [Vue example](https://codesandbox.io/embed/2g4855?module=/Lake.js)


## Getting and setting value

Lake provides the following methods to get and set the content of the editor.

### Initializing the editor with provided value

The [value](/reference/#value) config is used to set the content when initializing the editor.

```js
const defaultValue = `
  <h1>title</h1>
  <p>content<focus /></p>
`;
new Editor({
  root: '.my-content',
  value: defaultValue,
});
```

### Getting value

You can call [getValue()](/reference/editor.md#getvalue) method to get the current content.

```js
const content = editor.getValue();
```

### Setting value

You can use [setValue()](/reference/editor.md#setvalue) method to replace the existing content with the provided value.

```js
editor.setValue('<p>foo</p>');
```


## Binding events

Lake allows you to set up an event using the `editor.event.on()` method.

### `change` event

Fired when the content of the editor is changed. The `value` represents the content of the editor, which conforms to the [LML format](/guide/content-format.md).

```js
editor.event.on('change', value => {
  console.log(value);
});
```

### `statechange` event

Fired when the current selection is changed. The `state` is a `SelectionState` object representing the state of the current selection.

```js
editor.event.on('statechange', state => {
  console.log(state);
});
```

::: details SelectionState type
<<< @/src/selection-state.ts
:::

To find out more available events, refer to the [Editor](/reference/editor#instance-events) class.

## Configuring toolbar

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

To upload images, you need to configure the request settings for the `image` plugin. For more details, see the [image](/reference/index.md#image) config.

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

To upload files, you need to configure the request settings for the `file` plugin. For more details, see the [file](/reference/index.md#file) config.

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

The `code block` feature in Lake is implemented using [CodeMirror](https://codemirror.net/). However, since CodeMirror is quite large and not all users may need this feature, it is disabled by default. To activate it, you only need to add [CodeMirror for Lake](https://www.npmjs.org/package/lake-codemirror) to your code, no additional config is needed.

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

For the same reason as the `code block` feature, the `formula` feature is disabled by default. To activate it, simply add [KaTeX](https://katex.org/) to your code.

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
