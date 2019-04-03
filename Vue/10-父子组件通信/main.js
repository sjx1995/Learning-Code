Vue.component('alert-component', {
    template: '<button @click="clickListener">Click me</button>',
    // 值为数组，对应数组中的值对应组件在html中的自定义属性的值
    props: ['msg'],
    methods: {
        clickListener: function () {
            alert(this.msg);
        }
    }
});

new Vue({
    el: '#app'
});

new Vue({
    el: '#app1',
    components: {
        'url-link': {
            template: '<a :href=\'"https://"+ sitename + ".com"\'>{{sitename}}</a>',
            props: ['sitename']
        }
    }
});