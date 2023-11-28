export default{
        /*html*/
        template: `
        <table id=priceTable class="table table-striped table-bordered">
            <thead>
                <tr>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="price in prices">
                    <td @click="getPrice(price.id)">{{price.amount}}</td> 
                    <td>{{price.currency}}</td>
                </tr>
            </tbody>
        </table>
        `,
        emits: ["showModal"],
        data(){
            return{
                prices:[]
            }
        },
        async created(){
            this.prices = await (await fetch("http://localhost:8080/prices")).json()
        },
        methods: {
            getPrice: async function (id) {
                const priceInModal = await (await fetch(this.API_URL + "/prices/" + id)).json()
                this.$emit("showModal", priceInModal)
            }
        }
}