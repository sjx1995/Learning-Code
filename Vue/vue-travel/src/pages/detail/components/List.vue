<template>
  <div>
    <div class="detail-list" v-for="(item, index) in list" :key="index">
      <div class="detail-item">
        <div class="detail-icon"></div>
        <div class="detail-text border-bottom">{{item.title}}</div>
        <detail-list class="" v-if="item.children" :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  data () {
    return {

    }
  },
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped="">
.border-bottom
  &:before
    background-color #aaaaaa
.detail-list
  .detail-item
    line-height .64rem
    font-size .32rem
    padding-left .2rem
    position relative
    .detail-icon
      display: inline-block;
      position: absolute;
      top .14rem
      width: .36rem;
      height: .36rem;
      background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
      background-size: .4rem 3rem;
      margin-right .2rem
    .detail-text
      padding-left .4rem
</style>
