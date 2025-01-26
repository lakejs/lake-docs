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

The maximum length of the history. When this threshold is reached, the earliest item in the history will be removed.

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

Returns a copy of the container.

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

Fired when the history is saved.

Example:

```js
history.event.on('save', (value, options) => {
  console.log(value, options);
});
```
