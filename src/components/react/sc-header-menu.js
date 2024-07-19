import * as React from 'react'
import { IconButton, Menu, MenuItem } from '@mui/material'
import '../../scss/react.scss'

export default function HeaderMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleMenuItemClick = (id) => {
        const section = document.getElementById(id)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start'})
        }
        handleClose()
    }

    return (
        <>
            <div>
                <IconButton 
                    onClick={handleClick} 
                    style={{ background: '#2b2b2b', borderStyle: 'none', borderRadius: '0.2em', color: '#FFFFFF', fontSize: '1.5em', padding: '0.1em 0.3em' }}
                > 
                    &#9776;
                </IconButton>
                <Menu
                    id="header-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem className="menu-item" onClick={() => handleMenuItemClick('home')}>Home</MenuItem>
                    <MenuItem className="menu-item" onClick={() => handleMenuItemClick('events')}>Events</MenuItem>
                    <MenuItem className="menu-item" onClick={() => handleMenuItemClick('venue')}>Venue</MenuItem>
                    <MenuItem className="menu-item" onClick={() => handleMenuItemClick('about')}>About</MenuItem>
                </Menu>
            </div>
        </>
    )
}