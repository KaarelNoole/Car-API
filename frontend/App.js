import carList from "./components/CarList.js"
import carInfoModal from "./components/CarInfoModal.js"
export default {
    /*html*/
    template: `
    <cars-list :key="update" @showModal="openModal"></cars-list>
    <car-info-modal @carUpdated="updateView" :carInfoModal="carInfoModal"></car-info.modal>
    `,
    components: {
        carList,
        carInfoModal
    },
    data() {
        return {
            update: 0,
            carInModal: {id: "", brand: "", model: "", year: "", origin: ""}
        }
    },
    methods: {
        openModal(car){
            this.carInModal = car
            let carInfoModal = new bootstrap.Modal(document.getElementById("carInfoModal"))
            carInfoModal.show()
        },
        updateView(car) {
            this.update++
            this.gameInModal = car
        }
    }
}