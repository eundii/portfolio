<template>
  <section class="about">
    <div class="about__header">
      <h2 class="about__header-title">
        <span>Introduce</span>
      </h2>
    </div>
    <div class="about__center">
      <div class="about__circle">
        <h3 class="about__circle-text">
          <span class="text" data-word="About">About</span>
          <span></span>
          <span class="text" data-word="Me">Me</span>
        </h3>
        <Profile/>
        <div class="about__circle-footer">
          <div class="about__tile"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Profile from '@/components/cards/Profile.vue';

export default {
    name: "AboutSection",
    components: { Profile }
}
</script>
