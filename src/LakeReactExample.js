import 'lakelib/lib/lake.css';
import { Editor, Toolbar } from 'lakelib';
import { useRef, useEffect, useState } from 'react';

export default function Lake({ defaultValue }) {
  const toolbarRef = useRef(null);
  const contentRef = useRef(null);

  const [content, setContent] = useState(defaultValue);

  useEffect(() => {
    const toolbar = new Toolbar({
      root: toolbarRef.current,
    });
    const editor = new Editor({
      root: contentRef.current,
      toolbar,
      value: defaultValue,
    });
    editor.render();
    editor.event.on('change', (value) => {
      setContent(value);
    });
    return () => editor.unmount();
  }, []);

  return (
    <div className="my-editor">
      <div className="my-toolbar" ref={toolbarRef}></div>
      <div className="my-content" ref={contentRef}></div>
    </div>
  );
}
