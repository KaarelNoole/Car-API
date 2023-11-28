export default {
    /*html*/
    template: `
    <table id=locationsTable class="table table-striped table-bordered">
    <thead>    
        <tr>
            <th>City</th>
            <th>Country</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="location in locations">
            <td @click="getLocation(location.id)">{{location.city}}</td>
            <td>{{location.country}}</td>
        </tr>
        </tbody>
    </table>
    `,
    emits: ["showModal"],
    data() {
        return {
            locations: []
        }
    },
    async created() {
        this.locations = await (await fetch("http://localhost:8080/locations")).json()
    },
    methods: {
        getLocation: async function (id) {
            const locationInModal = await (await fetch(this.API_URL + "/locations/" + id)).json()
            this.$emit("showModal", locationInModal)
        }
    }
}