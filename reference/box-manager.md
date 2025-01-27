---
layout: doc
title: BoxManager
outline: [2, 3]
---

# {{ $frontmatter.title }}

The `BoxManager` interface provides methods to manage a collection of [BoxComponent](/reference/types.md#boxcomponent) objects.

:::warning Note
The constructor is not directly accessible. Instead, you can access its methods via the [Editor.box](/reference/editor.md#box) object.
:::

Example:

```js
import { query, Editor } from 'lakelib';

const hrBox = {
  type: 'block',
  name: 'hr',
  render: box => {
    const editor = box.getEditor();
    const boxContainer = box.getContainer();
    const rootNode = query('<div class="lake-hr"><hr /></div>');
    boxContainer.empty();
    boxContainer.append(rootNode);
    rootNode.on('click', () => {
      editor.selection.selectBox(box);
    });
  },
  html: () => '<hr />',
};

Editor.box.add(hrBox);
```

## Instance methods

### add()

Adds a [BoxComponent](/reference/types.md#boxcomponent) to the collection.

* Parameters:

  `component`

  An object representing the box component to be added. It must include a name property (used as the unique identifier) and other properties defined in the [BoxComponent](/reference/types.md#boxcomponent) type.

* Return value:

  None.

Example:

```js
Editor.box.add('testBox', {
  type: 'inline',
  name: 'testBox',
  render: box => {
    const boxContainer = box.getContainer();
    boxContainer.empty();
    boxContainer.append('<div class="lake-test-box">foo</div>');
  },
});
```


### remove()

Removes a box component from the collection by its name.

* Parameters:

  `name`

  A string that specifies the name of the box component to be removed.

* Return value:

  None.

Example:

```js
Editor.box.remove('testBox');
```


### getNames()

Returns a list of all box component names in the collection.

* Parameters:

  None.

* Return value:

  An `Array` object containing the names of all box components.

Example:

```js
const names = Editor.box.getNames();
```
