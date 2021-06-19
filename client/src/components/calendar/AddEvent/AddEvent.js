import React,{useState} from 'react';
import {createCalendarPost} from '../../../actions/calendarPosts';
import { useDispatch, useSelector } from 'react-redux';
import { Grid,Container,Paper,Avatar,Typography,TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import 'date-fns';
import useStyles from './styles';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
const AddEvent = () => {
    const classes=useStyles();
    const dispatch = useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(createCalendarPost(postData));
        console.log(postData)
    }
    const [postData, setPostData] = useState({selectedDate:'',selectedTime:'',title:''});
    const [selectedDate, setSelectedDate] = useState(new Date('2021-08-18T21:11:54'));
    const [selectedTime, setSelectedTime] = useState(new Date('2021-08-18T21:11:54'));
    const handleDateChange=(date)=>{
        setPostData({ ...postData, selectedDate: date })
    }
    const handleTimeChange=(date)=>{
        setPostData({ ...postData, selectedTime: date })
    }
    const handleEventChange = ()=>{

    }
    
    return (
        <Container component="main" maxwidth="xs">
            <Paper className={classes.paper} elevation={3}> 
                <Avatar className={classes.avatar}>
                    
                </Avatar>
                <Typography variant="h5">Add Event</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                   <Grid container spacing={2} justify="space-between">
                   <Grid item xs={6} sm={3}  > 
                   <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        
                   <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        /> </MuiPickersUtilsProvider>
                            </Grid>
                            <Grid item xs={6} sm={3}  > 
                           <MuiPickersUtilsProvider utils={DateFnsUtils}> 
                             <KeyboardTimePicker
                                 margin="normal"
                                id="time-picker"
                                label="Time"
                                value={selectedTime}
                                onChange={handleTimeChange}
                                KeyboardButtonProps={{
                                'aria-label': 'change time',
                                }}
                            />
                            </MuiPickersUtilsProvider>
                    
                   </Grid>
                                        
                         <Grid item xs={12} sm={12} >
                           <TextField name="Event Name" fullWidth  label="Event Name" variant="outlined" onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
                        </Grid>

                        <Grid item xs={12}  sm={12}>
                           <TextField name="Venue" fullWidth  label="Venue" variant="outlined" />
                        </Grid>

                        
                </Grid> 
                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                    Submit
                </Button>
            </form>

            </Paper>
        </Container>
    )
}

export default AddEvent
