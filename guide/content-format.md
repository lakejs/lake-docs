---
layout: doc
title: Content format
---

# {{ $frontmatter.title }}

Lake uses its own markup language, Lake Markup Language (LML), which is similar to HTML. LML defines the content within the editor and provides various tags and attributes for formatting and embedding content.

## Selection

The `<focus />` tag represents the current position of the cursor.

```xml
<p>This is the paragraph of text.<focus /></p>
```

The `<anchor />` and `<focus />` tags together define the range of content selected by the user.

```xml
<p><anchor />This is the paragraph of text.<focus /></p>
```

## Box

The `<lake-box>` tag is used to embed content to enhance editing capabilities. It supports the following attributes:

* type: `inline | block`

  Determines whether the box is rendered as an inline or block element.

* name: `string`

  Specifies the type of embedded content.

* value: `Base64 string`

  Contains the encoded data for the box.

* focus: `start | center | end`

  Indicates the cursor position within the box.

```xml
<lake-box type="block" name="hr" focus="start"></lake-box>
<lake-box type="inline" name="image" value="..." focus="end"></lake-box>
```

## Headings

The `<h1>` to `<h6>` tags represent six levels of section headings. `<h1>` is the highest level and `<h6>` is the lowest.

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

The `<br />` tag represents a line break within text.

```html
<p>First text<br />Second text</p>
```

## Block quotation

The `<blockquote>` tag represents a block quotation.

```html
<blockquote>This is a block quotation.</blockquote>
```

## Numbered list

Numbered lists use the `<ol>` tag with `<li>` elements. The `start` attribute sets the starting number, and the `indent` attribute defines sub-levels.

```html
<ol start="1"><li>first item</li></ol>
<ol start="2"><li>second item</li></ol>
<ol start="1" indent="1"><li>second item first subitem</li></ol>
<ol start="2" indent="1"><li>second item second subitem</li></ol>
<ol start="3" indent="1"><li>second item third subitem</li></ol>
<ol start="1"><li>third item</li></ol>
```

## Bulleted list

Bulleted lists use the `<ul>` tag with `<li>` elements. Indentation is similarly managed with the `indent` attribute.

```html
<ul><li>first item</li></ul>
<ul><li>second item</li></ul>
<ul indent="1"><li>second item first subitem</li></ul>
<ul indent="1"><li>second item second subitem</li></ul>
<ul indent="1"><li>second item third subitem</li></ul>
<ul><li>third item</li></ul>
```

## Checklist

For checklist items, specify `type="checklist"` on the `<ul>` tag. Each `<li>` includes a `value` attribute indicating its state (`true` for checked, `false` for unchecked).

```html
<ul type="checklist"><li value="true">first item</li></ul>
<ul type="checklist"><li value="false">second item</li></ul>
<ul type="checklist" indent="1"><li value="false">second item first subitem</li></ul>
<ul type="checklist" indent="1"><li value="false">second item second subitem</li></ul>
<ul type="checklist" indent="1"><li value="false">second item third subitem</li></ul>
<ul type="checklist"><li value="false">third item</li></ul>
```

## Table

Tables are defined using `<table>`, `<tr>`, and `<td>` tags. The `<tr>` tag represents a row of cells in a table. The `<td>` tag represents a cell of a table that contains data.

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

Apply block-level indentation using the `margin-left` property.

```html
<p>This is the first paragraph of text.</p>
<p style="margin-left: 40px;">This is the second paragraph.</p>
<p>This is the third paragraph.</p>
```

## Text indentation

Indent the first line of text in a block using the `text-indent` property.

```html
<p>This is the first paragraph of text.</p>
<p style="text-indent: 2em;">This is the second paragraph.</p>
<p>This is the third paragraph.</p>
```

## Text alignment

Set horizontal text alignment using the `text-align` property.

```html
<p>This is the first paragraph of text.</p>
<p style="text-align: center;">This is the second paragraph.</p>
<p>This is the third paragraph.</p>
```

## Bold

Use `<strong>` for strong importance.

```html
<strong>Bold</strong>
```

## Italic

Use `<i>` for italicized text.

```html
<i>Italic</i>
```

## Underline

Use `<u>` for underlined text.

```html
<u>Underline</u>
```

## Strikethrough

Use `<s>` for strikethrough text.

```html
<s>Strikethrough</s>
```

## Font name

Use `<span>` with `font-family` to specify the font.

```html
<span style="font-family: 'Arial Black';">Font name</span>
```

## Font size

Use `<span>` with `font-size` to set the text size.

```html
<span style="font-size: 24px;">Font size</span>
```

## Font color

Use `<span>` with `color` to set the text color.

```html
<span style="color: #F5222D;">Font color</span>
```

## Highlight

Use `<span>` with `background-color` to highlight text.

```html
<span style="background-color: #FADB14;">Highlight</span>
```

## Superscript

Use `<sup>` to display superscript text.

```html
<sup>Superscript</sup>
```

## Subscript

Use `<sub>` to display subscript text.

```html
<sup>Subscript</sup>
```

## Inline code

Display inline code fragments with the `<code>` tag.

```html
<code>Inline code</code>
```

## Alert

Emphasize critical information using the `<blockquote>` tag with a `type` attribute.

```html
<blockquote type="info">This is an info.</blockquote>
<blockquote type="tip">This is a tip.</blockquote>
<blockquote type="warning">This is a warning.</blockquote>
<blockquote type="danger">This is a danger.</blockquote>
```

## Link

Display hyperlinks using the `<a>` tag with the `href` attribute.

```html
<a href="https://github.com/">Github</a>
```

## Thematic break

The `<lake-box>` tag with `name="hr"` represents a horizontal rule.

```html
<lake-box type="block" name="hr"></lake-box>
```

## Image

The `<lake-box>` tag with `name="image"` tag represents an image.

```xml
<lake-box type="inline" name="image" value=".."></lake-box>
```

## Video

The `<lake-box>` tag with `name="video"` tag represents a video.

```xml
<lake-box type="inline" name="video" value=".."></lake-box>
```

## File

The `<lake-box>` tag with `name="file"` tag represents a file.

```xml
<lake-box type="inline" name="file" value=".."></lake-box>
```

## Code block

The `<lake-box>` tag with `name="codeBlock"` tag represents a code block.

```xml
<lake-box type="block" name="codeBlock" value=".."></lake-box>
```

## Emoji

The `<lake-box>` tag with `name="emoji"` tag represents an emoji.

```xml
<lake-box type="inline" name="emoji" value=".."></lake-box>
```

## Mathematical formula

The `<lake-box>` tag with `name="equation"` tag represents a mathematical formula.

```xml
<lake-box type="inline" name="equation" value=".."></lake-box>
```

## Mention

The `<lake-box>` tag with `name="mention"` tag represents a user mentioned.

```xml
<lake-box type="inline" name="mention" value=".."></lake-box>
```
