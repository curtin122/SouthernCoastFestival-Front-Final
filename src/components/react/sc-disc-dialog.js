import * as React from 'react'
import { Dialog, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material'
import '../../scss/react.scss'

// disclaimer dialog component
const DiscDialog = ({ open, onClose }) => (
    <Dialog open={open} onClose={onClose} className="disclaimer">
        <DialogTitle>Disclaimer</DialogTitle>
        <DialogContent>
            <DialogContentText>Disclaimer: This website has been created as part of an assignment in an approved course of study for Curtin University and contains copyright material not created by the author. All copyright material used remains copyright of the respective owners and has been used here pursuant to Section 40 of the Copyright Act 1968 (Commonwealth of Australia). No part of this work may be reproduced without consent of the original copyright owners. See code comments for references.</DialogContentText>
            <Button onClick={onClose}>Close</Button>
        </DialogContent>
    </Dialog>
)

export default DiscDialog;