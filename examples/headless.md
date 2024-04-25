---
layout: doc
title: Headless editor
---

# {{ $frontmatter.title }}

This example shows you how to customize a toolbar that is well adapted to your needs.

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const toolbarRef = ref(null);
const contentRef = ref(null);

let editor = null;

onMounted(() => {
  if (editor) {
    editor.unmount();
  }
  (async () => {
    window.LakeCodeMirror = await import('lake-codemirror');
    const { Editor, Toolbar, Utils, Button } = await import('lakelib');
    editor = new Editor({
      root: contentRef.value,
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
  })();
});
onUnmounted(() => {
  if (editor) {
    editor.unmount();
    editor = null;
  }
});
</script>

<div class="vp-raw">
  <div :class="$style.toolbar" ref="toolbarRef"></div>
  <div :class="$style.content" ref="contentRef"></div>
</div>

<style module>
.toolbar {
  margin-top: 16px;
}
.toolbar :global .lake-button {
  margin-right: 8px;
  margin-bottom: 16px;
}
.content {
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  height: 300px;
  overflow: auto;
}
</style>
