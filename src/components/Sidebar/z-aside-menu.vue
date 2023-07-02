<template>
  <div>
    <div class="aside">
      <div class='aside-title'>
        <span v-show="!isCollapse">菜单</span>
        <i @click="collapseAside()"
           :class="{'el-icon-d-arrow-left': !this.isCollapse, 'el-icon-d-arrow-right': this.isCollapse}"></i>
      </div>
      <el-menu
              class="el-menu-vertical-demo"
              background-color="#545c64"
              text-color="#ffffff"
              :collapse="isCollapse"
              :router="true"
              :default-active="this.$route.path">
        <z-aside-item v-for="item in menuInfo" :item="item" :base-path="item.path" :key="item.path"></z-aside-item>
      </el-menu>
    </div>
  </div>
</template>

<script>


import ZAsideItem from "@/components/Sidebar/z-aside-item.vue";

export default {
  name: "z-aside-menu",
  components: {ZAsideItem},
  props: ['menuInfo'],
  data() {
    return {
      isCollapse: false
    }
  },
  methods: {
    collapseAside() {
      this.isCollapse = !this.isCollapse
      this.$emit('is-collapse', this.isCollapse)
    }
  },
  created() {
    console.log(this.menuInfo);
  }
}
</script>

<style lang="scss" scoped>
// 处理折叠时右侧border白线
.el-menu {
  border: 0px;
}

// 处理折叠时收缩动画
.horizontal-collapse-transition {
  transition: 0s width ease-in-out, 0s padding-left ease-in-out,
  0s padding-right ease-in-out;
}

.aside {
  background-color: #545c64;
  width: 100%;
  height: calc(100vh - 60px);
  transition: width 0.28s;
  max-width: 210px;
  min-width: 64px;

  .aside-title {
    width: 100%;
    background-color: #414141;
    height: 40px;
    text-align: center;
    color: rgba(255, 255, 255, 0.8);
    position: relative;

    span {
      line-height: 40px;
      font-size: 18px;
      letter-spacing: 20px;
    }

    i {
      position: absolute;
      right: 10px;
      top: 12px;
      cursor: pointer;
    }
  }
}
</style>
