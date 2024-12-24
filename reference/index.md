---
layout: doc
title: Editor config
---

# {{ $frontmatter.title }}

The config is the parameter of the constructor of the [Editor](/reference/editor.md) class, it allows you to customize various aspects of the editor.

Example:

```js
const editor = new Editor({
  root: '.my-content',
  value: '<p>This is a paragraph.</p>',
});
editor.render();
```

## root

An element to which the editor is appended.

* Type: [CSS selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors) | [DOM element](https://developer.mozilla.org/en-US/docs/Web/API/Element) | `Nodes`

CSS selector:

```js
new Editor({
  root: '.my-content',
});
```

DOM element:

```js
new Editor({
  root: document.querySelector('.my-content'),
});
```

Nodes:

```js
new Editor({
  root: query('.my-content'),
});
```

## toolbar

An toolbar object. If not given, the editor will be rendered without toolbar. For more information about toolbar, see the [toolbar config](/reference/toolbar-config.md).

* Type: `Toolbar`

Example:

```js
const toolbar = new Toolbar({
  root: '.my-toolbar',
});
new Editor({
  toolbar,
});
```

## value

The default content of the editor. The format is [Lake Markup Language (LML)](./content-format.md) similar to HTML.

* Type: `string`
* Default: `<p><br /></p>`

Example:

```js
const defaultValue = `
  <h1>title</h1>
  <p>content<focus /></p>
  <p><lake-box type="inline" name="image" value="..."></lake-box></p>
`;
new Editor({
  value: defaultValue,
});
```

## readonly

Whether the editor is in read-only mode. Setting it to `true` can be used to display the content in the view page. You can visit the [read-only example](/examples/readonly) to see how it displays.

* Type: `boolean`
* Default: `false`

Example:

```js
new Editor({
  readonly: true,
});
```

## spellcheck

Whether the editor is checked for spelling errors. For more details on `spellcheck`, refer to [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/spellcheck).

* Type: `boolean`
* Default: `false`

Example:

```js
new Editor({
  spellcheck: true,
});
```

## tabIndex

The tab order of the editor. For more details on `tabIndex`, refer to [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex).

* Type: `number`
* Default: `0`

Example:

```js
new Editor({
  tabIndex: -1,
});
```

## placeholder

The text displayed in the editor when the editor has no content.

* Type: `string`

Example:

```js
new Editor({
  placeholder: 'Add your comment here...',
});
```

## indentWithTab

The `indentWithTab` defines whether the content can be indented by `Tab` key. When the value is false, you can use `Tab` or `Shift-Tab` to move the focus. The [comment box example](/examples/comment-box) demonstrates how it works.

* Type: `boolean`
* Default: `true`

Example:

```js
new Editor({
  indentWithTab: false,
});
```

## lang

The `lang` defines the language in which the UI should be displayed. You can visit the [internationalization example](/examples/internationalization.md) to see how it displays.

* Type: `'en-US' | 'zh-CN' | 'ko' | 'ja'`
* Default: `en-US`

Example:

```js
new Editor({
  lang: 'zh-CN',
});
```

## minChangeSize

The minimum length of the text for saving history. If the inputted text is shorter than the `minChangeSize`, the history will not be saved until the length reaches or exceeds this threshold.

* Type: `number`
* Default: `5`

Example:

```js
new Editor({
  minChangeSize: 10,
});
```

## historySize

The maximum length of the history. When this threshold is reached, the earliest item in the history will be removed.

* Type: `number`
* Default: `100`

Example:

```js
new Editor({
  historySize: 200,
});
```

## slash

### items

The items of the slash commands.

* Type: `(string | SlashItem)[]`
* Default:

```js
[
  'heading1',
  'heading2',
  'heading3',
  'heading4',
  'heading5',
  'heading6',
  'paragraph',
  'blockQuote',
  'numberedList',
  'bulletedList',
  'checklist',
  'table',
  'hr',
];
```

Example:

```js
new Editor({
  slash: [
    'image',
    'heading1',
    'paragraph',
    'blockQuote',
    'numberedList',
    'bulletedList',
    'checklist',
    'table',
    'hr',
  ],
});
```

The following items are currently available.

`heading1`

`heading2`

`heading3`

`heading4`

`heading5`

`heading6`

`paragraph`

`blockQuote`

`numberedList`

`bulletedList`

`checklist`

`table`

`hr`

`codeBlock`

`video`

`equation`

`image`

`file`

## image

### requestAction

The request URL for uploading image.

* Type: `URL`

Its response data should follow the following format:

```json
{
  "url": "http://example.com/foo.png"
}
```

### requestMethod

The request method for uploading image.

* Type: `'POST' | 'PUT' | 'PATCH'`
* Default: `POST`

### requestTypes

The MIME types allowed for uploading image.

* Type: `string[]`
* Default: `['image/gif', 'image/jpeg', 'image/png', 'image/svg+xml']`

Example:

```js
new Editor({
  image: {
    requestMethod: 'POST',
    requestAction: '/upload',
    requestTypes: ['image/gif', 'image/jpeg', 'image/png'],
  },
});
```

## file

### requestAction

The request URL for uploading file.

* Type: `URL`

Its response data should follow the following format:

```json
{
  "url": "http://example.com/foo.pdf"
}
```

### requestMethod

The request method for uploading file.

* Type: `'POST' | 'PUT' | 'PATCH'`
* Default: `POST`

### requestTypes

The MIME types allowed for uploading file.

* Type: `string[]`
* Default:

```js
[
  'application/zip',
  'application/x-zip-compressed',
  'application/vnd.rar',
  'image/gif',
  'image/jpeg',
  'image/png',
  'image/svg+xml',
  'text/plain',
  'text/html',
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/vnd.ms-powerpoint',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
]
```

Example:

```js
new Editor({
  image: {
    requestMethod: 'POST',
    requestAction: '/upload',
    requestTypes: ['application/zip', 'application/pdf'],
  },
});
```

## codeBlock

### langList

The language types for the dropdown.

* Type: `string[]`
* Default:

```js
[
  'text',
  'c',
  'csharp',
  'cpp',
  'css',
  'go',
  'html',
  'java',
  'javascript',
  'json',
  'markdown',
  'php',
  'python',
  'rust',
  'sql',
  'typescript',
  'xml',
  'yaml',
]
```

### defaultLang

The default language type.

* Type: `string`
* Default: `text`

Example:

```js
new Editor({
  codeBlock: {
    langList: ['text', 'html', 'css', 'javascript'],
    defaultLang: 'javascript',
  },
});
```

## mention

### requestAction

The request URL for getting user list.

* Type: `URL`

Its response data should follow the following format:

```json
{
  "data": [
    {
      "id": "1",
      "name": "foo",
      "nickname": "Foo",
      "avatar": "<img src=\"/images/foo.png\" />"
    },
    {
      "id": "2",
      "name": "bar",
      "nickname": "Bar",
      "avatar": "<img src=\"/images/bar.png\" />"
    }
  ]
}
```

### requestMethod

The request method for getting user list.

* Type: `'GET' | 'POST' | 'PUT' | 'PATCH'`
* Default: `GET`

### getProfileUrl

A function that returns a URL to visit the user profile.

* Type: `function`
* Default:

```js
(value: MentionItem) => `/${value.name}`
```

Example:

```js
new Editor({
  mention: {
    requestMethod: 'GET',
    requestAction: '/mention/list',
    getProfileUrl: value => `/user/${value.id}`
  },
});
```
