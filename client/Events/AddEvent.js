import React, {useState} from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/core/styles'
import {create} from './api-events.js'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    textAlign: 'center',
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(2)
  },
  error: {
    verticalAlign: 'middle'
  },
  title: {
    marginTop: theme.spacing(2),
    color: theme.palette.openTitle
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300
  },
  submit: {
    margin: 'auto',
    marginBottom: theme.spacing(2)
  }
}))

export default function AddEvent() {
    const classes = useStyles()
    const [values, setValues] = useState({
        name: '',
        description: '',
        date: '',
        location: '',
        open: false,
        error: ''
    })

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }
    
    const clickSubmit = () => {
        const event = {
            name: values.name || undefined,
            description: values.description || undefined,
            date: values.date || undefined,
            location: values.location || undefined,
        }

        create(event).then((data) => {
            //console.log("🚀 ~ file: AddEvent.js ~ line 67 ~ create ~ event", event)
            if (data.error) {
                setValues({ ...values, error: data.error})
            } else {
                setValues({ ...values, error: '', open: true})
            }
        })
    }
    return (<div>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6" className={classes.title}>
            Add Event
          </Typography>
          <TextField id="name" label="Event Name" className={classes.textField} value={values.name} onChange={handleChange('name')} margin="normal"/><br/>
          <TextField id="location"  label="Event Location " className={classes.textField} value={values.location} onChange={handleChange('location')} margin="normal"/><br/>
          <TextField id="date" label="Date of Event" className={classes.textField} value={values.date} onChange={handleChange('date')} margin="normal"/><br/>
          <TextField id="description"  label="Description of Event" className={classes.textField} value={values.description} onChange={handleChange('description')} margin="normal"/><br/>
         {
            values.error && (<Typography component="p" color="error">
              <Icon color="error" className={classes.error}>error</Icon>
              {values.error}</Typography>)
          }
        </CardContent>
        <CardActions>
          <Button color="primary" variant="contained" onClick={clickSubmit} className={classes.submit}>Submit</Button>
        </CardActions>
      </Card>
      <Dialog open={values.open} disableBackdropClick={true}>
        <DialogTitle>New Event</DialogTitle>
        <DialogContent>
          <DialogContentText>
            New Event Successfully Created.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to="/Events">
            <Button color="primary" autoFocus="autoFocus" variant="contained">
              Go To Events
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
    )
}