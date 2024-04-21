---
layout: doc
title: Editor config
---

# {{ $frontmatter.title }}

Editor config is the parameter of `Editor` where you can define the settings of the editor.

```js
const editor = new Editor({
  root: '.lake-root',
  value: '<p><br /><focus /></p>',
});
editor.render();
```

## root

* Type: `CSS selector | DOM element`

An element to which the editor is appended.

CSS selector:
```js
new Editor({
  root: '.lake-root',
});
```

DOM element:
```js
  new Editor({
  root: document.querySelector('.lake-root'),
});
```

## toolbar

* Type: `Toolbar`
* Default: `undefined`

An toolbar object. If not given, the editor will be rendered without toolbar.

```js
const toolbar = new Toolbar({
  root: '.lake-toolbar-root',
});
new Editor({
  root: '.lake-root',
  toolbar,
});
```

## value

* Type: `LML String`
* Default: `<p><br /><focus /></p>`

The default content of the editor. It is an LML(Lake Markup Language) string similar to HTML.

```js
const defaultValue = `
  <h1>title</h1>
  <p>content<focus /></p>
  <p><lake-box type="inline" name="image" value="..."></lake-box></p>
`;
new Editor({
  root: '.lake-root',
  value,
});
```
