<template>
  <section class="skill">
    <div class="marquee">
      <div class="marquee__header">
          <h3 class="marquee__header-title">More Skills</h3>
          <a class="slide-controls pause on icon" href="javascript:">Slide Control Button</a>
          <a class="slide-controls play icon" href="javascript:">Slide Control Button</a>
        </div>
        <div class="list-container">
          <ul class="slider-wrapper clear" id="recommendedPlaylist">
            <li class="big">
              <div class="cont">
                <div class="thumb-area">
                  <a class="link" href="__">
                    <img src="" alt="추천 플레이리스트 이미지 01">
                  </a>
                </div>
                <div class="info">
                  <a class="title" href="__">
                    <span></span>
                  </a>
                  <div class="artist">
                    <span class="en"></span>
                  </div>
                </div>
              </div>
            </li>
            <li class="small">
              <div class="cont">
                <div class="thumb-area">
                  <a class="link" href="__">
                    <img src="" alt="추천 플레이리스트 이미지 02">
                  </a>
                </div>
                <div class="info">
                  <a class="title" href="__">
                    <span></span>
                  </a>
                  <div class="artist">
                    <span class="en"></span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
    </div>
  </section>
</template>

<script>
  // import Profile from '@/components/cards/Profile.vue';
  
  export default {
      name: "SkillSection",
      // components: { Profile }
  }
  </script>