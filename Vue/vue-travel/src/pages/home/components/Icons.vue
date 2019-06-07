<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide class="swiper-slide" v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcon',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
  @import "~styles/variables.styl"
  @import "~styles/mixins.styl"
  .icons >>> .swiper-slide
    overflow hidden
    width 100%
    height 0
    padding-bottom 50%
  .icons
    margin-top .1rem
    .icon
      float left
      position relative
      width 25%
      height 0
      padding-bottom 25%
      .icon-img
        position absolute
        left 0
        right 0
        top 0
        bottom .44rem
        box-sizing border-box
        padding .1rem
        .icon-img-content
          height 100%
          display block
          margin 0 auto
      .icon-desc
        text-align center
        color $darkTextColor
        position absolute
        bottom 0
        left 0
        right 0
        height .44rem
        line-height .44rem
        ellipsis()
</style>
