 let data  = [
    {id: 1, brand: 'Ford',  origin: 'Germany'},
    {id: 2, brand: 'Tesla', origin: 'USA'},
    {id: 3, brand: 'Toyota',  origin: 'Japan'}
    ]

exports.getAll = () => {
    return data.map(b =>{return {"id":b.id,"name":b.Brand,"origin":b.origin}})
}

exports.getById = (id) => {
    return data.find((thing) => thing.id == parseInt(id))
}

exports.create = (newBrand) => {
    const newId = Math.max(...data.map((thing) => thing.id)) + 1
    newBrand.id = newId
    data.push(newBrand)
    return newBrand
}

exports.delete = (id) => {
    var toBeDelete = this.getById(id)
    if (toBeDelete === undefined) {
        return
    }
    data = data.filter((e) => toBeDelete.id != e.id)
    return toBeDelete 
}