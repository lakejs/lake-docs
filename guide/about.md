---
layout: doc
title: About Lake
---

# {{ $frontmatter.title }}

Lake is a browser-based rich text editor built for modern applications that require content creation like blog posts, user comments, and email composition.

## Why create Lake?

:::warning Note
This section includes some personal opinions.
:::

There are a lot of rich text editors out there, but finding one that truly fits your needs can be difficult. You often face two frustrating options:

* **Too basic**: These editors lack essential features, forcing developers to build workarounds. Customization can be difficult and often requires deep technical knowledge.

* **Too complex**: These editors may include desired features but come with restrictive licenses, convoluted code, and steep learning curves, making them hard to use and adapt.

Lake aims to provide as many features as possible with a simple structure while being free for commercial use.


## Principles

* **Straightforward**: Lake reduces code complexity by leveraging native browser features and offering a simple, intuitive programming interface.

* **High performance**: Lake efficiently handles huge content and supports fast, clean copying and pasting from HTML pages, Microsoft Word, Google Docs, and more.

* **Stability**: Lake uses extensive test cases to ensure its stability. All of its features have been carefully tested.

* **Easy customization**: The interface and model extend the DOM rather than creating completely new ones. This means you can do anything that can be done in the DOM.


## Limitations

Lake will not support the features below, as supporting them would significantly increase the software's size and complexity, ultimately compromising the user experience.

* Real-time collaboration
* Typography beyond standard web practices

If these features are essential for your project, consider alternative editors.
