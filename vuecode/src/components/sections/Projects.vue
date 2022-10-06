<template>
  <section class="projects">
    <div class="section-title">PROJECTS<span class="num">({{projectList.length}})</span></div>
    <div class="project-list-group">
      <ul class="project-list">
        <li class="project-list-item" :key="i" v-for="(project, i) in projectList">
          <a @click="goToDetail(project.id);" class="project-link">
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
                  <span class="date-start">{{formatDate(project.date_start)}}</span> 
                  ~ 
                  <span class="date-end">{{formatDate(project.date_end)}}</span>
                </p>
                <p class="project-category">{{project.category}}</p>
              </div>
              <div class="project-img">
                <div class="img-inner">
                  <img :src="imgPath(project.path)" alt="">
                </div>
              </div>
            </div>
          </a>
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
        // 상세페이지 이동
        goToDetail(project_id) {
          this.$router.push({path:'/detail', query:{project_id:project_id}})
        },
        formatDate(date) {
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();

            if (month.length < 2) 
                month = '0' + month;
            if (day.length < 2) 
                day = '0' + day;

            return [year, month, day].join('-');
        }
      }
  }
  </script>
