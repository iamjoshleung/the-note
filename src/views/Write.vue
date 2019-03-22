<template>
    <editor :isNew="true"></editor>
</template>

<script>
import Editor from '@/components/Editor.vue';

export default {
  components: { Editor },
  metaInfo: {
    title: 'Creating a new note',
  },
};
</script>
