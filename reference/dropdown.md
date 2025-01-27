---
layout: doc
title: Dropdown
outline: [2, 3]
---

# {{ $frontmatter.title }}

The `Dropdown` interface represents a UI component that provides a menu of options.

Example:

```js
import { query, icons, Dropdown } from 'lakelib';

const dropdown = new Dropdown({
  root: query('.lake-code-block'),
  name: 'langType',
  downIcon: icons.get('down'),
  defaultValue: 'html',
  tooltip: 'Select language',
  location: 'global',
  menuType: 'list',
  menuHeight: '200px',
  menuItems: [
    { value: 'text', text: 'Plain text' },
    { value: 'css', text: 'CSS', component: css },
    { value: 'html', text: 'HTML', component: html },
    { value: 'java', text: 'Java', component: java },
    { value: 'javascript', text: 'JavaScript', component: javascript },
    { value: 'php', text: 'PHP', component: php },
    { value: 'python', text: 'Python', component: python },
    { value: 'typescript', text: 'TypeScript', component: javascript },
    { value: 'xml', text: 'XML', component: xml },
  ],
  onSelect: value => {
    console.log(value);
  },
});
dropdown.render();
```


## Constructor

Creates a new `Dropdown` object.

* Parameters:

  `config`

  A [DropdownConfig](/reference/types.md#dropdownconfig) object.

Example:

```js
const dropdown = new Dropdown({
  root: query('.lake-toolbar'),
  name: 'align',
  icon: icons.get('alignLeft'),
  downIcon: icons.get('down'),
  tooltip: 'Alignment',
  menuType: 'list',
  menuItems: [
    { icon: icons.get('alignLeft'), value: 'left', text: 'Align left' },
    { icon: icons.get('alignCenter'), value: 'center', text: 'Align center' },
    { icon: icons.get('alignRight'), value: 'right', text: 'Align right' },
  ],
  onSelect: value => {
    console.log(value);
  },
});
```


## Instance properties

### node <Badge type="info" text="Read only" />

An element to which the contents of the dropdown are appended.

* Type: [Nodes](/reference/nodes.md)

Example:

```js
const dropdownNode = dropdown.node;
```


## Instance methods

### render()

Renders the dropdown.

* Parameters:

  None.

* Return value:

  None.

Example:

```js
dropdown.render();
```


### unmount()

Destroys the dropdown.

* Parameters:

  None.

* Return value:

  None.

Example:

```js
dropdown.unmount();
```
