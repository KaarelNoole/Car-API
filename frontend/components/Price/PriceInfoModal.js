import confirmationModal from "../ConfirmationModal.js";

export default {
    /*html*/
    template: `
<div id="priceInfoModal" class="modal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <table class="table table-striped">
                    <tr>
                        <th>Id</th>
                        <td>{{priceInModal.id}}</td>
                    </tr>
                    <tr>
                        <th>Currency</th>
                        <td v-if="isEditing"><input v-model="modifiedprice.currency"></td>
                        <td v-else>{{priceInModal.currency}}</td>
                    </tr>
                    <tr>
                        <th>Amount</th>
                        <td v-if="isEditing"><input v-model="modifiedprice.amount"></td>
                        <td v-else>{{priceInModal.amount}}</td>
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
                                <button type="button" class="btn btn-success mx-2" @click="saveModifiedprice">Save</button>
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
<confirmation-modal :target="'#priceInfoModal'" @confirmed="deleteprice"></confirmation-modal>
    `,
    components: {
        confirmationModal
    },
    emits: ["priceUpdated"],
    props: {
        priceInModal: {}
    },
    data() {
        return {
            isEditing: false,
            modifiedprice: {}
        }
    },
    methods: {
        startEditing() {
            this.modifiedprice = { ...this.priceInModal }
            this.isEditing = true
        },
        cancelEditing() {
            this.isEditing = false
        },
        async saveModifiedprice() {
            console.log("Saving:", this.modifiedprice);
            const rawResponse = await fetch(this.API_URL + "/prices/" + this.modifiedprice.id, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.modifiedprice)
            });
            console.log(rawResponse);
            this.$emit("priceUpdated", this.modifiedprice)
            this.isEditing = false
        },
        deleteprice() {
            console.log("DELETE confirmed");
        }
    }
}
