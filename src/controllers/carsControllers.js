const {v4: uuidv4} = require("uuid")
const carListData = require("./../models/dummyData")

const get = (req, res)=> {
    const {brand=""} = req.query || {}
    const filteredCars = carListData.filter(({brand: brandVal})=> brandVal.toLowerCase() === brand.toLowerCase())

    res.status(200).render('home', {
        cars: brand ?  filteredCars : carListData
    })
}

const post = (req, res)=> {
    const reqBody  = req.body;
    const newId = uuidv4();
    const newObjCarWithId = {
        ...reqBody, 
        id: newId
    }

    console.log({reqBody})

    const newCarList = [...carListData, newObjCarWithId]
    res.status(201).json(newCarList)
}

const getById = (req, res) => {
    const getId = req.params.id;
    const filterById = carListData.filter(({id})=> id === Number(getId) )

    res.status(200).json(filterById)
}

module.exports = {
    get, 
    getById, 
    post
}