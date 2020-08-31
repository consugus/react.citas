import React, { Fragment, useState, useEffect } from 'react';
import Form from "./components/form";
import Cita from './components/cita';


function App() {

  // ? Citas en el LocalStorage
  // ? En éste caso se está utilizando el localStorage, pero en app reales sería el equivalente
  // ? a traer datos de la base de datos e inicializar la variable correspondiente con el
  // ? resultado recuperado
  let initialAppointments = JSON.parse (localStorage.getItem("appointments"));
  console.log("initialAppointments: ", initialAppointments);
  if( !initialAppointments ) {
    initialAppointments = [];
  }



  // ? Arreglo de citas
  const [appointments, saveAppointments] = useState(initialAppointments)


  // ? UseEffect para realizar ciertas operaciones cuando el State cambia
  useEffect( () => {
    let initialAppointments = JSON.parse (localStorage.getItem("appointments"));
    console.log( "Página completamente cargada o algún movimiento hubo con las citas" );
    if( initialAppointments ) {
      localStorage.setItem( 'appointments', JSON.stringify(appointments) );
    } else{
      localStorage.setItem( 'appointments', JSON.stringify( [] ) );
    }

  }, [ appointments ]);

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
