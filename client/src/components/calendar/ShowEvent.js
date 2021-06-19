import React from 'react'
import AddEvent from './AddEvent/AddEvent';
import {Container,Grid,Paper,Grow} from '@material-ui/core';
const ShowEvent = () => {
    return (
    <Grow in>
        <Container  >
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} >
                <AddEvent />
            </Grid>
            </Grid>
        </Container>
    </Grow>

    )
}

export default ShowEvent
