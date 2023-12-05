export default{
    /*html*/
    template: `
    <table class="table table-striped">
    <tr>
        <th>Id</th>
        <td>{{id}}</td>
    </tr>
    <tr>
        <th>Brand</th>
        <td><input :value="brand" @input="$emit('update:brand',$event.target.value)"></td>
    </tr>
    <tr>
        <th>Model</th>
        <td><input :value="model" @input="$emit('update:model',$event.target.value)"></td>
    </tr>
    <tr>
        <th>Year</th>
        <td ><input :value="year" @input="$emit('update:year',$event.target.value)"></td>
    </tr>
    <tr>
        <th>Origin</th>
        <td><input :value="origin" @input="$emit('update:origin',$event.target.value)"></td>
    </tr>
</table>
    `,
    props: ["id","brand","model","year","origin"],
    emits: ["update:id","update:brand","update:model","update:year","update:origin"]
}