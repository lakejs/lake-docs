---
layout: doc
title: Command
outline: [2, 3]
---

# {{ $frontmatter.title }}

The `Command` interface manages a collection of commands.

:::warning Note
The constructor is not directly accessible. Instead, you can access its methods via the [editor.command](/reference/editor.md#command) object.
:::

Example:

```js
editor.command.execute('bold');
```


## Instance methods

### add()

Adds a new command to the collection.

* Parameters:

  `name`

  A string that specifies the name of the command.

  `commandItem`

  A [CommandItem](/reference/types.md#commanditem) object that specifies the command item to be added.

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

Removes a command from the collection by its name.

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

  An `Array` object containing the names of all commands.

Example:

```js
const names = editor.command.getNames();
```


### has()

Checks whether the specified command exists.

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

Returns a command item by its name.

* Parameters:

  `name`

  A string that specifies the name of the command.

* Return value:

  A [CommandItem](/reference/types.md#commanditem) object.

Example:

```js
const commandItem = editor.command.getItem('bold');
```


### isDisabled()

Checks if the specified command is disabled.

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

Checks if the specified command is selected.

* Parameters:

  `name`

  A string that specifies the name of the command.

* Return value:

  `true` if the command is selected. `false` if not.

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

  An `Array` object that contains selected values.

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

  An argument required by some commands. For example, the `heading` command requires a level such as `h1`, `h2`, and `h3`.

* Return value:

  None.

Example:

```js
// Adds bold.
editor.command.execute('bold');

// Changes current block to heading level 1.
editor.command.execute('heading', 'h1');
```
