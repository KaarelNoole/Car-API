import priceList from "../components/Price/PriceList.js"
import priceInfoModal from "../components/Price/PriceInfoModal.js"
export default {
    /*html*/
    template: `
    <price-list :key="update" @showModal="openModal"></price-list>
    <price-info-modal @priceUpdated="updateView" :priceInModal="priceInModal"></price-info-modal>
    `,
    components: {
        priceList,
        priceInfoModal
    },
    data() {
        return {
            update: 0,
            priceInModal: { }
        }
    },
    methods: {
        openModal(price){
            this.priceInModal = price
            let priceInfoModal = new bootstrap.Modal(document.getElementById("priceInfoModal"))
            priceInfoModal.show()
        },
        updateView(price) {
            this.update++
            this.priceInModal = price
        }
    }
}
