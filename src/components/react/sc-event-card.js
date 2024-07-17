import * as React from 'react'
import { Card, CardContent, CardMedia, Typography, Box, IconButton, Grid } from '@mui/material'
import placeholderImg from '../../../static/images/chef-bryan-entertainment.jpg'
import '../../scss/react.scss'
import eventData from '../../eventdata'

const eventCard = () => {
    return (
        <Grid container spacing={3} className="card-grid">
            {eventData.map(event => {
                const imageUrl = event.eventimage || placeholderImg;
                console.log("Image URL:", imageUrl)

                return (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={event._id}>
                        <Card className="card">
                            <CardContent className="event-content">
                                <CardMedia
                                    component="img"
                                    alt="placeholder"
                                    height="150"
                                    image={event.eventimage}
                                    className="event-image" />
                                <Box className="event-title-box">
                                    <Typography className="event-title">
                                        {event.eventdisplayname}
                                    </Typography>
                                    <IconButton className="event-button">
                                        <span className="material-icons">
                                            favorite_border
                                        </span>
                                    </IconButton>
                                </Box>
                                <Typography className="event-description">
                                    {event.eventdescription}
                                </Typography>
                                <Typography className="event-times">
                                    {event.eventoperationdatetimestart}<br></br>
                                    {event.eventoperationdatetimeend}
                                </Typography>
                                <Typography className="hidden">
                                    {event.eventstallnumber}
                                </Typography>
                                <Typography className="hidden">
                                    {event.eventcategory}<br></br>
                                    {event.eventtag}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default eventCard