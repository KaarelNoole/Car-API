 let data  = [
    {id: 1, Brand: 'Ford', model: 'Ford focus', year: 2016, origin: 'Germany'},
    {id: 2, Brand: 'Tesla', model: 'Model S', year: 2016, origin: 'USA'},
    {id: 3, Brand: 'Toyota', model: 'Yaris', year: 2020, origin: 'Japan'}
    ]

exports.getAll = () => {
    return data
}

exports.getById = (id) => {
    return data.map(b =>{return {"id":b.id,"name":b.name}})
}