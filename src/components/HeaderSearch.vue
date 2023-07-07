<template>
  <div class="header-search">
    <svg-icon icon-class="search" class="svg-item" @click="selectClick"/>
    <el-select v-model="search" filterable remote placeholder="请输入关键词"
               :remote-method="remoteMethod" class="header-search-select" :class="{'showSelect': isShow}">
      <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: "HeaderSearch",
  data() {
    return {
      search: '',
      options: [],
      isShow: false
    }
  },
  methods: {
    remoteMethod() {

    },
    // 点击图标展开/折叠搜索框
    selectClick() {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style lang="scss" scoped>
.header-search {

  .header-search-select {
    font-size: 18px;
    transition: width 0.2s;
    width: 0px;
    overflow: hidden;
    background: transparent;
    border-radius: 2px;
    display: inline-block;
    vertical-align: middle;
    padding-left: 2px;

    ::v-deep .el-input__inner {
      border-radius: 2px;
      border: 0;
      border-bottom: 3px solid #d9d9d9;
      padding-left: 2px;
      padding-right: 0;
      box-shadow: none !important;
      vertical-align: middle;
    }
  }

  .showSelect {
    width: 210px;
  }
}

</style>