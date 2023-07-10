<template>
  <div class="tags-view-container">
    <z-scroll-pane class="tags-view-content">
      <router-link v-for="tag in visitedViews" :key="tag.path" ref="tag" tag="span" :to="tag.path"
                   class="tags-view-item" :class="isActive(tag)?'active':''" @click.middle.native="!isAffix(tag)?closeSelectedTag(tag):''">{{ tag.title }}
        <span v-if="!isAffix(tag)" class="el-icon-close" @click.stop="closeSelectedTag(tag)"/>
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
  data() {
    return {
      historyView: [] // 记录tag访问记录
    }
  },
  watch: {
    $route() {
      this.addTags()
    }
  },
  mounted() {
    this.initTags()
  },
  methods: {
    // 判断当前路由与标签路由是否相同
    isActive(curTag) {
      return curTag.path === this.$route.path
    },
    // 判断当前标签路由是否为固定标签
    isAffix(curTag) {
      return curTag.meta && curTag.meta.affix
    },
    // 添加路由标签
    addTags(v) {
      let tag = this.$route
      // 添加指定路由标签，否则添加当前路由标签
      if (v !== undefined) {
        tag = v
      }
      this.$store.commit('tagsView/ADD_VISITED_VIEW', tag)
      // 放入访问记录
      this.historyView.push(tag)
    },
    // 关闭选中的tag
    closeSelectedTag(curTag) {
      this.$store.commit('tagsView/DEL_VISITED_VIEW', curTag)
      // 删除关闭tag的所有访问记录
      this.historyView = this.historyView.filter(item => {
        return item.path !== curTag.path
      })
      // 如果关闭的tag是当前展示tag则跳到最近一次访问tag
      if (this.isActive(curTag)) {
        let o = this.historyView.pop()
        this.$router.push(o.path)
      }
    },
    // 初始化固定标签和当前页面标签
    initTags() {
      this.dealAffixTag(this.$router.options.routes)
      this.addTags()
    },
    // 递归处理固定路由tag
    dealAffixTag(routes) {
      routes.forEach((v) => {
        // 判断是否为导航路由
        if (v.meta?.title !== undefined) {
          // 判断是否存在子路由或者子路由是否为空
          if (v.children === undefined || v.children.length === 0) {
            if (v.meta.affix === true) {
              this.addTags(v)
            }
          } else {
            this.dealAffixTag(v.children)
          }
        }
      })
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