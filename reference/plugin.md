---
layout: doc
title: Plugin
outline: [2, 3]
---

# {{ $frontmatter.title }}

The `Plugin` interface is used to manage a collection of plugins.

:::warning Note
The constructor is not directly accessible. Instead, you can access its methods via the [Editor.plugin](/reference/editor.md#plugin) object.
:::

Example:

```js
Editor.plugin.add('logger', (editor) => {
  console.log('Logger plugin initialized');
  return () => console.log('Logger plugin unloaded');
});
```


## Instance methods

### add()

Registers a plugin using a name as the key.

* Parameters:

  `name`

  A string that specifies the name of the plugin to add.

  `plugin`

  A function for initializing the plugin. This function must match the [InitializePlugin](/reference/types.md#initializeplugin) type.

* Return value:

  None.

Example:

```js
Editor.plugin.add('myPlugin', (editor) => {
  console.log('myPlugin initialized.');
});
```


### loadAll()

Loads all registered plugins.

* Parameters:

  `editor`

  An [Editor](/reference/editor.md) object where plugins should be loaded.

* Return value:

  A map containing the names of plugins and their corresponding [UnmountPlugin](/reference/types.md#unmountplugin) functions that will be used to clean up the plugin.

Example:

```js
// Load plugins
const unmountMap = Editor.plugin.loadAll(editor);

// Unmount all loaded plugins
unmountMap.forEach((unmount) => unmount());
```
