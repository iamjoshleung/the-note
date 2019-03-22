<template>
    <header class="appHeader">
      <router-link :to="{ name: 'home' }" class="appHeader__logo">TheNote</router-link>
      <router-link :to="{ name: 'write' }" class="text-green-dark" v-if="$route.name !== 'write'">Write</router-link>
    </header>
</template>

<script>
export default {

};
</script>
