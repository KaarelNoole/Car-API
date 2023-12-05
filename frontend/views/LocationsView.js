import locationList from "../components/Location/LocationList.js"
import locationInfoModal from "../components/Location/LocationInfoModal.js"
import newObjectModal from "../components/NewObjectModal.js"
import locationForm from "../components/Location/LocationForm.js"
export default {
    /*html*/
    template: `
    <button class="btn btn-secondary" @click="newlocation">New location</button>
    <location-list :key="update" @showModal="openModal"></location-list>
    <location-info-modal @locationUpdated="updateView" :locationInModal="locationInModal"></location-info-modal>
    <new-object-modal id="newlocationModal" @save="saveNewlocation">
        <location-form v-model:city="locationInModal.city" v-model:country="locationInModal.country"></location-form>
        <div class="alert alert-danger" role="alert" v-show="error">{{error}}</div>
    </new-object-modal>
    `,
    components: {
        locationList,
        locationInfoModal,
        newObjectModal,
        locationForm
    },
    data() {
        return {
            update: 0,
            locationInModal: { id: "", city: "", country: "" },
            newlocationModal: {},
            error: ""
        }
    },
    methods: {
        openModal(location){
            this.locationInModal = location
            let locationInfoModal = new bootstrap.Modal(document.getElementById("locationInfoModal"))
            locationInfoModal.show()
        },
        newlocation(){
            this.error= ""
            this.locationInModal = {}
            this.newlocationModal = new bootstrap.Modal(document.getElementById("newlocationModal"))
            this.newlocationModal.show()
        },
        updateView(location) {
            this.update++
            this.locationInModal = location
        },
        async saveNewlocation(){
         console.log("Saving:", this.locationInModal);
            const rawResponse = await fetch(this.API_URL + "/locations/", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.locationInModal)
            });
            if (rawResponse.ok){
                this.newlocationModal.hide()
                this. update++
            }
            else {
                const errorResponse = await rawResponse.json()
                this.error = errorResponse.error
            } 
        }
    }
}