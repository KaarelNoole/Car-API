import confirmationModal from "../ConfirmationModal.js"

export default {
    /*html*/
    template: `
<div id="sellerInfoModal" class="modal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <table class="table table-striped">
                    <tr>
                        <th>Id</th>
                        <td>{{sellerInModal.id}}</td>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <td v-if="isEditing"><input v-model="modifiedSeller.name"></td>
                        <td v-else>{{sellerInModal.name}}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td v-if="isEditing"><input v-model="modifiedSeller.email"></td>
                        <td v-else>{{sellerInModal.email}}</td>
                    </tr>
                    <tr>
                        <th>Phone</th>
                        <td v-if="isEditing"><input v-model="modifiedSeller.phone"></td>
                        <td v-else>{{sellerInModal.phone}}</td>
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
<confirmation-modal :target="'#sellerInfoModal'" @confirmed="deleteSeller"></confirmation-modal>
    `,
    components: {
        confirmationModal
    },
    emits: ["sellerUpdated"],
    props: {
        sellerInModal: {}
    },
    data() {
        return {
            isEditing: false,
            modifiedSeller: {}
        }
    },
    methods: {
        startEditing() {
            this.modifiedSeller = { ...this.sellerInModal }
            this.isEditing = true
        },
        cancelEditing() {
            this.isEditing = false
        },
        async saveModifiedSeller() {
            console.log("Saving:", this.modifiedSeller);
            const rawResponse = await fetch(this.API_URL + "/sellers/" + this.modifiedSeller.id, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.modifiedSeller)
            });
            console.log(rawResponse);
            this.$emit("sellerUpdated", this.modifiedSeller)
            this.isEditing = false
        },
        deleteSeller(){
            console.log("DELETE confirmed");
        }
    }
}