---
layout: doc
title: Introducing Lake
---

# {{ $frontmatter.title }}

Lake is a browser-based rich text editor designed for creating content such as blogs, comments, and emails. It tries to keep a balance between being feature-rich and lightweight, offering an easy-to-use programming interface for further extension.

## Why create Lake?

There are already many rich text editors on the internet, but finding one that fully meets your needs is not easy. They often either lack key features or are not open enough. These editors are mainly divided into two types:

* **Basic**: These editors often lack some features that are essential to you, so you have to spend a lot of time adding these features. And the people who do this work need to have advanced programming skills for customization.

* **Commercial**: These editors usually include the features you need, but you have to buy a license for commercial use. And it is not easy to customize because of their complex structures.

Lake aims to provide as many features as possible with a simple structure while being free for commercial use under the MIT license.

## Features

* **Straightforward**: Lake strives to reduce the complexity of its code architecture, using native browser features as much as possible, and providing a simple and intuitive programming interface.

* **High performance**: Lake works well with huge content. You can also cleanly copy and paste huge content from HTML page, Microsoft Word, Google Docs and more at high speed.

* **Stability**: Lake uses extensive test cases to ensure its stability. All of its features have been carefully tested.

* **Easy customization**: The interface and data model are extensions built on the DOM, rather than creating a completely new model. This means you can do anything that can be done in the DOM.

## Limitations

The following features will not be added to Lake, as supporting them would significantly increase the size and complexity of the software, ultimately compromising the user experience.

* Real-time collaboration
* Typography beyond standard web practices

If these features are essential to you, please consider using other editors.
