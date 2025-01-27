---
layout: doc
title: Keystroke
outline: [2, 3]
---

# {{ $frontmatter.title }}

The `Keystroke` interface provides a way to handle keyboard events and define custom shortcuts for a given container. It allows you to register hotkeys, bind specific actions to them, and handle their execution.

:::warning Note
The constructor is not directly accessible. Instead, you can access its methods via the [editor.keystroke](/reference/editor.md#keystroke) object.
:::

Example:

```js
keystroke.setKeydown('enter', (event) => {
  event.preventDefault();
  console.log('Enter key pressed');
});
```


## Instance methods

### setKeydown()

Registers a `keydown` event listener for the specified key combination. The listener will be triggered when the key combination is pressed.

* Parameters:

  `type`

  A string representing the key combination.

  `listener`

  A function that will be called when the event occurs. The function receives a [KeyboardEvent](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent) as its argument.

* Return value:

  None.

Example:

```js
keystroke.setKeydown('mod+s', (event) => {
  event.preventDefault();
  console.log('Save triggered');
});
```


### setKeyup()

Registers a `keyup` event listener for the specified key combination. The listener will be triggered when the key combination is released.

* Parameters:

  `type`

  A string representing the key combination.

  `listener`

  A function that will be called when the event occurs. The function receives a [KeyboardEvent](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent) as its argument.

* Return value:

  None.

Example:

```js
keystroke.setKeyup('ctrl+a', (event) => {
  console.log('Ctrl + A released');
});
```


### keydown()

Triggers all `keydown` event listeners associated with the specified key combination.

* Parameters:

  `type`

  A string representing the key combination to trigger.

* Return value:

  None.

Example:

```js
keystroke.keydown('mod+s');
```


### keyup()

Triggers all `keyup` event listeners associated with the specified key combination.

* Parameters:

  `type`

  A string representing the key combination to trigger.

* Return value:

  None.

Example:

```js
keystroke.keyup('ctrl+a');
```
