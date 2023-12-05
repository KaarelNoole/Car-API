import sellerList from "../components/Seller/SellerList.js"
import sellerInfoModal from "../components/Seller/SellerInfoModal.js"
import newObjectModal from "../components/NewObjectModal.js"
import sellerForm from "../components/Seller/SellerForm.js"
export default {
    /*html*/
    template: `
    <button class="btn btn-secondary" @click="newSeller">New seller</button>
    <seller-list :key="update" @showModal="openModal"></seller-list>
    <seller-info-modal @sellerUpdated="updateView" :sellerInModal="sellerInModal"></seller-info-modal>
    <new-object-modal id="newSellerModal" @save="saveNewSeller">
        <seller-form v-model:name="sellerInModal.name" v-model:email="sellerInModal.email" v-model:phone="sellerInModal.phone"></seller-form>
        <div class="alert alert-danger" role="alert" v-show="error">{{error}}</div>
    </new-object-modal>
    `,
    components: {
        sellerList,
        sellerInfoModal,
        newObjectModal,
        sellerForm
    },
    data() {
        return {
            update: 0,
            sellerInModal: { id: "", name: "", email: "", phone: ""},
            newSellerModal: {},
            error: ""
        }
    },
    methods: {
        openModal(seller){
            this.sellerInModal = seller
            let sellerInfoModal = new bootstrap.Modal(document.getElementById("sellerInfoModal"))
            sellerInfoModal.show()
        },
        newSeller(){
            this.error= ""
            this.sellerInModal = {}
            this.newSellerModal = new bootstrap.Modal(document.getElementById("newSellerModal"))
            this.newSellerModal.show()
        },
        updateView(seller) {
            this.update++
            this.sellerInModal = seller
        },
        async saveNewSeller(){
         console.log("Saving:", this.sellerInModal);
            const rawResponse = await fetch(this.API_URL + "/sellers/", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.sellerInModal)
            });
            if (rawResponse.ok){
                this.newSellerModal.hide()
                this.update++
            }
            else {
                const errorResponse = await rawResponse.json()
                this.error = errorResponse.error
            } 
        }
    }
}