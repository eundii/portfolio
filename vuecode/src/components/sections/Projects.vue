<template>
  <section class="projects">
    <div class="projects__header">
      <h3 class="projects__header-title">Many Projects</h3>
    </div>
    <div class="projects__body">
      <ul class="projects__list">
        <li class="projects__list-item">
          <!-- card component -->
          <div class="project">
            <a href="#">
              <div class="project__img-area">
                <img src="" alt="">
              </div>
              <div class="project__text-area">
                <div class="text-area__header">
                  <p class="project-name">신한카드 모집인 T-pLay</p>
                  <p class="project-detail"></p>
                </div>
              </div>
            </a>
          </div>
          <!-- // card component -->
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  // import Profile from '@/components/cards/Profile.vue';
  
  export default {
      name: "ProjectSection",
      // components: { Profile }
  }
  </script>
