<template>
  <div class="wrap">
    <Header />
    <router-view/>
    <!-- <Main /> -->
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue'
// import Main from '@/components/layout/Main.vue'
// import Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    // Main,
    // Footer
  }
}
</script>
