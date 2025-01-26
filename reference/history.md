---
layout: doc
title: History
outline: [2, 3]
---

# {{ $frontmatter.title }}

The `History` interface is used to manage the undo and redo history.

:::tip Note
The constructor is not available, you can access its properties and methods through the [editor.history](/reference/editor.md#history) object.
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
const list = history.list;
```


### index

An index that always indicates the position at which new content is stored.

* Type: `number`

Example:

```js
const index = history.index;
```


### limit

The maximum length of the history. Once this limit is reached, the earliest item in the list will be removed.

* Type: `number`

Example:

```js
history.limit = 100;
```


### event <Badge type="info" text="Read only" />

An [EventEmitter](https://github.com/primus/eventemitter3) object used to set up events. For more details, see the [Instance events](#instance-events).

* Type: [EventEmitter](https://github.com/primus/eventemitter3)

Example:

```js
history.event.on('save', value => {
  console.log(value);
});
```


### canUndo <Badge type="info" text="Read only" />

A boolean value indicating whether the history can be undone.

* Type: `boolean`

Example:

```js
const canUndo = history.canUndo;
```


### canRedo <Badge type="info" text="Read only" />

A boolean value indicating whether the history can be redone.

* Type: `boolean`

Example:

```js
const canRedo = history.canRedo;
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
const newContainer = history.cloneContainer();
```


### undo()

Undoes to the previous saved content.

* Parameters:

  None.

* Return value:

  None.

Example:

```js
history.undo();
```


### redo()

Redoes to the next saved content.

* Parameters:

  None.

* Return value:

  None.

Example:

```js
history.redo();
```


### continue()

Resumes the ability to save history. This method re-enables saving after the [pause](#pause) method has been called.

* Parameters:

  None.

* Return value:

  None.

Example:

```js
history.continue();
```


### pause()

Pauses the ability to save history. This method temporarily disables saving history, which can be resumed later by calling the [continue](#continue) method.

* Parameters:

  None.

* Return value:

  None.

Example:

```js
history.pause();
```


### save()

Saves the current content to the history. The content is saved only if it is different from the previous content.

* Parameters:

  `options` <Badge type="info" text="Optional" />

  An optional object with the following properties:

  * `inputType` (optional): A string describing the action that triggered the save.

  * `update` (optional): A boolean indicating whether the current content should update the last item in the history. Defaults to `false`.

  * `emitEvent` (optional): A boolean indicating whether to emit the [save](#save-1) event. Defaults to `true`.

* Return value:

  None.

Example:

```js
history.save({
  inputType: 'insertText',
  update: false,
  emitEvent: true,
});
```


## Instance events

### undo

Fired when the history is undone.

Example:

```js
history.event.on('undo', value => {
  console.log(value);
});
```


### redo

Fired when the history is redone.

Example:

```js
history.event.on('redo', value => {
  console.log(value);
});
```


### save

Fired when the history is saved. The `options` argument is the options passed to the [save](#save) method.

Example:

```js
history.event.on('save', (value, options) => {
  console.log(value, options);
});
```
