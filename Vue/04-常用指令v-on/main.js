var app = new Vue({
    el: "#app",
    methods: {
        clickListener: function () {
            alert('Clicked');
        },
        chickListener2: function () {
            alert("点击了");
        },
        entered: function () {
            console.log("移入");
        },
        leaved: function () {
            console.log("移出");
        },
        submitted: function () {
            alert("你提交了表单");
        },
        clickStop:function () {
            console.log("阻止事件冒泡");
        }
    }
});