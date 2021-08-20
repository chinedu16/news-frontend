<template>
  <div id="app">
    <el-container>
      <el-header
        style="height: 80px"
        class="p-0 flex items-center shadow-lg z-50"
      >
        <Header></Header>
      </el-header>
      <el-main class="p-0" style="padding: 0">
        <router-view></router-view>
      </el-main>
      <!-- <el-footer>Footer</el-footer> -->
    </el-container>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "app",
  components: {
    Header,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");
body {
  font-family: "Lato", sans-serif !important;
}

.el-loading-spinner {
  display: flex;
  justify-content: center;
}
</style>
