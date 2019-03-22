<template>
  <div id="app" class="appContainer">
    <app-header></app-header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  components: { AppHeader },
  metaInfo: {
    title: 'Home',
    titleTemplate: '%s | TheNote',
  },
};
</script>
