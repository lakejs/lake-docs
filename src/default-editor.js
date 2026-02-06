import 'katex/dist/katex.css';
import katex from 'katex';
import * as CodeMirror from 'lake-codemirror';
import { Editor, Toolbar, icons } from 'lakelib';
import helloWorld, { helloWorldBox } from './plugins/hello-world';

window.katex = katex;
window.LakeCodeMirror = CodeMirror;
window.Editor = Editor;

Editor.box.add(helloWorldBox);

Editor.plugin.add('helloWorld', helloWorld);

// These emojis are sourced from Fluent Emoji.
// https://github.com/microsoft/fluentui-emoji
const emojiItems = [
  { value: 'face_blowing_a_kiss_color.svg', text: 'Face blowing a kiss' },
  { value: 'face_exhaling_color.svg', text: 'Face exhaling' },
  { value: 'face_holding_back_tears_color.svg', text: 'Face holding back tears' },
  { value: 'face_in_clouds_color.svg', text: 'Face in clouds' },
  { value: 'face_savoring_food_color.svg', text: 'Face savoring food' },
  { value: 'face_screaming_in_fear_color.svg', text: 'Face screaming in fear' },
  { value: 'face_vomiting_color.svg', text: 'Face vomiting' },
  { value: 'face_with_diagonal_mouth_color.svg', text: 'Face with diagonal mouth' },
  { value: 'face_with_hand_over_mouth_color.svg', text: 'Face with hand over mouth' },
  { value: 'face_with_head-bandage_color.svg', text: 'Face with head-bandage' },
  { value: 'face_with_medical_mask_color.svg', text: 'Face with medical mask' },
  { value: 'face_with_monocle_color.svg', text: 'Face with monocle' },
  { value: 'face_with_open_eyes_and_hand_over_mouth_color.svg', text: 'Face with open eyes and hand over mouth' },
  { value: 'face_with_open_mouth_color.svg', text: 'Face with open mouth' },
  { value: 'face_with_peeking_eye_color.svg', text: 'Face with peeking eye' },
  { value: 'face_with_raised_eyebrow_color.svg', text: 'Face with raised eyebrow' },
  { value: 'face_with_rolling_eyes_color.svg', text: 'Face with rolling eyes' },
  { value: 'face_with_spiral_eyes_color.svg', text: 'Face with spiral eyes' },
  { value: 'face_with_steam_from_nose_color.svg', text: 'Face with steam from nose' },
  { value: 'face_with_symbols_on_mouth_color.svg', text: 'Face with symbols on mouth' },
  { value: 'face_with_tears_of_joy_color.svg', text: 'Face with tears of joy' },
  { value: 'face_with_thermometer_color.svg', text: 'Face with thermometer' },
  { value: 'face_with_tongue_color.svg', text: 'Face with tongue' },
  { value: 'face_without_mouth_color.svg', text: 'Face without mouth' },
];

const emojiMenuItems = [];
for (const item of emojiItems) {
  emojiMenuItems.push({
    icon: `<img src="../assets/emojis/${item.value}" alt="${item.text}" title="${item.text}" />`,
    value: item.value,
    text: item.text,
  });
}

