<template>
  <div id="home">
    <!-- <header class="jumbotron">
      <h3>{{content}}</h3>
    </header> -->
    <Sidebar/>
    <router-view></router-view>
    <!-- <Main/> -->
  </div>
</template>

<script>
// import UserService from '../services/user.service';
import Sidebar from '../components/Sidebar.vue';
// import Main from '../components/Main.vue';

export default {
  name: 'Home',
  components: {
    Sidebar,
    // Main
  },
  data() {
    return {
      content: '',

    };
  },
  methods: {
   
  }
  // mounted() {
  //   UserService.getPublicContent().then(
  //     response => {
  //       this.content = response.data;
  //     },
  //     error => {
  //       this.content =
  //         (error.response && error.response.data) ||
  //         error.message ||
  //         error.toString();
  //     }
  //   );
  // }
};
</script>

