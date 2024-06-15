import * as CodeMirror from 'lake-codemirror';
import { Editor, Toolbar, icons } from 'lakelib';

window.LakeCodeMirror = CodeMirror;

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

const emoji = {
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

export function createDefaultEditor(config) {
  const toolbar = new Toolbar({
    root: config.toolbarRoot,
    items: config.toolbarItems ? config.toolbarItems.map(item => {
      if (item === 'emoji') {
        return emoji;
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
    onMessage: (type, message) => {
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
    file: {
      requestMethod: 'GET',
      requestAction: '/assets/json/upload-file.json',
    },
  });
  editor.render();
  return editor;
}
