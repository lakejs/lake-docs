import './hello-world-box.css';
import helloWorldBox from './hello-world-box';

export { helloWorldBox };

export default (editor) => {
  if (editor.readonly) {
    return;
  }
  editor.command.add('helloWorld', {
    execute: (value) => {
      editor.selection.insertBox('helloWorld', value);
      editor.history.save();
    },
  });
};
