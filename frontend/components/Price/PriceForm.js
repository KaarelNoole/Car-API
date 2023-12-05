export default{
    /*html*/
    template: `
    <table class="table table-striped">
    <tr>
        <th>Id</th>
        <td>{{id}}</td>
    </tr>
    <tr>
        <th>Amount</th>
        <td><input :value="amount" @input="$emit('update:amount',$event.target.value)"></td>
    </tr>
    <tr>
        <th>Currency</th>
        <td><input :value="currency" @input="$emit('update:currency',$event.target.value)"></td>
    </tr>

</table>
    `,
    props: ["id","amount","currency"],
    emits: ["update:id","update:amount","update:currency"]
}