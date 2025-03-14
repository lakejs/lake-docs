import 'katex/dist/katex.css';
import katex from 'katex';
import * as CodeMirror from 'lake-codemirror';
import { Editor, Toolbar, toHex, icons } from 'lakelib';

window.katex = katex;
window.LakeCodeMirror = CodeMirror;
window.Editor = Editor;

const colors = [
  '#E53333', '#E56600', '#FF9900', '#64451D', '#DFC5A4', '#FFE500',
  '#009900', '#006600', '#99BB00', '#B8D100', '#60D978', '#00D5FF',
  '#337FE5', '#003399', '#4C33E5', '#9933E5', '#CC33E5', '#EE33EE',
  '#FFFFFF', '#CCCCCC', '#999999', '#666666', '#333333', '#000000',
];
const colorMenuItems = [
  {
    value: '',
    text: 'Remove color',
  },
];
for (const color of colors) {
  colorMenuItems.push({
    value: color.toLowerCase(),
    text: color.toUpperCase(),
  });
}

const heading = {
  name: 'heading3',
  type: 'button',
  icon: icons.get('heading'),
  tooltip: 'Heading',
  isSelected: activeItems => !!activeItems.find(item => item.name === 'h3'),
  onClick: editor => {
    const selectedValues = editor.command.selectedValues('heading');
    editor.command.execute('heading', selectedValues.indexOf('h3') >= 0 ? 'p' : 'h3');
  },
};

const fontColor = {
  name: 'fontColor',
  type: 'dropdown',
  downIcon: icons.get('down'),
  icon: icons.get('fontColor'),
  accentIcon: icons.get('fontColorAccent'),
  defaultValue: '#e53333',
  tooltip: 'Font color',
  width: 'auto',
  menuType: 'color',
  menuItems: colorMenuItems,
  selectedValues: activeItems => {
    const currentValue = activeItems[0].node.computedCSS('color');
    return [toHex(currentValue)];
  },
  onSelect: (editor, value) => {
    editor.command.execute('fontColor', value);
  },
};

const highlight = {
  name: 'highlight',
  type: 'dropdown',
  downIcon: icons.get('down'),
  icon: icons.get('highlight'),
  accentIcon: icons.get('highlightAccent'),
  defaultValue: '#ffe500',
  tooltip: 'Highlight',
  width: 'auto',
  menuType: 'color',
  menuItems: colorMenuItems,
  selectedValues: activeItems => {
    const currentValue = activeItems[0].node.computedCSS('background-color');
    return [toHex(currentValue)];
  },
  onSelect: (editor, value) => {
    editor.command.execute('highlight', value);
  },
};

const toolbarItems = [
  heading,
  'blockQuote',
  'bold',
  'italic',
  'code',
  '|',
  fontColor,
  highlight,
  '|',
  'numberedList',
  'bulletedList',
  'checklist',
  '|',
  'link',
];

export function createCommentBox(config) {
  const toolbar = new Toolbar({
    root: config.toolbarRoot,
    items: toolbarItems,
    placement: 'bottom',
  });
  const editor = new Editor({
    root: config.editorRoot,
    toolbar,
    placeholder: 'Add your comment here...',
    value: config.value || '<p><br /></p>',
    indentWithTab: false,
    mention: {
      requestAction: '../assets/json/mention.json',
    },
  });
  editor.render();
  return editor;
}
