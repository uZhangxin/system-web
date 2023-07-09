<template>
  <div class="tags-view-container">
    <z-scroll-pane class="tags-view-content">
      <router-link v-for="tag in visitedViews" :key="tag.path" ref="tag" tag="span" :to="tag.path"
                   class="tags-view-item" :class="isActive(tag)?'active':''">{{ tag.title }}
        <span v-if="!isFixed(tag)" class="el-icon-close"/>
      </router-link>
    </z-scroll-pane>
  </div>
</template>

<script>
import ZScrollPane from "@/components/TagsView/scrollpane.vue";
import {mapGetters} from "vuex";

export default {
  name: "ZTagsView",
  components: {ZScrollPane},
  computed: {
    ...mapGetters(['visitedViews'])
  },
  watch: {
    $route() {
      this.addTags()
    }
  },
  mounted() {
    this.addTags()
  },
  methods: {
    // 判断当前路由与标签路由是否相同
    isActive(curTag) {
      return curTag.path === this.$route.path
    },
    // 判断当前标签路由是否为固定标签
    isFixed(curTag) {
      return curTag.meta && curTag.meta.affix
    },
    // 添加路由标签
    addTags() {
      this.$store.commit('tagsView/ADD_VISITED_VIEW', this.$route)
    }
  }
}
</script>

<style lang="scss">
.tags-view-container {
  .tags-view-item {
    .el-icon-close {
      display: inline-block;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      text-align: center;

      &:hover {
        background-color: #b4bccc;
        color: #fff;
      }
    }
  }
}

</style>

<style lang="scss" scoped>
.tags-view-container {
  height: 38px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12);

  .tags-view-content {
    .tags-view-item {
      display: inline-block;
      height: 28px;
      line-height: 28px;
      margin-left: 5px;
      margin-top: 4px;
      padding: 0 8px;
      cursor: pointer;
      font-size: 13px;
      border: 1px solid #d8dce5;
      color: #495060;
      background: #fff;

      &:first-of-type {
        margin-left: 12px;
      }

      &:last-of-type {
        margin-right: 12px;
      }

      &.active {
        background-color: #42b983;
        color: #fff;
        border-color: #42b983;

        &::before {
          content: '';
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 4px;
          margin-right: 4px;
          background: #fff;
        }
      }

    }
  }
}
</style>