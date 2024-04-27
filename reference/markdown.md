---
layout: doc
title: Markdown Shortcuts
---

# {{ $frontmatter.title }}

Lake provides markdown-style handy shortcuts, you can use the following shortcuts to format the text.

## Shortcuts

| Format type  | Character and key |
| ------------- | ------------- |
| Heading 1  | `#` `Space`  |
| Heading 2  | `##` `Space`  |
| Heading 3  | `###` `Space`  |
| Heading 4  | `####` `Space`  |
| Heading 5  | `#####` `Space`  |
| Heading 6  | `######` `Space`  |
| Numbered list  | `1.` `Space`  |
| Bulleted list  | `*` `Space`  |
|   | `-` `Space`  |
|   | `+` `Space`  |
| Checklist  | `[]` `Space`  |
|   | `[ ]` `Space`  |
|   | `[x]` `Space`  |
|   | `[X]` `Space`  |
| Block quotation  | `>` `Space`  |
| Bold  | `**bold**` `Space`  |
|   | `__bold__` `Space`  |
| Italic  | `_italic_` `Space`  |
|   | `*italic*` `Space`  |
| Highlight  | `==highlight==` `Space`  |
| Strikethrough  | `~~strikethrough~~` `Space`  |
| Inline code  | <code>\`code\`</code> `Space`  |
| Alert block  | `:::info` `Enter`  |
|   | `:::tip` `Enter`  |
|   | `:::success` `Enter`  |
|   | `:::warning` `Enter`  |
|   | `:::error` `Enter`  |
|   | `:::danger` `Enter`  |
| Thematic break  | `---` `Enter`  |
| Code block  | <code>\`\`\`</code> `Enter`  |
|   | <code>\`\`\`html</code> `Enter`  |
|   | <code>\`\`\`css</code> `Enter`  |
|   | <code>\`\`\`js</code> `Enter`  |
|   | <code>\`\`\`javascript</code> `Enter`  |

## Playground

<script setup>
const content = `
<p>At the beginning of a paragraph, try the shortcuts above:</p>
<p>Input <code>#</code> followed by a space, and you can see that the paragraph becomes a heading.</p>
<p>Input <code>[]</code> followed by a space to insert a checklist.</p>
<p>Input <code>:::info</code> followed by an enter to insert an alert block.</p>
<p>Did you get it?</p>
`;
</script>

<DefaultEditor :value="content" />
