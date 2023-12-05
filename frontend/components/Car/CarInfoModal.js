import confirmationModal from "../ConfirmationModal.js"
import carForm from "../Car/CarForm.js"
import carDetails from "../Car/CarDetails.js"
export default {
    /*html*/
    template: `
<div id="carInfoModal" class="modal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <car-form v-if="isEditing" :id="modifiedCar.id" v-model:brand="modifiedCar.brand" v-model:model="modifiedCar.model" v-model:year="modifiedCar.year" v-model:origin="modifiedCar.origin"></car-form>
                <car-details v-else :carInModal="carInModal"></car-details>
            </div>
            
            <div class="modal-footer">
                <div class="container">
                    <div class="row">
                        <template v-if="isEditing">
                            <div class="col me-auto">
                                <button type="button" class="btn btn-danger" data-bs-target="#confirmationModal" data-bs-toggle="modal">Delete</button>
                            </div>
                            <div class="col-auto">
                                <button type="button" class="btn btn-success mx-2" @click="saveModifiedCar">Save</button>
                                <button type="button" class="btn btn-secondary" @click="cancelEditing">Cancel</button>
                            </div>
                        </template>
                        <template v-else>
                            <div class="col me-auto"></div>
                            <div class="col-auto">
                                <button type="button" class="btn btn-warning mx-2" @click="startEditing">Edit</button>
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<confirmation-modal :target="'#carInfoModal'" @confirmed="deleteCar"></confirmation-modal>
    `,
    components: {
        confirmationModal,
        carForm,
        carDetails
    },
    emits: ["carUpdated"],
    props: {
        carInModal: {}
    },
    data() {
        return {
            isEditing: false,
            modifiedCar: {}
        }
    },
    methods: {
        startEditing() {
            this.modifiedCar = { ...this.carInModal }
            this.isEditing = true
        },
        cancelEditing() {
            this.isEditing = false
        },
        async saveModifiedCar() {
            console.log("Saving:", this.modifiedCar);
            const rawResponse = await fetch(this.API_URL + "/cars/" + this.modifiedCar.id, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.modifiedCar)
            });
            console.log(rawResponse);
            this.$emit("carUpdated", this.modifiedCar)
            this.isEditing = false
        },
        async deleteCar() {
            console.log("Deleting:", this.modifiedCar);
            const rawResponse = await fetch(this.API_URL + "/cars/" + this.modifiedCar.id, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.modifiedCar)
            });
                console.log(rawResponse);
                this.$emit("carUpdated", this.modifiedCar)
                this.isEditing = false
        }
    }
}