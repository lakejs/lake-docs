---
layout: doc
title: Editor config
---

# {{ $frontmatter.title }}

Lake is highly customizable via configuration options that can be passed directly to the [Editor](/reference/editor.md) class. You can tailor its behavior, appearance, and functionality by providing values for various properties.

Example:

```js
const toolbar = new Toolbar({
  root: '.my-toolbar',
});
new Editor({
  root: '.my-content',
  toolbar,
  value: '<p><br /></p>',
  spellcheck: false,
  tabIndex: 0,
  placeholder: 'Add your comment here...',
  indentWithTab: true,
  lang: 'en-US',
  minChangeSize: 5,
  historySize: 100,
  slash: false,
  mention: false,
});
```

::: tip
You can disable any plugin by setting its configuration to `false`. For instance, setting `mention` to `false` will prevent the mention pop-up menu from appearing during content editing.
:::


## root

Specifies the element where the editor is appended.

* Type: [CSS selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors) | [DOM element](https://developer.mozilla.org/en-US/docs/Web/API/Element) | [Nodes](/reference/nodes.md)

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

Defines the toolbar for the editor. If not given, the editor will be rendered without toolbar. For more details, see the [Toolbar config](/reference/toolbar-config.md) page.

* Type: [Toolbar](/reference/toolbar.md)

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

Defines the default content for the editor. Its format uses [LML format](/guide/content-format.md) that is similar to HTML.

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

Enables read-only mode for viewing content without editing. You can visit the [Read-only mode](/examples/readonly) example to see how it is displayed.

* Type: `boolean`
* Default: `false`

Example:

```js
new Editor({
  readonly: true,
});
```


## spellcheck

Enables or disables spellcheck.

* Type: `boolean`
* Default: `false`

Example:

```js
new Editor({
  spellcheck: true,
});
```


## tabIndex

Defines the tab order of the editor.

* Type: `number`
* Default: `0`

Example:

```js
new Editor({
  tabIndex: -1,
});
```


## placeholder

Defines the placeholder text displayed when the editor is empty.

* Type: `string`

Example:

```js
new Editor({
  placeholder: 'Add your comment here...',
});
```


## indentWithTab

Allows indentation using the `Tab` key. When set to `false`, you can use `Tab` or `Shift-Tab` to move the focus. The [Comment box](/examples/comment-box) example demonstrates how it works.

* Type: `boolean`
* Default: `true`

Example:

```js
new Editor({
  indentWithTab: false,
});
```


## lang

Defines the language for the editor's UI. You can visit the [Internationalization](/examples/internationalization.md) example to see how it is displayed.

* Type: `'en-US' | 'zh-CN' | 'ko' | 'ja'`
* Default: `en-US`

Example:

```js
new Editor({
  lang: 'zh-CN',
});
```


## contentRules

Defines the HTML parsing rules used by [HTMLParser](/reference/html-parser.md).

* Type: [ContentRules](/reference/types.md#contentrules)
* Default: The return value of [getContentRules()](/reference/functions.md#getcontentrules)

Example:

```js
new Editor({
  contentRules: {
    h1: {},
    p: {},
  },
});
```


## minChangeSize

Specifies the minimum text length to trigger history save. If the inputted text is shorter than the `minChangeSize`, the history will not be saved until the length reaches or exceeds this threshold.

* Type: `number`
* Default: `5`

Example:

```js
new Editor({
  minChangeSize: 10,
});
```


## historySize

Sets the maximum number of history entries. When this threshold is reached, the earliest item in the history will be removed.

* Type: `number`
* Default: `100`

Example:

```js
new Editor({
  historySize: 200,
});
```


## showMessage

Handles feedback messages based on their type.

* Type: `(type: 'success' | 'error' | 'warning', message: string) => void`

Example:

```js
new Editor({
  showMessage: (type, message) => {
    if (type === 'success') {
      console.log(message);
      return;
    }
    if (type === 'warning') {
      console.warn(message);
      return;
    }
    if (type === 'error') {
      console.error(message);
    }
  },
});
```


## downloadFile

Handles file downloading based on their type.

* Type: `(type: 'image' | 'file', url: string) => void`

Example:

```js
new Editor({
  downloadFile: (type, url) => {
    window.open(url);
  },
});
```


## slash

### items

Defines the menu items for the slash commands.

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
  'infoAlert',
  'tipAlert',
  'warningAlert',
  'dangerAlert',
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

The following built-in slash items are available:

* `heading1`: Converts the selected block into a heading 1.

* `heading2`: Converts the selected block into a heading 2.

* `heading3`: Converts the selected block into a heading 3.

* `heading4`: Converts the selected block into a heading 4.

* `heading5`: Converts the selected block into a heading 5.

* `heading6`: Converts the selected block into a heading 6.

* `paragraph`: Converts the selected block into a paragraph.

* `blockQuote`: Formats the selected block as a block quotation.

* `numberedList`: Creates a numbered list.

* `bulletedList`: Creates a bulleted list.

* `checklist`: Creates a checklist.

* `table`: Inserts a table.

* `infoAlert`: Creates an info alert.

* `tipAlert`: Creates a tip alert.

* `warningAlert`: Creates a warning alert.

* `dangerAlert`: Creates a danger alert.

* `hr`: Inserts a horizontal line.

* `codeBlock`: Inserts a block of code.

* `equation`: Inserts a mathematical formula.

* `video`: Inserts a video from YouTube.

* `twitter`: Inserts a post from X (Twitter).

* `image`: Uploads and inserts an image.

* `file`: Uploads and inserts a file.


## image

### requestAction

Defines a URL where the file will be uploaded.

* Type: `URL`

Its response data should follow the following format:

```json
{
  "url": "http://example.com/foo.png"
}
```

You can use the [transformResponse](#transformresponse) config to convert the data returned by your API.

### requestMethod

Defines an HTTP method for the request.

* Type: `'POST' | 'PUT' | 'PATCH'`
* Default: `POST`

### requestTypes

Defines allowed MIME types for the upload.

* Type: `string[]`
* Default: `['image/gif', 'image/jpeg', 'image/png', 'image/svg+xml', 'image/webp']`

### requestFieldName

Defines the field name for the uploaded file.

* Type: `string`
* Default: `file`

### requestHeaders

Defines custom headers for the upload request.

* Type: `Record<string, string>`

### transformResponse

Defines a function to transform the response before handling it.

* Type: `(body: any) => any`


Example:

```js
new Editor({
  image: {
    requestMethod: 'POST',
    requestAction: '/upload',
    requestTypes: ['image/gif', 'image/jpeg', 'image/png'],
    requestFieldName: 'file',
    requestHeaders: { from: 'hello' },
    transformResponse: (body: any) => {
      return {
        url: body.data.url,
      };
    },
  },
});
```


## file

### requestAction

Defines a URL where the file will be uploaded.

* Type: `URL`

Its response data should follow the following format:

```json
{
  "url": "http://example.com/foo.pdf"
}
```

You can use the `transformResponse` config to convert the data returned by your API.

### requestMethod

Defines an HTTP method for the request.

* Type: `'POST' | 'PUT' | 'PATCH'`
* Default: `POST`

### requestTypes

Defines allowed MIME types for the upload.

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
  'image/webp',
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

### requestFieldName

Defines the field name for the uploaded file.

* Type: `string`
* Default: `file`

### requestHeaders

Defines custom headers for the upload request.

* Type: `Record<string, string>`

### transformResponse

Defines a function to transform the response before handling it.

* Type: `(body: any) => any`


Example:

```js
new Editor({
  image: {
    requestMethod: 'POST',
    requestAction: '/upload',
    requestTypes: ['application/zip', 'application/pdf'],
    requestFieldName: 'file',
    requestHeaders: { from: 'hello' },
    transformResponse: (body: any) => {
      return {
        url: body.data.url,
      };
    },
  },
});
```


## codeBlock

### langList

Defines the language types for the dropdown.

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

Defines the default language type.

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

Defines a URL that will return user list.

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

You can use the `transformResponse` config to convert the data returned by your API.

### requestMethod

Defines an HTTP method for the request.

* Type: `'GET' | 'POST' | 'PUT' | 'PATCH'`
* Default: `GET`

### requestHeaders

Defines custom headers for the request.

* Type: `Record<string, string>`

### transformResponse

Defines a function to transform the response before handling it.

* Type: `(body: any) => any`

### getProfileUrl

Defines a function that returns a URL to visit the user profile.

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
    requestHeaders: { from: 'hello' },
    transformResponse: (body: any) => {
      return {
        data: body.list,
      };
    },
    getProfileUrl: value => `/user/${value.id}`
  },
});
```
