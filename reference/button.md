---
layout: doc
title: Button
outline: [2, 3]
---

# {{ $frontmatter.title }}

The `Button` interface represents a UI component clicked by a user. Once clicked, it then performs an action.

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

Creates a new `Button` object.

* Parameters:

  `config`

  A key-value object.

  ```ts
  type ButtonConfig = {
    // An element to which the button is appended.
    root: Nodes;
    // The name of the button.
    name: string;
    // The type of the button.
    type?: 'primary' | 'default';
    // The icon of the button.
    icon?: string;
    // The text of the button.
    text?: string;
    // The tooltip of the button.
    tooltip?: string;
    // The tab order of the button.
    tabIndex?: number;
    // The function triggered when clicked.
    onClick: () => void;
  }
  ```

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

A [button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) element.

* Type: [Nodes](/reference/nodes.md)

Example:

```js
const buttonNode = button.node;
```


## Instance methods

### render()

Renders the button.

* Parameters:

  None.

* Return value:

  None.

Example:

```js
button.render();
```
