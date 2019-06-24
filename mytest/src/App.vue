<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <keep-alive>
      <router-view/>
    </keep-alive>

  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  .el-pagination button:disabled{background-color: #f7f7f7!important;}
  .el-pagination .btn-next, .el-pagination .btn-prev{background-color: #f7f7f7!important;;}
  .el-dialog, .el-pager li{background-color: #f7f7f7!important;;}
  .el-pagination .btn-next, .el-pagination .btn-prev{background: 50% no-repeat #f7f7f7!important;}

</style>
