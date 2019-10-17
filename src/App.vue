<template>
  <div id="app">
    <div class="hold-transition sidebar-mini">
        <!-- Site wrapper -->
        <div class="wrapper">
          <Header />
        </div>
    </div>
  </div>
</template>

<script>
import Header from './components/dashboard/header.vue'

export default {
  name: 'Header',
  components: {
    Header
  }
}
</script>

<style>

</style>
