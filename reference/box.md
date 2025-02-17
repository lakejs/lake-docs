---
layout: doc
title: Box
outline: [2, 3]
---

# {{ $frontmatter.title }}

The `Box` interface represents an embedded content designed to enhance editing capability.

Example:

```js
import { Box } from 'lakelib';

const box = new Box('emoji');
box.updateValue({
  url: '/assets/emojis/face_blowing_a_kiss_color.svg',
  title: 'Face blowing a kiss',
});
```


## Constructor

Creates a new `Box` instance.

* Parameters:

  `node`

  The name of a box, a native [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node) object, or a [Nodes](/reference/nodes.md) object.


## Instance properties

### node <Badge type="info" text="Read only" />

The [lake-box](/guide/content-format.md#box) element to which the contents of the box are appended.

* Type: [Nodes](/reference/nodes.md)

Example:

```js
const boxNode = box.node;
```


### event <Badge type="info" text="Read only" />

An [EventEmitter](https://github.com/primus/eventemitter3) object for handling events. See the [Instance events](#instance-events) for details.

* Type: [EventEmitter](https://github.com/primus/eventemitter3)

Example:

```js
box.event.on('focus', () => {
  console.log('focused');
});
```


### toolbar <Badge type="info" text="Read only" />

A floating toolbar attached to the box.

* Type: `FloatingToolbar`

Example:

```js
const toolbar = box.toolbar;
```


### type <Badge type="info" text="Read only" />

Indicates whether the box is treated as a block or inline element.

* Type: `'inline' | 'block'`

Example:

```js
const type = box.type;
```


### name <Badge type="info" text="Read only" />

Returns the name of the box.

* Type: `string`

Example:

```js
const name = box.name;
```


### value

Gets or sets the value of the box.

* Type: `key-value object`

Example:

```js
// Gets the value.
const value = box.value;

// Sets the value.
box.value = {
  foo: 1,
  bar: 2,
};
```


## Instance methods

### updateValue()

Updates part of the value of the box.

* Parameters:

  `keyName`

  A string representing the key to update. It can be a key-value object used to set multiple keys.

  `keyValue` <Badge type="info" text="Optional" />

  A string representing the new value for the key.

* Return value:

  None.

Example:

```js
// Sets a key.
box.updateValue('foo', '1');

// Sets multiple keys.
box.updateValue({
  foo: '2',
  bar: '3',
});
```


### getEditor()

Returns the [Editor](/reference/editor.md) object that contains the box.

* Parameters:

  None.

* Return value:

  An [Editor](/reference/editor.md) object.

* Exception:

  Thrown when the box is not rendered in the editor.

Example:

```js
const editor = box.getEditor();
```


### getContainer()

Returns the container element of the box.

* Parameters:

  None.

* Return value:

  A [Nodes](/reference/nodes.md) object.

Example:

```js
const boxContainer = box.getContainer();
```


### getHTML()

Returns the HTML content inside the box.

* Parameters:

  None.

* Return value:

  The HTML string.

Example:

```js
const html = box.getHTML();
```


### setToolbar()

Adds a floating toolbar to the box.

* Parameters:

  `items`

  An `Array` object that contains [ToolbarItem](/reference/types.md#toolbaritem) objects, representing the buttons of the floating toolbar.

* Return value:

  None.

Example:

```js
box.setToolbar([{
  name: 'remove',
  type: 'button',
  icon: icons.get('remove'),
  tooltip: 'Remove',
  onClick: () => {
    console.log('clicked');
  },
}]);
```


### render()

Renders the content inside the box.

* Parameters:

  None.

* Return value:

  None.

Example:

```js
box.render();
```


### unmount()

Destroys the box instance.

* Parameters:

  None.

* Return value:

  None.

Example:

```js
box.unmount();
```


## Instance events

### focus

Fired when the box receives focus.

Example:

```js
box.event.on('focus', () => {
  console.log('focused');
});
```


### blur

Fired when the box loses focus.

Example:

```js
box.event.on('blur', () => {
  console.log('blurred');
});
```


### beforeunmount

Fired before the box is destroyed.

Example:

```js
box.event.on('beforeunmount', () => {
  console.log('unmounted');
});
```


### renderfloatingtoolbar

Fired when the floating toolbar is rendered.

Example:

```js
box.event.on('renderfloatingtoolbar', () => {
  console.log('rendered');
});
```