// https://unicode.org/emoji/charts/full-emoji-list.html
const specialCharacterItems = [
  { value: '😃', text: 'Grinning face with big eyes' },
  { value: '😁', text: 'Beaming face with smiling eyes' },
  { value: '😂', text: 'Face with tears of joy' },
  { value: '😉', text: 'Winking face' },
  { value: '😊', text: 'Smiling face with smiling eyes' },
  { value: '😍', text: 'Smiling face with heart-eyes' },
  { value: '😘', text: 'Face blowing a kiss' },
  { value: '😚', text: 'Kissing face with closed eyes' },
  { value: '😜', text: 'Winking face with tongue' },
  { value: '😏', text: 'Smirking face' },
  { value: '😒', text: 'Unamused face' },
  { value: '😌', text: 'Relieved face' },
  { value: '😔', text: 'Pensive face' },
  { value: '😪', text: 'Sleepy face' },
  { value: '😷', text: 'Face with medical mask' },
  { value: '😵', text: 'Face with crossed-out eyes' },
  { value: '😲', text: 'Astonished face' },
  { value: '😳', text: 'Flushed face' },

  { value: '😨', text: 'Fearful face' },
  { value: '😰', text: 'Anxious face with sweat' },
  { value: '😢', text: 'Crying face' },
  { value: '😭', text: 'Loudly crying face' },
  { value: '😱', text: 'Face screaming in fear' },
  { value: '😖', text: 'Confounded face' },
  { value: '😣', text: 'Persevering face' },
  { value: '😓', text: 'Downcast face with sweat' },
  { value: '😩', text: 'Weary face' },
  { value: '😫', text: 'Tired face' },
  { value: '😤', text: 'Face with steam from nose' },
  { value: '😡', text: 'Enraged face' },
  { value: '😠', text: 'Angry face' },
  { value: '👿', text: 'Angry face with horns' },
  { value: '💀', text: 'Skull' },
  { value: '💩', text: 'Pile of poo' },
  { value: '👹', text: 'Ogre' },
  { value: '👺', text: 'Goblin' },

  { value: '💌', text: 'Love letter' },
  { value: '💘', text: 'Heart with arrow' },
  { value: '💝', text: 'Heart with ribbon' },
  { value: '💖', text: 'Sparkling heart' },
  { value: '💓', text: 'Beating heart' },
  { value: '💞', text: 'Revolving hearts' },
  { value: '💕', text: 'Two hearts' },
  { value: '💔', text: 'Broken heart' },
  { value: '💛', text: 'Yellow heart' },
  { value: '💚', text: 'Green heart' },
  { value: '💙', text: 'Blue heart' },
  { value: '💜', text: 'Purple heart' },
  { value: '💋', text: 'Kiss mark' },
  { value: '💯', text: 'Hundred points' },
  { value: '💢', text: 'Anger symbol' },
  { value: '💥', text: 'Collision' },
  { value: '💫', text: 'Dizzy' },
  { value: '💦', text: 'Sweat droplets' },

  { value: '💨', text: 'Dashing away' },
  { value: '💤', text: 'ZZZ' },
  { value: '👋', text: 'Waving hand' },
  { value: '✋', text: 'Raised hand' },
  { value: '👌', text: 'OK hand' },
  { value: '✌', text: 'Victory hand' },
  { value: '👈', text: 'Backhand index pointing left' },
  { value: '👉', text: 'Backhand index pointing right' },
  { value: '👆', text: 'Backhand index pointing up' },
  { value: '👇', text: 'Backhand index pointing down' },
  { value: '☝', text: 'Index pointing up' },
  { value: '👍', text: 'Thumbs up' },
  { value: '👎', text: 'Thumbs down' },
  { value: '✊', text: 'Raised fist' },
  { value: '👊', text: 'Oncoming fist' },
  { value: '👏', text: 'Clapping hands' },
  { value: '🙏', text: 'Folded hands' },
  { value: '💪', text: 'Flexed biceps' },

  { value: '👶', text: 'Baby' },
  { value: '👨', text: 'Man' },
  { value: '👩', text: 'Woman' },
  { value: '👴', text: 'Old man' },
  { value: '👵', text: 'Old woman' },
  { value: '🙍', text: 'Person frowning' },
  { value: '🙎', text: 'Person pouting' },
  { value: '🙅', text: 'Person gesturing NO' },
  { value: '🙆', text: 'Person gesturing OK' },
  { value: '🙋', text: 'Person raising hand' },
  { value: '🙇', text: 'Person bowing' },
  { value: '👮', text: 'Police officer' },
  { value: '👷', text: 'Construction worker' },
  { value: '⬛', text: 'Black large square' },
  { value: '⬜', text: 'White large square' },
  { value: '⚫', text: 'Black circle' },
  { value: '✅', text: 'Check mark button' },
  { value: '❌', text: 'Cross mark' },

  { value: '$', text: 'Dollar' },
  { value: '€', text: 'Euro' },
  { value: '£', text: 'Pound' },
  { value: '¥', text: 'Yuan / Yen' },
  { value: '₩', text: 'Won' },
  { value: '₿', text: 'Bitcoin' },
  { value: '←', text: 'Leftwards' },
  { value: '→', text: 'Rightwards' },
  { value: '↑', text: 'Upwards' },
  { value: '↓', text: 'Downwards' },
  { value: '±', text: 'Plus-minus' },
  { value: '÷', text: 'Division' },
  { value: '≤', text: 'Less-than or equal to' },
  { value: '≥', text: 'Greater-than or equal to' },
  { value: '≠', text: 'Not equal to' },
  { value: '≈', text: 'Almost equal to' },
  { value: '∞', text: 'Infinity' },
  { value: '∠', text: 'Angle' },
];

