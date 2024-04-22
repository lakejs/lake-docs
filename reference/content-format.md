---
layout: doc
title: Lake Markup Language
---

# {{ $frontmatter.title }}

Lake uses an LML(Lake Markup Language) string similar to HTML to describe the content of the editor.

## Selection

The `<focus />` tag represents the current position of the caret.

```xml
<p>This is the paragraph of text.<focus /></p>
```

The `<anchor />` and `<focus />` tags represent the range of text selected by the user.

```xml
<p><anchor />This is the paragraph of text.<focus /></p>
```

## Box

The `<lake-box>` tag represents an embedded content. It is used to enhance editing capability like an external component.
The `type` attribute indicates whether the box is treated as a block or inline box.
The `name` attribute represents the name of the box.
The `value` attribute represents the value of the box. It is used to render `Box` component.
The `focus` attribute represents the position of the caret.

```xml
<lake-box type="block" name="hr" focus="start"></lake-box>
<lake-box type="inline" name="image" value="..." focus="end"></lake-box>
```

Attributes:

* type: `inline | block`
* name: `hr | image | codeBlock`
* value: `Base64 string`
* focus: `start | center | end`


## Heading

The `<h1>` to `<h6>` tags represent six levels of section headings. `<h1>` is the highest section level and `<h6>` is the lowest.

```html
<h1>Heading level 1</h1>
<h2>Heading level 2</h2>
<h3>Heading level 3</h3>
<h4>Heading level 4</h4>
<h5>Heading level 5</h5>
<h6>Heading level 6</h6>
```

## Paragraph

The `<p>` tag represents a paragraph.

```html
<p>This is the first paragraph of text.</p>
<p>This is the second paragraph.</p>
```

## Line break

The `<br />` tag represents a line break in text.

```html
<p>First text<br />Second text</p>
```

## Block quotation

The `<blockquote>` tag represents a block quotation.

```html
<blockquote>This is a block quotation.</blockquote>
```

## Numbered list

The `<ol>` tag with `<li>` represents an item in an ordered list.

```html
<ol start="1"><li>first item</li></ol>
<ol start="2"><li>second item</li></ol>
<ol start="1" indent="1"><li>second item first subitem</li></ol>
<ol start="2" indent="1"><li>second item second subitem</li></ol>
<ol start="3" indent="1"><li>second item third subitem</li></ol>
<ol start="1"><li>third item</li></ol>
```

> The `indent` attribute represents the indentation of the list.

## Bulleted list

The `<ul>` tag with `<li>` represents an item in an unordered list.

```html
<ul><li>first item</li></ul>
<ul><li>second item</li></ul>
<ul indent="1"><li>second item first subitem</li></ul>
<ul indent="1"><li>second item second subitem</li></ul>
<ul indent="1"><li>second item third subitem</li></ul>
<ul><li>third item</li></ul>
```

## Checklist

The `<ul>` tag with `type="checklist"` represents an item in a checklist.

```html
<ul type="checklist"><li>first item</li></ul>
<ul type="checklist"><li>second item</li></ul>
<ul type="checklist" indent="1"><li>second item first subitem</li></ul>
<ul type="checklist" indent="1"><li>second item second subitem</li></ul>
<ul type="checklist" indent="1"><li>second item third subitem</li></ul>
<ul type="checklist"><li>third item</li></ul>
```

## Block indentation

The block tag with its `margin-left` property represents the indentation of a block.

```html
<p>This is the first paragraph of text.</p>
<p style="margin-left: 40px;">This is the second paragraph.</p>
<p>This is the third paragraph.</p>
```

## Text indentation

The block tag with its `text-indent` property represents the length of empty space (indentation) that is put before lines of text in a block.

```html
<p>This is the first paragraph of text.</p>
<p style="text-indent: 2em;">This is the second paragraph.</p>
<p>This is the third paragraph.</p>
```

## Text alignment

The block tag with its `text-align` property represents the horizontal alignment of the inline-level content inside a block.

```html
<p>This is the first paragraph of text.</p>
<p style="text-align: center;">This is the second paragraph.</p>
<p>This is the third paragraph.</p>
```

## Bold

The `<strong>` tag represents bold that have strong importance, seriousness, or urgency.

```html
<strong>Bold</strong>
```

## Italic

The `<i>` tag represents italic, which renders text with italicized style.

```html
<i>Italic</i>
```

## Underline

The `<u>` tag represents underline, which renders text with a simple solid underline.

```html
<u>Underline</u>
```

## Strikethrough

The `<s>` tag represents strikethrough, which renders text with a strikethrough, or a line through it.

```html
<s>Strikethrough</s>
```

## Font family

The `<span>` tag with its `font-family` property represents font family, which sets a font family name for the selected text.

```html
<span style="font-family: 'Arial Black';">Font family</span>
```

## Font size

The `<span>` tag with its `font-size` property represents font size.

```html
<span style="font-size: 24px;">Font size</span>
```

## Font color

The `<span>` tag with its `color` property represents font color, which sets the foreground color for the selected text.

```html
<span style="color: #F5222D;">Font color</span>
```

## Highlight

The `<span>` tag with its `background-color` property represents highlight.

```html
<span style="background-color: #FADB14;">Highlight</span>
```

## Superscript

The `<sup>` tag represents superscript, which renders text with a raised baseline using smaller text.

```html
<sup>Subscript</sup>
```

## Subscript

The `<sub>` tag represents subscript, which renders text with a lowered baseline using smaller text.

```html
<sup>Subscript</sup>
```

## Inline code

The `<code>` tag represents inline code, which displays a short fragment of computer code.

```html
<code>Inline code</code>
```

## Alert block

The `<blockquote>` with `type` attribute represents alert block that you can use to emphasize critical information.

```html
<blockquote type="info">This is an info block.</blockquote>
<blockquote type="tip">This is a tip block.</blockquote>
<blockquote type="success">This is a success box.</blockquote>
<blockquote type="warning">This is a warning box.</blockquote>
<blockquote type="error">This is an error box.</blockquote>
<blockquote type="danger">This is a danger box.</blockquote>
```

## Thematic break

Lake uses `<lake-box>` tag to represents the thematic break (horizontal rule).

```html
<lake-box type="block" name="hr"></lake-box>
```

## Link

The `<a>` tag with its `href` attribute represents a hyperlink.

```html
<a href="https://github.com/">Github</a>
```


## Image

Lake uses `<lake-box>` tag to represents an image.

```xml
<lake-box type="inline" name="image" value=".."></lake-box>
```

## Code block

Lake uses `<lake-box>` tag to represents a code block.

```xml
<lake-box type="block" name="codeBlock" value=".."></lake-box>
```
