<template>
  <div class="project-detail">
    <h2 class="project-name">{{projectDetail.project_name}}</h2>
    <div class="project-main-img" :key="i" v-for="(pimg, i) in projectImage">
      <img :src="imgPath(pimg.path)" alt="">
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
          projectDetail: {},
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
          let projectDetail = await this.$api("/api/projectDetail", {param:[this.projectId]});
          if(projectDetail.length > 0) {
            this.projectDetail = projectDetail[0];
          }
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
