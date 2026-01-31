---
layout: doc
title: Types
outline: [2, 3]
---

# {{ $frontmatter.title }}

A collection of types.

## KeyValue

```ts
type KeyValue = Record<string, string>;
```


## ContentRules

```ts
type ContentStyleValue = string | string[] | RegExp;

type ContentStyle = Record<string, ContentStyleValue>;

type ContentAttributeValue = string | string[] | RegExp | ContentStyle;

type ContentAttribute = Record<string, ContentAttributeValue>;

type ContentRules = Record<string, string | ContentAttribute>;
```


## NodePath

```ts
type NodePath = number[];
```


## BoxType

```ts
type BoxType = 'inline' | 'block';
```


## BoxValue

```ts
type BoxValue = Record<string, any>;
```


## RenderBox

```ts
type RenderBox = (box: Box) => Nodes | string | void;
```


## BoxComponent

```ts
interface BoxComponent {
  type: BoxType;
  name: string;
  value?: BoxValue;
  render: RenderBox;
}
```


## ActiveItem

```ts
interface ActiveItem {
  node: Nodes;
  name: string;
  attributes: KeyValue;
  styles: KeyValue;
}
```


## SelectionState

```ts
interface SelectionState {
  activeItems: ActiveItem[];
  disabledNameMap?: Map<string, boolean>;
  selectedNameMap?: Map<string, boolean>;
  selectedValuesMap?: Map<string, string[]>;
}
```


## CommandItem

```ts
interface CommandItem {
  isDisabled?: (activeItems: ActiveItem[]) => boolean;
  isSelected?: (activeItems: ActiveItem[]) => boolean;
  selectedValues?: (activeItems: ActiveItem[]) => string[];
  execute: (...data: any[]) => void;
}
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
interface DropdownMenuItem {
  value: string;
  icon?: string;
  text: string | ((locale: TranslationFunctions) => string);
}
```


## DropdownItem

```ts
interface DropdownItem {
  name: string;
  icon?: string;
  accentIcon?: string;
  downIcon?: string;
  defaultValue?: string;
  tooltip: string | ((locale: TranslationFunctions) => string);
  width?: string;
  menuType: DropdownMenuType;
  menuItems: DropdownMenuItem[];
  menuWidth?: string;
  menuHeight?: string;
  menuCheck?: boolean;
}
```


## CornerToolbarItem

```ts
interface CornerToolbarItem {
  name: string;
  icon?: string;
  tooltip: string | ((locale: TranslationFunctions) => string);
  onClick: (event: Event) => void;
}
```


## ToolbarButtonItem

```ts
interface ToolbarButtonItem {
  name: string;
  type: 'button';
  icon?: string;
  tooltip: string | ((locale: TranslationFunctions) => string);
  isSelected?: (activeItems: ActiveItem[]) => boolean;
  isDisabled?: (activeItems: ActiveItem[]) => boolean;
  onClick: (editor: Editor, value: string) => void;
}
```


## ToolbarDropdownItem

```ts
interface ToolbarDropdownItem extends DropdownItem {
  name: string;
  type: 'dropdown';
  selectedValues?: (activeItems: ActiveItem[]) => string[];
  isDisabled?: (activeItems: ActiveItem[]) => boolean;
  onSelect: (editor: Editor, value: string) => void;
}
```


## ToolbarUploadItem

```ts
interface ToolbarUploadItem {
  name: string;
  type: 'upload';
  icon?: string;
  tooltip: string | ((locale: TranslationFunctions) => string);
  accept?: string;
  multiple?: boolean;
}
```


## ToolbarItem

```ts
type ToolbarItem = ToolbarButtonItem | ToolbarDropdownItem | ToolbarUploadItem;
```


## MentionItem

```ts
interface MentionItem {
  id: string;
  name: string;
  nickname?: string;
  avatar?: string;
}
```


## SlashButtonItem

```ts
interface SlashButtonItem {
  name: string;
  type: 'button';
  icon?: string;
  title: string | ((locale: TranslationFunctions) => string);
  description: string | ((locale: TranslationFunctions) => string);
  onClick: (editor: Editor, value: string) => void;
}
```


## SlashUploadItem

```ts
interface SlashUploadItem {
  name: string;
  type: 'upload';
  icon?: string;
  title: string | ((locale: TranslationFunctions) => string);
  description: string | ((locale: TranslationFunctions) => string);
  accept?: string;
  multiple?: boolean;
}
```


## SlashItem

```ts
type SlashItem = SlashButtonItem | SlashUploadItem;
```
