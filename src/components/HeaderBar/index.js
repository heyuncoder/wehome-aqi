import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import './headerbar.css'
import SearchBar from "../SearchBar"

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class HeaderBar extends Component {
    constructor() {
        super();
    }
    render() {

        return (
            <div className="headerbar">
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className="menuButton" color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className="flex">
                            空气质量查询（AQI）
                        </Typography>
                    </Toolbar>
                </AppBar>
                <SearchBar />
            </div>
        );
    }
}

export default HeaderBar;