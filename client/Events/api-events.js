//Create event
const create = async (req) => {
    try {
        let newEvent = await fetch('/api/events', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req)
        })
        console.log("🚀 ~ file: api-events.js ~ line 13 ~ create ~ newEvent", req)
        return await newEvent.json()
    } catch (err) {
        console.log(err)
    }
}

//List all events
const list = async (req, res) => {
    try {
        let events = await fetch('/api/events', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        return await events.json()
    } catch (err) {
        console.log(err)
    }
}

//Get event by id
const eventByID = async (req, res) => {
    try {
        let event = await fetch('/api/events/' + req.params.eventId, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        return await event.json()
    } catch (err) {
        console.log(err)
    }
}

//Update event
const update = (req, res) => {
    try {
        let event = fetch('/api/events/' + req.params.eventId, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req.body)
        })
        return event
    } catch (err) {
        console.log(err)
    }
}

//Delete event
const deleteEvent = (req, res) => {
    try {
        let event = fetch('/api/events/' + req.params.eventId, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        return event
    } catch (err) {
        console.log(err)
    }
}

export {
    create,
    list,
    eventByID,
    update,
    deleteEvent
}
