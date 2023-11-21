
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
                <table class="table table-striped">
                    <tr>
                        <th>Id</th>
                        <td>{{carInModal.id}}</td>
                    </tr>
                    <tr>
                        <th>Brand</th>
                        <td v-if="isEditing"><input v-model="modifiedCar.brand"></td>
                        <td v-else>{{carInModal.brand}}</td>
                    </tr>
                    <tr>
                        <th>Model</th>
                        <td v-if="isEditing"><input v-model="modifiedCar.model"></td>
                        <td v-else>{{carInModal.model}}</td>
                    </tr>
                    <tr>
                        <th>Year</th>
                        <td v-if="isEditing"><input v-model="modifiedCar.year"></td>
                        <td v-else>{{carInModal.year}}</td>
                    </tr>
                    <tr>
                        <th>Origin</th>
                        <td v-if="isEditing"><input v-model="modifiedCar.origin"></td>
                        <td v-else>{{carInModal.origin}}</td>
                    </tr>
                </table>
            </div>
            
            <div class="modal-footer container">
                <template v-if="isEditing">
                <div class="row">
                    <button type="button" class="btn btn-danger mr-auto" @click="startDeleting" >Delete</button>
                    <button type="button" class="btn btn-success ml-auto" @click="saveModifiedCar">Save</button>
                    <button type="button" class="btn btn-secondary" @click="cancelEditing">Cancel</button>
                    </div>
                </template>
                <template v-else>
                    <button type="button" class="btn btn-warning" @click="startEditing">Edit</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </template>
            </div>
        </div>
    </div>
</div>
    `,
    emits: ["carUpdated", "carDeleted"],
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
        startDeleting(){
            if (confirm("Are you sure you want to delete this car")){
                fetch(this.API_URL + "/cars/"+ this.carInModal.id,{
                    method: 'DELETE',
                    headers: {
                        'Accept' : 'application/json',
                        'Content-Type' : 'application/json'
                    }
                })
                .then(response => {
                    if(response.ok) {
                        console.log("Car deleted successfully")
                        this.$emit("carDeleted", this.carInModal.id);
                    } else{
                        console.error("Failed to delete car");
                    }
                })
                .catch (error => {
                    console.error("Error occurred while deleting car:", error );
                });
            }
        }
    }
}