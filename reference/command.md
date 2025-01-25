---
layout: doc
title: Command
outline: [2, 3]
---

# {{ $frontmatter.title }}

The `Command` interface is used to manage all registered commands. Since the constructor is not currently available, you can access it using the [command](/reference/editor.md#command) property of the [Editor](/reference/editor.md) class.

Example:

```js
editor.command.execute('bold');
```


## Instance methods

### add()

Registers a new command.

* Parameters:

  `name`

  A string that specifies the name of the command.

  `commandItem`

  A `CommmandItem` object.

  ```ts
  type CommmandItem = {
    isDisabled?: (activeItems: ActiveItem[]) => boolean;
    isSelected?: (activeItems: ActiveItem[]) => boolean;
    selectedValues?: (activeItems: ActiveItem[]) => string[];
    execute: (...data: any[]) => void;
  };
  ```

* Return value:

  None.

Example:

```js
editor.command.add('removeFormat', {
  execute: () => {
    editor.selection.removeMark();
    editor.history.save();
  },
});
```


### delete()

Removes the specified command.

* Parameters:

  `name`

  A string that specifies the name of the command.

* Return value:

  None.

Example:

```js
editor.command.delete('removeFormat');
```
