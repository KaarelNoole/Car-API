export default {
    /*html*/
    template:`
    <table class="table table-striped">
        <tr>
            <th>Id</th>
            <td>{{sellerInModal.id}}</td>
        </tr>
        <tr>
            <th>Name</th>
            <td >{{sellerInModal.name}}</td>
        </tr>
        <tr>
            <th>Email</th>      
            <td >{{sellerInModal.email}}</td>
        </tr>
        <tr>
            <th>Phone</th>
            <td >{{sellerInModal.phone}}</td>
        </tr>
    </table>
    `,
    props:["sellerInModal"]
}