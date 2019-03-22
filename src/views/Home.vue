<template>
  <div v-if="notes.length <= 0">
    <p class="mb-4 text-xl">You don't have any notes right now. Start Writing?</p>
    <router-link :to="{ name: 'write' }"><a-button>Write</a-button></router-link>
  </div>
  <div v-else>
    <note-list :data="notesSortedByDate"></note-list>
  </div>
</template>

<script>
import NoteList from '@/components/NoteList.vue';
import { getAll } from '@/services/models/Note';
import moment from 'moment';

export default {
  name: 'home',
  metaInfo: {
    title: 'Home',
  },
  components: { NoteList },
  data() {
    return {
      notes: [],
    };
  },
  computed: {
    notesSortedByDate() {
      const unsortedNotes = [...this.notes];
      return unsortedNotes.sort((a, b) => moment(b.createdAt) - moment(a.createdAt));
    },
  },
  mounted() {
    this.notes = getAll();
  },
};
</script>
