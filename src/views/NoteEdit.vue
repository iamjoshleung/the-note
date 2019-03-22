<template>
<div>
    <editor :isNew="false" :data="note"></editor>
</div>
</template>

<script>
import Editor from '@/components/Editor.vue';
import {
  get,
} from '../services/models/Note';

export default {
  components: {
    Editor,
  },

  metaInfo() {
    return {
      title: `Editing ${this.note.title}`,
    };
  },

  data() {
    return {
      note: {},
      isFetched: false,
    };
  },

  created() {
    const note = get(this.$route.params.id);

    if (!note) {
      return this.$router.push('404');
    }

    this.note = note;
    this.note.content = this.note.content;
    this.isFetched = true;
  },
};
</script>
