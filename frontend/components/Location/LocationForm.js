export default{
    /*html*/
    template: `
    <table class="table table-striped">
    <tr>
        <th>Id</th>
        <td>{{id}}</td>
    </tr>
    <tr>
        <th>City</th>
        <td><input :value="city" @input="$emit('update:city',$event.target.value)"></td>
    </tr>
    <tr>
        <th>Country</th>
        <td><input :value="country" @input="$emit('update:country',$event.target.value)"></td>
    </tr>
</table>
    `,
    props: ["id","city","country"],
    emits: ["update:id","update:city","update:country"]
}