import React, {Fragment, useState} from 'react'
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {

  //Crear State de citas
  const [cita, actualizaCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });

  const [error, actualizarError] = useState(false)


  //Funcion que se ejecuta cada que el usuario escribe
  const actualizaState = e => {
      actualizaCita({
        ...cita,
        [e.target.name]: e.target.value
      })
  }

  //Extraer valores
  const {mascota, propietario, fecha, hora, sintomas} = cita;

  //Cuando el usuario presiona agregar cita
  const submitCita = e => {
    e.preventDefault();

      console.log(mascota)

    //Validar
    if(
      mascota.trim() === '' || 
      propietario.trim() === '' || 
      fecha.trim() === '' || 
      hora.trim() === '' ||
      sintomas.trim() === ''
    ){
      actualizarError(true)
      return
    }

  //Eliminar el mensaje previo
  actualizarError(false)

  //Asignar ID
  cita.id = uuid()

  //Crear cita
  crearCita(cita)

  //Reiniciar el form
  actualizaCita({
      mascota: '',
      propietario: '',
      fecha: '',
      hora: '',
      sintomas: ''
  })


  }

  return (
    <Fragment>
        <h2>Crear cita</h2>

        {error ? <p className='alerta-error'>Todos los campos son obligatorios
        </p> :null}

        <form
            onSubmit={submitCita}
        >
            <label>Nombre Mascota</label>
            <input 
                type="text" 
                name="mascota"
                className='u-full-width'  
                placeholder='Nombre mascota'
                onChange={actualizaState}
                value={mascota} 
            />

            <label>Nombre Dueño</label>
            <input 
                type="text" 
                name="propietario"
                className='u-full-width'  
                placeholder='Nombre del dueño mascota'
                onChange={actualizaState}
                value={propietario}
            />

            <label>Fecha</label>
            <input 
                type="date" 
                name="fecha"
                className='u-full-width'
                onChange={actualizaState}
                fecha={fecha}    
            />

            <label>Hora</label>
            <input 
                type="time" 
                name="hora"
                className='u-full-width'
                onChange={actualizaState}
                value={hora}
            />

            <label>Sintomas</label>
            <textarea 
                name="sintomas" 
                className='u-full-width'
                onChange={actualizaState}
                value={sintomas}
            ></textarea>


            <button 
                type='submit'
                className='u-full-width button-primary'
                >Agregar Cita</button>
        </form>
</Fragment>
  )
}

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired
}

export default Formulario
