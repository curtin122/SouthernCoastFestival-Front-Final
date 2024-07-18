import * as React from 'react'
import { IconButton, Menu, MenuItem } from '@mui/material'

export default function HeaderMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <>
            <div>
                <IconButton>
                    <span className="materials-icon">Menu</span>
                </IconButton>
                <Menu
                    id="header-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose{handleClose}
                    MenuListProps={{
                        'aria-labelledby: "basic-button"',
                    }}
                >
                    <MenuItem onClick={handleClose}>Home</MenuItem>
                    <MenuItem onClick={handleClose}>Events</MenuItem>
                    <MenuItem onClick={handleClose}>Venue</MenuItem>
                    <MenuItem onClick={handleClose}>About</MenuItem>
                </Menu>
            </div>
        </>
    )
}