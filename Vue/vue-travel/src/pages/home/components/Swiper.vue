<template>
  <swiper class="swiper" :options="swiperOption" ref="mySwiper" v-if="showSwiper">
    <swiper-slide class="swiper-slide" v-for="item in list" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
  .swiper >>> .swiper-pagination-bullet-active
    background-color white
  .swiper
    overflow hidden
    width 100%
    height 0
    padding-bottom 26.67%
    background-color #666666
    .swiper-img
      width 100%
</style>
