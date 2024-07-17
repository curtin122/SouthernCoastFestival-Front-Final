import * as React from 'react'
import { useState } from 'react'
import { Card, CardContent, CardMedia, Typography, Box, IconButton, CardHeader, Badge } from '@mui/material'
import placeholderImg from '../../../static/images/chef-bryan-entertainment.jpg'
import '../../scss/react.scss'
import eventData from '../../eventdata'

const eventCard = () => {
    return (
        <>
        {eventData.map(event => (
            <Card className="event-card" key={event._id}>
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
                    <Typography>
                        {event.eventstall}
                    </Typography>
                    <Typography className="hidden">
                        {event.eventcategory}<br></br>
                        {event.eventtag}
                    </Typography>
                </CardContent>
            </Card>
        ))}
        </>
    )
}

export default eventCard