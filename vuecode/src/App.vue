<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <!-- <router-view/> -->
  <mainContainer />
</template>

<script>
import { defineComponent } from 'vue'
import mainContainer from '@/views/_container.vue'

export default defineComponent({
  name: 'App',
  components: {
    mainContainer
  }
})
</script>