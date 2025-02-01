---
layout: doc
title: Dropdown
outline: [2, 3]
---

# {{ $frontmatter.title }}

The `Dropdown` interface represents a UI component that provides a menu of selectable options.

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

Creates a new `Dropdown` instance.

* Parameters:

  `config`

  A key-value object with the following properties:

  * `root`

    Specifies the element to which the dropdown is appended.

    Type: [Nodes](/reference/nodes.md)

  * `onSelect`

    Specifies the function triggered when selected.

    Type: `function`

  * `locale` <Badge type="info" text="Optional" />

    Specifies the translation functions.

    Type: `TranslationFunctions`

  * `tabIndex` <Badge type="info" text="Optional" />

    Specifies the tab order.

    Type: `number`

  * `location` <Badge type="info" text="Optional" />

    Determines whether the toolbar is appended to the `root` or `document.body` element. When set to `local`, the toolbar is appended to the `root` element.

    Type: `'local' | 'global'`

    Default: `local`

  * `direction` <Badge type="info" text="Optional" />

    Determines whether the menu appears above or below the button. When set to `bottom`, the menu appears below the button.

    Type: `'top' | 'bottom' | 'auto'`

    Default: `auto`

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

The DOM element that contains the dropdown's contents.

* Type: [Nodes](/reference/nodes.md)

Example:

```js
const dropdownNode = dropdown.node;
```


## Instance methods

### render()

Renders the dropdown to the DOM.

* Parameters:

  None.

* Return value:

  None.

Example:

```js
dropdown.render();
```


### unmount()

Removes the dropdown from the DOM and cleans up resources.

* Parameters:

  None.

* Return value:

  None.

Example:

```js
dropdown.unmount();
```
