<template>
 <div class="banner">
   <div class="banner-wrapper" @click="handleShowGallary">
     <img class="banner-img" :src="img" alt="">
     <div class="banner-info">
       <div class="banner-title">
         {{this.sight}}
       </div>
       <div class="banner-num">
         <span class="iconfont">&#xe626; 39</span>
       </div>
     </div>
   </div>
   <fade-animation>
     <gallary v-show="isShow"
              @hiddenGallary="handleHiddenGallary"
              :imgs="imgs">
     </gallary>
   </fade-animation>
 </div>
</template>

<script>
import Gallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/animation/FadeAnimation'
export default {
  name: 'Banner',
  components: {
    Gallary,
    FadeAnimation
  },
  data () {
    return {
      isShow: false
    }
  },
  props: {
    img: String,
    sight: String,
    imgs: Array
  },
  methods: {
    handleShowGallary () {
      this.isShow = true
    },
    handleHiddenGallary () {
      this.isShow = false
    }
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
  .banner-wrapper
    height 0
    width 100%
    padding-bottom 55%
    overflow hidden
    position relative
    .banner-img
      width 100%
    .banner-info
      position absolute
      bottom 0
      left 0
      right 0
      display flex
      color #ffffff
      height .6rem
      line-height .6rem
      background linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.8))
      .banner-title
        flex 1
        font-size .36rem
        padding 0 .3rem
      .banner-num
        height .4rem
        line-height .4rem
        background-color #888888
        border-radius .2rem
        margin-top .1rem
        padding 0 .24rem
        margin-right .2rem
        .iconfont
          font-size .26rem
</style>
