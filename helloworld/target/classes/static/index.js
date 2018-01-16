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

//    new Vue({
//              el: "#app-3",
//              methods: {
//                  greet: function (event) {
//                      alert('Hello Ted')
//                      alert(event.target.tagName)
//                  }
//              }
//          });

//    new Vue({
//        el: "#app-3",
//        data: {
//            msg: null
//        },
//        methods: {
//        greet: function (response) {
//             this.$http.get(msg).then(function(response) {
//                this.list = response
//             })
//            }
//        }
//    });

    new Vue({
            el: "#app-3",
            methods: {
            greet: function (response) {
                 this.$http.get('/hello/greeting').then(function(response) {
                    alert(response.name)
                 })
                }
            }
        });

})();

