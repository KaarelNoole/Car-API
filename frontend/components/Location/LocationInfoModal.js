import confirmationModal from "../ConfirmationModal.js";

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
                   <table class="table table-striped">
                       <tr>
                           <th>Id</th>
                           <td>{{locationInModal.id}}</td>
                       </tr>
                       <tr>
                           <th>City</th>
                           <td v-if="isEditing"><input v-model="modifiedLocation.city"></td>
                           <td v-else>{{locationInModal.name}}</td>
                       </tr>
                       <tr>
                           <th>Country</th>
                           <td v-if="isEditing"><input v-model="modifiedLocation.country"></td>
                           <td v-else>{{locationInModal.email}}</td>
                       </tr>
                   </table>
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
   <confirmation-modal :target="'#locationInfoModal'" @confirmed="deleteLocation"></confirmation-modal>
   ` ,
   components: {
    confirmationModal
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
    deleteLocation(){
        console.log("DELETE confirmed");
    }
}
}