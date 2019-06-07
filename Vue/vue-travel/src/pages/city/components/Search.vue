<template>
  <div>
    <div class="search">
      <input
        class="search-input"
        type="text"
        placeholder="请输入城市名或拼音"
        v-model="keyword">
    </div>
    <div class="search-content" ref="list" v-show="keyword">
      <ul>
        <li class="search-item border-bottom"
            v-for="(item, index) in list"
            :key="index"
            @click="handleClickCity(item)">{{item}}</li>
      </ul>
      <ul>
        <li class="search-item border-bottom" v-show="isShow">没有搜索结果</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  data () {
    return {
      keyword: '',
      list: [],
      timeoutID: null
    }
  },
  props: {
    cities: Object
  },
  methods: {
    handleClickCity (city) {
      this.ccFunction(city)
      this.$router.push('/')
    },
    ...mapMutations({
      ccFunction: 'changeCity'
    })
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.list)
  },
  watch: {
    keyword () {
      if (this.timeoutID) {
        clearTimeout(this.timeoutID)
      }
      this.timeoutID = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.name.indexOf(this.keyword) > -1 || value.spell.indexOf(this.keyword) > -1) {
              result.push(value.name)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  computed: {
    isShow () {
      return !this.list.length
    }
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
  @import "~styles/variables.styl"
  .border-bottom
    &:before
      background-color #ccc
  .search
    height .72rem
    background-color $bgColor
    padding .1rem
    .search-input
      height .62rem
      line-height .62rem
      box-sizing border-box
      padding 0 .1rem
      color #666666
      border-radius .06rem
      text-align center
      width 100%
  .search-content
    background-color #eee
    position absolute
    top 1.78rem
    right 0
    bottom 0
    left 0
    overflow hidden
    z-index 1
    .search-item
      padding-left .2rem
      line-height .76rem
</style>
