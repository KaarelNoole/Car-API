let data  = [
    {id: 1, name: 'Ford focus',  color: 'grey'},
    {id: 2, name: 'Model S', color: 'black'},
    {id: 3, name: 'Yaris',  color: 'red'}
    ]

exports.getAll = () => {
    return data.map(b =>{return {"id":b.id,"name":b.name}})
}

exports.getById = (id) => {
    return data.find((thing) => thing.id == parseInt(id))
}