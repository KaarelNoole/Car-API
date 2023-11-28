export default {
    /*html*/
    template: `
    <table id=sellersTable class="table table-striped table-bordered">
    <thead>    
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="seller in sellers">
            <td @click="getSeller(seller.id)">{{seller.name}}</td>
            <td>{{seller.email}}</td>
            <td>{{seller.phone}}</td>
        </tr>
        </tbody>
    </table>
    `,
    emits: ["showModal"],
    data() {
        return {
            sellers: []
        }
    },
    async created() {
        this.sellers = await (await fetch("http://localhost:8080/sellers")).json()
    },
    methods: {
        getSeller: async function (id) {
            const sellerInModal = await (await fetch(this.API_URL + "/sellers/" + id)).json()
            this.$emit("showModal", sellerInModal)
        }
    }
}