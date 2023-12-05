export default {
    /*html*/
    template:`
    <table class="table table-striped">
        <tr>
            <th>Id</th>
            <td>{{carInModal.id}}</td>
        </tr>
        <tr>
            <th>Brand</th>
            <td >{{carInModal.brand}}</td>
        </tr>
        <tr>
            <th>Model</th>      
            <td >{{carInModal.model}}</td>
        </tr>
        <tr>
            <th>Year</th>
            <td >{{carInModal.year}}</td>
        </tr>
        <tr>
            <th>Origin</th>
            <td >{{carInModal.origin}}</td>
        </tr>
    </table>
    `,
    props:["carInModal"]
}