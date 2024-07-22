import React, { useState } from 'react'
import { Box, Typography, TextField, Stack, Checkbox, Button, FormGroup, FormControlLabel, Alert, Snackbar } from '@mui/material'
import '../../scss/react.scss'

const contactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        enquiry: '',
    })

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        phone: false,
        enquiry: false,
    })

    const [snackbarOpen, setSnackbarOpen] = useState(false)

    // when a change is deteced, store those in temporary variables
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    // check all required values are filled
    const handleSendMessage = () => {
        const newErrors = {
            name: !formData.name,
            email: !formData.email,
            phone: !formData.phone,
            enquiry: !formData.enquiry,
        }

        setErrors(newErrors)

        // if none are empty, send alert
        if (!Object.values(newErrors).includes(true)) {
            setSnackbarOpen(true)
            alert('Message sent!')
        }
    }

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false)
    }

    return (

        <Box className="form-container">
            <Typography className="form-title">Contact Us</Typography>
            <Box className="form-section">
                <Typography className="form-sub">How can we contact you?</Typography>
                <Stack>
                    <TextField variant="outlined" label="Name" className="form-text" size="small" name="name" onChange={handleChange} error={errors.name} helperText={errors.name ? "Name is required" : ""}></TextField>
                    <TextField variant="outlined" label="Email address" className="form-text" size="small" name="email" onChange={handleChange} error={errors.email} helperText={errors.email ? "Email is required" : ""}></TextField>
                    <TextField variant="outlined" label="Phone number" className="form-text" size="small" name="phone" onChange={handleChange} error={errors.phone} helperText={errors.phone ? "Phone number is required" : ""}></TextField>
                </Stack>
            </Box>
            <Box className="form-section">
                <Typography className="form-sub">How can we help you?</Typography>
                    <FormGroup>
                        <FormControlLabel className="form-checkbox" control={<Checkbox />} label="General enquiry" />
                        <FormControlLabel className="form-checkbox" control={<Checkbox />} label="Expression of interest as vendor" />
                        <FormControlLabel className="form-checkbox" control={<Checkbox />} label="Accessibility enquiry" />
                    </FormGroup>
                    <TextField variant="outlined" label="Enquiry" className="form-enquiry" size="small" multiline rows={4} name="enquiry" onChange={handleChange} error={errors.enquiry} helperText={errors.enquiry ? "Enquiry is required" : ""}></TextField>
            </Box>
            <Stack className="form-controls">
                <Button className="form-button">Cancel</Button>
                <Button className="form-button" onClick={handleSendMessage}>Send message</Button>
            </Stack>
        </Box>

    )
}

export default contactForm