---
layout: doc
title: Creating a Lake plugin
---

# {{ $frontmatter.title }}

## Overview

A Lake plugin is a function that extends the capabilities of Lake. It receives the current [Editor](/reference/editor.md) instance as its parameter and can optionally return a cleanup function that will be called when the [Editor](/reference/editor.md) instance is destroyed. This cleanup function is useful for tasks such as removing event listeners or destroying popup instances. If no cleanup is needed, returning a function is optional.


Basic plugin structure:

```js
export default (editor) => {
  // Setup code here
  return () => {
    // Cleanup code here
  };
};
```


## A simple plugin

The example below demonstrates how to register a `removeFormat` plugin using the [plugin.add()](/reference/plugin.md#add) method. This plugin registers a command to remove formatting from the current selection.

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

After registering the `removeFormat` plugin, you can remove formatting by executing the following command:

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

Before the `helloWorld` plugin can be used, you must register its box and add a corresponding button to your toolbar. When clicked, the button executes the command to insert a `helloWorld` box into the editor.

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

The complete example above is also available on [CodeSandbox](https://codesandbox.io/embed/s2wjyf?module=/src/index.js). You can visit it to explore and experiment with the source code.
