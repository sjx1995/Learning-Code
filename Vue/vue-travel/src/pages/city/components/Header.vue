<template>
  <div class="header">
    <router-link to="/">
      <div class="iconfont back-icon">&#xe682;</div>
    </router-link>
    城市选择
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" type="text/stylus" scoped>
  @import "~styles/variables.styl"
  .header
    height $headerHeight
    line-height $headerHeight
    text-align center
    background-color $bgColor
    color #ffffff
    font-size .32rem
    .back-icon
      position absolute
      left 0
      top 0
      width .64rem
      color #ffffff
      font-size .4rem
</style>
