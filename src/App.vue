<template>
  <!-- <div id="s"> -->
    <div class="hold-transition sidebar-mini">
        <div class="">
          <Header></Header>
          <sideBar></sideBar>
          <div class="content-wrapper">
          <router-view>
          </router-view>
          </div>
        </div>
    </div>
  <!-- </div> -->
</template>

<script>
import Header from './components/Dashboard/header.vue';
import sideBar from './components/Dashboard/sidebar.vue';


export default {
  name: 'app',
  components: {
    Header,
    sideBar
  }
}
</script>

<style scoped>


</style>
