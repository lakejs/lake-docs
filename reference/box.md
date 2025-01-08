---
layout: doc
title: Box
outline: [2, 3]
---

# {{ $frontmatter.title }}

The `Box` interface represents an embedded content, which is used to enhance editing capability.

Example:

::: code-group

```js [npm]
import { Box } from 'lakelib';

const box = new Box('emoji');
box.updateValue({
  url: '/assets/emojis/face_blowing_a_kiss_color.svg',
  title: 'Face blowing a kiss',
});
```

```js [CDN]
const box = new Lake.Box('emoji');
box.updateValue({
  url: '/assets/emojis/face_blowing_a_kiss_color.svg',
  title: 'Face blowing a kiss',
});
```

:::


## Constructor

Creates a new `Box` object.

* Parameters:

  `node`

  The name of a box, [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node), and [Nodes](/reference/nodes.md) object.

Example:

```js
// The parameter is the name of a box.
const box = new Box('hr');
// The parameter is a native node.
const box = new Box(query('lake-box').get(0));
// The parameter is a Nodes object.
const box = new Box(query('lake-box').eq(0));
```


## Instance properties

### node <Badge type="info" text="Read only" />

A [lake-box](/guide/content-format.md#box) element to which the contents of the box are appended.

* Type: [Nodes](/reference/nodes.md)

Example:

```js
const boxNode = box.node;
```


### event <Badge type="info" text="Read only" />

An instance of the [EventEmitter](https://github.com/primus/eventemitter3) class.

* Type: [EventEmitter](https://github.com/primus/eventemitter3)

Example:

```js
box.event.on('focus', () => {
  console.log('focused');
});
```


### toolbar <Badge type="info" text="Read only" />

An instance of the `FloatingToolbar` class.

* Type: `FloatingToolbar`

Example:

```js
const toolbar = box.toolbar;
```


### type <Badge type="info" text="Read only" />

Returns the type of the box.

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

Sets part of the value of the box.

* Parameters:

  `keyName`

  A string representing the name of the key. This parameter can be a key-value object used to set multiple keys.

  `keyValue` <Badge type="info" text="Optional" />

  A string representing the value of the key.

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

Returns an instance of the editor containing the box.

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

Returns the container of the box.

* Parameters:

  None.

* Return value:

  A [Nodes](/reference/nodes.md) object.

Example:

```js
const boxContainer = box.getContainer();
```


### getHTML()

Returns the HTML string contained within the box.

* Parameters:

  None.

* Return value:

  The HTML string.

Example:

```js
const html = box.getHTML();
```


### setToolbar()

Sets a floating toolbar for the box.

* Parameters:

  `items`

  An `Array` object that contains `ToolbarItem` objects, representing the buttons of the toolbar.

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

Renders the contents of the box.

* Parameters:

  None.

* Return value:

  None.

Example:

```js
box.render();
```


### unmount()

Destroys the box.

* Parameters:

  None.

* Return value:

  None.

Example:

```js
box.unmount();
```
