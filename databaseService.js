const databaseService = () => {
    const knex = require('knex')({
      client: 'mysql2',
      connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB,
      }
    });

        


    const table = 'usuarios';
    const table2 = 'pacientes';
    const table3 = 'historial_clinico';
    const table4 = 'citas';

    function mostrarResultadoJoin(id) {
      return knex(table4)
        .join(table2, `${table4}.paciente_id`, '=', `${table2}.id`)
        .select(`${table4}.*`, `${table2}.nombre as nombre_paciente`)
        .where(`${table4}.id`, id); // Filtrar por el ID proporcionado
    }
    
    function buscarUsuarioPorId(id) {
      return knex(table)
        .where({ id: id })
        .first();
    }
    
    

function buscarUsuarioPorNombre(usuario) {
  return knex(table)
    .where({ usuario: usuario })
    .first();
}

function buscarHistorialClinicoPorID(ID_paciente) {
  return knex(table3)
    .where({ id: ID_paciente }) // Ajustamos para buscar por ID
    .first();
}

//paciente por id
function buscarPacientePorID(id) {
  return knex(table2)
    .where({ id: id })
    .first();
} 

function buscarUsuarioPorID(id) {
  return knex(table)
    .where({ id: id })
    .first();
}










    
    
    module.exports = {
      mostrarResultadoJoin,
      // Resto de los métodos existentes en el archivo...
    };


  
    const leerUsuarios = () => {
      return knex(table).select();
      
    };
  
    const leerPacientes = () => {
      return knex(table2).select();
    };

    
  
    const leerHistorial_clinico = () => {
      return knex(table3).select();
    };
  
    const leerCitas = () => {
      return knex(table4).select();
    };
  
    const crearUsuarios = ({ id, correo, usuario, contrasena }) => {
      return knex(table).insert({
        id: id,
        correo: correo,
        usuario: usuario,
        contrasena: contrasena,
      });
    };
  
    const crearHistoriaClinica = ({ ID_paciente, Informacion_dental_basica, Historial_de_tratamiento_dental, Registro_de_tratamientos_de_higiene_dental, Historial_de_afecciones_especificas, Tratamientos_planificados_o_propuestos, Tipo_de_sangre }) => {
      return knex(table3).insert({
        ID_paciente: ID_paciente,
        Informacion_dental_basica: Informacion_dental_basica,
        Historial_de_tratamiento_dental: Historial_de_tratamiento_dental,
        Registro_de_tratamientos_de_higiene_dental: Registro_de_tratamientos_de_higiene_dental,
        Historial_de_afecciones_especificas: Historial_de_afecciones_especificas,
        Tratamientos_planificados_o_propuestos: Tratamientos_planificados_o_propuestos,
        Tipo_de_sangre: Tipo_de_sangre,
      });
    };
  
    const crearCita = ({ id, fecha, hora, paciente_id, procedimiento }) => {
      return knex(table4).insert({
        id: id,
        hora:hora,
        fecha: fecha,
        paciente_id: paciente_id,
        procedimiento: procedimiento,
      });
    };
  
    const crearPaciente = ({ id, nombre, fecha_nacimiento, direccion, telefono, usuario_id }) => {
      return knex(table2).insert({
        id: id,
        nombre: nombre,
        fecha_nacimiento: fecha_nacimiento,
        direccion: direccion,
        telefono: telefono,
        usuario_id: usuario_id
      });
    };
  
    const eliminarUsuario = (id) => {
      return knex(table).where({ id: id }).del();
    };
  
    const eliminarPaciente = (id) => {
      return knex(table2).where({ id: id }).del();
    };
  
    const eliminarHistoriaClinica = (ID_paciente) => {
      return knex(table3).where({ ID_paciente: ID_paciente }).del();
    };
  
    const eliminarCita = (id) => {
      return knex(table4).where({ id: id }).del();
    };

// update

const actualizarCita = (id, datosActualizados) => {
  return knex(table4)
    .where({ id: id })
    .update(datosActualizados);
};

const actualizarUsuario = (id, datosActualizados) => {
  return knex(table)
    .where({ id: id })
    .update(datosActualizados);
};

const actualizarHistorialClinico = (ID_paciente, datosActualizados) => {
  return knex(table3)
    .where({ ID_paciente: ID_paciente })
    .update(datosActualizados);
};

const actualizarPaciente = (id, datosActualizados)  => {
  return knex(table2)
    .where({ id: id })
    .update(datosActualizados);
};




const obtenerUsuarioPorId = (idCOME) => {
  return knex('Usuarios').select() 
    .where({ id: id })
    .first();
};
module.exports = {
  
  obtenerUsuarioPorId,
};








  
    return {
      mostrarResultadoJoin,
  leerCitas,
  leerHistorial_clinico,
  leerPacientes,
  leerUsuarios,
  crearHistoriaClinica,
  crearCita,
  crearPaciente,
  crearUsuarios,
  eliminarUsuario,
  eliminarPaciente,
  eliminarHistoriaClinica,
  eliminarCita,
  actualizarCita,
  actualizarUsuario,
  actualizarHistorialClinico,
  actualizarPaciente,
  buscarUsuarioPorNombre,
  buscarHistorialClinicoPorID,
  buscarUsuarioPorID,
  buscarPacientePorID


    };
  };
  
  module.exports = {
    databaseService
  };
  