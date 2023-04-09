import sequelize from './db.js'
import Usuarios from './usuarios.js'
import Tarea from './tareas.js'
import { actualizarUsuario, agregarTareaUsuario, crearUsuario, eliminarTarea, eliminarUsuario, listarTareaUsuario, recuperarUsuario, recuperarUsuarios } from './controllers/user.controllers.js'

Usuarios.hasMany(Tarea)
Tarea.belongsTo(Usuarios)

const main = async () => {
  try {
    await sequelize.sync()
    console.log('BD OK')
    await crearUsuario()
    await recuperarUsuarios()
    await recuperarUsuario(1)
    await actualizarUsuario(2, 'Marcela')
    await eliminarUsuario(1)
    await agregarTareaUsuario(3, 'Hacer otra tarea')
    await listarTareaUsuario(3)
    await eliminarTarea(3, 'Hacer otra tarea')
    await listarTareaUsuario(3)
  } catch (error) {
    console.error(error)
  }
}

main()
