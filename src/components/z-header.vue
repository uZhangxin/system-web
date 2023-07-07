<template>
  <div class="header">
    <!-- 头部右侧菜单栏，搜索、全屏、登录信息 -->
    <div class="header-right-menu">
      <header-search class="right-menu-item"></header-search>
      <full-screen class="right-menu-item"></full-screen>
    </div>
  </div>
</template>

<script>
import HeaderSearch from "@/components/HeaderSearch.vue";
import FullScreen from "@/components/FullScreen.vue";

export default {
  name: "z-header",
  components: {FullScreen, HeaderSearch}
}
</script>

<style lang="scss" scoped>
.header {
  height: 100%;
  width: 100%;
  background-color: #2A94DE;

  .header-right-menu {
    height: 100%;
    float: right;

    .right-menu-item {
      display: inline-block;
      padding: 5px 5px 0px 0px;
      height: 100%;
      font-size: 24px;
    }
  }
}
</style>