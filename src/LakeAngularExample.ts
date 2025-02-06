import 'lakelib/lib/lake.css';
import { Editor, Toolbar } from 'lakelib';
import { Component, ElementRef, afterRender } from '@angular/core';

@Component({
  selector: 'lake-root',
  standalone: true,
  template: `
    <div class="my-editor">
      <div class="my-toolbar"></div>
      <div class="my-content"></div>
    </div>
  `,
})
export class Lake {
  private editor: Editor | null = null;

  constructor(elementRef: ElementRef) {
    const nativeElement = elementRef.nativeElement;

    afterRender(() => {
      if (this.editor) {
        this.editor.unmount();
      }
      const toolbar = new Toolbar({
        root: nativeElement.querySelector('.my-toolbar'),
      });
      const editor = new Editor({
        root: nativeElement.querySelector('.my-content'),
        toolbar,
        value: '<p>Hello World!</p>',
      });
      editor.render();
      editor.event.on('change', (value) => {
        console.log(value);
      });
      this.editor = editor;
    });
  }
}
