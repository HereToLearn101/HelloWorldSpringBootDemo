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
            message: 'Testing testing!'
        }
    });

    new Vue({
            el: "#app-3",
            methods: {
            greet: function (response) {
                 this.$http.get('/hello/greeting').then(function(response) {
                 // response.data refers to the whole data.
                    alert(response.data.name)
                 })
                }
            }
        });

    new Vue({
        el: 'example',
        data: {
            checkedNames: []
        }
    });

})();

