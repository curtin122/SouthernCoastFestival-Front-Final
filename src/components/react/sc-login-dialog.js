import * as React from 'react'
import { Dialog, DialogContent } from '@mui/material'
import LoginForm from './sc-login-form'
import '../../scss/react.scss'

// login form modal popup
const LoginDialog = ({ open, onClose }) => (
    <Dialog open={open} onClose={onClose}>
        <DialogContent className="login-form">
            <LoginForm />
        </DialogContent>
    </Dialog>
)

export default LoginDialog