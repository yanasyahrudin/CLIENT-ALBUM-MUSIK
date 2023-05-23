<script>
import { mapWritableState } from 'pinia';
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import { useAppStore } from './stores';

export default {
  components: {
    Navbar
  },
  // computed: {
  //   ...mapWritableState(useAppStore, ['isLogin'])
  // },
  // created() {
  //   if (localStorage.getItem('access_token')) {
  //     this.isLogin = true
  //   }
  // }
}
</script>

<template>
  <!-- <Navbar v-if="isLogin === true" /> -->
  <Navbar v-if="$route.name !== 'login' && $route.name !== 'register'" />
  <RouterView />
</template>