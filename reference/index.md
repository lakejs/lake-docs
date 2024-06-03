---
layout: doc
title: Editor configuration
---

# {{ $frontmatter.title }}

You can configure the editor using the parameter of the `Editor` class.

```js
const editor = new Editor({
  root: '.my-content',
  value: '<p>This is a paragraph.</p>',
});
editor.render();
```

## root

* Type: `CSS selector | DOM element`

An element to which the editor is appended.

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

## toolbar

* Type: `Toolbar`

An toolbar object. If not given, the editor will be rendered without toolbar. For more information about toolbar, see [Toolbar configuration](/reference/toolbar-config.md).

```js
const toolbar = new Toolbar({
  root: '.my-toolbar',
});
new Editor({
  toolbar,
});
```

## value

* Type: `string`
* Default: `<p><br /></p>`

The default content of the editor. The format is [Lake Markup Language (LML)](./content-format.md) similar to HTML.

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

* Type: `boolean`
* Default: `false`

Whether the editor is in read-only mode. Setting it to `true` can be used to display the content in the view page. You can visit the [read-only example](/examples/readonly) to see how it displays.

```js
new Editor({
  readonly: true,
});
```

## spellcheck

* Type: `boolean`
* Default: `false`

Whether the editor is checked for spelling errors. For more details on `spellcheck`, refer to [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/spellcheck).

```js
new Editor({
  spellcheck: true,
});
```

## tabIndex

* Type: `number`
* Default: `0`

The tab order of the editor. For more details on `tabIndex`, refer to [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex).

```js
new Editor({
  tabIndex: -1,
});
```

:::warning
You are recommended to only use 0 and -1 as tabIndex values. Avoid using tabIndex values greater than 0.
:::

## placeholder

* Type: `string`

The text displayed in the editor when the editor has no content.

```js
new Editor({
  placeholder: 'Add your comment here...',
});
```

## indentWithTab

* Type: `boolean`
* Default: `true`

The `indentWithTab` defines whether the content can be indented by `Tab` key. When the value is false, you can use `Tab` or `Shift-Tab` to move the focus. The [comment box example](/examples/comment-box) demonstrates how it works.

```js
new Editor({
  indentWithTab: false,
});
```

## lang

* Type: `'en-US' | 'zh-CN' | 'ko' | 'ja'`
* Default: `en-US`

The `lang` defines the language in which the UI should be displayed. You can visit the [internationalization example](/examples/internationalization.md) to see how it displays.

```js
new Editor({
  lang: 'zh-CN',
});
```

## minChangeSize

* Type: `number`
* Default: `5`

The minimum length of the text for saving history. If the inputted text is shorter than the `minChangeSize`, the history will not be saved until the length reaches or exceeds that threshold.

```js
new Editor({
  minChangeSize: 10,
});
```

## image

### requestAction

* Type: `URL`

The `requestAction` defines the request URL, and its return value should follow the following format:

```json
{
  "url": "http://example.com/foo.png"
}
```

### requestMethod

* Type: `'POST' | 'PUT' | 'PATCH'`
* Default: `POST`

The request method for uploading image.

### requestTypes

The `requestTypes` defines the MIME types allowed for uploading image.

* Type: `string[]`
* Default: `['image/gif', 'image/jpeg', 'image/png', 'image/svg+xml']`

```js
new Editor({
  image: {
    requestMethod: 'POST',
    requestAction: '/upload',
    requestTypes: ['image/gif', 'image/jpeg', 'image/png'],
  },
});
```

## codeBlock

### langList

* Type: `string[]`

The `langList` defines the language types for the dropdown box. The following types are currently available.

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

* Type: `string`
* Default: `text`

The default language type.

```js
new Editor({
  codeBlock: {
    langList: ['text', 'html', 'css', 'javascript'],
    defaultLang: 'javascript',
  },
});
```
