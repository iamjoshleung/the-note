<template>
    <div class="editor">
        <div class="flex items-center">
            <button class="editor__publishBtn mb-6 mr-8" @click="publish">{{ isNew ? 'Publish' : 'Edit' }}</button>
            <button class="editor__previewBtn mb-6" @click="preview">{{ isEditing ? 'Preview' : 'Back to editing' }}</button>
        </div>
        <input type="text" v-model="note.title" placeholder="Title" class="editor__titleInput">

        <div v-if="isEditing">
            <textarea
            v-model="note.content"
            placeholder="Tell your story.... (Markdown supported)"
            class="editor__textarea"></textarea>
        </div>
        <div v-else v-html="markedContent"></div>
    </div>
</template>

<script>
import marked from 'marked';
import { save, edit } from '../services/models/Note';

export default {
  props: {
    isNew: {
      type: Boolean,
      required: true,
    },
    data: {
      type: Object,
      default: () => ({
        id: '',
        title: '',
        content: '',
        slug: '',
      }),
    },
  },
  data() {
    return {
      note: { ...this.data },
      isEditing: true,
    };
  },

  computed: {
    markedContent() {
      return marked(this.note.content);
    },
  },

  methods: {
    preview() {
      this.isEditing = !this.isEditing;
    },

    publish() {
      if (!this.validated()) {
        return this.$message.error('Title or content must not be empty!');
      }

      let note = {};

      if (this.isNew) {
        note = save(this.note.title, this.note.content);
      } else {
        note = edit(this.note);
      }

      if (!note) {
        return this.$message.error('Something went wrong....');
      }


      return this.$router.push({ name: 'note', params: { id: note.slug } });
    },

    validated() {
      return this.note.title && this.note.content;
    },
  },
};
</script>
