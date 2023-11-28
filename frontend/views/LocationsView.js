import locationList from "../components/Location/LocationList.js";
import locationInfoModal from "../components/Location/LocationInfoModal.js";
export default {
    /*html*/
    template: `
    <location-list :key="update" @showModal="openModal"></location-list>
    <location-info-modal @locationUpdated="updateView" :locationInModal="locationInModal"></location-info-modal>
    `,
    components: {
        locationList,
        locationInfoModal
    },
    data(){
        return{
            update: 0,
            locationInModal: {id: "", city:"", country:""}
        }
    },
    methods: {
        openModal(location){
            this.locationInModal = location
            let locationInfoModal = new bootstrap.Modal(document.getElementById("locationInfoModal"))
            locationInfoModal.show()
        },
        updateView(location){
            this.update++
            this.locationInModal = location
        }
    }
}