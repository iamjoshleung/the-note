<template>
  <div class="mb-8">
    <h2>
      <router-link :to="{ name: 'note', params: { id: note.slug } }">{{ note.title }}</router-link>
    </h2>
    <div class="text-sm">
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
  </div>
</template>

<script>
import { destroy } from '@/services/models/Note';

export default {
  props: {
    note: {
      type: Object,
      required: true,
    },
  },

  methods: {
    remove() {
      destroy(this.note.slug);
      this.$emit('deleted', this.note.id);
      this.$message.success(`Successfully deleted note ${this.note.title}`);
    },

    confirm() {
      this.remove();
    },
  },
};
</script>
