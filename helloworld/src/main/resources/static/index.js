(function () {

    new Vue({
        el: '#app',
        data: {
            message: 'You have successfully applied vue.js'
        }
    });

    new Vue({
        el: '#app-2',
        data: {
            message: 'nah nah'
        }
    });

    new Vue({
            el: "#app-3",
            methods: {
            greet: function (response) {
                 this.$http.get('/hello/greeting?name=Jong').then(function(response) {
                 // response.data refers to the whole data.
                    alert(response.data.name)
                 })
                }
            }
        });

})();

