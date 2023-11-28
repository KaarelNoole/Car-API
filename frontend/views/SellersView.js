import sellerList from "../components/Seller/SellerList.js"
import sellerInfoModal from "../components/Seller/SellerInfoModal.js"
export default {
    /*html*/
    template: `
    <seller-list :key="update" @showModal="openModal"></seller-list>
    <seller-info-modal @sellerUpdated="updateView" :sellerInModal="sellerInModal"></seller-info-modal>
    `,
    components: {
        sellerList,
        sellerInfoModal
    },
    data() {
        return {
            update: 0,
            sellerInModal: { id: "", name: "", email: "", phone: ""}
        }
    },
    methods: {
        openModal(seller){
            this.sellerInModal = seller
            let sellerInfoModal = new bootstrap.Modal(document.getElementById("sellerInfoModal"))
            sellerInfoModal.show()
        },
        updateView(seller) {
            this.update++
            this.sellerInModal = seller
        }
    }
}