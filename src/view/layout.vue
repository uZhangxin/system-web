<template>
  <div>
    <el-container>
      <el-header height="50px">
        <z-header></z-header>
      </el-header>
      <el-container>
        <el-aside :width="asideWidth">
          <z-aside-menu :menu-info="menuInfo" @is-collapse="collapseAside"></z-aside-menu>
        </el-aside>
        <el-main>
          <div class="tags-view-wrap">

          </div>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import ZAsideMenu from "../components/Sidebar/asidemenu.vue";
import ZHeader from "../components/header/header.vue";

export default {
  name: "ZLayout",
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
      if (v.meta?.title !== undefined) {
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
  transition: width 0.2s;
  overflow: hidden;
}

.tags-view-wrap {
  height: 38px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.12);
}
</style>