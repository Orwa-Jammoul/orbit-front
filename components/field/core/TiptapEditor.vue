<template>
  <div class="orbit-tiptap-editor">
    <div class="editor" v-if="editor">
      <div class="editor-frame">

        <div
          class="button"
          @click="editor.chain().focus().toggleBold().run()"
          :disabled="!editor.can().chain().focus().toggleBold().run()"
          :class="{ 'is-active': editor.isActive('bold') }"
          title="Bold"
        >
          <Icon name="mdi:format-bold" size="25px"/>
        </div>
        <div
          class="button"
          @click="editor.chain().focus().toggleItalic().run()"
          :disabled="!editor.can().chain().focus().toggleItalic().run()"
          :class="{ 'is-active': editor.isActive('italic') }"
          title="Italic"
        >
          <Icon name="mdi:format-italic" size="25px"/>
        </div>
        <div
          class="button"
          @click="editor.chain().focus().toggleStrike().run()"
          :disabled="!editor.can().chain().focus().toggleStrike().run()"
          :class="{ 'is-active': editor.isActive('strike') }"
          title="Strikethrough"
        >
          <Icon name="mdi:format-strikethrough" size="25px"/>
        </div>
        
        <!-- <div class="color-picker-frame">
          <input
            class="color-picker"
            type="color"
            @input="editor.chain().focus().setColor($event.target.value).run()"
            :value="editor.getAttributes('textStyle').color || '#000000'"
          />
          <Icon class="picker-icon" name="lets-icons:color-mode" size="25px"/>
        </div>
        
  
  
        <div
          @click="editor.chain().focus().setColor('#000000').run()"
          :class="{ 'is-active': editor.isActive('textStyle', { color: '#000000' })}"
          title="Code"
        >
          <Icon name="ic:round-invert-colors-off" size="25px"/>
        </div> -->

        <div
          class="button"
          @click="editor.chain().focus().toggleCode().run()"
          :disabled="!editor.can().chain().focus().toggleCode().run()"
          :class="{ 'is-active': editor.isActive('code') }"
          title="Code"
        >
          <Icon name="mdi:code-tags" size="25px"/>
        </div>
        <div
          class="button"
          @click="editor.chain().focus().unsetAllMarks().run()"
          title="Clear Formatting"
        >
          <Icon name="fluent:clear-formatting-20-filled" size="25px"/>
        </div>
        <div
          class="button"
          @click="editor.chain().focus().setParagraph().run()"
          :class="{ 'is-active': editor.isActive('paragraph') }"
          title="Paragraph"
        >
          <Icon name="mdi:format-paragraph" size="25px"/>
        </div>
        <div
          class="button"
          @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
          title="Heading 1"
        >
          <Icon name="mdi:format-header-1" size="25px"/>
        </div>
        <div
          class="button"
          @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
          title="Heading 2"
        >
          <Icon name="mdi:format-header-2" size="25px"/>
        </div>
        <div
          class="button"
          @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
          title="Heading 3"
        >
          <Icon name="mdi:format-header-3" size="25px"/>
        </div>
        <div
          class="button"
          @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }"
          title="Heading 4"
        >
          <Icon name="mdi:format-header-4" size="25px"/>
        </div>
        <div
          class="button"
          @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }"
          title="Heading 5"
        >
          <Icon name="mdi:format-header-5" size="25px"/>
        </div>
        <div
          class="button"
          @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }"
          title="Heading 6"
        >
          <Icon name="mdi:format-header-6" size="25px"/>
        </div>
        <div
          class="button"
          @click="editor.chain().focus().toggleBulletList().run()"
          :class="{ 'is-active': editor.isActive('bulletList') }"
          title="Bullet List"
        >
          <Icon name="mdi:format-list-bulleted" size="25px"/>
        </div>
        <div
          class="button"
          @click="editor.chain().focus().toggleOrderedList().run()"
          :class="{ 'is-active': editor.isActive('orderedList') }"
          title="Ordered List"
        >
          <Icon name="mdi:format-list-numbered" size="25px"/>
        </div>
        <div
          class="button"
          @click="editor.chain().focus().toggleCodeBlock().run()"
          :class="{ 'is-active': editor.isActive('codeBlock') }"
          title="Code Block"
        >
          <Icon name="mdi:code-braces" size="25px"/>
        </div>
        <div
          class="button"
          @click="editor.chain().focus().toggleBlockquote().run()"
          :class="{ 'is-active': editor.isActive('blockquote') }"
          title="Blockquote"
        >
          <Icon name="mdi:format-quote-close" size="25px"/>
        </div>
        <div
          class="button"
          @click="editor.chain().focus().clearNodes().run()"
          title="Clear Nodes"
        >
          <Icon name="material-symbols:layers-clear" size="25px"/>
        </div>
        <div
          @click="editor.chain().focus().setHorizontalRule().run()"
          title="Horizontal Rule"
        >
          <Icon name="mdi:minus" size="25px"/>
        </div>
        <div
          class="button"
          @click="editor.chain().focus().setHardBreak().run()"
          title="Hard Break"
        >
          <Icon name="mdi:keyboard-return" size="25px"/>
        </div>
        <div
          class="button"
          @click="editor.chain().focus().undo().run()"
          :disabled="!editor.can().chain().focus().undo().run()"
          title="Undo"
        >
          <Icon name="mdi:undo" size="25px"/>
        </div>
        <div
          class="button"
          @click="editor.chain().focus().redo().run()"
          :disabled="!editor.can().chain().focus().redo().run()"
          title="Redo"
        >
          <Icon name="mdi:redo" size="25px"/>
        </div>
      </div>
    </div>

    <TiptapEditorContent class="tiptap-content" :editor="editor" />
  </div>
