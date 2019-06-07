<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe682;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe688;</span>
      输入城市\景点\游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right arrow-icon">
        {{this.city}}
        <span class="iconfont">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
  @import "~styles/variables.styl"
  .header
    display flex
    line-height $headerHeight
    background-color #00bcd4
    color #ffffff
    .header-left
      width .64rem
      float left
      .back-icon
        text-align center
        font-size .4rem
    .header-input
      background-color #ffffff
      color #ccc
      flex 1
      margin-top .12rem
      height .62rem
      line-height .62rem
      margin-left .2rem
      border-radius .1rem
      padding-left .2rem
    .header-right
      min-width 1.04rem
      padding 0 .2rem
      float right
      text-align center
      color #ffffff
      .arrow-icon
        font-size .24rem
</style>
