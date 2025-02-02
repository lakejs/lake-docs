---
layout: doc
title: Types
outline: [2, 3]
---

# {{ $frontmatter.title }}

A collection of types.

## KeyValue

```ts
type KeyValue = { [key: string]: string };
```


## NodePath

```ts
type NodePath = number[];
```


## BoxValue

```ts
type BoxValue = { [key: string]: any };
```


## BoxComponent

```ts
type BoxComponent = {
  type: 'inline' | 'block';
  name: string;
  value?: BoxValue;
  render: (box: Box) => Nodes | string | void;
};
```


## ActiveItem

```ts
type ActiveItem = {
  node: Nodes;
  name: string;
  attributes: KeyValue;
  styles: KeyValue;
};
```


## SelectionState

```ts
type SelectionState = {
  activeItems: ActiveItem[];
  disabledNameMap?: Map<string, boolean>;
  selectedNameMap?: Map<string, boolean>;
  selectedValuesMap?: Map<string, string[]>;
};
```


## CommandItem

```ts
type CommandItem = {
  isDisabled?: (activeItems: ActiveItem[]) => boolean;
  isSelected?: (activeItems: ActiveItem[]) => boolean;
  selectedValues?: (activeItems: ActiveItem[]) => string[];
  execute: (...data: any[]) => void;
};
```


## UnmountPlugin

```ts
type UnmountPlugin = () => void;
```


## InitializePlugin

```ts
type InitializePlugin = (editor: Editor) => UnmountPlugin | void;
```


## DropdownMenuItem

```ts
type DropdownMenuItem = {
  value: string;
  icon?: string;
  text: string | ((locale: TranslationFunctions) => string);
};
```


## DropdownItem

```ts
type DropdownItem = {
  name: string;
  icon?: string;
  accentIcon?: string;
  downIcon?: string;
  defaultValue?: string;
  tooltip: string | ((locale: TranslationFunctions) => string);
  width?: string;
  menuType: 'list' | 'icon' | 'character' | 'color';
  menuItems: DropdownMenuItem[];
  menuWidth?: string;
  menuHeight?: string;
  menuCheck?: boolean;
};
```


## ToolbarButtonItem

```ts
type ToolbarButtonItem = {
  name: string;
  type: 'button';
  icon?: string;
  tooltip: string | ((locale: TranslationFunctions) => string);
  isSelected?: (activeItems: ActiveItem[]) => boolean;
  isDisabled?: (activeItems: ActiveItem[]) => boolean;
  onClick: (editor: Editor, value: string) => void;
};
```


## ToolbarDropdownItem

```ts
type ToolbarDropdownItem = DropdownItem & {
  name: string;
  type: 'dropdown';
  selectedValues?: (activeItems: ActiveItem[]) => string[];
  isDisabled?: (activeItems: ActiveItem[]) => boolean;
  onSelect: (editor: Editor, value: string) => void;
}
```


## ToolbarUploadItem

```ts
type ToolbarUploadItem = {
  name: string;
  type: 'upload';
  icon?: string;
  tooltip: string | ((locale: TranslationFunctions) => string);
  accept?: string;
  multiple?: boolean;
};
```


## ToolbarItem

```ts
type ToolbarItem = ToolbarButtonItem | ToolbarDropdownItem | ToolbarUploadItem;
```


## MentionItem

```ts
type MentionItem = {
  id: string;
  name: string;
  nickname?: string;
  avatar?: string;
};
```


## SlashButtonItem

```ts
type SlashButtonItem = {
  name: string;
  type: 'button';
  icon?: string;
  title: string | ((locale: TranslationFunctions) => string);
  description: string | ((locale: TranslationFunctions) => string);
  onClick: (editor: Editor, value: string) => void;
};
```


## SlashUploadItem

```ts
type SlashUploadItem = {
  name: string;
  type: 'upload';
  icon?: string;
  title: string | ((locale: TranslationFunctions) => string);
  description: string | ((locale: TranslationFunctions) => string);
  accept?: string;
  multiple?: boolean;
};
```


## SlashItem

```ts
type SlashItem = SlashButtonItem | SlashUploadItem;
```
