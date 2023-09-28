let data = [
    {id: 1, City:'Tallinn', Country:'Estonia' },
    {id: 2, City:'Berlin', Country:'Germany'},
    {id: 3, City:'Moscow', Country:'Russia' }
    ]

exports.getAll = () => {
    return data
}

exports.getById = (id) => {
    return data.find((thing) => thing.id == parseInt(id))
   
}