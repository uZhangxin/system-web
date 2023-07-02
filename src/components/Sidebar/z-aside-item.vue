<template>
  <div>
    <el-menu-item v-if="hasOneShowingChild()" :index="basePath">
      <i class="el-icon-setting"></i>
      <span slot="title">{{ item.meta.title }}</span>
    </el-menu-item>

    <el-submenu v-else :index="basePath">
      <template slot="title">
        <i class="el-icon-data-line"></i>
        <span>{{ item.meta.title }}</span>
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

<style scoped>

</style>