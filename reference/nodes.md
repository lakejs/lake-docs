---
layout: doc
title: Nodes
outline: [2, 3]
---

# {{ $frontmatter.title }}

The `Nodes` interface represents a collection of the nodes. It is similar to [jQuery](https://jquery.com/), but its implementation is much simpler. Its methods can be considered aliases of native DOM interfaces, designed to simplify DOM manipulation.

Example:

```js
import { Nodes } from 'lakelib';

const body = new Nodes(document.body);
body.append('<p>foo</p>');
```


## Constructor

Creates a new `Nodes` instance.

* Parameters:

  `node`

  A native [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node) object or a list of native nodes.


## Instance properties

### length <Badge type="info" text="Read only" />

The number of nodes in the `Nodes` object.

* Type: `Nodes`

Example:

```js
const nodes = new Nodes([
  document.createElement('p'),
  document.createTextNode('foo'),
]);
// Outputs 2.
console.log(nodes.length);
```


### id <Badge type="info" text="Read only" />

The unique ID of the first node.

* Type: `number`

Example:

```js
const paragraph = new Nodes(document.createElement('p'));
// Outputs a number.
console.log(paragraph.id);
```


### name <Badge type="info" text="Read only" />

The name of the first node.

* Type: `string`

Example:

```js
const paragraph = new Nodes(document.createElement('p'));
// Outputs "p".
console.log(paragraph.name);
```


### isElement <Badge type="info" text="Read only" />

A boolean value indicating whether the first node is an element.

* Type: `boolean`

Example:

```js
const paragraph = new Nodes(document.createElement('p'));
// Outputs true.
console.log(paragraph.isElement);
```


### isText <Badge type="info" text="Read only" />

A boolean value indicating whether the first node is a text.

* Type: `boolean`

Example:

```js
const textNode = new Nodes(document.createTextNode('foo'));
// Outputs true.
console.log(textNode.isText);
```


### isBlock <Badge type="info" text="Read only" />

A boolean value indicating whether the first node is a block.

* Type: `boolean`

Example:

```js
const paragraph = new Nodes(document.createElement('p'));
// Outputs true.
console.log(paragraph.isBlock);
```


### isMark <Badge type="info" text="Read only" />

A boolean value indicating whether the first node is a mark.

* Type: `boolean`

Example:

```js
const strong = new Nodes(document.createElement('strong'));
// Outputs true.
console.log(strong.isMark);
```


### isVoid <Badge type="info" text="Read only" />

A boolean value indicating whether the first node is a void element that cannot have any child nodes.

* Type: `boolean`

Example:

```js
const br = new Nodes(document.createElement('br'));
// Outputs true.
console.log(br.isVoid);
```


### isHeading <Badge type="info" text="Read only" />

A boolean value indicating whether the first node is a heading.

* Type: `boolean`

Example:

```js
const h1 = new Nodes(document.createElement('h1'));
// Outputs true.
console.log(h1.isHeading);
```


### isList <Badge type="info" text="Read only" />

A boolean value indicating whether the first node is a list.

* Type: `boolean`

Example:

```js
const ol = new Nodes(document.createElement('ol'));
// Outputs true.
console.log(ol.isList);
```


### isTable <Badge type="info" text="Read only" />

A boolean value indicating whether the first node is a table.

* Type: `boolean`

Example:

```js
const table = new Nodes(document.createElement('table'));
// Outputs true.
console.log(table.isTable);
```


### isBookmark <Badge type="info" text="Read only" />

A boolean value indicating whether the first node is a bookmark element.

* Type: `boolean`

Example:

```js
const bookmark = new Nodes(document.createElement('lake-bookmark'));
// Outputs true.
console.log(bookmark.isBookmark);
```


### isBox <Badge type="info" text="Read only" />

A boolean value indicating whether the first node is a box element.

* Type: `boolean`

Example:

```js
const boxNode = new Nodes(document.createElement('lake-box'));
// Outputs true.
console.log(boxNode.isBox);
```


### isInlineBox <Badge type="info" text="Read only" />

A boolean value indicating whether the first node is an inline box element.

* Type: `boolean`

Example:

```js
const boxNode = query('<lake-box type="inline" name="emoji"></lake-box>');
// Outputs true.
console.log(boxNode.isInlineBox);
```


### isBlockBox <Badge type="info" text="Read only" />

A boolean value indicating whether the first node is a block box element.

* Type: `boolean`

Example:

```js
const boxNode = query('<lake-box type="block" name="hr"></lake-box>');
// Outputs true.
console.log(boxNode.isBlockBox);
```


### isContainer <Badge type="info" text="Read only" />

A boolean value indicating whether the first node is a [contenteditable](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/contentEditable) element where users can edit the content.

* Type: `boolean`

Example:

```js
const div = query('<div contenteditable="true" />');
// Outputs true.
console.log(div.isContainer);
```


### isOutside <Badge type="info" text="Read only" />

A boolean value indicating whether the first node does not have an ancestor element which `contenteditable` attribute is `true`.

* Type: `boolean`

Example:

```js
const div = query('<div><div contenteditable="true" /></div>');
// Outputs true.
console.log(div.isOutside);
```


### isInside <Badge type="info" text="Read only" />

A boolean value indicating whether the first node has an ancestor element which `contenteditable` attribute is `true`.

* Type: `boolean`

Example:

```js
const div = query('<div contenteditable="true"><p>foo</p></div>');
// Outputs true.
console.log(div.find('p').isInside);
```


### isTopInside <Badge type="info" text="Read only" />

A boolean value indicating whether the parent of the first node is an element which `contenteditable` attribute is `true`.

* Type: `boolean`

Example:

```js
const div = query('<div contenteditable="true"><p>foo</p></div>');
// Outputs true.
console.log(div.find('p').isTopInside);
```


### isContentEditable <Badge type="info" text="Read only" />

A boolean value indicating whether the first node is editable.

* Type: `boolean`

Example:

```js
const div = query('<div contenteditable="true"><p>foo</p></div>');
// Outputs true.
console.log(div.find('p').isContentEditable);
```


### isIndivisible <Badge type="info" text="Read only" />

A boolean value indicating whether the first node is indivisible.

* Type: `boolean`

Example:

```js
const div = query('<div contenteditable="true" />');
// Outputs true.
console.log(div.isIndivisible);
```


### isEmpty <Badge type="info" text="Read only" />

A boolean value indicating whether the first node is empty.

* Type: `boolean`

Example:

```js
const div = query('<div><p></p></div>');
// Outputs true.
console.log(div.find('p').isEmpty);
```


## Instance methods

### get()

Returns a native [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node) object at the specified index.

* Parameters:

  `index`

  Zero-based index of the native node to be returned.

* Return value:

  A [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node) object.

Example:

```js
const paragraphs = query('<p>foo</p><p>bar</p>');
// Outputs "foo".
console.log(paragraphs.get(0).innerText);
// Outputs "bar".
console.log(paragraphs.get(1).innerText);
```


### getAll()

Returns all native nodes.

* Parameters:

  None.

* Return value:

  An `Array` object that contains [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node) objects.

Example:

```js
const paragraphs = query('<p>foo</p><p>bar</p>');
const nativeNodes = paragraphs.getAll();
// Outputs "foo".
console.log(nativeNodes[0].innerText);
// Outputs "bar".
console.log(nativeNodes[1].innerText);
```


### eq()

Returns a new `Nodes` object that includes only the node at the specified index.

* Parameters:

  `index`

  Zero-based index of the specified node.

* Return value:

  A `Nodes` object.

Example:

```js
const paragraphs = query('<p>foo</p><p>bar</p>');
// Outputs "foo".
console.log(paragraphs.eq(0).get(0).innerText);
// Outputs "bar".
console.log(paragraphs.eq(1).get(0).innerText);
```


### each()

Executes a provided function once for each node.

* Parameters:

  `callback`

  A function to execute for each node in the `Nodes` object. If the return value is `false`, the iteration will be stopped. The function is called with the following arguments:

  * `node`: The current native node being processed.

  * `index`: The index of the current native node being processed.

* Return value:

  `this` object.

Example:

```js
const paragraphs = query('<p>foo</p><p>bar</p>');
// Outputs the following:
// "foo", 0
// "bar", 1
paragraphs.each((node, index) => {
  console.log(node.innerText, index);
});
```


### eachElement()

Executes a provided function once for each element.

* Parameters:

  `callback`

  A function to execute for each element in the `Nodes` object. If the return value is `false`, the iteration will be stopped. The function is called with the following arguments:

  * `element`: The current native element being processed.

  * `index`: The index of the current native element being processed.

* Return value:

  `this` object.

Example:

```js
const div = query('<div><p>foo</p>text<p>bar</p></div>');
const children = div.children();
// Outputs 3.
console.log(children.length);
// Outputs the following:
// "foo", 0
// "bar", 2
children.eachElement((element, index) => {
  console.log(element.innerText, index);
});
```


### reverse()

Returns a new `Nodes` object with the nodes in reversed order.

* Parameters:

  None.

* Return value:

  A `Nodes` object.

Example:

```js
const paragraphs = query('<p>foo</p><p>bar</p>');
const reversedParagraphs = paragraphs.reverse();
// Outputs "bar".
console.log(reversedParagraphs.eq(0).get(0).innerText);
// Outputs "foo".
console.log(reversedParagraphs.eq(1).get(0).innerText);
```


### matches()

Tests whether the first node would be selected by the specified CSS selector.

* Parameters:

  `selector`

  A string that specifies a CSS selector to test.

* Return value:

  `true` if the first node matches the selector. `false` if not.

Example:

```js
const div = query('<div class="foo" />');
// Outputs true.
console.log(div.matches('.foo'));
```


### contains()

Returns a boolean value indicating whether the given node is a descendant of the first node, that is the node itself, one of its direct children (childNodes), one of the children's direct children, and so on.

* Parameters:

  `otherNode`

  A `Nodes` object to test with.

* Return value:

  `true` if `otherNode` is contained in the first node. `false` if not.

Example:

```js
const div = query('<div><p>foo</p></div>');
const paragraph = div.find('p');
// Outputs true.
console.log(div.contains(paragraph));
```


### isSibling()

Returns a boolean value indicating whether the first node and a given node are siblings.

* Parameters:

  `otherNode`

  A `Nodes` object to test with.

* Return value:

  `true` if the first node and `otherNode` are siblings. `false` if not.

Example:

```js
const div = query('<div><p>foo</p><p>bar</p></div>');
const paragraphs = div.find('p');
const foo = paragraphs.eq(0);
const bar = paragraphs.eq(1);
// Outputs true.
console.log(foo.isSibling(bar));
```


### find()

Returns the descendants of the first node that match the specified CSS selector or node path.

* Parameters:

  `selector`

  A `string` that specifies CSS selector or a [NodePath](/reference/types.md#nodepath) that specifies node path.

* Return value:

  A `Nodes` object.

Example:

```js
const div = query('<div><p>foo</p><p>bar<strong>bold</strong></p></div>');
// Outputs "bold".
console.log(div.find('strong').get(0).innerText);
// Outputs "bold".
console.log(div.find([1, 1]).get(0).innerText);
```


### closest()

Traverses the first node and its parents (heading toward the document root) until it finds an element that matches the specified CSS selector.

* Parameters:

  `selector`

  A `string` that specifies CSS selector.

* Return value:

  A `Nodes` object.

Example:

```js
const div = query('<div><p>foo</p><p>bar<strong>bold</strong></p></div>');
const paragraph = div.find('strong').closest('p');
// Outputs "bar<strong>bold</strong>".
console.log(paragraph.get(0).innerHTML);
```


### closestBlock()

Traverses the first node and its parents until it finds a block element.

* Parameters:

  None.

* Return value:

  A `Nodes` object.

Example:

```js
const div = query('<div contenteditable="true"><p>foo</p>bar</div>');
// Outputs "p".
const foo = div.find('p').first();
console.log(foo.closestBlock().name);
// Outputs 0.
const bar = div.find('p').next();
console.log(bar.closestBlock().length);
```


### closestOperableBlock()

Traverses the first node and its parents until it finds an operable block.

* Parameters:

  None.

* Return value:

  A `Nodes` object.

Example:

```js
const div = query('<div contenteditable="true"><ul><li><strong>foo</strong>bar</li></ul></div>');
// Outputs "ul".
console.log(div.find('strong').closestOperableBlock().name);
```


### closestContainer()

Traverses the first node and its parents until it finds a div element which contenteditable attribute is true.

* Parameters:

  None.

* Return value:

  A `Nodes` object.

Example:

```js
const div = query('<div contenteditable="true"><p>foo</p>bar</div>');
// Outputs "div".
console.log(div.find('p').closestContainer().name);
```


### closestScroller()

Traverses the first node and its parents until it finds an element which can scroll.

* Parameters:

  None.

* Return value:

  A `Nodes` object.

Example:

```js
const div = query('<div style="overflow: auto;"><p>foo</p>bar</div>');
// Outputs "div".
console.log(div.find('p').closestScroller().name);
```


### parent()

Returns the parent of the first node.

* Parameters:

  None.

* Return value:

  A `Nodes` object.

Example:

```js
const div = query('<div><p>foo</p>bar</div>');
// Outputs "div".
console.log(div.find('p').parent().name);
// Outputs 0.
console.log(div.parent().length);
```


### prev()

Returns the immediately preceding sibling of the first node.

* Parameters:

  None.

* Return value:

  A `Nodes` object.

Example:

```js
const div = query('<div><h1>foo</h1><p>bar</p></div>');
// Outputs "h1".
console.log(div.find('p').prev().name);
// Outputs 0.
console.log(div.find('h1').prev().length);
```


### next()

Returns the immediately following sibling of the first node.

* Parameters:

  None.

* Return value:

  A `Nodes` object.

Example:

```js
const div = query('<div><h1>foo</h1><p>bar</p></div>');
// Outputs "p".
console.log(div.find('h1').next().name);
// Outputs 0.
console.log(div.find('p').next().length);
```


### first()

Returns the first child of the first node.

* Parameters:

  None.

* Return value:

  A `Nodes` object.

Example:

```js
const div = query('<div><h1>foo</h1><p></p></div>');
// Outputs "h1".
console.log(div.first().name);
// Outputs 0.
console.log(div.find('p').first().length);
```


### last()

Returns the last child of the first node.

* Parameters:

  None.

* Return value:

  A `Nodes` object.

Example:

```js
const div = query('<div><h1>foo</h1><p></p></div>');
// Outputs "p".
console.log(div.last().name);
// Outputs 0.
console.log(div.find('p').last().length);
```


### index()

Returns a number indicating the position of the first node relative to its sibling nodes.

* Parameters:

  None.

* Return value:

  A `number` indicating zero-based index.

Example:

```js
const div = query('<div><h1>foo</h1><p>bar</p></div>');
// Outputs 0.
console.log(div.find('h1').index());
// Outputs 1.
console.log(div.find('p').index());
```


### path()

Returns the path of the first node.

* Parameters:

  None.

* Return value:

  A [NodePath](/reference/types.md#nodepath) indicating node path.

Example:

```js
const div = query('<div><p>foo</p><p>bar<strong>bold</strong></p></div>');
// Outputs [1, 1].
console.log(div.find('strong').path());
```


### children()

Returns a list which contains all of the child nodes of the first node.

* Parameters:

  None.

* Return value:

  An `Array` that contains `Nodes` objects.

Example:

```js
const div = query('<div><h1>foo</h1><p>bar</p></div>');
const childNodes = div.children();
// Outputs "h1".
console.log(childNodes[0].name);
// Outputs "p".
console.log(childNodes[1].name);
```


### getWalker()

Returns a generator that iterates over the descendants of the first node.

* Parameters:

  None.

* Return value:

  A `Generator` object.

Example:

```js
const div = query('<div><h1>foo</h1><p>bar</p></div>');
for (const child of div.getWalker()) {
  console.log(child);
}
```


### on()

Sets up an event listener for each element.

* Parameters:

  `type`

  A string representing the event type to listen for.

  `listener`

  A function representing the event handler.

* Return value:

  `this` object.

Example:

```js
const div = query('<div><p>foo</p><p>bar</p></div>');
div.find('p').on('click', event => {
  console.log(event);
});
```


### off()

Removes event listeners previously registered with `on()` method.

* Parameters:

  `type` <Badge type="info" text="Optional" />

  A string which specifies the type of event for which to remove event listeners.

  `listener` <Badge type="info" text="Optional" />

  A function representing the event handler to remove from event targets.

* Return value:

  `this` object.

Example:

```js
const div = query('<div>foo</div>');
const clickListener1 = () => {
  console.log('click');
};
const clickListener2 = () => {
  console.log('click');
};
const mousedownListener = () => {
  console.log('mousedown');
};
div.on('click', clickListener1);
div.on('click', clickListener2);
div.on('mousedown', mousedownListener);
// Removes clickListener1.
div.off('click', clickListener1);
// Removes clickListener1 and clickListener2.
div.off('click');
// Removes all event listeners.
div.off();
```


### emit()

Executes all event listeners attached to all nodes for the given event type.

* Parameters:

  `type`

  A string that specifies the type of the event.

  `event` <Badge type="info" text="Optional" />

  An `Event` object.

* Return value:

  `this` object.

Example:

```js
const div = query('<div>foo</div>');
div.on('click', event => {
  console.log(event);
};);
// no event parameter
div.emit('click');
// with event parameter
div.emit('click', new Event('click'));
```


### getEventListeners()

Returns all event listeners attached to the node at the specified index.

* Parameters:

  `index`

  Zero-based index of the node.

* Return value:

  An `Array` that contains event listeners.

Example:

```js
const div = query('<div>foo</div>');
const clickListener1 = () => {
  console.log('click');
};
const clickListener2 = () => {
  console.log('click');
};
const mousedownListener = () => {
  console.log('mousedown');
};
div.on('click', clickListener1);
div.on('click', clickListener2);
div.on('mousedown', mousedownListener);
console.log(div.getEventListeners(0));
```


### focus()

Sets focus on the specified node, if it can be focused.

* Parameters:

  None.

* Return value:

  `this` object.

Example:

```js
const div = query('<div contenteditable="true"><p>foo</p></div>');
div.focus();
```


### blur()

Removes focus from the specified node.

* Parameters:

  None.

* Return value:

  `this` object.

Example:

```js
const div = query('<div contenteditable="true"><p>foo</p></div>');
div.blur();
```


### clone()

Returns a copy of the first node. If `deep` is true, the copy also includes the node's descendants.

* Parameters:

  `deep` <Badge type="info" text="Optional" />

  A boolean value indicating whether the copy includes the node's descendants. Default value is false.

* Return value:

  A `Nodes` object.

Example:

```js
const div = query('<div>foo</div>');
// without descendants
const newDiv1 = div.clone();
// with descendants
const newDiv2 = div.clone(true);
```


### hasAttr()

Returns a boolean value indicating whether the first node has the specified attribute or not.

* Parameters:

  `attributeName`

  A string representing the name of the attribute.

* Return value:

  `true` if the first node has the specified attribute, and `false` otherwise.

Example:

```js
const div = query('<div foo="1">bar</div>');
// Outputs true.
console.log(div.hasAttr('foo'));
```


### attr()

Returns the value of the specified attribute from the first node, or sets the values of attributes for all elements.

* Parameters:

  `attributeName`

  A string representing the name of the attribute. This parameter can be a key-value object used to set multiple attributes.

  `value` <Badge type="info" text="Optional" />

  A string representing the value of the attribute.

* Return value:

  The value of the attribute if the `attributeName` is a string and the `value` is not given, `this` object otherwise.

Example:

```js
const div = query('<div foo="1">bar</div>');
// Outputs "1".
console.log(div.attr('foo'));
// Sets an attribute.
div.attr('foo', '2');
// Sets multiple attributes.
div.attr({
  class: 'my-class',
  foo: '3',
});
```


### removeAttr()

Removes the attribute with the specified name from every element.

* Parameters:

  `attributeName`

  A string representing the name of the attribute.

* Return value:

  `this` object.

Example:

```js
const div = query('<div foo="1">bar</div>');
div.removeAttr('foo');
```


### hasClass()

Returns a boolean value indicating whether the first node has the specified class or not.

* Parameters:

  `className`

  A string representing the name of the class.

* Return value:

  `true` if the first node has the specified class, and `false` otherwise.

Example:

```js
const div = query('<div class="foo bar">text</div>');
// Outputs true.
console.log(div.hasClass('foo'));
```


### addClass()

Adds the given class to every element.

* Parameters:

  `className`

  A string representing the name of the class. This parameter can be an `Array` used to set multiple classes.

* Return value:

  `this` object.

Example:

```js
const div = query('<div>text</div>');
// Adds a class.
div.addClass('foo');
// Adds two classes.
div.addClass(['foo', 'bar']);
```


### removeClass()

Removes the given class from every element.

* Parameters:

  `className`

  A string representing the name of the class. This parameter can be an `Array` used to set multiple classes.

* Return value:

  `this` object.

Example:

```js
const div = query('<div class="foo bar">text</div>');
// Removes a class.
div.removeClass('foo');
// Removes two classes.
div.removeClass(['foo', 'bar']);
```


### computedCSS()

Returns the value of the given CSS property of the first node, after applying active stylesheets and resolving any basic computation this value may contain.

* Parameters:

  `propertyName`

  A string representing the name of the CSS property.

* Return value:

  The value of the CSS property.

Example:

```js
const div = query('<div>text</div>');
const color = div.computedCSS('color');
```


### css()

Returns the value of the given CSS property of the first node, or sets the values of CSS properties for all elements.

* Parameters:

  `propertyName`

  A string representing the name of the CSS property. This parameter can be a key-value object used to set multiple CSS properties.

  `value` <Badge type="info" text="Optional" />

  A string representing the value of the CSS property. If the value is empty, the CSS property will be removed.

* Return value:

  The value of the CSS property if the `propertyName` is a string and the `value` is not given, `this` object otherwise.

Example:

```js
const div = query('<div style="color: #1f1f1f;">foo</div>');
// Outputs "#1f1f1f".
console.log(div.css('color'));
// Sets a CSS property.
div.css('color', '#f0f0f0');
// Sets multiple CSS properties.
div.css({
  color: '#f0f0f0',
  'font-size': '16px',
});
// Removes a CSS property.
div.css('color', '');
```


### width()

Returns the width of of the first node.

* Parameters:

  None.

* Return value:

  A number indicating the width.

Example:

```js
const div = query('<div>text</div>');
const width = div.width();
```


### innerWidth()

Returns the interior width of the first node, which does not include padding.

* Parameters:

  None.

* Return value:

  A number indicating the width.

Example:

```js
const div = query('<div>text</div>');
const width = div.innerWidth();
```


### height()

Returns the height of of the first node.

* Parameters:

  None.

* Return value:

  A number indicating the height.

Example:

```js
const div = query('<div>text</div>');
const height = div.height();
```


### show()

Displays all nodes.

* Parameters:

  `displayType` <Badge type="info" text="Optional" />

  A string representing the value of the `display` CSS property. Default value is `block`.

* Return value:

  `this` object.

Example:

```js
const div = query('<div style="display: none;">foo</div>');
// Sets the "display" CSS property to "block".
div.show();
// Sets the "display" CSS property to "flex".
div.show('flex');
```


### hide()

Hides all nodes.

* Parameters:

  None.

* Return value:

  `this` object.

Example:

```js
const div = query('<div>foo</div>');
div.hide();
```


### html()

Returns the HTML string contained within the first node, or sets the HTML string for all elements.

* Parameters:

  `value` <Badge type="info" text="Optional" />

  A string representing the HTML string.

* Return value:

  The HTML string if the `value` is not given. `this` object if not.

Example:

```js
const div = query('<div><p>foo</p></div>');
// Outputs "<p>foo</p>".
console.log(div.html());
// Sets inner HTML.
div.html('<p>bar</p>');
```


### text()

Returns the rendered text content of the first node, or sets the rendered text content for all elements.

* Parameters:

  `value` <Badge type="info" text="Optional" />

  A string representing the rendered text content.

* Return value:

  The rendered text content if the `value` is not given. `this` object if not.

Example:

```js
const div = query('<div><p>foo</p></div>');
// Outputs "foo".
console.log(div.text());
// Sets inner text.
div.text('bar');
```


### value()

Returns the value of the first node, which must be an input element, or sets the value for all input elements.

* Parameters:

  `value` <Badge type="info" text="Optional" />

  A string representing the value of the input element.

* Return value:

  The value of the input element if the `value` is not given. `this` object if not.

Example:

```js
const input = query('<input type="text" />');
input.value('foo');
// Outputs "foo".
console.log(input.value());
```


### outerHTML()

Returns the HTML string describing the first node including its descendants.

* Parameters:

  None.

* Return value:

  An HTML string.

Example:

```js
const div = query('<div>foo</div>');
// Outputs "<div>foo</div>".
console.log(div.outerHTML());
```


### empty()

Removes all child nodes for each element.

* Parameters:

  None.

* Return value:

  `this` object.

Example:

```js
const div = query('<div>foo</div>');
div.empty();
// Outputs "<div></div>".
console.log(div.outerHTML());
```


### prepend()

Inserts the specified content just inside the first node, before its first child.

* Parameters:

  `content`

  HTML string, [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node), [DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment), and `Nodes` object.

* Return value:

  `this` object.

Example:

```js
const div = query('<div><p>foo</p></div>');
div.prepend('<p>bar</p>');
// Outputs "<p>bar</p><p>foo</p>".
console.log(div.html());
```


### append()

Inserts the specified content just inside the first node, after its last child.

* Parameters:

  `content`

  HTML string, [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node), [DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment), and `Nodes` object.

* Return value:

  `this` object.

Example:

```js
const div = query('<div><p>foo</p></div>');
div.append('<p>bar</p>');
// Outputs "<p>foo</p><p>bar</p>".
console.log(div.html());
```


### before()

Inserts the specified content before the first node.

* Parameters:

  `content`

  HTML string, [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node), [DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment), and `Nodes` object.

* Return value:

  `this` object.

Example:

```js
const div = query('<div><p>foo</p></div>');
div.find('p').before('<p>bar</p>');
// Outputs "<p>bar</p><p>foo</p>".
console.log(div.html());
```


### after()

Inserts the specified content after the first node.

* Parameters:

  `content`

  HTML string, [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node), [DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment), and `Nodes` object.

* Return value:

  `this` object.

Example:

```js
const div = query('<div><p>foo</p></div>');
div.find('p').after('<p>bar</p>');
// Outputs "<p>foo</p><p>bar</p>".
console.log(div.html());
```


### replaceWith()

Replaces the first node with the given new content.

* Parameters:

  `newContent`

  HTML string, [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node), and `Nodes` object.

* Return value:

  `this` object.

Example:

```js
const div = query('<div><p>foo</p></div>');
div.find('p').replaceWith('<p>bar</p>');
// Outputs "<p>bar</p>".
console.log(div.html());
```


### remove()

Removes all nodes from the DOM.

* Parameters:

  `keepChildren` <Badge type="info" text="Optional" />

  A boolean value indicating whether the node's descendants is removed. Default value is false.

* Return value:

  `this` object.

Example:

```js
const div = query('<div><p>foo</p></div>');
div.find('p').remove();
// Outputs "<div></div>".
console.log(div.outerHTML());
```


### splitText()

Splits the first node, which must be a text node, into two nodes at the specified offset, keeping both as siblings in the tree.

* Parameters:

  `offset`

  The index immediately before which to split the text node.

* Return value:

  A `Nodes` object representing the newly created text node that contains the text after the specified offset point.

Example:

```js
const node = new Nodes(document.createTextNode('foobar'));
const newNode = node.splitText(3);
// Outputs "foo".
console.log(node.text()));
// Outputs "bar".
console.log(newNode.text()));
```


### toString()

Returns information about the first node, which is used for debugging.

* Parameters:

  None.

* Return value:

  A string representing information about the first node.

Example:

```js
const body = new Nodes(document.body);
console.log(body.toString()));
```


### info()

Prints information about the first node, which is used for debugging.

* Parameters:

  None.

* Return value:

  None.

Example:

```js
const body = new Nodes(document.body);
body.info();
```
