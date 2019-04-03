// 定义全局组件
// 类似于DOM中的window对象
Vue.component('global_component', {
    template: '<button @click="globalClickListener">全局组件</button>',
    methods: {
        globalClickListener: function () {
            alert('这是一个全局组件');
        }
    }
});
// 声明全局组件作用范围
new Vue({
    el: '#app',
});

// 在作用域内声明局部组件
new Vue({
    el: '#container',
    components: {
        'local_component': {
            template: '<button @click="localClickListener">局部组件</button>',
            methods: {
                localClickListener: function () {
                    alert('这是一个局部组件');
                }
            }
        }
    }
});