</template>

<script setup>
import { Color } from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
});

const editor = useEditor({
  content: props.modelValue,
  extensions: [
    TiptapStarterKit,
    TextStyle,
    Color,
  ],
  onUpdate: () => {
    emit('update:modelValue', editor.value.getHTML());
  },
});

// watch(() => props.modelValue, (newValue) => {
//   const isSame = newValue === editor.value.getHTML();
//   if (!isSame) {
//     editor.value.commands.setContent(newValue, false);
//   }
// }, { immediate: true });
watch(() => props.modelValue, (newValue) => {
  if (newValue !== editor.value.getHTML()) {
    editor.value.commands.setContent(newValue, false);
  }
});

onBeforeUnmount(() => {
  unref(editor).destroy();
});

// =====================================================

// import { Color } from '@tiptap/extension-color'
// // import Document from '@tiptap/extension-document'
// // import Paragraph from '@tiptap/extension-paragraph'
// // import Text from '@tiptap/extension-text'
// import TextStyle from '@tiptap/extension-text-style'
// // import { Editor, EditorContent } from '@tiptap/vue-3'


// const emit = defineEmits(['update:modelValue']);

// const props = defineProps({
//   modelValue: {
//     type: String,
//     default: '',
//   },
// });

// const editor = useEditor({
//   content: "",
//   extensions: [
//     TiptapStarterKit,
//     // Document,
//     // Paragraph,
//     // Text,
//     TextStyle,
//     Color,
//   ],
//   // extensions: [TiptapStarterKit],
//   onUpdate: () => {
//     // console.log(editor.value.getHTML());
//     emit('update:modelValue', editor.value.getHTML());
//   },
// });

// onBeforeUnmount(() => {
//   unref(editor).destroy();
// });

// watch(() => props.modelValue, (newValue) => {
//   if (newValue !== editor.value.getHTML()) {
//     editor.value.commands.setContent(newValue, false);
//   }
// });

// ===========================================

// Function to set text color
// const setColor = (color) => {
//   console.log(color);
//   editor.value.chain().focus().setColor(color).run();
// };
</script>

<style lang="scss">
@use "@/assets/styles/scss/theme/mixin"  as *;
.orbit-tiptap-editor{
  background-color: $c1;
  .editor{
    display: block;
    margin-top: 5px;
    margin-bottom: 5px;
    overflow-x: auto;
    @include horizontal-scrollbar(5px, #878787, $primary, $primary1);
    .editor-frame{
      // height: 3rem;
      width: 30rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      .button{
        cursor: pointer;
        &:hover{
          .iconify{
            color: $br90;
          }
        }
      }
      
      .is-active{
        .iconify{
          color: $primary1;
        }
      }
      .iconify{
        color: $br70;
      }
      .color-picker-frame{
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        overflow: hidden;
        margin-bottom: 5px;
        .color-picker{
          z-index: 0;
          position: absolute;
          top: -2px;
          left: -2px;
          width: 26px;
          height: 26px;
        }
        .picker-icon{
          pointer-events: none;
          position: relative;
          z-index: 2;
          color: $br70;
        }
      }
    }
  }
  .tiptap-content{
    background-color: white;
    border-radius: 5px;
    .tiptap{
      padding: .5rem;
      border-radius: 5px;
    }
  }
}
  
</style>