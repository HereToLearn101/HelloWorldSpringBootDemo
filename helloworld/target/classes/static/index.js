(function () {

    // 'name' and its value is provided with the url
    new Vue({
            el: "#app-3",
            methods: {
            greet: function () {
                 this.$http.get('/hello/greeting?name=Jane').then(function(response) {
                 // response.data refers to the whole data.
                    alert(response.data.name)
                 })
                }
            }
        });

    // example of v-model attribute from DOM being used
    new Vue({
        el: '#example',
        data: {
            message: ''
        }
    });

    // second example of v-model attribute from DOM being used
    new Vue({
        el: '#example-2',
        data: {
            checkedNames: []
        }
    });

    // Value from input element is sent to REST controller
    new Vue({
        el: '#restInputDiv',
        data: {
            name: ''
        },
        methods: {
            submitName: function () {
                this.$http.get('/hello/greeting?name=' + this.name).then(function(response) {
                    alert(response.data.name);
                })
            }
        }
    });

    new Vue({
            el: '#restInputDiv2',
            data: {
                name: ''
            },
            methods: {
                getFormValue: function () {
                    this.$http.get('/hello/greeting?name=' + this.name).then(function(response) {
                        alert('Hello ' + response.data.name);
                    })
                }
            }
        });

//    new Vue ({
//        el: '#addUserDiv',
//        methods: {
//            addNewUser: function () {
//                this.$http.get('/demo/add?name=ted&email=newemail@gmail.com').then(function(response) {
//                    alert(response.data);
//                })
//            }
//        }
//    });

})();

