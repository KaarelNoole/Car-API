export default {
    /*html*/
    template:`
    <table class="table table-striped">
        <tr>
            <th>Id</th>
            <td>{{locationInModal.id}}</td>
        </tr>
        <tr>
            <th>City</th>
            <td >{{locationInModal.city}}</td>
        </tr>
        <tr>
            <th>Country</th>      
            <td >{{locationInModal.country}}</td>
        </tr>

    </table>
    `,
    props:["locationInModal"]
}