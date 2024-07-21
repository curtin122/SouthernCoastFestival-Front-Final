import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardMedia, Typography, Box, IconButton, Grid, Skeleton } from '@mui/material'
import placeholderImg from '../../static/images/chef-bryan-entertainment.jpg'
import '../scss/react.scss'
import eventData from '../eventdata'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlFood, faLightbulb, faShop } from '@fortawesome/free-solid-svg-icons'

const EventContainer = () => {
    const [events, setEvents] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [selectedTag, setSelectedTag] = useState('all')

    useEffect(() => {
        const fetchEvents = () => {
            setEvents(eventData)
        }
        fetchEvents()
    }, [])

    const [filteredEvents, setFilteredEvents] = useState([])

    useEffect(() => {
        let filtered = events;

        if (selectedCategory !== 'all') {
            filtered = filtered.filter(event => event.eventcategory === selectedCategory)
        }

        if (selectedTag !== 'all') {
            filtered = filtered.filter(event => {
                if (Array.isArray(event.eventtag)) {
                    return event.eventtag.includes(selectedTag)
                }
                return event.eventtag === selectedTag
            })
        }

        setFilteredEvents(filtered)
    }, [selectedCategory, selectedTag, events])

    const handleCategoryChange = (category) => {
        console.log("selected button:", category)
        setSelectedCategory(category)
        setSelectedTag('all')
    }

    const handleTagChange = (tag) => {
        setSelectedTag(tag)
    }

    return (
        <>
            <div id="category-container">
                <button className={`category-button ${selectedCategory === 'Food' ? 'active' : ''}`} onClick={() => handleCategoryChange('Food')}><FontAwesomeIcon icon={faBowlFood} style={{marginRight:'5px'}}/>Eat + Drink</button>
                <button className={`category-button ${selectedCategory === 'Entertainment' ? 'active' : ''}`} onClick={() => handleCategoryChange('Entertainment')}><FontAwesomeIcon icon={faLightbulb} style={{marginRight:'5px'}}/>Entertainment</button>
                <button className={`category-button ${selectedCategory === 'Shop' ? 'active' : ''}`} onClick={() => handleCategoryChange('Shop')}><FontAwesomeIcon icon={faShop} style={{marginRight:'5px'}}/>Shop</button>
            </div>

            <div id="tag-container">
                <button className={`tag-button ${selectedTag === 'all' ? 'active' : ''}`} onClick={() => handleTagChange('all')}>All</button>
                <button className={`tag-button ${selectedTag === 'drink' ? 'active' : ''}`} onClick={() => handleTagChange('drink')}>Drinks</button>
                <button className={`tag-button ${selectedTag === 'food' ? 'active' : ''}`} onClick={() => handleTagChange('food')}>Food</button>
                <button className={`tag-button ${selectedTag === 'alcoholic' ? 'active' : ''}`} onClick={() => handleTagChange('alcoholic')}>Alcholic</button>
                <button className={`tag-button ${selectedTag === 'gluten-free' ? 'active' : ''}`} onClick={() => handleTagChange('gluten-free')}>Gluten Free</button>
                <button className={`tag-button ${selectedTag === 'nut-free' ? 'active' : ''}`} onClick={() => handleTagChange('nut-free')}>Nut Free</button>
                <button className={`tag-button ${selectedTag === 'gourmet' ? 'active' : ''}`} onClick={() => handleTagChange('gourmet')}>Gourmet</button>
                <button className={`tag-button ${selectedTag === 'vegan' ? 'active' : ''}`} onClick={() => handleTagChange('vegan')}>Vegan</button>
                <button className={`tag-button ${selectedTag === 'favourites' ? 'active' : ''}`} onClick={() => handleTagChange('favourites')}>
                    <span className="material-icons">favorite_border</span>
                    Favourites
                </button>
                <p className="message">Showing all {filteredEvents.length} items</p>
            </div>

            {filteredEvents.length === 0 ? (
                <>
                <Typography sx={{color: '#FFFFFF', fontFamily: 'var(--base-font-family)', textAlign: 'center', paddingBottom: '10px', fontSize: '1em'}}>No events found matching that criteria</Typography>
                <Grid container spacing={3} className="skel-grid">
                    {[...Array(2)].map((_, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                            <Card className="card">
                                <CardContent className="event-content">
                                    <Skeleton variant="rounded" height={200} />
                                    <Box mt={2} className="skel-box">
                                        <Skeleton variant="text" width="60%" />
                                        <Skeleton variant="text" width="80%" />
                                        <Skeleton variant="text" width="40%" />
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid> 
                </>
            ) : (
                <Grid container spacing={3} className="card-grid">
                    {filteredEvents.map(event => {
                        const imageUrl = event.eventimage || placeholderImg;

                        return (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={event._id}>
                                <Card className="card">
                                    <CardContent className="event-content">
                                        <CardMedia
                                            component="img"
                                            alt="placeholder"
                                            height="150"
                                            image={imageUrl}
                                            className="event-image" />
                                        <Box className="event-stall-box">
                                            <Typography className="stall">Stall</Typography>
                                            <Typography className="event-stall-number">{event.eventstallnumber}</Typography>
                                        </Box>
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
            )}
        </>
    )
}

export default EventContainer;