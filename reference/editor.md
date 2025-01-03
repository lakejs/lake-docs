---
layout: doc
title: Editor class
outline: [2, 3]
---

# {{ $frontmatter.title }}

The `Editor` class provides properties and methods for rendering and manipulating the editor.

Example:

::: code-group

```js [npm]
import { Editor } from 'lakelib';

const editor = new Editor({
  root: '.my-content',
});
editor.render();
editor.setValue('<p>foo</p>');
```

```js [CDN]
const editor = new Lake.Editor({
  root: '.my-content',
});
editor.render();
editor.setValue('<p>foo</p>');
```

:::


## Constructor

Creates a new `Editor` object.

* Parameters:

  `config`

  A key-value object. For more details, see the [editor config](/reference/).

* Return value:

  A new `Editor` object.

Example:

```js
const editor = new Editor({
  root: '.my-content',
});
```


## Static properties

### version <Badge type="info" text="Read only" />

The current version of Lake.

* Type: `string`

Example:

```js
const version = Editor.version;
```


### box <Badge type="info" text="Read only" />

An instance of the `BoxManager` class managing the box components.

* Type: `BoxManager`

Example:

```js
const names = Editor.box.getNames();
```


### plugin <Badge type="info" text="Read only" />

An instance of the `Plugin` class managing the plugins.

* Type: `Plugin`

Example:

```js
Editor.plugin.add('selectAll', editor => {
  editor.command.add('selectAll', {
    execute: () => {
      const range = editor.selection.range;
      range.selectNodeContents(editor.container);
      range.shrink();
    },
  });
});
```


## Instance properties

### root <Badge type="info" text="Read only" />

An element to which the editor is appended.

* Type: `Nodes`

Example:

```js
const root = editor.root;
```


### toolbar <Badge type="info" text="Read only" />

An instance of the Toolbar class.

* Type: [Toolbar](/reference/toolbar.md)

Example:

```js
const toolbar = editor.toolbar;
```


### config <Badge type="info" text="Read only" />

The configuration for the editor.

Example:

```js
const config = editor.config;
```


### container <Badge type="info" text="Read only" />

A [contenteditable](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/contentEditable) element where users can edit the content of the editor.

* Type: `Nodes`

Example:

```js
const container = editor.container;
```


### overlayContainer <Badge type="info" text="Read only" />

An element to which overlays are appended.

* Type: `Nodes`

Example:

```js
const overlayContainer = editor.overlayContainer;
```


### event <Badge type="info" text="Read only" />

An instance of the `EventEmitter` class.

* Type: [EventEmitter](https://github.com/primus/eventemitter3)

Example:

```js
editor.event.on('change', value => {
  console.log(value);
});
```


### selection <Badge type="info" text="Read only" />

An instance of the `Selection` class representing the range of text selected by the user or the current position of the cursor.

* Type: `Selection`

Example:

```js
editor.selection.insertContents('<strong>foo</strong>');
```


### command <Badge type="info" text="Read only" />

An instance of the `Command` class.

* Type: `Command`

Example:

```js
editor.command.execute('bold');
```


### history  <Badge type="info" text="Read only" />

An instance of the `History` class managing the history of the content of the editor.

* Type: `History`

Example:

```js
editor.history.save();
```


### keystroke <Badge type="info" text="Read only" />

An instance of the `Keystroke` class managing keyboard shortcuts.

* Type: `Keystroke`

Example:

```js
editor.keystroke.setKeydown('mod+b', event => {
  event.preventDefault();
  editor.command.execute('bold');
});
```


### box <Badge type="info" text="Read only" />

An instance of the `BoxManager` class managing the box components.

* Type: `BoxManager`

Example:

```js
const names = editor.box.getNames();
```


### readonly <Badge type="info" text="Read only" />

A boolean value indicating whether the editor is in read-only mode.

* Type: `boolean`

Example:

```js
const readonly = editor.readonly;
```


### isComposing <Badge type="info" text="Read only" />

A boolean value indicating whether a user is entering a character using a text composition system such as an `Input Method Editor (IME)`.

* Type: `boolean`

Example:

```js
const isComposing = editor.isComposing;
```


### popup <Badge type="info" text="Read only" />

A pop-up component which is currently displayed, such as `LinkPopup`, `MentionMenu`, and `SlashMenu`.

* Type: `any`

Example:

```js
const popup = editor.popup;
```


### locale <Badge type="info" text="Read only" />

Returns translation functions for the specified language.

* Type: `TranslationFunctions`

Example:

```js
const locale = editor.locale;
```



## Instance methods

### setPluginConfig()

Sets the default config for the specified plugin.

* Parameters:

  `name`

  A string that specifies the name of the plugin.

  `config`

  A key-value object that specifies the default config for the plugin.

* Return value:

  None.

Example:

```js
editor.setPluginConfig('image', {
  requestMethod: 'POST',
  requestTypes: ['image/gif', 'image/jpeg', 'image/png'],
});
```


### fixContent()

Fixes incorrect content, such as adding paragraphs for void elements or removing empty tags.

* Parameters:

  None.

* Return value:

  `false` if the content has not changed. `true` if the content has changed.

Example:

```js
editor.fixContent();
```


### renderBoxes()

Renders all boxes that haven't been rendered yet.

* Parameters:

  None.

* Return value:

  None.

Example:

```js
editor.renderBoxes();
```


### scrollToCursor()

Scrolls to the cursor.

* Parameters:

  None.

* Return value:

  None.

Example:

```js
editor.scrollToCursor();
```


### hasFocus()

Checks whether the editor has focus.

* Parameters:

  None.

* Return value:

  `false` if the editor has no focus. `true` if the editor has focus.

Example:

```js
const isFocused = editor.hasFocus();
```


### focus()

Sets focus on the editor.

* Parameters:

  None.

* Return value:

  None.

Example:

```js
editor.focus();
```


### blur()

Removes focus from the editor.

* Parameters:

  None.

* Return value:

  None.

Example:

```js
editor.blur();
```


### setValue()

Sets the specified content to the editor.

* Parameters:

  `value`

  A string that conforms to the [LML format](/guide/content-format.md).

* Return value:

  None.

Example:

```js
editor.setValue('<p>foo<focus /></p>');
```


### getValue()

Returns the content of the editor.

* Parameters:

  None.

* Return value:

  A string that conforms to the [LML format](/guide/content-format.md).

Example:

```js
const content = editor.getValue();
```


### render()

Renders an editing area and sets default content to it.

* Parameters:

  None.

* Return value:

  None.

Example:

```js
editor.render();
```


### unmount()

Destroys the editor.

* Parameters:

  None.

* Return value:

  None.

Example:

```js
editor.unmount();
```
