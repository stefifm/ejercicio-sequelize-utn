import sequelize from './db.js'

const testConnection = async () => {
  try {
    await sequelize.sync().then(() => console.log('BD OK'))
    // await sequelize.authenticate() segunda forma de establecer conexión
    // console.log('Conexión exitosa') tercera forma de establecer conexión
  } catch (error) {
    console.error(error)
  }
}

testConnection()