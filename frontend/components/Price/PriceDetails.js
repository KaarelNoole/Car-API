export default {
    /*html*/
    template:`
    <table class="table table-striped">
        <tr>
            <th>Id</th>
            <td>{{priceInModal.id}}</td>
        </tr>
        <tr>
            <th>Amount</th>
            <td >{{priceInModal.amount}}</td>
        </tr>
        <tr>
            <th>Currency</th>      
            <td >{{priceInModal.currency}}</td>
        </tr>
    </table>
    `,
    props:["priceInModal"]
}