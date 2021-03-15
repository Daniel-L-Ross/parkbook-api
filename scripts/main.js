console.log("Welcome to the main module")
import { addPark, getParks, useParks, getNewParks } from "./database.js";


const addIds = parkArray => {
    let id = 0
    let newObject = []
    parkArray.forEach(park => {
        id += 1
        park.id = id
        newObject.push(park)
    })
    addPark(newObject)
}

// getNewParks()

getParks()
.then(() => {
    const bigParkArray = useParks()
    addIds(bigParkArray)
})