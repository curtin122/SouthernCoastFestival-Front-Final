import * as React from 'react'
import { Drawer, List, ListItem, ListItemText, Typography } from '@mui/material'
import '../scss/react.scss'

export default function MUIDrawer() {
    const menuItems = [ 'Manage Events', 'Manage Users', 'Log Out']

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
                    {menuItems.map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    )
}