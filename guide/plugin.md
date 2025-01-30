---
layout: doc
title: Creating a Lake plugin
---

# {{ $frontmatter.title }}

## Overview

A Lake plugin is a function that extends the capabilities of Lake. It takes the current [Editor](/reference/editor.md) instance as its parameter and optionally returns a cleanup function. It is called when the [Editor](/reference/editor.md) instance is destroyed, and is typically used for tasks like removing event listeners or destroying popup instances. If there is nothing to clean up, returning a function is optional.

```js
export default (editor) => {
  // setup code
  return () => {
    // cleanup code
  };
};
```


## A simple plugin

The example below demonstrates how to use the [plugin.add()](/reference/plugin.md#add) method to register a `removeFormat` plugin.

```js
import { Editor } from 'lakelib';

const removeFormat = (editor) => {
  editor.command.add('removeFormat', {
    execute: () => {
      editor.selection.removeMark();
      editor.history.save();
    },
  });
};

Editor.plugin.add('removeFormat', removeFormat);
```

* `command.add()`: Registers a new command.

* `selection.removeMark()`: Removes styling like bold, underline, or font color from the current selection.

* `history.save()`: Stores the current content in the memory, allowing you to undo or redo.

Once the `removeFormat` plugin is registered, you can use the `command.execute()` method to remove all formatting from the current selection.

```js
editor.command.execute('removeFormat');
```

Try the `removeFormat` plugin in the demo below:

<EmbeddedEditor :toolbar="['removeFormat']" value="
<p><strong><u>Select here and click the <code>eraser</code> button.</u></strong></p>
" />


## A plugin with box

Lake supports embedding custom components, called boxes, using its [Box](/reference/box.md) interface. Plugins that include a box typically follow this structure:

```
hello-world
├─ hello-world-box.js
├─ hello-world-box.css
└─ index.js
```

Below is the code for these files:

::: code-group

<<< @/src/plugins/hello-world/index.js [index.js]

<<< @/src/plugins/hello-world/hello-world-box.js [hello-world-box.js]

<<< @/src/plugins/hello-world/hello-world-box.css [hello-world-box.css]

:::

Before using the `helloWorld` plugin, you also need to add a button to your toolbar. When a user clicks the button, it inserts a `helloWorld` box into the editor.

```js
import { Editor, Toolbar } from 'lakelib';
import helloWorld, { helloWorldBox } from './hello-world';

Editor.box.add(helloWorldBox);

Editor.plugin.add('helloWorld', helloWorld);

const helloWorldItem = {
  name: 'helloWorld',
  type: 'button',
  icon: '<img> or <svg>',
  tooltip: 'Hello World',
  onClick: (editor) => {
    editor.command.execute('helloWorld');
  },
};

const toolbar = new Toolbar({
  root: '.my-toolbar',
  items: [ helloWorldItem ],
});

const editor = new Editor({
  root: '.my-content',
  toolbar,
});
editor.render();
```

Try the `helloWorld` plugin in the demo below:

<EmbeddedEditor :toolbar="['helloWorld']" value="
<p>Click the <code>hand</code> button to insert a box.</p>
" />


## Playground

The complete example above is available on [CodeSandbox](https://codesandbox.io/embed/s2wjyf?module=/src/index.js). You can visit it to explore and experiment with the source code.
