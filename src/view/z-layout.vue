<template>
  <div>
    <el-container>
      <el-header>
        <z-header></z-header>
      </el-header>
      <el-container>
        <el-aside :width="asideWidth">
          <z-aside-menu :menu-info="menuInfo"  @is-collapse="collapseAside"></z-aside-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import ZAsideMenu from "../components/Sidebar/z-aside-menu.vue";
import ZHeader from "../components/z-header.vue";

export default {
  name: "z-layout",
  components: {
    ZHeader,
    ZAsideMenu
  },
  data() {
    return {
      isCollapse: false,
      menuInfo: []
    }
  },
  mounted() {
    this.$router.options.routes.forEach((v) => {
      if (v.meta?.title!== undefined) {
        this.menuInfo.push(v)
      }
    })
  },
  computed: {
    asideWidth() {
      return this.isCollapse ? '64px' : '210px';
    }
  },
  methods: {
    collapseAside(info) {
      this.isCollapse = info
    }
  }
}
</script>

<style scoped>
* {
  padding: 0px;
}

.el-aside {
  transition: width 0.3s;
}
</style>