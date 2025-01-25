---
layout: doc
title: Creating a Lake plugin
---

# {{ $frontmatter.title }}

## Overview

A Lake plugin is a function that allows you to extend Lake's features. It takes the current [Editor](/reference/editor.md) instance as its parameter and returns a cleanup function, which is called when the [Editor](/reference/editor.md) instance is destroyed. This cleanup function is typically used for tasks such as removing event listeners and destroying popup instances. If there is nothing to clean up, returning a function is not required.

```js
export default (editor) => {
  // setup code
  return () => {
    // cleanup code
  };
};
```


## A simple plugin

The code below uses the `plugin.add()` method to register a `removeFormat` plugin.

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

:::tip INFO
The `command.add()` method is used to register a new command. The `selection.removeMark()` method removes the current styles such as bold, underline, and font color. When the `history.save()` method is called, the current content is stored in the memory, allowing you to undo or redo.
:::

Once the `removeFormat` plugin is registered, you can use the `command.execute()` method to remove all formatting from the current selection.

```js
editor.command.execute('removeFormat');
```


## A plugin with box

Lake allows you to insert an embed using the [Box](/reference/box.md) interface. A plugin containing a box usually follows the file structure below.

```
hello-world
├─ hello-world-box.js
├─ hello-world-box.css
└─ index.js
```

The code below is the specific code for these files.

::: code-group

```js [index.js]
import './hello-world-box.css';
import helloWorldBox from './hello-world-box';

export { helloWorldBox };

export default (editor) => {
  if (editor.readonly) {
    return;
  }
  editor.command.add('helloWorld', {
    execute: (value) => {
      editor.selection.insertBox('helloWorld', value);
      editor.history.save();
    },
  });
};
```

```js [hello-world-box.js]
import { query, template } from 'lakelib';

export default {
  type: 'block',
  name: 'helloWorld',
  value: {
    number: 0,
  },
  render: (box) => {
    const editor = box.getEditor();
    const value = box.value;
    const boxContainer = box.getContainer();
    const rootNode = query(template`
      <div class="lake-hello-world">
        <div>Hello World!</div>
        <div>
          <button type="button" class="lake-button lake-text-button">Count</button>
          <span>${value.number}</span>
        </div>
      </div>
    `);
    boxContainer.empty();
    boxContainer.append(rootNode);
    const numberNode = rootNode.find('span');
    rootNode.find('button').on('click', () => {
      const nextNumber = Number.parseInt(numberNode.text(), 10) + 1;
      numberNode.text(nextNumber.toString(10));
      box.updateValue({
        number: nextNumber,
      });
      editor.history.save();
    });
    rootNode.on('click', () => {
      editor.selection.selectBox(box);
    });
  },
};
```

```css [hello-world-box.css]
lake-box[name='helloWorld'] {
  margin-bottom: 8px;
}

.lake-hello-world {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 5px;
  background-color: #f6f8fa;
  padding: 12px 24px;
  user-select: none;
}

lake-box[name='helloWorld'] .lake-box-selected .lake-hello-world,
lake-box[name='helloWorld'] .lake-box-focused .lake-hello-world {
  border-color: #d9d9d9;
}

.lake-hello-world .lake-button {
  margin: 0 12px;
  border: 0;
  background-color: #5672cd;
  color: #fff;
}

.lake-hello-world .lake-button:hover {
  background-color: #3a5ccc;
}
```

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


## Playground

The code above is available on CodeSandbox, You can visit the [plugin example](https://codesandbox.io/embed/s2wjyf?module=/src/index.js) there to try out the `helloWorld` plugin.
