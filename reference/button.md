---
layout: doc
title: Button
outline: [2, 3]
---

# {{ $frontmatter.title }}

The `Button` interface represents a clickable UI component. When a user clicks the button, a specified action is executed.

Example:

<Button name="done" type="primary" text="Done" />

<Button name="cancel" text="Cancel" />

<Button name="open" iconName="open" tooltip="Open" />

<Button name="save" iconName="check" text="Save" />

::: code-group

```js [Done]
import { query, Button } from 'lakelib';

new Button({
  root: query('.button-root'),
  name: 'done',
  type: 'primary',
  text: 'Done',
  onClick: () => {
    console.log('clicked');
  },
}).render();
```

```js [Cancel]
import { query, Button } from 'lakelib';

new Button({
  root: query('.button-root'),
  name: 'cancel',
  text: 'Cancel',
  onClick: () => {
    console.log('clicked');
  },
}).render();
```

```js [Open]
import { query, Button } from 'lakelib';

new Button({
  root: query('.button-root'),
  name: 'open',
  icon: icons.get('open'),
  tooltip: 'Open',
  onClick: () => {
    console.log('clicked');
  },
}).render();
```

```js [Save]
import { query, Button } from 'lakelib';

new Button({
  root: query('.button-root'),
  name: 'save',
  icon: icons.get('save'),
  text: 'Save',
  onClick: () => {
    console.log('clicked');
  },
}).render();
```

:::


## Constructor

Creates a new `Button` instance. It receives a key-value object with the following properties as its parameter.

### `root`

  Specifies the element to which the button will be appended.

  Type: [Nodes](/reference/nodes.md)


### `name`

  Specifies the unique name for the button.

  Type: `string`


### `onClick`

  Specifies the callback function executed when the button is clicked.

  Type: `function`


### `type` <Badge type="info" text="Optional" />

  Specifies the button style.

  Type: `'primary' | 'default'`

  Default: `default`


### `icon` <Badge type="info" text="Optional" />

  Specifies an icon to be displayed on the button.

  Type: `HTML string`


### `text` <Badge type="info" text="Optional" />

  Specifies the text label displayed on the button.

  Type: `string`


### `tooltip` <Badge type="info" text="Optional" />

  Specifies the tooltip text shown when the user hovers over the button.

  Type: `string`


### `tabIndex` <Badge type="info" text="Optional" />

  Specifies the tab order of the button.

  Type: `number`


## Instance properties

### node <Badge type="info" text="Read only" />

The [button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) element.

* Type: [Nodes](/reference/nodes.md)

Example:

```js
const buttonNode = button.node;
```


## Instance methods

### render()

Renders the button to the DOM.

* Parameters:

  None.

* Return value:

  None.

Example:

```js
button.render();
```
