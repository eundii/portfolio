<template>
  <main id="main" class="main">
    <About/>
    <Skill/>
    <!-- <About/>
    <Forte/>
    <Project/> -->
  </main>
</template>

<script>
import About from '@/components/sections/About.vue'
import Skill from '@/components/sections/Skill.vue'
// import Project from '@/components/sections/Project.vue'

export default {
  name: 'MainLayout',
  components: {
    About,
    Skill,
    // Project
}
}
</script>
