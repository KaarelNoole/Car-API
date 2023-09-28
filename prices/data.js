let data  = [
    {id: 1, Amount: '3000',  currency: '$'},
    {id: 2, Brand: '5000', origin: '£'},
    {id: 3, Brand: '4000',  origin: '$'}
    ]

exports.getAll = () => {
    return data.map(b =>{return {"id":b.id,"name":b.name}})
}

exports.getById = (id) => {
    return data.find((thing) => thing.id == parseInt(id))
}