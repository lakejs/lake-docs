---
layout: doc
title: Types
outline: [2, 3]
---

# {{ $frontmatter.title }}

A collection of types.

## Basics

### KeyValue

```ts
type KeyValue = { [key: string]: string };
```


### NativeRange

```ts
type NativeRange = Range;
```


### NativeSelection

```ts
type NativeSelection = Selection;
```


### TwoParts

```ts
type TwoParts = {
  start: Nodes | null;
  end: Nodes | null;
};
```


### ThreeParts

```ts
type type ThreeParts = TwoParts & {
  center: Nodes | null;
};
```


### Point

```ts
type Point = {
  node: Nodes;
  offset: number;
};
```


### NodePath

```ts
type NodePath = number[];
```



### ActiveItem

```ts
type ActiveItem = {
  node: Nodes;
  name: string;
  attributes: KeyValue;
  styles: KeyValue;
};
```


### SelectionState

```ts
type SelectionState = {
  activeItems: ActiveItem[];
  disabledNameMap?: Map<string, boolean>;
  selectedNameMap?: Map<string, boolean>;
  selectedValuesMap?: Map<string, string[]>;
};
```

## Box

### BoxType

```ts
type BoxType = 'inline' | 'block';
```


### BoxValue

```ts
type BoxValue = { [key: string]: any };
```


### BoxRender

```ts
type BoxRender = (box: Box) => Nodes | string | void;
```


### BoxHTML

```ts
type BoxHTML = (box: Box) => string;
```


### BoxComponent

```ts
type BoxComponent = {
  type: BoxType;
  name: string;
  value?: BoxValue;
  render: BoxRender;
  html?: BoxHTML;
};
```

## Dropdown

### DropdownLocation

```ts
type DropdownLocation = 'local' | 'global';
```


### DropdownDirection

```ts
type DropdownDirection = 'top' | 'bottom' | 'auto';
```


### DropdownMenuType

```ts
type DropdownMenuType = 'list' | 'icon' | 'character' | 'color';
```


### DropdownMenuItem

```ts
type DropdownMenuItem = {
  value: string;
  icon?: string;
  text: string | ((locale: TranslationFunctions) => string);
};
```


### DropdownItem

```ts
type DropdownItem = {
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
};
```


## Toolbar

### ToolbarButtonItem

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


### ToolbarDropdownItem

```ts
type ToolbarDropdownItem = DropdownItem & {
  name: string;
  type: 'dropdown';
  selectedValues?: (activeItems: ActiveItem[]) => string[];
  isDisabled?: (activeItems: ActiveItem[]) => boolean;
  onSelect: (editor: Editor, value: string) => void;
}
```


### ToolbarUploadItem

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


### ToolbarItem

```ts
type ToolbarItem = ToolbarButtonItem | ToolbarDropdownItem | ToolbarUploadItem;
```


### CornerToolbarItem

```ts
type CornerToolbarItem = {
  name: string;
  icon?: string;
  tooltip: string | ((locale: TranslationFunctions) => string);
  onClick: (event: Event) => void;
};
```


## Upload

### BeforeUploadFileType

```ts
type BeforeUploadFileType = File | Blob | boolean | string;
```



### UploadRequestMethod

```ts
type UploadRequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH';
```


### UploadRequestHeader

```ts
type UploadRequestHeader = Record<string, string>;
```


### UploadRequestError

```ts
interface UploadRequestError extends Error {
  status?: number;
  method?: UploadRequestMethod;
  url?: string;
}
```


### UploadRequestOption

```ts
interface UploadRequestOption<T = any> {
  method: UploadRequestMethod;
  action: string;
  file?: Exclude<BeforeUploadFileType, File | boolean> | File;
  onSuccess?: (body: T, xhr?: XMLHttpRequest) => void;
  onProgress?: (event: ProgressEvent) => void;
  onError?: (event: UploadRequestError | ProgressEvent, body?: T) => void;
  data?: Record<string, unknown>;
  filename?: string;
  withCredentials?: boolean;
  headers?: UploadRequestHeader;
}
```


## Plugin

### UnmountPlugin

```ts
type UnmountPlugin = () => void;
```


### InitializePlugin

```ts
type InitializePlugin = (editor: Editor) => UnmountPlugin | void;
```
