---
layout: doc
title: Content format
---

# {{ $frontmatter.title }}

Lake uses `Lake Markup Language (LML)` format similar to HTML to describe the editor's content.

## Selection

The `<focus />` tag represents the current position of the cursor.

```xml
<p>This is the paragraph of text.<focus /></p>
```

The `<anchor />` and `<focus />` tags represent the range of content selected by the user.

```xml
<p><anchor />This is the paragraph of text.<focus /></p>
```

## Box

The `<lake-box>` tag represents embedded content, which is used to enhance editing capability.

Attributes:

* type: `inline | block`

  Indicates whether the box is treated as a block or inline box.

* name: `hr | image | codeBlock`

  The name of the box.

* value: `Base64 string`

  The data of the box.

* focus: `start | center | end`

  The position of the cursor in the box.

```xml
<lake-box type="block" name="hr" focus="start"></lake-box>
<lake-box type="inline" name="image" value="..." focus="end"></lake-box>
```

## Headings

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

If the `type` of `<ul>` is `checklist`, the `<ul>` tag with `<li>` represents an item in a checklist.

```html
<ul type="checklist"><li value="true">first item</li></ul>
<ul type="checklist"><li value="false">second item</li></ul>
<ul type="checklist" indent="1"><li value="false">second item first subitem</li></ul>
<ul type="checklist" indent="1"><li value="false">second item second subitem</li></ul>
<ul type="checklist" indent="1"><li value="false">second item third subitem</li></ul>
<ul type="checklist"><li value="false">third item</li></ul>
```

## Table

The `<table>` tag represents tabular data. The `<tr>` tag represents a row of cells in a table. The `<td>` tag represents a cell of a table that contains data.

```html
<table>
  <tr>
    <td>Person</td>
    <td>Most interest in</td>
    <td>Age</td>
  </tr>
  <tr>
    <td>Chris</td>
    <td>HTML tables</td>
    <td>22</td>
  </tr>
  <tr>
    <td>Dennis</td>
    <td>Web accessibility</td>
    <td>45</td>
  </tr>
</table>
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

The `<s>` tag represents strikethrough, which renders text with a strikethrough or a line through it.

```html
<s>Strikethrough</s>
```

## Font name

The `<span>` tag with its `font-family` property represents font name, which sets a font name for the selected text.

```html
<span style="font-family: 'Arial Black';">Font name</span>
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
<sup>Superscript</sup>
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

## Alerts

The `<blockquote>` with `type` attribute represents alerts that you can use to emphasize critical information.

```html
<blockquote type="info">This is an info.</blockquote>
<blockquote type="tip">This is a tip.</blockquote>
<blockquote type="warning">This is a warning.</blockquote>
<blockquote type="danger">This is a danger.</blockquote>
```

## Link

The `<a>` tag with its `href` attribute represents a hyperlink.

```html
<a href="https://github.com/">Github</a>
```

## Thematic break

Lake uses the `<lake-box name="hr">` tag to represent the thematic break (horizontal rule).

```html
<lake-box type="block" name="hr"></lake-box>
```

## Image

Lake uses the `<lake-box name="image">` tag to represent an image.

```xml
<lake-box type="inline" name="image" value=".."></lake-box>
```

## Video

Lake uses the `<lake-box name="video">` tag to represent a video.

```xml
<lake-box type="inline" name="video" value=".."></lake-box>
```

## File

Lake uses the `<lake-box name="file">` tag to represent a file.

```xml
<lake-box type="inline" name="file" value=".."></lake-box>
```

## Code block

Lake uses the `<lake-box name="codeBlock">` tag to represent a code block.

```xml
<lake-box type="block" name="codeBlock" value=".."></lake-box>
```

## Emoji

Lake uses the `<lake-box name="emoji">` tag to represent an emoji.

```xml
<lake-box type="inline" name="emoji" value=".."></lake-box>
```

## Mathematical formula

Lake uses the `<lake-box name="equation">` tag to represent a mathematical formula.

```xml
<lake-box type="inline" name="equation" value=".."></lake-box>
```

## Mention

Lake uses the `<lake-box name="mention">` tag to represent a mentioned user.

```xml
<lake-box type="inline" name="mention" value=".."></lake-box>
```
