import React, { Fragment, useState } from "react";
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';


const Form = ({createAppointment}) => {

    // Crear state de citas
    const [appointment, updateAppointment] = useState({
        pet: '',
        propietary:'',
        createdAtDate: '',
        createdAtTime: '',
        sympthoms: ''
    });
    const[error, updateError] = useState(false)


    // Función a ejecutar cuando el usuario escribe en un input
    const handleChange = (e) => {
        updateAppointment({
            ...appointment,
            [e.target.name]: e.target.value
        })
    };



    // Extraer los valores del appointment
    const { pet, propietary, createdAtDate, createdAtTime, sympthoms } = appointment


    // Cuando el usuario presione agregar appointment
    const submitAppointment = (e) => {
        e.preventDefault();
        updateError(false);


        // ? Validar
        validateFields();
        // console.log( "error: ", error );

        if(error)
        {
            return;
        } else{
            // ? Asignar un Id
            appointment.id = uuid()

            // ? Crear la Cita
            createAppointment(appointment);

            // ? Reiniciar el form
            updateAppointment({
                pet: '',
                propietary:'',
                createdAtDate: '',
                createdAtTime: '',
                sympthoms: ''
            });
        }

    }

    const validateFields = () => {
        let attr;
        for (attr in appointment){
            if(appointment[attr].trim() === ""){
                updateError(true);
                return;
            }
        }
        updateError(false);
    }


    return (
        <Fragment>
            <h2>Crear cita</h2>
            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null }
            <form
                onSubmit= {submitAppointment}
            >
                <label>Nombre mascota</label>
                <input
                    type="text"
                    name="pet"
                    className="u-full-width"
                    placeholder="Ingrese el nombre de la mascota"
                    onChange={handleChange}
                    value= {pet}
                />
                <label>Nombre del propietario</label>
                <input
                    type="text"
                    name="propietary"
                    className= "u-full-width"
                    placeholder="Ingrese el nombre del propietario"
                    onChange={handleChange}
                    value= {propietary}
                />
                <label>Fecha de alta</label>
                <input
                    type="date"
                    name="createdAtDate"
                    className="u-full-width"
                    onChange={handleChange}
                    value= {createdAtDate}
                />
                <label>Hora de alta</label>
                <input
                    type="time"
                    name="createdAtTime"
                    className="u-full-width"
                    onChange={handleChange}
                    value= {createdAtTime}
                />
                <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sympthoms"
                    onChange={handleChange}
                    value= {sympthoms}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar cita</button>
            </form>
        </Fragment>
    );
}

Form.propTypes = {
    createAppointment: PropTypes.func.isRequired
}

export default Form;