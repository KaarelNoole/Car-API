import carList from "../components/Car/CarList.js"
import carInfoModal from "../components/Car/CarInfoModal.js"
export default {
    /*html*/
    template: `
    <car-list :key="update" @showModal="openModal"></car-list>
    <car-info-modal @carUpdated="updateView" :carInModal="carInModal"></car-info-modal>
    `,
    components: {
        carList,
        carInfoModal
    },
    data() {
        return {
            update: 0,
            carInModal: { id: "", brand: "", model: "", year: "", origin: "" }
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
            this.carInModal = car
        }
    }
}