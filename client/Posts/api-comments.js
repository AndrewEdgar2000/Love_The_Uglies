//Create comment
const create = async (comment) => {
    try {
        let newComment = await fetch('/api/comments/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comment)
        })
        return await newComment.json()
    } catch (err) {
        console.log(err)
    }
}

//List all comments
const list = async (params, credentials, signal) => {
    try {
        let comments = await fetch('/api/comments/', {
            method: 'GET',
            signal: signal,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t
            }
        })
        return await comments.json()
    } catch (err) {
        console.log(err)
    }
}

//Get comment by id
const commentByID = async (params, credentials, signal) => {
    try {
        let comment = await fetch('/api/comments/' + params.commentId, {
            method: 'GET',
            signal: signal,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t
            }
        })
        return await comment.json()
    } catch (err) {
        console.log(err)
    }
}

//Update comment
const update = (params, credentials, signal) => {
    try {
        let comment = fetch('/api/comments/' + params.commentId, {
            method: 'PUT',
            signal: signal,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t
            },
            body: JSON.stringify(params.comment)
        })
        return comment
    } catch (err) {
        console.log(err)
    }
}

//Delete comment
const remove = (params, credentials, signal) => {
    try {
        let comment = fetch('/api/comments/' + params.commentId, {
            method: 'DELETE',
            signal: signal,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t
            }
        })
        return comment
    } catch (err) {
        console.log(err)
    }
}

export {
    create,
    list,
    commentByID,
    update,
    remove
}

