---
layout: doc
title: Toolbar configuration
---

# {{ $frontmatter.title }}

You can configure the toolbar using the parameter of the `Toolbar` class.

```js
import { Toolbar } from 'lakelib';

const heading = {
  name: 'heading',
  type: 'button',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M208,56V200a8,8,0,0,1-16,0V136H64v64a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v64H192V56a8,8,0,0,1,16,0Z"></path></svg>',
  tooltip: 'Heading',
  isSelected: appliedItems => !!appliedItems.find(item => item.name === 'h3'),
  onClick: editor => {
    editor.command.execute('heading', 'h3');
  },
};
const toolbarItems = [
  'undo',
  'redo',
  '|',
  heading,
  'paragraph',
  '|',
  'bold',
  'moreStyle',
];
const toolbar = new Toolbar({
  root: '.my-toolbar',
  items: toolbarItems,
});
```

<script setup>
const heading = {
  name: 'heading',
  type: 'button',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M208,56V200a8,8,0,0,1-16,0V136H64v64a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v64H192V56a8,8,0,0,1,16,0Z"></path></svg>',
  tooltip: 'Heading',
  isSelected: appliedItems => !!appliedItems.find(item => item.name === 'h3'),
  onClick: editor => {
    editor.command.execute('heading', 'h3');
  },
};
const toolbarItems = [
  'undo',
  'redo',
  '|',
  heading,
  'paragraph',
  '|',
  'bold',
  'moreStyle',
];
</script>
<EmbeddedEditor :toolbar="toolbarItems" />

## root

* Type: `CSS selector | DOM element`

An element to which the toolbar is appended.

CSS selector:
```js
new Toolbar({
  root: '.my-toolbar',
});
```

DOM element:
```js
new Toolbar({
  root: document.querySelector('.my-toolbar'),
});
```

## items

* Type: `(string | ToolbarItem)[]`

The `items` defines the buttons of the toolbar. The `|` character represents a divider, and other strings represent built-in items.

```js
import { Toolbar } from 'lakelib';

const toolbarItems = [
  'undo',
  'redo',
  '|',
  'bold',
];
new Toolbar({
  root: '.my-toolbar',
  items: toolbarItems,
});
```

### Built-in items

The following items are currently available.

```js
[
  'undo',
  'redo',
  'heading',
  'fontFamily',
  'fontSize',
  'formatPainter',
  'removeFormat',
  'bold',
  'italic',
  'underline',
  'strikethrough',
  'superscript',
  'subscript',
  'code',
  'moreStyle',
  'fontColor',
  'highlight',
  'list',
  'numberedList',
  'bulletedList',
  'checklist',
  'align',
  'alignLeft',
  'alignCenter',
  'alignRight',
  'alignJustify',
  'indent',
  'increaseIndent',
  'decreaseIndent',
  'image',
  'link',
  'codeBlock',
  'blockQuote',
  'paragraph',
  'hr',
  'selectAll',
]
```

You can also set a customized item, which type is the `ToolbarItem`.

```ts
type ToolbarItem = ToolbarButtonItem | ToolbarDropdownItem;
```

### Button item

```ts
type ToolbarButtonItem = {
  name: string;
  type: 'button';
  icon?: string;
  tooltip: string | ((locale: TranslationFunctions) => string);
  isSelected?: (appliedItems: AppliedItem[]) => boolean;
  isDisabled?: (appliedItems: AppliedItem[]) => boolean;
  onClick: (editor: Editor, value: string) => void;
};
```

Example:

```js
import { Toolbar, icons } from 'lakelib';

const heading = {
  name: 'heading',
  type: 'button',
  icon: icons.get('heading'),
  tooltip: 'Heading',
  isSelected: appliedItems => !!appliedItems.find(item => item.name === 'h3'),
  onClick: editor => {
    editor.command.execute('heading', 'h3');
  },
};
const toolbarItems = [
  heading,
  '|',
  'bold',
];
new Toolbar({
  root: '.my-toolbar',
  items: toolbarItems,
});
```

### Dropdown item

```ts
type DropdownMenuItem = {
  value: string;
  icon?: string;
  text: string | ((locale: TranslationFunctions) => string);
};
type DropdownItem = {
  name: string;
  icon?: string;
  accentIcon?: string;
  downIcon?: string;
  defaultValue: string;
  tooltip: string | ((locale: TranslationFunctions) => string);
  width: string;
  menuType: 'list' | 'color';
  menuItems: DropdownMenuItem[];
};
type ToolbarDropdownItem = DropdownItem & {
  name: string;
  type: 'dropdown';
  selectedValues?: (appliedItems: AppliedItem[]) => string[];
  isDisabled?: (appliedItems: AppliedItem[]) => boolean;
  onSelect: (editor: Editor, value: string) => void;
}
```

Example:

```js
import { Toolbar, icons } from 'lakelib';

const alignMenuItems = [
  {
    icon: icons.get('alignLeft'),
    value: 'left',
    text: locale => locale.toolbar.alignLeft(),
  },
  {
    icon: icons.get('alignCenter'),
    value: 'center',
    text: locale => locale.toolbar.alignCenter(),
  },
  {
    icon: icons.get('alignRight'),
    value: 'right',
    text: locale => locale.toolbar.alignRight(),
  },
];
const align = {
  name: 'align',
  type: 'dropdown',
  downIcon: icons.get('down'),
  icon: icons.get('alignLeft'),
  defaultValue: '',
  tooltip: locale => locale.toolbar.align(),
  width: 'auto',
  menuType: 'list',
  menuItems: alignMenuItems,
  onSelect: (editor, value) => {
    editor.command.execute('align', value);
  },
};
const toolbarItems = [
  align,
];
new Toolbar({
  root: '.my-toolbar',
  items: toolbarItems,
});
```

## placement

* Type: `top | bottom`
* Default: `top`

The `placement` defines the position of the toolbar, either above or below the editing area.
If the value is set to `bottom`, the menu of dropdowns in the toolbar is displayed above the toolbar.

```js
new Toolbar({
  placement: 'bottom',
});
```
