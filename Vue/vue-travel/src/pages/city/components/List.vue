<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.city}}</div>
          </div>
        </div>
      </div>

      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"
               v-for="item in hot"
               :key="item.id"
               @click="handleClickCity(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>

      <div class="area"
           v-for="(item, index) in cities"
           :key="index"
           :ref="index">
        <div class="title border-topbottom">{{index}}</div>
        <div class="item-list"
             v-for="innerItem in item"
             :key="innerItem.id"
             @click="handleClickCity(innerItem.name)">
          <div class="item border-bottom">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  methods: {
    handleClickCity (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  computed: {
    ...mapState(['city'])
  },
  watch: {
    letter () {
      const targetElement = this.$refs[this.letter][0]
      this.scroll.scrollToElement(targetElement)
    }
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
  @import "~styles/variables.styl"
  .border-topbottom
    &:before
      background-color #ccc
    &:after
      background-color #ccc
  .border-bottom
    &:before
      background-color #ccc
  .list
    position absolute
    top 1.78rem
    left 0
    right 0
    bottom 0
    overflow hidden
    .title
      padding-left .2rem
      background-color #eee
      height .54rem
      line-height .54rem
      font-size .26rem
      color #666
    .button-list
      padding .1rem .6rem .1rem .1rem
      overflow hidden
      .button-wrapper
        width 33.3%
        float left
        .button
          margin .1rem
          border .02rem solid #ccc
          border-radius 0.04rem
          text-align center
          height .46rem
          line-height .46rem
    .item-list
      .item
        padding-left .2rem
        line-height .76rem
</style>
