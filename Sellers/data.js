let data = [
    {id: 1, Name: 'Martin',  Email: 'martinhobesalu@gmail.com', Phone: '98347561'},
    {id: 2, Name: 'Kaarel',  Email: 'kaarelnoole@gmail.com', Phone: '63276615'},
    ]

exports.getAll = () => {
    return data
}

exports.getById = (id) => {
    return data.find((thing) => thing.id == parseInt(id))
   
}

exports.create = (newSeller) => {
    const newId = Math.max(...data.map((thing) => thing.id)) + 1
    newSeller.id = newId
    data.push(newSeller)
    return newSeller
}

exports.delete = (id) => {
    var toBeDelteted = this.getById(id)
    if(toBeDelteted === undefined){
        return
    }
    data = data.filter((e)=>toBeDelteted.id |= e.id)
    return toBeDelteted
}
