import * as CodeMirror from 'lake-codemirror';
import { Editor, Utils, Button } from 'lakelib';

window.LakeCodeMirror = CodeMirror;

function createToolbar(config) {
  const editor = config.editor;
  const toolbarRoot = Utils.query(config.root);
  toolbarRoot.addClass('lake-custom-properties');
  const buttonList = [];
  // Heading
  buttonList.push(new Button({
    root: toolbarRoot,
    name: 'heading',
    text: 'H',
    tooltip: 'Heading',
    onClick: () => {
      editor.focus();
      editor.command.execute('heading', 'h3');
    },
  }));
  // Paragraph
  buttonList.push(new Button({
    root: toolbarRoot,
    name: 'paragraph',
    text: 'Paragraph',
    onClick: () => {
      editor.focus();
      editor.command.execute('heading', 'p');
    },
  }));
  // Block quote
  buttonList.push(new Button({
    root: toolbarRoot,
    name: 'blockQuote',
    text: 'Quote',
    onClick: () => {
      editor.focus();
      editor.command.execute('blockQuote');
    },
  }));
  // Bold
  buttonList.push(new Button({
    root: toolbarRoot,
    name: 'bold',
    text: 'B',
    tooltip: 'Bold',
    onClick: () => {
      editor.focus();
      editor.command.execute('bold');
    },
  }));
  // Italic
  buttonList.push(new Button({
    root: toolbarRoot,
    name: 'italic',
    text: 'I',
    tooltip: 'Italic',
    onClick: () => {
      editor.focus();
      editor.command.execute('italic');
    },
  }));
  // Code
  buttonList.push(new Button({
    root: toolbarRoot,
    name: 'code',
    text: 'Code',
    onClick: () => {
      editor.focus();
      editor.command.execute('code');
    },
  }));
  // Link
  buttonList.push(new Button({
    root: toolbarRoot,
    name: 'link',
    text: 'Link',
    onClick: () => {
      editor.focus();
      editor.command.execute('link');
    },
  }));
  for (const button of buttonList) {
    button.render();
  }
  return buttonList;
}

export function createHeadlessEditor(config) {
  const editor = new Editor({
    root: config.editorRoot,
    value: config.value || '<p><br /></p>',
  });
  const buttonList = createToolbar({
    editor,
    root: config.toolbarRoot,
  });
  editor.event.on('statechange', state => {
    const { disabledNameMap, selectedNameMap, selectedValuesMap } = state;
    for (const button of buttonList) {
      const name = button.node.attr('name');
      let isDisabled = disabledNameMap.get(name);
      let isSelected = selectedNameMap.get(name);
      const headingValues = selectedValuesMap.get('heading') ?? [];
      if (name === 'heading') {
        isSelected = /^h[1-6]$/i.test(headingValues[0] || '');
      } else if (name === 'paragraph') {
        isSelected = headingValues[0] === 'p';
      } else {
        isDisabled = disabledNameMap.get(name);
        isSelected = selectedNameMap.get(name);
      }
      if (isDisabled) {
        button.node.attr('disabled', 'true');
      } else {
        button.node.removeAttr('disabled');
      }
      if (isSelected) {
        button.node.addClass('lake-button-selected');
      } else {
        button.node.removeClass('lake-button-selected');
      }
    }
  });
  editor.render();
}
