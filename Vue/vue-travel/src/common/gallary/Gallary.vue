<template>
  <div class="gallary" @click="handleHiddenGallary">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide class="swiper-slide" v-for="(item, index) in imgs" :key="index">
        <img class="swiper-img" :src="item">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'Gallary',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  props: {
    imgs: Array,
    default () {
      return []
    }
  },
  methods: {
    handleHiddenGallary () {
      this.$emit('hiddenGallary')
    }
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped="">
  .gallary >>> .swiper-pagination
    overflow inherit
  .gallary
    display flex
    flex-direction column
    justify-content center
    z-index 99
    position fixed
    top 0
    right 0
    bottom 0
    left 0
    background-color #000000
    .swiper
      width 100%
      height 0
      padding-bottom 100%
      .swiper-slide
        .swiper-img
          width 100%
      .swiper-pagination
        bottom -.5rem
        color: #ffffff
        position fixed
        z-index 999
        bottom 2rem
</style>
