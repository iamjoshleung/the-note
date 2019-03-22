<template>
    <div>
        <p class="text-xl mb-4">Sorry, I can't find what you want...</p>
        <p class="text-grey">redirecting to the homepage after 5 seconds</p>
    </div>
</template>

<script>
import { setTimeout } from 'timers';

export default {
  mounted() {
    setTimeout(() => {
      this.$router.push({ name: 'home' });
    }, 5000);
  },
  metaInfo: {
    title: 'Not Found',
  },
};
</script>
