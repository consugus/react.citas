import React, { Fragment, useState } from 'react';
import Form from "./components/form";
import Cita from './components/cita';


function App() {

  // ? Arreglo de citas
  const [appointments, saveAppointments] = useState([])

  const createAppointment = (appointment) => {
    saveAppointments([...appointments, appointment])
    console.log(appointments);
  }

  const deleteAppointment = id => {
    const newAppointments = appointments.filter( cita => cita.id !== id  );
    saveAppointments(newAppointments);
  }

  // Conditional message
  const title = (appointments.length === 0 ? "No hay citas" : "Administra tus citas")

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form
              createAppointment={createAppointment}
            />
          </div>
          <div className="one-half column">
          <h2>{title}</h2>
          {appointments.map( (cita) => (
            <Cita
              key={cita.id}
              cita={cita}
              deleteAppointment={deleteAppointment}
            />
          ) )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
