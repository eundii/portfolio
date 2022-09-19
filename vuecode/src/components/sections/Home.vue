<template>
  <section class="home">
    <div class="bg-area">
      <div class="bg-circle circle1"></div>
      <div class="bg-circle circle2"></div>
    </div>
    <div class="title-area">
      <span class="sub-text">
        Introduce
      </span>
      <h2 class="title">
        <span class="title-black">Web Publisher</span>
        <span class="title-white">Portfolio.</span>
      </h2>
    </div>
  </section>
</template>

<script>
// import Profile from '@/components/cards/Profile.vue';
// import gsap from 'gsap';

export default {
  name: "HomeSection",
  // components: { Profile },
  // mounted: function() {
  //   this.scrollAnimation();
  // },
  // methods: {
  //   scrollAnimation() {
  //     gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".about",
  //       start: "center center",
  //       end: "top center",
  //       markers: true,
  //       scrub: true,
  //       pin: true,
  //     }
  //   })
  //   .from(".about__header", { opacity: 0 })
  //   },
  // }
}
</script>
