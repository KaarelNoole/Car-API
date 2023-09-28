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
