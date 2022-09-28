<template>
  <section class="home">
    <div class="bg-area">
      <div class="bg-circle circle1"></div>
      <div class="bg-circle circle2"></div>
    </div>
    <div class="title-area">
      <p class="sub-text">
        Introduce
      </p>
      <h1 class="title">
        <span class="title-sm title-black">Front-End Developer</span>
        <span class="title-white">Portfolio.</span>
      </h1>
    </div>
    <div class="scroll-down-marker">
      <div class="circle-text">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enable-background="new 0 0 300 300" xml:space="preserve">
            <defs>
                <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "/>
            </defs>
            <circle cx="150" cy="100" r="75" fill="none"/>
            <g>
                <use xlink:href="#circlePath" fill="none"/>
                <text fill="#000">
                    <textPath xlink:href="#circlePath">Please Scroll Down To Read It &middot; Follow Me! &middot;</textPath>
                </text>
            </g>
        </svg>
      </div>
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
