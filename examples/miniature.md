---
layout: example
title: Miniature toolbar
---

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

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

const toolbarRef = ref(null);
const contentRef = ref(null);

onMounted(() => {
  if (window.editor) {
    window.editor.unmount();
  }
  import('lakelib').then(module => {
    const { Editor, Toolbar, Utils, icons } = module;

    const heading = {
      name: 'heading',
      type: 'button',
      icon: icons.get('heading'),
      tooltip: 'Heading',
      isSelected: appliedItems => !!appliedItems.find(item => item.name === 'h3'),
      onClick: editor => {
        editor.command.execute('heading', 'h3');
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
      selectedValues: appliedItems => {
        const currentValue = appliedItems[0].node.computedCSS('color');
        return [Utils.toHex(currentValue)];
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
      selectedValues: appliedItems => {
        const currentValue = appliedItems[0].node.computedCSS('background-color');
        return [Utils.toHex(currentValue)];
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
    const toolbar = new Toolbar({
      root: toolbarRef.value,
      items: toolbarItems,
    });
    const editor = new Editor({
      root: contentRef.value,
      toolbar,
      value: window.miniatureValue || '',
      indentWithTab: false,
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

<div :class="$style.editor" class="miniature-editor">
  <div :class="$style.toolbar" ref="toolbarRef"></div>
  <div :class="$style.content" ref="contentRef"></div>
</div>

<style global>
.miniature-editor .lake-toolbar .lake-color-dropdown-menu {
  width: 156px;
}
.miniature-editor .lake-toolbar .lake-color-dropdown-menu li:first-child .lake-dropdown-menu-text {
  text-align: center;
}
.miniature-editor .lake-root-focused {
  outline: 2px solid var(--input-border-hover-color);
  outline-offset: -2px;
}
.miniature-editor .lake-container {
  padding: 8px 12px;
}
</style>

<style module>
.editor {
  box-sizing: border-box;
  min-width: 300px;
  max-width: 600px;
}
.toolbar {
  border: 1px solid #d9d9d9;
  border-bottom: none;
}
.content {
  border: 1px solid #d9d9d9;
  height: 100px;
  overflow: auto;
  outline-offset: -2px;
}
</style>
