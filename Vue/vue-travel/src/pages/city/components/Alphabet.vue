<template>
  <ul class="alphabet">
    <li class="item"
        v-for="item in letters"
        :key="item"
        :ref="item"
        @click="handleLetterClick"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd">
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      letterAY: '',
      timeoutID: null
    }
  },
  updated () {
    this.letterAY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (letter) {
      this.$emit('change', letter.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timeoutID) {
          clearTimeout(this.timeoutID)
        }
        this.timeoutID = setTimeout(() => {
          const nowY = e.touches[0].clientY - 89
          const index = Math.floor((nowY - this.letterAY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
  @import "~styles/variables.styl"
  .alphabet
    position absolute
    display flex
    flex-direction column
    justify-content center
    width .4rem
    top 1.78rem
    bottom 0
    right 0
    .item
      text-align center
      line-height .4rem
      color $bgColor
</style>
