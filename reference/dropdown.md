---
layout: doc
title: Dropdown
outline: [2, 3]
---

# {{ $frontmatter.title }}

The `Dropdown` interface represents a UI component that provides a menu of selectable options.

Example:

<Dropdown />

```js
import { query, icons, Dropdown } from 'lakelib';

const dropdown = new Dropdown({
  root: query('.dropdown-root'),
  name: 'langType',
  downIcon: icons.get('down'),
  defaultValue: 'html',
  tooltip: 'Select language',
  location: 'global',
  menuType: 'list',
  menuItems: [
    { value: 'text', text: 'Plain text' },
    { value: 'css', text: 'CSS' },
    { value: 'html', text: 'HTML' },
    { value: 'javascript', text: 'JavaScript' },
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

  * `name`

    Specifies the name of the dropdown.

    Type: `string`

  * `menuType`

    Specifies the type of the dropdown.

    Type: `'list' | 'icon' | 'character' | 'color'`

  * `menuItems`

    Specifies the menu items.

    Type: [DropdownMenuItem](/reference/types.md#dropdownmenuitem)

  * `onSelect`

    Specifies the function triggered when selected.

    Type: `function`

  * `icon` <Badge type="info" text="Optional" />

    Specifies the dropdown icon.

    Type: `HTML string`

  * `accentIcon` <Badge type="info" text="Optional" />

    Specifies the accent icon for color picker.

    Type: `HTML string`

  * `downIcon` <Badge type="info" text="Optional" />

    Specifies the caret down icon.

    Type: `HTML string`

  * `defaultValue` <Badge type="info" text="Optional" />

    Specifies the default value.

    Type: `string`

  * `tooltip` <Badge type="info" text="Optional" />

    Specifies the tooltip for the dropdown.

    Type: `string`

  * `width` <Badge type="info" text="Optional" />

    Specifies the width for the dropdown.

    Type: `string`

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

  * `menuWidth` <Badge type="info" text="Optional" />

    Specifies the width for the menu.

    Type: `string`

  * `menuHeight` <Badge type="info" text="Optional" />

    Specifies the height for the menu.

    Type: `string`

  * `menuCheck` <Badge type="info" text="Optional" />

    Determines whether the menu can be selected. When set to `false`, the menu is not selectable.

    Type: `boolean`

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
