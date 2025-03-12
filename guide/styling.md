---
layout: doc
title: Customizing style
---

# {{ $frontmatter.title }}

## Overriding CSS variables

To customize the appearance of Lake, you can override the predefined CSS variables listed below. These variables control various aspects of the UI, such as text color, background color, borders, and interactive elements.

Example:

```css
:root {
  --lake-link-color: #08979c;
  --lake-link-hover-color: #13c2c2;
}
```

### Common variables

The following variables define general styles:

```css
--lake-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif;
--lake-font-size: 16px;
--lake-text-color: #000000e0;
--lake-secondary-text-color: #000000a6;
--lake-border-color: #d9d9d9;
--lake-background-color: #fff;
```

### Selection

Defines the color for text selection:

```css
--lake-selection-background-color: #1ba2e333;
```

### Inline code

Sets the background color for inline code:

```css
--lake-code-background-color: #8e96aa24;
```

### Link

Controls the appearance of links:

```css
--lake-link-color: #1677ff;
--lake-link-hover-color: #69b1ff;
```

### Block quotation

Defines styles for block quotes:

```css
--lake-blockquote-text-color: #000000a6;
--lake-blockquote-border: 4px solid #0505050f;
```

### Box

These variables control the appearance of [Box](./content-format.md#box) containers:

```css
--lake-box-border-color: #d9d9d9;
--lake-box-border-focus-color: #1677ff;
--lake-box-background-color: #f6f8fa;
```

### Popup

Defines styles for popup windows:

```css
--lake-popup-font-size: 14px;
--lake-popup-border-color: #d9d9d9;
--lake-popup-background-color: #fff;
--lake-popup-shadow: 0 6px 16px 0 #00000014, 0 3px 6px -4px #0000001f, 0 9px 28px 8px #0000000d;
```

### Button

Controls the styling of buttons:

```css
--lake-button-font-size: 14px;
--lake-button-border-color: #d9d9d9;
--lake-button-background-hover-color: #0000000a;
--lake-button-background-active-color: #0000000d;
--lake-button-shadow: 0 2px 0 #00000005;
--lake-button-outline: 2px solid #69b1ff;
```

### Text field

Defines styles for input fields:

```css
--lake-input-border-color: #d9d9d9;
--lake-input-border-hover-color: #69b1ff;
--lake-input-outline: 2px solid #69b1ff;
```


## Enabling dark mode

To switch to dark mode, you can apply the `lake-dark` class to the `<html>` element:

```html
<html class="lake-dark">
```

If you prefer not to modify the HTML directly, you can add the class dynamically using JavaScript:

```js
document.documentElement.classList.add('lake-dark');
```

Once the `lake-dark` class is applied, ensure the following CSS rules are set for the `<body>` element to apply the dark theme properly:

```css
body {
  color: var(--lake-text-color);
  background-color: var(--lake-background-color);
}
```

This will apply the dark theme based on the predefined CSS variables. You can visit the [Dark mode](/examples/dark){target="_blank"} example to see how it is displayed.
