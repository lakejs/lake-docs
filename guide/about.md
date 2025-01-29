---
layout: doc
title: About Lake
---

# {{ $frontmatter.title }}

Lake is a browser-based rich text editor designed for creating content such as blogs, comments, and emails.


## Why create Lake?

A lot of rich text editors are available on the internet, but finding one that truly fits your needs can be difficult. They often either lack key features or are not open enough. There are usually two types:

* **Underpowered**: These editors lack critical features, forcing developers to reinvent the wheel. Customization often demands advanced expertise, slowing down development.

* **Overcomplicated**: These editors may include desired features but come with restrictive licenses, opaque codebases, and steep learning curves.

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
