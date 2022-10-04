<template>
  <section class="projects">
    <div class="section-title">PROJECTS<span class="num">({{projectList.length}})</span></div>
    <div class="project-list-group">
      <ul class="project-list">
        <li class="project-list-item" :key="i" v-for="(project, i) in projectList">
          <div class="item-header">
            <p class="project-name">{{project.project_name}}</p>
            <div class="project-skills">
              <span class="category-badge">html5</span>
              <span class="category-badge">scss</span>
              <span class="category-badge">kendo</span>
              <span class="category-badge">jquery</span>
            </div>
          </div>
          <div class="item-body">
            <div class="body-group">
              <p class="project-date">
                <span class="date-start">{{project.date_start}}</span> 
                ~ 
                <span class="date-end">{{project.date_end}}</span>
              </p>
              <p class="project-category">{{project.category}}</p>
            </div>
            <div class="project-img">
              <div class="img-inner">
                <img :src="imgPath(project.path)" alt="">
              </div>
            </div>
          </div>
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
      data() {
        return {
          projectList: []
        };
      },
      created() {
        this.getProjectList();
      },
      methods: {
        async getProjectList() {
          this.projectList = await this.$api("/api/projectList", {});
          console.log(this.projectList);
        },
        // 이미지 동적 연결
        imgPath(name) {
          return require("@/assets/images/projects/"+name);
        },
      }
  }
  </script>
