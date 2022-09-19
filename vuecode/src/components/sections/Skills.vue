<template>
  <section class="skills">
    <div class="marquee">
      <div class="marquee__header">
        <h3 class="marquee__header-title">More Skills</h3>
        <div class="btn-area">
          <button class="btn icon-pause on"><span class="sr-only">pause</span></button>
          <button class="btn icon-play"><span class="sr-only">play</span></button>
        </div>
      </div>
      <div class="marquee__body">
        <div class="marquee__list">
          <marquee-text :repeat="10" :duration="25">
            <div class="marquee__list-item small">
              <div class="img-area">
                <img src="@/assets/images/logo/img_ionic.png" alt="">
              </div>
              <div class="info-area">
                <p class="logo-name">Git</p>
                <p class="logo-info">gitLab, gitHub 사용 가능</p>
              </div>
            </div>
            <div class="marquee__list-item big">
              <div class="img-area">
                <img src="@/assets/images/logo/img_js.png" alt="">
              </div>
              <div class="info-area">
                <p class="logo-name">Javascript</p>
                <p class="logo-info">ES6</p>
              </div>
            </div>
            <div class="marquee__list-item small">
              <div class="img-area">
                <img src="@/assets/images/logo/img_jquery.png" alt="">
              </div>
              <div class="info-area">
                <p class="logo-name">Git</p>
                <p class="logo-info">gitLab, gitHub 사용 가능</p>
              </div>
            </div>
            <div class="marquee__list-item big">
              <div class="img-area">
                <img src="@/assets/images/logo/img_sass.png" alt="">
              </div>
              <div class="info-area">
                <p class="logo-name">Git</p>
                <p class="logo-info">gitLab, gitHub 사용 가능</p>
              </div>
            </div>
            <div class="marquee__list-item small">
              <div class="img-area">
                <img src="@/assets/images/logo/img_zeplin.png" alt="">
              </div>
              <div class="info-area">
                <p class="logo-name">Git</p>
                <p class="logo-info">gitLab, gitHub 사용 가능</p>
              </div>
            </div>
            <div class="marquee__list-item big">
              <div class="img-area">
                <img src="@/assets/images/logo/img_vue.png" alt="">
              </div>
              <div class="info-area">
                <p class="logo-name">Git</p>
                <p class="logo-info">gitLab, gitHub 사용 가능</p>
              </div>
            </div>
            <div class="marquee__list-item small">
              <div class="img-area">
                <img src="@/assets/images/logo/img_photoshop.png" alt="">
              </div>
              <div class="info-area">
                <p class="logo-name">Git</p>
                <p class="logo-info">gitLab, gitHub 사용 가능</p>
              </div>
            </div>
            <div class="marquee__list-item big">
              <div class="img-area">
                <img src="@/assets/images/logo/img_git.png" alt="">
              </div>
              <div class="info-area">
                <p class="logo-name">Git</p>
                <p class="logo-info">gitLab, gitHub 사용 가능</p>
              </div>
            </div>
          </marquee-text>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent, ref } from 'vue'
import MarqueeText from 'vue-marquee-text-component'

export default defineComponent({
    name: "SkillSection",
    components: {
      MarqueeText
    },
    setup() {
      return {
        isPaused: ref(false)
      }
    }
})
</script>