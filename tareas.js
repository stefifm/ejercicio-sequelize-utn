import { Model, DataTypes } from 'sequelize'
import sequelize from './db.js'

const Tarea = sequelize.define('Tarea',

  {
    descripcion: { type: DataTypes.STRING }
  },

  {
    sequelize,
    modelName: 'tarea',
    timestamps: false
  }

)

export default Tarea
