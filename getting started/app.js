// vm is a reference to view model
const vm = Vue.createApp({
    data() {
        return {
            firstName: "David",
            lastName: "Rusycki",
            url: "https://ww.google.com"
        }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.lastName.toUpperCase()}`
        }
    }
}).mount('#app')

setTimeout(() => {
    vm.firstName = 'Bob';
}, 5000);