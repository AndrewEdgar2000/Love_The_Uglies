const create = async (event) => {
    try {
        let respone =await fetch('/api/events/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(event)
            })
        return await respone.json()
    } catch(err) {
        console.log(err)
    }
}