Vue.component('agreement', {
    template: "#agreement-template",
    data: function () {
        return {
            agreeCount: 6,
            isAgree: false
        }
    },
    methods: {
        clickListener: function () {
            if (!this.isAgree) {
                this.agreeCount++;
            } else {
                this.agreeCount--;
            }
            this.isAgree = !this.isAgree;
        }
    }
});

new Vue({
    el: '#app'
});