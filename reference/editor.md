---
layout: doc
title: Editor class
outline: [2, 3]
---

# {{ $frontmatter.title }}

The `Editor` class provides properties and methods for rendering and manipulating the editor.

Example:

```js
const editor = new Editor({
  root: '.my-content',
});
editor.render();
editor.setValue('<p>foo</p>');
```


## Properties

### root <Badge type="info" text="Read only" />

An element to which the editor is appended.

* Type: `Nodes`


### toolbar <Badge type="info" text="Read only" />

The toolbar of the editor.

* Type: [Toolbar](/reference/toolbar.md)


### config <Badge type="info" text="Read only" />

The configuration for the editor.


### container <Badge type="info" text="Read only" />

The editing area of the editor.

* Type: `Nodes`


### containerWrapper <Badge type="info" text="Read only" />

The parent element of the [container](/reference/editor.md#container).

* Type: `Nodes`


### overlayContainer <Badge type="info" text="Read only" />

An element to which overlays are appended.

* Type: `Nodes`


### event <Badge type="info" text="Read only" />

An instance of the `EventEmitter` class.

* Type: [EventEmitter](https://github.com/primus/eventemitter3)


### selection <Badge type="info" text="Read only" />

An instance of the `Selection` class representing the range of text selected by the user or the current position of the caret.

* Type: `Selection`


### command <Badge type="info" text="Read only" />

An instance of the `Command` class.

* Type: `Command`


### history  <Badge type="info" text="Read only" />

An instance of the `History` class managing the history of the content of the editor.

* Type: `History`


### keystroke <Badge type="info" text="Read only" />

An instance of the `Keystroke` class managing keyboard shortcuts.

* Type: `Keystroke`


### box <Badge type="info" text="Read only" />

An instance of the `BoxManager` class managing the `BoxComponent`.

* Type: `BoxManager`


### readonly <Badge type="info" text="Read only" />

Indicates whether the editor is in read-only mode.

* Type: `boolean`


### isComposing <Badge type="info" text="Read only" />

Indicates whether a user is entering a character using a text composition system such as an `Input Method Editor (IME)`.

* Type: `boolean`


### popup <Badge type="info" text="Read only" />

A pop-up component which is currently displayed, such as `LinkPopup`, `MentionMenu`, `SlashMenu` etc.

* Type: `any`


### locale <Badge type="info" text="Read only" />

Returns translation functions for the specified language.

* Type: `TranslationFunctions`


## Methods

### hasFocus()

Returns a boolean value indicating whether the editor has focus.

##### Parameters

None.

##### Return value

`false` if the editor has no focus; `true` if the editor has focus.


### fixContent()

Fixes incorrect content, such as adding paragraph for void element, removing empty tag etc.

##### Parameters

None.

##### Return value

`false` if the content has not changed; `true` if the content has changed.


### setPluginConfig()

Sets default config for a plugin.

##### Parameters

`name`

A string that specifies the name of a plugin.

`config`

A key-value object that specifies the config for a plugin.

##### Return value

None.
