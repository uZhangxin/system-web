<template>
  <div class="header-fullscreen">
    <svg-icon :icon-class="isFullscreen?'exit-fullscreen':'fullscreen'" @click="fullScreenClick"/>
  </div>
</template>

<script>
import screenfull from 'screenfull'
export default {
  name: "FullScreen",
  data() {
    return {
      isFullscreen: false
    }
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.destroy()
  },
  methods: {
    fullScreenClick() {
      if (screenfull.enabled) {
        this.$message({
          message: 'you browser can not work',
          type: 'warning'
        })
        return false
      }
      screenfull.toggle()
    },
    change() {
      this.isFullscreen = screenfull.isFullscreen
    },
    init() {
      if (screenfull.enabled) {
        screenfull.on('change', this.change)
      }
    },
    destroy() {
      if (screenfull.enabled) {
        screenfull.off('change', this.change)
      }
    }
  }
}
</script>

<style scoped>
.header-fullscreen {

}

</style>