import priceList from "../components/Price/PriceList.js"
import priceInfoModal from "../components/Price/PriceInfoModal.js"
import newObjectModal from "../components/NewObjectModal.js"
import priceForm from "../components/Price/PriceForm.js"
export default {
    /*html*/
    template: `
    <button class="btn btn-secondary" @click="newprice">New price</button>
    <price-list :key="update" @showModal="openModal"></price-list>
    <price-info-modal @priceUpdated="updateView" :priceInModal="priceInModal"></price-info-modal>
    <new-object-modal id="newPriceModal" @save="saveNewprice">
        <price-form v-model:amount="priceInModal.amount" v-model:currency="priceInModal.currency"></price-form>
        <div class="alert alert-danger" role="alert" v-show="error">{{error}}</div>
    </new-object-modal>
    `,
    components: {
        priceList,
        priceInfoModal,
        newObjectModal,
        priceForm
    },
    data() {
        return {
            update: 0,
            priceInModal: { id: "", amount: "", currency: ""},
            newpriceModal: {},
            error: ""
        }
    },
    methods: {
        openModal(price){
            this.priceInModal = price
            let priceInfoModal = new bootstrap.Modal(document.getElementById("priceInfoModal"))
            priceInfoModal.show()
        },
        newprice(){
            this.error= ""
            this.priceInModal = {}
            this.newPriceModal = new bootstrap.Modal(document.getElementById("newPriceModal"))
            this.newPriceModal.show()
        },
        updateView(price) {
            this.update++
            this.priceInModal = price
        },
        async saveNewprice(){
         console.log("Saving:", this.priceInModal);
            const rawResponse = await fetch(this.API_URL + "/prices/", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.priceInModal)
            });
            if (rawResponse.ok){
                this.newPriceModal.hide()
                this.update++
            }
            else {
                const errorResponse = await rawResponse.json()
                this.error = errorResponse.error
            } 
        }
    }
}