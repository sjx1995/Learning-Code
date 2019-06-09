<template>
<div>
  <div>
    <router-link tag="div" to="/" class="icon">
      <span class="iconfont back-icon">&#xe682;</span>
    </router-link>
  </div>
  <div class="header" :style="opacityStyle" v-show="isShow">
    <router-link to="/">
      <div class="iconfont back-icon-header">&#xe682;</div>
    </router-link>
    城市选择
  </div>
</div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      isShow: false,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.scrollToTop)
  },
  deactivated () {
    window.removeEventListener('scroll', this.scrollToTop)
  },
  methods: {
    scrollToTop () {
      const scrollTop = document.documentElement.scrollTop
      if (scrollTop > 60) {
        let nowOpacity = scrollTop / 140
        nowOpacity = (nowOpacity > 1) ? 1 : nowOpacity
        this.opacityStyle = {
          opacity: nowOpacity
        }
        this.isShow = true
      } else {
        this.isShow = false
      }
    }
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
  @import "~styles/variables.styl"
  .icon
    position fixed
    top 0.1rem
    left 0.1rem
    width .6rem
    height .6rem
    border-radius .3rem
    background-color rgba(0, 0, 0, .6)
    .back-icon
      text-align center
      line-height .6rem
      color: #ffffff
      display inline-block
      width 100%
      font-size .36rem
  .header
    z-index 2
    position fixed
    top 0
    left 0
    right 0
    height $headerHeight
    line-height $headerHeight
    text-align center
    background-color $bgColor
    color #ffffff
    font-size .32rem
    .back-icon-header
      position absolute
      left .1rem
      top 0
      width .64rem
      color #ffffff
      font-size .4rem
</style>
