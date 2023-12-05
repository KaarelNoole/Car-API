export default{
    /*html*/
    template: `
    <table class="table table-striped">
    <tr>
        <th>Id</th>
        <td>{{id}}</td>
    </tr>
    <tr>
        <th>Name</th>
        <td><input :value="name" @input="$emit('update:name',$event.target.value)"></td>
    </tr>
    <tr>
        <th>Email</th>
        <td><input :value="email" @input="$emit('update:email',$event.target.value)"></td>
    </tr>
    <tr>
        <th>Phone</th>
        <td ><input :value="phone" @input="$emit('update:phone',$event.target.value)"></td>
    </tr>
</table>
    `,
    props: ["id","name","email","phone"],
    emits: ["update:id","update:name","update:email","update:phone"]
}