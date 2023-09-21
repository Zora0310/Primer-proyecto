import React from 'react'
import PropTypes from 'prop-types';

const cita = ({cita, eliminarCita}) => (
    <div className='cita'> 
        <p>Mascota: <span></span>{cita.mascota}</p>
        <p>Dueño: <span></span>{cita.propietario}</p>
        <p>Fecha: <span></span>{cita.fecha}</p>
        <p>Hora: <span></span>{cita.hora}</p>
        <p>Sintomas: <span></span>{cita.sintomas}</p>

        <button
            className='button eliminar u-full-width'
            onClick={() => eliminarCita(cita.id)}
        >Eliminar &times;</button>
    </div>
  
)

ita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}

export default cita
