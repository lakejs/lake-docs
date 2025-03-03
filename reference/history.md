---
layout: doc
title: History
outline: [2, 3]
---

# {{ $frontmatter.title }}

The `History` interface manages undo and redo functionality for a container that holds some editable content. It emits events when actions like save, undo, or redo are performed.

:::warning Note
The constructor is not directly accessible. Instead, you can access its properties and methods via the [editor.history](/reference/editor.md#history) object.
:::

Example:

```js
editor.history.save();
```


## Instance properties

### list <Badge type="info" text="Read only" />

A list in which the current and previous contents are stored.

* Type: An `Array` object that contains [Nodes](/reference/nodes.md) objects.

Example:

```js
const list = editor.history.list;
```


### index

A number that always indicates the position at which new content is stored.

* Type: `number`

Example:

```js
const index = editor.history.index;
```


### limit

The maximum length of the history. Once this limit is reached, the earliest item in the list will be removed.

* Type: `number`

Example:

```js
editor.history.limit = 100;
```


### contentRules

A [ContentRules](/reference/types.md#contentrules) object defining the HTML parsing rules used by [HTMLParser](/reference/html-parser.md).

* Type: [ContentRules](/reference/types.md#contentrules)

Example:

```js
editor.history.contentRules = {
  h1: {},
  p: {},
};
```


### event <Badge type="info" text="Read only" />

An [EventEmitter](https://github.com/primus/eventemitter3) object used to set up events. For more details, see the [Instance events](#instance-events).

* Type: [EventEmitter](https://github.com/primus/eventemitter3)

Example:

```js
editor.history.event.on('save', value => {
  console.log(value);
});
```


### canUndo <Badge type="info" text="Read only" />

A boolean value indicating whether the history can be undone.

* Type: `boolean`

Example:

```js
const canUndo = editor.history.canUndo;
```


### canRedo <Badge type="info" text="Read only" />

A boolean value indicating whether the history can be redone.

* Type: `boolean`

Example:

```js
const canRedo = editor.history.canRedo;
```


## Instance methods

### cloneContainer()

Creates a deep clone of the current container with its content. If there is a selection within the container, it ensures the selection is also preserved in the cloned container.

* Parameters:

  None.

* Return value:

  A [Nodes](/reference/nodes.md) object.

Example:

```js
const newContainer = editor.history.cloneContainer();
```


### undo()

Undoes to the previous saved content.

* Parameters:

  None.

* Return value:

  None.

Example:

```js
editor.history.undo();
```


### redo()

Redoes to the next saved content.

* Parameters:

  None.

* Return value:

  None.

Example:

```js
editor.history.redo();
```


### continue()

Resumes the ability to save history. This method re-enables saving after the [pause](#pause) method has been called.

* Parameters:

  None.

* Return value:

  None.

Example:

```js
editor.history.continue();
```


### pause()

Pauses the ability to save history. This method temporarily disables saving history, which can be resumed later by calling the [continue](#continue) method.

* Parameters:

  None.

* Return value:

  None.

Example:

```js
editor.history.pause();
```


### save()

Saves the current content to the history. The content is saved only if it is different from the previous content.

* Parameters:

  `options` <Badge type="info" text="Optional" />

  An optional object with the following properties:

  * `inputType` <Badge type="info" text="Optional" />

    Specifies the action that triggered the save.

    Type: `string`

  * `update` <Badge type="info" text="Optional" />

    Specifies whether the current content should update the last item in the history. Defaults to `false`.

    Type: `boolean`

  * `emitEvent` <Badge type="info" text="Optional" />

    Specifies whether to emit the [save](#save-1) event. Defaults to `true`.

    Type: `boolean`

* Return value:

  None.

Example:

```js
// Adds new item.
editor.history.save();

// Updates the last item.
editor.history.save({
  update: true,
});
```


## Instance events

### undo

Fired when the history is undone.

Example:

```js
editor.history.event.on('undo', value => {
  console.log(value);
});
```


### redo

Fired when the history is redone.

Example:

```js
editor.history.event.on('redo', value => {
  console.log(value);
});
```


### save

Fired when the history is saved. The `options` argument is the options passed to the [save](#save) method.

Example:

```js
editor.history.event.on('save', (value, options) => {
  console.log(value, options);
});
```
