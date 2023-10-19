 let data  = [
    {id: 1, brand: 'Ford', model: 'Ford focus', year: 2016, origin: 'Germany'},
    {id: 2, brand: 'Tesla', model: 'Model S', year: 2016, origin: 'USA'},
    {id: 3, brand: 'Toyota', model: 'Yaris', year: 2020, origin: 'Japan'}
    ]

exports.getAll = () => {
    return data.map(b =>{return {"id":c.id,"name":c.brand,"year": c.year,"origin":c.origin}})
}

exports.getById = (id) => {
    return data.map(b =>{return {"id":b.id,"brand":b.brand}})
}

exports.create = (newCar) => {
    const newId = Math.max(...data.map((thing) => thing.id)) + 1
    newCar.id = newId
    data.push(newCar)
    return newCar
}

exports.delete = (id) => {
    var toBeDelete = this.getById(id)
    if (toBeDelete === undefined) {
        return
    }
    data = data.filter((e) => toBeDelete.id != e.id)
    return toBeDelete 
}