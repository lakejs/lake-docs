<script lang="ts">
  import 'lakelib/lib/lake.css';
  import { Editor, Toolbar } from 'lakelib';
  import { onMount, onDestroy } from 'svelte';

  let toolbarNode;
  let contentNode;
  let editor;

  onMount(() => {
    const toolbar = new Toolbar({
      root: toolbarNode,
    });
    editor = new Editor({
      root: contentNode,
      toolbar,
      value: '<p>Hello World!</p>',
    });
    editor.render();
    editor.event.on('change', (value) => {
      console.log(value);
    });
  });

  onDestroy(() => {
    if (editor) {
      editor.unmount();
    }
  });
</script>

<div class="my-editor">
  <div class="my-toolbar" bind:this={toolbarNode}></div>
  <div class="my-content" bind:this={contentNode}></div>
</div>
