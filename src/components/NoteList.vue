<template>
    <ul class="list-reset nostList">
        <li v-for="note in notes" :key="note.id" class="">
            <single-note :note="note" @deleted="onDeleted"></single-note>
        </li>
    </ul>
</template>

<script>
import SingleNote from '@/components/SingleNote.vue';

export default {
  components: { SingleNote },
  props: {
    data: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      notes: this.data,
    };
  },
  methods: {
    onDeleted(id) {
      this.notes = this.notes.filter(n => n.id != id);
    },
  },
};
</script>
