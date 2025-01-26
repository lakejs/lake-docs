---
layout: doc
title: Command
outline: [2, 3]
---

# {{ $frontmatter.title }}

The `Command` interface is used to manage all registered commands.

:::tip Note
The constructor is not available, you can access its properties and methods through the [editor.command](/reference/editor.md#command) object.
:::

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

  A `CommandItem` object.

  ```ts
  type CommandItem = {
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


### getNames()

Returns the names of all registered commands.

* Parameters:

  None.

* Return value:

  An `Array` object.

Example:

```js
const names = editor.command.getNames();
```


### has()

Returns a boolean value indicating whether the specified command exists.

* Parameters:

  `name`

  A string that specifies the name of the command.

* Return value:

  `true` if the the command exists. `false` if not.

Example:

```js
editor.command.has('helloWorld');
```


### getItem()

Returns an item by the name of the specified command.

* Parameters:

  `name`

  A string that specifies the name of the command.

* Return value:

  A `CommandItem` object.

Example:

```js
const commandItem = editor.command.getItem('bold');
```


### isDisabled()

Returns a boolean value indicating whether the specified command is disabled.

* Parameters:

  `name`

  A string that specifies the name of the command.

* Return value:

  `true` if the the command is disabled. `false` if not.

Example:

```js
const isDisabled = editor.command.isDisabled('bold');
```


### isSelected()

Returns a boolean value indicating whether the specified command is selected.

* Parameters:

  `name`

  A string that specifies the name of the command.

* Return value:

  `true` if the the command is selected. `false` if not.

Example:

```js
const isSelected = editor.command.isSelected('bold');
```


### selectedValues()

Returns the selected values for the specified command.

* Parameters:

  `name`

  A string that specifies the name of the command.

* Return value:

  An `Array` object that contains the selected value.

Example:

```js
const selectedValues = editor.command.selectedValues('align');
```


### execute()

Executes the specified command.

* Parameters:

  `name`

  A string that specifies the name of the command.

  `value` <Badge type="info" text="Optional" />

  An argument for commands that require an input argument. For example, the `heading` requires a level such as `h1`, `h2`, and `h3`.

* Return value:

  None.

Example:

```js
// Adds bold.
editor.command.execute('bold');

// Changes current block to heading level 1.
editor.command.execute('heading', 'h1');
```
