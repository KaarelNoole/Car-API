import carList from "./CarList.js"
import carInfoModal from "./CarInfoModal.js"
export default {
    /*html*/
    template: `
    <cars-list @showModal="openModal"></cars-list>
    <car-info-modal :carInfoModal="carInfoModal"></car-info.modal>
    `,
    components: {
        carList,
        carInfoModal
    },
    data() {
        return {
            msg: 'Hello world!',
            carInModal: {id: "", brand: "", model: "", year: "", origin: ""}
        }
    },
    methods: {
        openModal(car){
            this.carInModal = car
            let carInfoModal = new bootstrap.Modal(document.getElementById("carInfoModal"))
            carInfoModal.show()
        }
    }
}