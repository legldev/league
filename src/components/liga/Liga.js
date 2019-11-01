import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Estilos
import './Liga.css';

// Material
import Button from '@material-ui/core/Button';

// Componentes
import Equipo from './../common/equipo/Equipo';
import Jugador from './../common/jugador/Jugador';

// Data
import equiposJSON from '../../assets/data/equipos.json';
import jugadoresJSON from '../../assets/data/jugadores.json';


class Liga extends Component {

  state = {
    equipos: [],
    jugadores: []
  }

  componentDidMount() {
    let equipos = { ...this.state.equipos };
    equipos = equiposJSON;
    this.setState({ equipos });

    let jugadores = { ...this.state.jugadores };
    jugadores = jugadoresJSON;
    this.setState({ jugadores });

  }

  render() {
    return (
      <div className="contenedor">
        <div className="lista-equipos">
          {
            this.state.equipos.map((equipo, index) => {
              return <Equipo
                key={index}
                nombre={equipo.nombre}
                logo={require('./../../assets/logos/' + equipo.logo)} />
            })
          }
        </div>

        <Button variant="raised" component={Link} to="/calendario/felinos" color="secondary">Ir al calendario</Button>

        <div className="lista-jugadores">
          {
            this.state.jugadores.map((jugador, index) => {
              return <Jugador
                key={index}
                nombre={jugador.nombre}
                foto={require('./../../assets/fotos/' + jugador.foto)} />

            })
          }
        </div>
      </div >
    );
  }
}

export default Liga;
