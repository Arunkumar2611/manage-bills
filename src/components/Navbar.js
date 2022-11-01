import * as React from 'react';
import { AppBar, Box, Button, Typography, Toolbar } from '@mui/material';
import { Link } from "react-router-dom";


export default function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Button color="inherit"><Link to="/" style={{ textDecoration: 'none', color: "white" }}>Dashboard</Link></Button>
                    <Button color="inherit"><Link to="/overview" style={{ textDecoration: 'none', color: "white" }}>Overview</Link></Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}