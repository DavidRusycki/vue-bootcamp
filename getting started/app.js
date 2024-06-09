// vm is a reference to view model
const vm = Vue.createApp({
    data() {
        return {
            firstName: "David",
            middleName: "",
            lastName: "Rusycki",
            url: "https://ww.google.com",
            raw_url: "<a href='https://www.google.com'>Google</a>",
            age: 25
        }
    },
    methods: {
        increment() {
            this.age++
        },
        updateLastName(message, event) {
            this.lastName = event.target.value;
        },
        updateMiddleName(event) {
            this.middleName = event.target.value;
        }
    },
    computed: {
        fullName() {
            console.log("fullname computed was called!");
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
        }
    },
    watch: {
        age() {
            setTimeout(() => {
                this.age = 20;
            }, 2000);
        }
    }
}).mount('#app')

setTimeout(() => {
    vm.firstName = 'Bob';
}, 5000);