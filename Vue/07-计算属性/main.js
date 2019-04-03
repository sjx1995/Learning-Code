var app = new Vue({
    el: '#app',
    data: {
        Chinese: '83',
        Math: '85',
        English: '91'
    },
    computed: {
        sum: function () {
            return parseInt(this.Chinese) + parseInt(this.Math) + parseInt(this.English);
        },
        avg: function () {
            return Math.round(this.sum / 3);
        }
    }
});