import React, { Component } from 'react';

// Material
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Estilos
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="app-bar">
                <AppBar position="static">
                    <Toolbar>
                        <div className="logo"></div>
                        <Typography variant="title" color="inherit" className="flex">

                        </Typography>

                        <Button color="inherit" >
                            <a href="/liga">Equipos</a>
                        </Button>
                        <Button color="inherit" >
                            <a href="/calendarios">Calendarios</a>
                        </Button>

                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Header;
