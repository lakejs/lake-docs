---
layout: doc
title: Dropdown
outline: [2, 3]
---

# {{ $frontmatter.title }}

The `Dropdown` component provides a user-friendly menu with selectable options. Use it to allow users to pick from a list of predefined choices.

Example:

<script setup>
const langMenuItems = [
  { value: 'text', text: 'Plain text' },
  { value: 'css', text: 'CSS' },
  { value: 'html', text: 'HTML' },
  { value: 'javascript', text: 'JavaScript' },
];
const alignMenuItems = [
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,48H168a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm176,24H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm-48,40H40a8,8,0,0,0,0,16H168a8,8,0,0,0,0-16Z"></path></svg>',
    value: 'left',
    text: 'Align left',
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64ZM64,96a8,8,0,0,0,0,16H192a8,8,0,0,0,0-16Zm152,40H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm-24,40H64a8,8,0,0,0,0,16H192a8,8,0,0,0,0-16Z"></path></svg>',
    value: 'center',
    text: 'Align center',
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64ZM216,96H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path></svg>',
    value: 'right',
    text: 'Align right',
  },
];
</script>

<Dropdown name="langType" defaultValue="html" tooltip="Language" width="100px" menuType="list" :menuItems="langMenuItems" />

<Dropdown name="align" iconName="alignLeft" tooltip="Alignment" menuType="list" :menuItems="alignMenuItems" />

::: code-group

```js [Language]
import { query, icons, Dropdown } from 'lakelib';

const dropdown = new Dropdown({
  root: query('.dropdown-root'),
  name: 'langType',
  downIcon: icons.get('down'),
  defaultValue: 'html',
  tooltip: 'Select language',
  width: '100px',
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

```js [Alignment]
import { query, icons, Dropdown } from 'lakelib';

const dropdown = new Dropdown({
  root: query('.dropdown-root'),
  name: 'align',
  icon: icons.get('alignLeft'),
  downIcon: icons.get('down'),
  tooltip: 'Alignment',
  menuType: 'list',
  menuItems: [
    {
      icon: icons.get('alignLeft'),
      value: 'left',
      text: 'Align left',
    },
    {
      icon: icons.get('alignCenter'),
      value: 'center',
      text: 'Align center',
    },
    {
      icon: icons.get('alignRight'),
      value: 'right',
      text: 'Align right',
    },
  ],
  onSelect: value => {
    console.log(value);
  },
});
dropdown.render();
```

:::


## Constructor

Creates a new `Dropdown` instance. It receives a key-value object with the following properties as its parameter.

### `root`

  Specifies the element where the dropdown will be appended.

  Type: [Nodes](/reference/nodes.md)


### `name`

  Specifies the name attribute for the dropdown.

  Type: `string`


### `menuType`

  Specifies the style of the dropdown menu.

  Type: `'list' | 'icon' | 'character' | 'color'`


### `menuItems`

  Specifies an array of menu items to display. Each item should include at least a `value` and `text` property.

  Type: [DropdownMenuItem](/reference/types.md#dropdownmenuitem)


### `onSelect`

  Specifies the function triggered when an option is selected. Receives the selected value as its argument.

  Type: `function`


### `icon` <Badge type="info" text="Optional" />

  Specifies custom icon for the dropdown.

  Type: `HTML string`


### `accentIcon` <Badge type="info" text="Optional" />

  Specifies an accent icon used specifically for a color type.

  Type: `HTML string`


### `downIcon` <Badge type="info" text="Optional" />

  Specifies an icon for the caret-down indicator.

  Type: `HTML string`


### `defaultValue` <Badge type="info" text="Optional" />

  Specifies the default selected value when the dropdown is first rendered.

  Type: `string`


### `tooltip` <Badge type="info" text="Optional" />

  Specifies the tooltip text for the dropdown button.

  Type: `string`


### `width` <Badge type="info" text="Optional" />

  Specifies the width of the dropdown.

  Type: `string`


### `locale` <Badge type="info" text="Optional" />

  Specifies custom translation functions for localization.

  Type: `TranslationFunctions`


### `tabIndex` <Badge type="info" text="Optional" />

  Specifies the tab order of the dropdown.

  Type: `number`


### `location` <Badge type="info" text="Optional" />

  Determines whether the toolbar is appended to the `root` or `document.body` element. When set to `local`, the toolbar is appended to the `root` element.

  Type: `'local' | 'global'`

  Default: `local`


### `direction` <Badge type="info" text="Optional" />

  Sets the vertical position of the menu relative to the button. `bottom` places the menu below the button, `top` above it, or `auto` to decide automatically.

  Type: `'top' | 'bottom' | 'auto'`

  Default: `auto`


### `menuWidth` <Badge type="info" text="Optional" />

  Specifies the width of the dropdown menu.

  Type: `string`


### `menuHeight` <Badge type="info" text="Optional" />

  Specifies the height of the dropdown menu.

  Type: `string`


### `menuCheck` <Badge type="info" text="Optional" />

  Determines if menu items are selectable. If set to `false`, the menu items will not be selectable.

  Type: `boolean`


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
