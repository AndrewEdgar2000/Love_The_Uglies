import React, {useState} from 'react'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import auth from './../auth/auth-helper'
import {remove} from './api-comments.js'
import {Redirect} from 'react-router-dom'

export default function DeleteComment(props) {
    const [open, setOpen] = useState(false)
    const [redirect, setRedirect] = useState(false)

    const deletedComment = () => {
        remove({
            comment_id: props.comment_id
        }, {t: auth.isAuthenticated().token}).then((data) => {
            if (data && data.error) {
                console.log(data.error)
            } else {
                setRedirect(true)
            }
        })
    }

    const handleRequestClose = () => {
        setOpen(false)
    }

    if (redirect) {
        return <Redirect to='/all-posts'/>
    }

    return (<span>
        <IconButton aria-label="Delete" onClick={() => setOpen(true)} color="secondary">
            <DeleteIcon/>
        </IconButton>

        <Dialog open={open} onClose={handleRequestClose}>
            <DialogTitle>{"Delete Comment"}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Confirm to delete your comment.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleRequestClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={deletedComment} color="secondary" autoFocus="autoFocus">
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    </span>)
}


