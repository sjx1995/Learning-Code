Vue.component('clickBtn', {
    template: '<button @click = "clickListener">点击显示</button>',
    methods: {
        clickListener() {
            this.$emit('showTextEvent', {text: '这是要显示的文字'})
        }
    }

});

Vue.component('textDiv', {
    template:
        `<div>
            <show @showTextEvent="isShowText"></show>
            <div v-if="isShow">显示文字</div>
        </div>`,
    data: function () {
        return {
            isShow: false
        };
    },
    methods: {
        isShowText: function () {
            return this.isShow = true;
        }
    }
});

new Vue({
    el: '#app'
});