import confirmationModal from "../ConfirmationModal.js"
import sellerForm from "../Seller/SellerForm.js"
import sellerDetails from "../Seller/SellerDetails.js"

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
            <seller-form v-if="isEditing" :id="modifiedSeller.id" v-model:name="modifiedSeller.name" v-model:email="modifiedSeller.email" v-model:phone="modifiedSeller.phone"></seller-form>
            <seller-details v-else :sellerInModal="sellerInModal"></seller-details>
            </div>
            <div class="modal-footer">
            <div class="container">
                <div class="row">
                    <template v-if="isEditing">
                        <div class="col me-auto">
                            <button type="button" class="btn btn-danger" data-bs-target="#confirmationModal" data-bs-toggle="modal">Delete</button>
                        </div>
                        <div class="col-auto">
                            <button type="button" class="btn btn-success mx-2" @click="saveModifiedSeller">Save</button>
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
        confirmationModal,
        sellerForm,
        sellerDetails
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
       async deleteSeller(){
        console.log("Deleting:", this.sellerInModal);
        fetch(this.API_URL + "/sellers/" + this.sellerInModal.id, {
            method: 'DELETE'
        });
        this.$emit("carUpdated", {})
        this.isEditing = false
        }
    }
}