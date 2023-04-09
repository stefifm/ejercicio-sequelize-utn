import Usuarios from '../usuarios.js'

// Crear un usuario

const crearUsuario = async () => {
  // const datosJuanPerez = {
  //   nombre: 'Juan',
  //   apellido: 'Perez',
  //   usuario: 'jperez',
  //   password: '123456',
  //   email: 'jperez@gmail.com'
  // }

  // const juanPerez = await Usuarios.create(datosJuanPerez)
  // console.log('Usuario creado ID: ', juanPerez.id)

  // const datosMariaGarcia = {
  //   nombre: 'Maria',
  //   apellido: 'Garcia',
  //   usuario: 'mgarcia',
  //   password: '123456',
  //   email: 'mgarcia@gmail.com'
  // }

  // const mariaGarcia = await Usuarios.create(datosMariaGarcia)
  // console.log('Usuario creado ID: ', mariaGarcia.id)

  // const datosStefaniaBruera = {
  //   nombre: 'Stefania',
  //   apellido: 'Bruera',
  //   usuario: 'stefifm',
  //   password: '123456',
  //   email: 'stefifm@gmail.com'
  // }

  // const stefiBruera = await Usuarios.create(datosStefaniaBruera)
  // console.log('Usuario creado ID: ', stefiBruera.id)

  const datosFede = {
    nombre: 'Fede',
    apellido: 'Bruera',
    usuario: 'fede',
    password: '123456',
    email: 'fede@gmail.com'
  }

  const fede = await Usuarios.create(datosFede)
  console.log('Usuario creado ID: ', fede.id)
}

// Recuperar usuarios

const recuperarUsuarios = async () => {
  const usuarios = await Usuarios.findAll()
  usuarios.forEach((u) => {
    console.log(
      `Nombre: ${u.nombre} - Apellido: ${u.apellido} - Usuario: ${u.usuario} - Email: ${u.email}`
    )
  })
}

// Recuperar un usuario

const recuperarUsuario = async (id) => {
  const usuario = await Usuarios.findOne({ where: { id } })
  console.log(
    `Nombre: ${usuario.nombre} - Apellido: ${usuario.apellido} - Usuario: ${usuario.usuario} - Email: ${usuario.email}`
  )
}

// Actualizar un usuario

const actualizarUsuario = async (id, nombre) => {
  const usuario = await Usuarios.findOne({ where: { id } })
  if (usuario) {
    usuario.nombre = nombre
    await usuario.save()
  }
}

// Eliminar un usuario

const eliminarUsuario = async (id) => {
  const usuario = await Usuarios.findOne({ where: { id } })
  if (usuario) {
    await usuario.destroy()
  }
}

// Agregar una tarea a un usuario

const agregarTareaUsuario = async (idUsuario, descripcionTarea) => {
  const usuario = await Usuarios.findOne({ where: { id: idUsuario } })
  if (usuario) {
    await usuario.createTarea({
      descripcion: descripcionTarea
    })
  }
}

// Listar las tareas de un usuario

const listarTareaUsuario = async (idUsuario) => {
  const usuario = await Usuarios.findOne({ where: { id: idUsuario } })
  if (usuario) {
    const tareas = await usuario.getTareas()
    tareas.forEach((t) => {
      console.log(`Tarea: ${t.descripcion}`)
    })
  }
}

// Eliminar una tarea de un usuario

const eliminarTarea = async (idUsuario, descripcionTarea) => {
  const usuario = await Usuarios.findOne({ where: { id: idUsuario } })
  if (usuario) {
    const tarea = await usuario.getTareas({
      where: { descripcion: descripcionTarea }
    })

    if (tarea) {
      await usuario.removeTarea(tarea)
    }
  }
}

export {
  crearUsuario,
  recuperarUsuarios,
  recuperarUsuario,
  actualizarUsuario,
  eliminarUsuario,
  agregarTareaUsuario,
  listarTareaUsuario,
  eliminarTarea
}
