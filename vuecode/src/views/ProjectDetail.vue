<template>
  <div class="project-detail">
    <h2 class="project-name">project_name</h2>
    <div class="project-main-img">
      <img src="" alt="">
    </div>
  </div>
</template>

<script>
  // import Profile from '@/components/cards/Profile.vue';
  
  export default {
      name: "ProjectSection",
      // components: { Profile }
      data() {
        return {
          projectId: 0,
          projectDetail: [],
          projectImage: []
        };
      },
      created() {
        this.projectId = this.$route.query.project_id;
        this.getProjectDetail();
        this.getProjectImage();
      },
      methods: {
        async getProjectDetail() {
          this.projectDetail = await this.$api("/api/projectDetail", {param:[this.projectId]});
          console.log(this.projectDetail);
        },
        async getProjectImage() {
          this.projectImage = await this.$api("/api/projectImage", {param:[this.projectId]});
          console.log(this.projectImage);
        },
        // 이미지 동적 연결
        imgPath(name) {
          return require("@/assets/images/projects/"+name);
        },
      }
  }
  </script>
