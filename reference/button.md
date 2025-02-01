---
layout: doc
title: Button
outline: [2, 3]
---

# {{ $frontmatter.title }}

The `Button` interface represents a UI component that users can click to perform an action.

Example:

```js
import { query, Button } from 'lakelib';

new Button({
  root: query('.lake-button-row'),
  name: 'embed',
  type: 'primary',
  text: 'Embed video',
  onClick: () => {
    console.log('clicked');
  },
}).render();
```


## Constructor

Creates a new `Button` instance.

* Parameters:

  `config`

  A key-value object with the following properties:

  * `root`

    Specifies the element to which the button is appended.

    Type: [Nodes](/reference/nodes.md)

  * `name`

    Specifies the name of the button.

    Type: `string`

  * `onClick`

    Specifies the function triggered when clicked.

    Type: `function`

  * `type` <Badge type="info" text="Optional" />

    Specifies the type of the button.

    Type: `'primary' | 'default'`

  * `icon` <Badge type="info" text="Optional" />

    Specifies the icon of the button.

    Type: `HTML string`

  * `text` <Badge type="info" text="Optional" />

    Specifies the text of the button.

    Type: `string`

  * `tooltip` <Badge type="info" text="Optional" />

    Specifies the tooltip of the button.

    Type: `string`

  * `tabIndex` <Badge type="info" text="Optional" />

    Specifies the tab order of the button.

    Type: `number`

Example:

```js
const button = new Button({
  root: query('.lake-toolbar'),
  name: 'bold',
  icon: icons.get('bold'),
  tooltip: 'Bold',
  onClick: () => {
    console.log('clicked');
  },
});
```


## Instance properties

### node <Badge type="info" text="Read only" />

Represents the [button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) element.

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
