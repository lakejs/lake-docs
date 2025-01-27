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

  A [ButtonConfig](/reference/types.md#buttonconfig) object.

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
