var app = new Vue({
    el: "#app",
    data: {
        foodList: [
            {
                name: 'apple',
                price: 10,
                discount: .8
            },
            {
                name: 'banana',
                price: 18,
                discount: .7
            },
            {
                name: 'pear',
                price: 14
            }
        ]
    }
})