import carList from "../components/Car/CarList.js"
import carInfoModal from "../components/Car/CarInfoModal.js"
import newObjectModal from "../components/NewObjectModal.js"
import carForm from "../components/Car/CarForm.js"
export default {
    /*html*/
    template: `
    <button class="btn btn-secondary" @click="newCar">New Car</button>
    <car-list :key="update" @showModal="openModal"></car-list>
    <car-info-modal @carUpdated="updateView" :carInModal="carInModal"></car-info-modal>
    <new-object-modal id="newCarModal" @save="saveNewCar">
        <car-form v-model:brand="carInModal.brand" v-model:model="carInModal.model" v-model:year="carInModal.year" v-model:origin="carInModal.origin"></car-form>
        <div class="alert alert-danger" role="alert" v-show="error">{{error}}</div>
    </new-object-modal>
    `,
    components: {
        carList,
        carInfoModal,
        newObjectModal,
        carForm
    },
    data() {
        return {
            update: 0,
            carInModal: { id: "", brand: "", model: "", year: "", origin: "" },
            newCarModal: {},
            error: ""
        }
    },
    methods: {
        openModal(car){
            this.carInModal = car
            let carInfoModal = new bootstrap.Modal(document.getElementById("carInfoModal"))
            carInfoModal.show()
        },
        newCar(){
            this.error= ""
            this.carInModal = {}
            this.newCarModal = new bootstrap.Modal(document.getElementById("newCarModal"))
            this.newCarModal.show()
        },
        updateView(car) {
            this.update++
            this.carInModal = car
        },
        async saveNewCar(){
         console.log("Saving:", this.carInModal);
            const rawResponse = await fetch(this.API_URL + "/cars/", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.carInModal)
            });
            if (rawResponse.ok){
                this.newCarModal.hide()
                this. update++
            }
            else {
                const errorResponse = await rawResponse.json()
                this.error = errorResponse.error
            } 
        }
    }
}