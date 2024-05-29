// vm is a reference to view model
const vm = Vue.createApp({
    data() {
        return {
            firstName: "David",
            lastName: "Rusycki",
            url: "https://ww.google.com",
            raw_url: "<a href='https://www.google.com'>Google</a>",
            age: 25
        }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.lastName.toUpperCase()}`
        },
        increment() {
            this.age++
        },
        updateLastName(message, event) {
            event.preventDefault();
            this.lastName = event.target.value;
        }
    }
}).mount('#app')

setTimeout(() => {
    vm.firstName = 'Bob';
}, 5000);