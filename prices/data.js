let data  = [
    {id: 1, amount: '3000',  currency: '$'},
    {id: 2, amount: '5000', currency: '£'},
    {id: 3, amount: '4000',  currency: '$'}
    ]

exports.getAll = () => {
    return data.map(b =>{return {"id":b.id,"name":b.name}})
}

exports.getById = (id) => {
    return data.find((thing) => thing.id == parseInt(id))
}