const emojiItem = {
  name: 'emoji',
  type: 'dropdown',
  downIcon: icons.get('down'),
  icon: icons.get('emoji'),
  tooltip: 'Emoji',
  menuType: 'icon',
  menuItems: emojiMenuItems,
  menuWidth: '264px',
  onSelect: (editor, value) => {
    const currentItem = emojiItems.find(item => item.value === value);
    if (!currentItem) {
      return;
    }
    editor.command.execute('emoji', {
      url: `../assets/emojis/${currentItem.value}`,
      title: currentItem.text,
    });
  },
};

const specialCharacterItem = {
  name: 'specialCharacter',
  type: 'dropdown',
  downIcon: icons.get('down'),
  icon: icons.get('specialCharacter'),
  tooltip: 'Special character',
  menuType: 'character',
  menuItems: specialCharacterItems,
  menuWidth: '270px',
  menuHeight: '180px',
  onSelect: (editor, value) => {
    editor.command.execute('specialCharacter', value);
  },
};

const helloWorldItem = {
  name: 'helloWorld',
  type: 'button',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M220.17,100,202.86,70a28,28,0,0,0-38.24-10.25,27.69,27.69,0,0,0-9,8.34L138.2,38a28,28,0,0,0-48.48,0A28,28,0,0,0,48.15,74l1.59,2.76A27.67,27.67,0,0,0,38,80.41a28,28,0,0,0-10.24,38.25l40,69.32a87.47,87.47,0,0,0,53.43,41,88.56,88.56,0,0,0,22.92,3,88,88,0,0,0,76.06-132Zm-6.66,62.64A72,72,0,0,1,81.62,180l-40-69.32a12,12,0,0,1,20.78-12L81.63,132a8,8,0,1,0,13.85-8L62,66A12,12,0,1,1,82.78,54L114,108a8,8,0,1,0,13.85-8L103.57,58h0a12,12,0,1,1,20.78-12l33.42,57.9a48,48,0,0,0-5.54,60.6,8,8,0,0,0,13.24-9A32,32,0,0,1,172.78,112a8,8,0,0,0,2.13-10.4L168.23,90A12,12,0,1,1,189,78l17.31,30A71.56,71.56,0,0,1,213.51,162.62ZM184.25,31.71A8,8,0,0,1,194,26a59.62,59.62,0,0,1,36.53,28l.33.57a8,8,0,1,1-13.85,8l-.33-.57a43.67,43.67,0,0,0-26.8-20.5A8,8,0,0,1,184.25,31.71ZM80.89,237a8,8,0,0,1-11.23,1.33A119.56,119.56,0,0,1,40.06,204a8,8,0,0,1,13.86-8,103.67,103.67,0,0,0,25.64,29.72A8,8,0,0,1,80.89,237Z"></path></svg>',
  tooltip: 'Hello World',
  onClick: (editor) => {
    editor.command.execute('helloWorld');
  },
};

export function createDefaultEditor(config) {
  const toolbar = new Toolbar({
    root: config.toolbarRoot,
    items: config.toolbarItems ? config.toolbarItems.map(item => {
      if (item === 'emoji') {
        return emojiItem;
      } else if (item === 'specialCharacter') {
        return specialCharacterItem;
      } else if (item === 'helloWorld') {
        return helloWorldItem;
      } else {
        return item;
      }
    }) : undefined,
  });
  const editor = new Editor({
    root: config.editorRoot,
    toolbar,
    lang: config.lang || 'en-US',
    value: config.value || '<p><br /></p>',
    showMessage: (type, message) => {
      if (type === 'error') {
        window.alert(message);
      } else {
        console.log(message);
      }
    },
    image: {
      requestMethod: 'GET',
      requestAction: '/assets/json/upload-image.json',
    },
    media: {
      requestMethod: 'GET',
      requestAction: '/assets/json/upload-media.json',
    },
    file: {
      requestMethod: 'GET',
      requestAction: '/assets/json/upload-file.json',
    },
    slash: config.slashItems ? {
      items: config.slashItems,
    } : true,
    mention: {
      requestAction: '../assets/json/mention.json',
    },
  });
  editor.render();
  window.editor = editor;
  return editor;
}
