import confirmationModal from "../ConfirmationModal.js";
import locationForm from "../Location/LocationForm.js"
import locationDetails from "../Location/LocationDetails.js"

export default {
   /*html*/
   template: `
   <div id="locationInfoModal" class="modal" tabindex="-1">
   <div class="modal-dialog">
       <div class="modal-content">
           <div class="modal-header">
               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
           </div>
           <div class="modal-body">
               <location-form v-if="isEditing" :id="modifiedLocation.id" v-model:city="modifiedLocation.city" v-model:country="modifiedLocation.country"></location-form>
               <location-details v-else :locationInModal="locationInModal"></location-details>
           </div>
           
           <div class="modal-footer">
               <div class="container">
                   <div class="row">
                       <template v-if="isEditing">
                           <div class="col me-auto">
                               <button type="button" class="btn btn-danger" data-bs-target="#confirmationModal" data-bs-toggle="modal">Delete</button>
                           </div>
                           <div class="col-auto">
                               <button type="button" class="btn btn-success mx-2" @click="saveModifiedLocation">Save</button>
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
   <confirmation-modal :target="'#locationInfoModal'" @confirmed="deleteLocation"></confirmation-modal>
   ` ,
   components: {
    confirmationModal,
    locationForm,
    locationDetails
},
emits: ["locationUpdated"],
props: {
    locationInModal: {}
},
data() {
    return {
        isEditing: false,
        modifiedLocation: {}
    }
},
methods: {
    startEditing() {
        this.modifiedLocation = { ...this.locationInModal }
        this.isEditing = true
    },
    cancelEditing() {
        this.isEditing = false
    },
    async saveModifiedLocation() {
        console.log("Saving:", this.modifiedLocation);
        const rawResponse = await fetch(this.API_URL + "/locations/" + this.modifiedLocation.id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.modifiedLocation)
        });
        console.log(rawResponse);
        this.$emit("locationUpdated", this.modifiedLocation)
        this.isEditing = false
    },
    async deleteLocation(){
        console.log("Deleting:", this.modifiedLocation);
            const rawResponse = await fetch(this.API_URL + "/locations/" + this.modifiedLocation.id, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.modifiedLocation)
            });
                console.log(rawResponse);
                this.$emit("locationUpdated", this.modifiedLocation)
                this.isEditing = false
    }
}
}