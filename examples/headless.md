---
layout: example
title: Default configuration
---

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const toolbarRef = ref(null);
const contentRef = ref(null);

onMounted(() => {
  if (window.editor) {
    window.editor.unmount();
  }
  import('lakelib').then(module => {
    const { Editor, Toolbar, Utils, Button } = module;
    const editor = new Editor({
      root: contentRef.value,
      value: window.headlessValue || '',
    });
    const toolbarRoot = Utils.query(toolbarRef.value);
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
    editor.event.on('statechange', stateData => {
      const { disabledNameMap, selectedNameMap, selectedValuesMap } = stateData;
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
    window.editor = editor;
  });
});
onUnmounted(() => {
  if (window.editor) {
    window.editor.unmount();
    window.editor = null;
  }
});
</script>

<div :class="$style.toolbar" class="headless-toolbar" ref="toolbarRef"></div>
<div :class="$style.content" ref="contentRef"></div>

<style global>
.headless-toolbar .lake-button {
  margin-right: 8px;
}
</style>

<style module>
.toolbar {
  padding-bottom: 8px;
}
.content {
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  height: 300px;
  overflow: auto;
}
</style>
