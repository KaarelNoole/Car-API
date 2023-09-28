 let data  = [
    {id: 1, Brand: 'Ford',  origin: 'Germany'},
    {id: 2, Brand: 'Tesla', origin: 'USA'},
    {id: 3, Brand: 'Toyota',  origin: 'Japan'}
    ]

exports.getAll = () => {
    return data.map(b =>{return {"id":b.id,"name":b.name}})
}

exports.getById = (id) => {
    return data.find((thing) => thing.id == parseInt(id))
}