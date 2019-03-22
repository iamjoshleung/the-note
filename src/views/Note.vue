<template>
  <div v-if="isFetched" class="notePage">
    <h1 class="notePage__title">{{ note.title }}</h1>
    <div class="mb-8">
      <span v-date="note.createdAt" class="mr-4"></span>
      <router-link class="mr-4 cursor-pointer text-grey-darker" :to="{ name: 'edit', params: { id: note.slug } }">Edit</router-link>
      <a-popconfirm
        title="Are you sure delete this note?"
        @confirm="confirm"
        okText="Yes"
        cancelText="No"
      >
        <span class="cursor-pointer text-grey-darker">Remove</span>
      </a-popconfirm>
    </div>
    <div v-html="note.content"></div>
  </div>
</template>

<script>
import marked from 'marked';
import { get, destroy } from '../services/models/Note';

export default {
  data() {
    return {
      note: {},
      isFetched: false,
    };
  },
  metaInfo() {
    return {
      title: this.note.title,
    };
  },
  mounted() {
    const note = get(this.$route.params.id);

    if (!note) {
      return this.$router.push('404');
    }

    this.note = note;
    this.note.content = marked(this.note.content);
    this.isFetched = true;
  },

  methods: {
    confirm() {
      destroy(this.note.slug);
      this.$router.push({ name: 'home' });
    },
  },
};
</script>
