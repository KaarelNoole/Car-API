export default {
    /*html*/
    template: `
    <table id=carsTable class="table table-striped table-bordered">
        <tr>
            <th>Brand</th>
            <th>Model</th>
            <th>Year</th>
            <th>Origin</th>
        </tr>
        <tr v-for="car in cars>
            <td @click="getCar(car.id)">{{car.brand}}</td>
            <td>{{car.model}}</td>
            <td>{{car.year}}</td>
            <td>{{car.origin}}</td>
        </tr>
    <table>
    `,
   emits: ["showModal"],
    data() {
        return {
            cars: []
        }
    },
    async created() {
        this.cars = await (await fetch("http://localhost:8080/cars")).json()
    },
    methods: {
        getCar: async function (id) {
           const carInfoModal = await (await fetch(this.API_URL + "/cars/" + id)).json()
            this.$emit("showModal", carInModal)
        }
    }
}