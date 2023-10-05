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

exports.create = (newModel) => {
    const newId = Math.max(...data.map((thing) => thing.id)) + 1
    newModel.id = newId
    data.push(newModel)
    return newModel

}