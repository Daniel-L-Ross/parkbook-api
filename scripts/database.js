let allparks = []

export const useParks = () => {
    return allparks.slice()
}

export const getParks = () => {
    return fetch("http://localhost:8088/parks")
        .then(res => res.json())
        .then(
            response => {
                allparks = response
            }
                )
}

export const getNewParks = () => {
    return fetch("http://localhost:8088/newParks")
        .then(res => res.json())
        .then(
            response => {
                console.table(response)
            }
                )
}


export const addPark = parkObj => {
    return fetch("http://localhost:8088/newParks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(parkObj)
    })
}

// let id = 1
// let newParks = []
// parksData.forEach(park => {
//     park.id = id
//     newParks.push(park)
//     id += 1
// })

