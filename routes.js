const { data } = require("vis-network");

module.exports = function (app, databaseService) {
  app.get('/', (request, response) => {
    response.json({ "msj": "todo bien" });
  });


  app.get('/mostrarResultadoJoin/:id', (request, response) => {
    const id = request.params.id;
    databaseService.mostrarResultadoJoin(id)
      .then(result => {
        response.json(result);
      })
      .catch(e => response.status(500).json(e));
  }); 

  app.get('/Historial_Clinico/:ID_paciente', (request, response) => {
    const ID_paciente = request.params.ID_paciente;
  
    databaseService.buscarHistorialClinicoPorID(ID_paciente)
      .then(historial => {
        if (historial) {
          response.json(historial);
        } else {
          response.status(404).json({ 'msj': 'Dato del historial clínico no encontrado para el ID proporcionado' });
        }
      })
      .catch(e => response.status(500).json(e));
  });
  




  




  /*........................ Usuarios.................... */

  app.post('/Usuarios', (request, response) => {
    const nuevoUsuario = request.body;
    console.log(nuevoUsuario);
    databaseService.crearUsuarios(nuevoUsuario)
      .then(() => {
        response.json({ 'msj': 'Administrador creado' });
      }).catch(e => {
        response.status(500).json(e);
      });
  });
//--------------------------------Usuarios busqueda-----------------------------------------------------------------
  app.get('/Usuarios', (request, response) => {
    databaseService.leerUsuarios()
      .then(Usuarios => {
        response.json(Usuarios);
      }).catch(e => response.status(500).json(e));
  });
 
  
  // Ruta para buscar paciente por ID
app.get('/Pacientes/:id', (request, response) => {
  const idPaciente = request.params.id;

  databaseService.buscarPacientePorID(idPaciente)
    .then(paciente => {
      if (paciente) {
        response.json(paciente);
      } else {
        response.status(404).json({ 'msj': 'Paciente no encontrado para el ID proporcionado' });
      }
    })
    .catch(e => response.status(500).json(e));
});




  //-----------------------------------------------------------------------------------------------

  app.get('/Usuarios/:id', (request, response) => {
    const idUsuario = request.params.id;
  
    databaseService.buscarUsuarioPorID(idUsuario)
      .then(usuario => {
        if (usuario) {
          response.json(usuario);
        } else {
          response.status(404).json({ 'msj': 'Usuario no encontrado para el ID proporcionado' });
        }
      })
      .catch(e => response.status(500).json(e));
  });
  



  app.delete('/Usuarios/:id', (request, response) => {
    const id = request.params.id;
    databaseService.eliminarUsuario(id)
      .then(() => {
        response.json({ 'msj': 'Usuario eliminado' });
      }).catch(e => response.status(500).json(e));
  });

  app.put('/Usuarios/:id', (request, response) => {
    const id = request.params.id;
    const datosActualizados = request.body;
  
    databaseService.actualizarUsuario(id, datosActualizados)
      .then(() => {
        response.json({ 'msj': 'Usuario actualizado' });
      })
      .catch(e => response.status(500).json(e));
  });

  /*........................ Pacientes.................... */
  app.post('/Pacientes', (request, response) => {
    const nuevoPaciente = request.body;
    console.log(nuevoPaciente);
    databaseService.crearPaciente(nuevoPaciente)
      .then(() => {
        response.json({ 'msj': 'Paciente creado' });
      }).catch(e => {
        response.status(500).json(e);
      });

  });

  
  app.put('/Pacientes/:id', (request, response) => {
    const id = request.params.id;
    const datosActualizados = request.body;
  
    databaseService.actualizarPaciente(id, datosActualizados)
      .then(() => {
        response.json({ 'msj': 'paciente actualizado' });
      })
      .catch(e => {
        console.error(e); // Registra el objeto de error completo para depuración
        response.status(500).json(e);
      });
  });
  



  app.get('/Pacientes', (request, response) => {
    databaseService.leerPacientes()
      .then(Pacientes => {
        response.json(Pacientes);
      }).catch(e => response.status(500).json(e));
  });

  app.delete('/Pacientes/:id', (request, response) => {
    const id = request.params.id;
    databaseService.eliminarPaciente(id)
      .then(() => {
        response.json({ 'msj': 'Paciente eliminado' });
      }).catch(e => response.status(500).json(e));
  });

  /*........................ Citas.................... */
  app.post('/Citas', (request, response) => {
    const nuevaCita = request.body;
    console.log(nuevaCita);
    databaseService.crearCita(nuevaCita)
      .then(() => {
        response.json({ 'msj': 'Nueva cita creada' });
      }).catch(e => {
        response.status(500).json(e);
      });
  });

  app.get('/Citas', (request, response) => {
    databaseService.leerCitas()
      .then(Citas => {
        response.json(Citas);
      }).catch(e => response.status(500).json(e));
  });

  app.delete('/Citas/:id', (request, response) => {
    const id = request.params.id;
    databaseService.eliminarCita(id)
      .then(() => {
        response.json({ 'msj': 'Cita eliminada' });
      }).catch(e => response.status(500).json(e));
  });



app.put('/Citas/:id', (request, response) => {
  const id = request.params.id;
  const datosActualizados = request.body;

  databaseService.actualizarCita(id, datosActualizados)
    .then(() => {
      response.json({ 'msj': 'Cita actualizada' });
    })
    .catch(e => response.status(500).json(e));
});



  /*........................ Historial_clinico.................... */
  app.post('/Historial_Clinico', (request, response) => {
    const nuevaHistoriaClinica = request.body;
    console.log(nuevaHistoriaClinica);
    databaseService.crearHistoriaClinica(nuevaHistoriaClinica)
      .then(() => {
        response.json({ 'msj': 'Nueva historia creada' });
      }).catch(e => {
        response.status(500).json(e);
      });
  });

  app.get('/Historial_Clinico', (request, response) => {
    databaseService.leerHistorial_clinico()
      .then(HistorialClinico => {
        response.json(HistorialClinico);
      }).catch(e => response.status(500).json(e));
  });

  app.delete('/Historial_Clinico/:ID_paciente', (request, response) => {
    const ID_paciente = request.params.ID_paciente;
    databaseService.eliminarHistoriaClinica(ID_paciente)
      .then(() => {
        response.json({ 'msj': 'Historia clínica eliminada' });
      }).catch(e => response.status(500).json(e));
  });

  
app.put('/Historial_Clinico/:ID_paciente', (request, response) => {
  const ID_paciente = request.params.ID_paciente;
  const datosActualizados = request.body;

  databaseService.actualizarHistorialClinico(ID_paciente, datosActualizados)
    .then(() => {
      response.json({ 'msj': 'Historial clínico actualizado' });
    })
    .catch(e => response.status(500).json(e));
});



};
