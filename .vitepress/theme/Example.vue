<script setup>
import 'lakelib/lib/lake.css';
import { onMounted, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vitepress';

const { path } = useRoute();
const { go } = useRouter();

const menuItems = [
  {
    url: '/examples/',
    text: 'Default configuration',
  },
  {
    url: '/examples/full-featured',
    text: 'Full-featured editor',
  },
  {
    url: '/examples/document',
    text: 'Document editor',
  },
  {
    url: '/examples/miniature',
    text: 'Miniature toolbar',
  },
  {
    url: '/examples/headless',
    text: 'Headless editor',
  },
  {
    url: '/examples/huge-content',
    text: 'Huge Content',
  },
  {
    url: '/examples/content-view',
    text: 'Content view',
  },
];

const languageMenuItems = [
  {
    value: 'en-US',
    text: 'English',
  },
  {
    value: 'zh-CN',
    text: '简体中文',
  },
  {
    value: 'ja',
    text: '日本語',
  },
  {
    value: 'ko',
    text: '한국어',
  },
];

const directionMenuItems = [
  {
    value: 'ltr',
    text: 'Left to Right',
  },
  {
    value: 'rtl',
    text: 'Right to Left',
  },
];

onMounted(() => {
  import('lakelib').then(module => {
    const { Editor, Utils, Dropdown } = module;
    const { query, safeTemplate } = Utils;
    window.Editor = Editor;
    function renderLanguage() {
      const localStorageKey = 'lake-example-language';
      const root = query('.header .language');
      root.empty();
      const languageDropdown = new Dropdown({
        root,
        name: 'language',
        icon: '<img src="/assets/globe.svg" />',
        defaultValue: localStorage.getItem(localStorageKey) ?? 'en-US',
        tooltip: 'Select language',
        width: 'auto',
        menuType: 'list',
        menuItems: languageMenuItems,
        onSelect: value => {
          localStorage.setItem(localStorageKey, value);
          window.location.reload();
        },
      });
      languageDropdown.render();
    }

    function renderDirection() {
      const localStorageKey = 'lake-example-direction';
      const root = query('.header .direction');
      root.empty();
      const directionDropdown = new Dropdown({
        root,
        name: 'direction',
        icon: '<img src="/assets/direction.svg" />',
        defaultValue: localStorage.getItem(localStorageKey) ?? 'en-US',
        tooltip: 'Select writing direction',
        width: 'auto',
        menuType: 'list',
        menuItems: directionMenuItems,
        onSelect: value => {
          localStorage.setItem(localStorageKey, value);
          window.location.reload();
        },
      });
      directionDropdown.render();
    }

    function renderHeader(pageType) {
      let currentItem;
      for (const item of menuItems) {
        if (path.indexOf(item.url) === 0) {
          currentItem = item;
          break;
        }
      }
      if (!currentItem) {
        return;
      }
      const titleNode = query('.header .title');
      titleNode.text(currentItem.text);
      renderLanguage();
      renderDirection();
      const menuNode = query('.header .menu');
      menuNode.empty();
      menuNode.append('<button type="button" name="list"><img src="/assets/list.svg" /></button>');
      const ul = query('<ul />');
      menuNode.append(ul);
      for (const item of menuItems) {
        ul.append(safeTemplate`<li><a href="${item.url}">${item.text}</a></li>`);
      }
      ul.on('click', event => {
        event.preventDefault();
        event.stopPropagation();
        const link = query(event.target).closest('a');
        if (link.length === 0) {
          return;
        }
        menuNode.find('button').removeClass('hovered');
        ul.hide();
        go(link.attr('href'));
      });
      let timeoutId = null;
      const showMenuListener = () => {
        if (timeoutId) {
          window.clearTimeout(timeoutId);
          timeoutId = null;
        }
        menuNode.find('button').addClass('hovered');
        menuNode.find('ul').show();
      };
      menuNode.on('click', showMenuListener);
      menuNode.on('mouseenter', showMenuListener);
      menuNode.on('mouseleave', () => {
        timeoutId = window.setTimeout(() => {
          menuNode.find('button').removeClass('hovered');
          menuNode.find('ul').hide();
        }, 300);
      });
    }
    renderHeader();
  });
});
</script>

<template>
  <div class="vp-raw">
    <div class="header">
      <div class="menu"></div>
      <div class="title"></div>
      <div class="language lake-custom-properties"></div>
      <div class="direction lake-custom-properties"></div>
    </div>
    <div class="main">
      <Content />
    </div>
  </div>
</template>

<style global>
.header {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif;
  font-weight: normal;
  line-height: normal;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 44px 1fr 38px 36px;
  align-items: center;
  padding: 16px 8px;
  margin: 0 auto;
  max-width: 1000px;
}
.header .menu {
  position: relative;
  line-height: 0;
}
.header .menu img {
  width: 24px;
  height: 24px;
  margin: 6px;
}
.header .menu button {
  border-radius: 5px;
  border: 0;
  background-color: #fff;
  padding: 0;
  margin: 0;
  line-height: 0;
  cursor: pointer;
  user-select: none;
}
.header .menu .hovered {
  background-color: #0000000a;
}
.header .menu ul {
  position: absolute;
  top: 36px;
  inset-inline-start: 0;
  z-index: 1212;
  list-style: none;
  margin: 0;
  padding: 6px 0;
  border-radius: 5px;
  border: 1px solid #d9d9d9;
  background-color: #fff;
  box-shadow: 0 6px 16px 0 #00000014, 0 3px 6px -4px #0000001f, 0 9px 28px 8px #0000000d;
  display: none;
}
.header .menu ul li {
  margin: 0;
  padding: 6px 24px;
  white-space: nowrap;
  font-size: 14px;
  line-height: normal;
}
.header .menu ul li a {
  color: #000000e0;
  text-decoration: none;
}
.header .menu ul li a:hover {
  text-decoration: underline;
}
.header .title {
  font-size: 18px;
}
.header .lake-dropdown .lake-dropdown-icon img {
  width: 24px;
  height: 24px;
}
.header .lake-dropdown .lake-dropdown-menu {
  top: 36px;
}
.main {
  box-sizing: border-box;
  padding: 0 8px 32px 8px;
  margin: 0 auto;
  max-width: 1000px;
}
</style>
