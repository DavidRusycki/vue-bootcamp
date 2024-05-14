// vm is a reference to view model
const vm = Vue.createApp({
    data() {
        return {
            firstName: "David",
            lastName: "Rusycki"
        }
    }
}).mount('#app')

setTimeout(() => {
    vm.firstName = 'Bob';
}, 5000);