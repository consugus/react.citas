import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({cita, deleteAppointment}) => (
    <div className="cita">
        <p>Mascota: <span>{cita.pet}</span></p>
        <p>Propietario: <span>{cita.propietary}</span></p>
        <p>Fecha de Ingreso: <span>{cita.createdAtDate}</span></p>
        <p>Hora de Ingreso: <span>{cita.createdAtTime}</span></p>
        <p>Síntomas: <span>{cita.sympthoms}</span></p>

        <button
            className= "button eliminar u-full-width"
            onClick={ () => deleteAppointment(cita.id) }
            >Eliminar &times;
            </button>

    </div>
)

Cita.propTypes = {
    deleteAppointment: PropTypes.func.isRequired,
    cita: PropTypes.object.isRequired
}

export default Cita;