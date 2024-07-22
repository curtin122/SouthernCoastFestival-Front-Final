import React, { useState, useEffect } from 'react'
import { Drawer, List, ListItem, ListItemText, Typography, Tooltip } from '@mui/material'
import Auth from '../Auth'
import '../scss/react.scss'

export default function MUIDrawer() {
    const [isAdmin, setIsAdmin] = useState(Auth.currentUser.accessLevel === 'admin')

    // set user access level to admin 
    useEffect(() => {
        setIsAdmin(Auth.currentUser.accessLevel === 'admin')
    }, [Auth.currentUser.accessLevel])

    const menuItems = [
        { text: 'Manage Events', disabled: true, tooltip: 'Feature coming soon', className: 'disabled'}, 
        { text: 'Manage Users', disabled: true, tooltip: 'Feature coming soon', className: 'disabled'}, 
        { text: 'Log Out', diabled: false, tooltip: '', className: '' }
    ]

    const handleLogout = () => {
        Auth.signOut()
        setIsAdmin(false)
        console.log('user logged out')
    }

    if(!isAdmin) {
        return null
    }

    return (
        <div>
            <Drawer 
                anchor="right" 
                variant="permanent"
                sx={{
                    '& .MuiDrawer-paper': {
                        width: '10em',
                        backgroundColor: '#000000',
                        borderLeft: '0.1em solid #FFC600'
                    }
                }}
            >
                <span className="material-icons" id="admin-icon">manage_accounts</span>
                <Typography className="admin-text">Name</Typography>
                <Typography className="admin-text">Editor</Typography>
                <List sx={{ color: '#FFF' }}>
                    {menuItems.map(( {text, disabled, tooltip}, index) => (
                        <Tooltip title={tooltip} key={text} placement="left">
                            <span>
                                <ListItem button key={text} onClick={text === 'Log Out' ? handleLogout : null} disabled={disabled}>
                                    <ListItemText primary={text} />
                                </ListItem>
                            </span>
                        </Tooltip>
                    ))}
                </List>
            </Drawer>
        </div>
    )
}