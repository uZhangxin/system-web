<template>
  <div>
    <el-menu-item v-if="hasOneShowingChild()" :index="basePath">
      <i class="el-icon-setting"></i>
      <span slot="title">{{ item.meta.title }}</span>
    </el-menu-item>

    <el-submenu v-else :index="basePath">
      <template slot="title">
        <i class="el-icon-data-line"></i>
        <span slot="title">{{ item.meta.title }}</span>
      </template>
      <z-aside-item v-for="child in item.children" :base-path="basePath+'/'+child.path" :item="child"
                    :key="child.path"></z-aside-item>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: "z-aside-item",
  props: {
    item: {
      type: Object,
      require: true
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  methods: {
    hasOneShowingChild() {
      if (this.item.children == undefined || this.item.children.length == 0) {
        return true
      }
      return false
    },
  }
}
</script>

<style>
/* 用于解决动态路由时 <el-submenu> 折叠失效*/
/*由于 element-ui 的<el-menu>标签本身希望里面嵌套的是<el-menu-item>,<el-submenu>,<el-menu-item-group>之一，但是却嵌套了<div>,而导致收折就隐藏不了文字*/
/*隐藏文字*/
.el-menu--collapse  .el-submenu__title span{
  display: none;
}
/*隐藏 > */
.el-menu--collapse  .el-submenu__title .el-submenu__icon-arrow{
  display: none;
}
</style>