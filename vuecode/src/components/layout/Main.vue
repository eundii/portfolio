<template>
  <main id="main" class="main">
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
  </main>
</template>

<script>
import Home from '@/components/sections/Home.vue'
import About from '@/components/sections/About.vue'
import Skills from '@/components/sections/Skills.vue'
import Projects from '@/components/sections/Projects.vue'

export default {
  name: 'MainLayout',
  components: {
    Home,
    About,
    Skills,
    Projects
  }
}
</script>
