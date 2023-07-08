<template>
  <div class="header">
    <!-- 头部右侧菜单栏，搜索、全屏、登录信息 -->
    <div class="header-right-menu">
      <header-search class="right-menu-item"></header-search>
      <full-screen class="right-menu-item"></full-screen>

      <el-dropdown class="avatar-container right-menu-item">
        <div class="avatar-wrapper">
          <img :src="require(`@/assets/images/avatar/${avatar}`)" class="avatar-img" alt="">
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import HeaderSearch from "@/components/HeaderSearch.vue";
import FullScreen from "@/components/FullScreen.vue";
import {mapGetters} from "vuex";

export default {
  name: "z-header",
  components: {FullScreen, HeaderSearch},
  computed: {
    ...mapGetters(['avatar'])
  },
  methods: {
    async logout() {
      await this.$store.dispatch('userInfo/logout')
      // await this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
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
      vertical-align: middle;
    }

    .avatar-container {
      margin-right: 30px;
      margin-left: 6px;

      .avatar-wrapper {
        .avatar-img {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
      }
    }
  }
}
</style>