import { Model, DataTypes } from 'sequelize'
import sequelize from './db.js'

const Usuario = sequelize.define('Usuario',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: { type: DataTypes.STRING },
    apellido: { type: DataTypes.STRING },
    usuario: {
      type: DataTypes.STRING,
      unique: true
    },
    password: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    fecha_alta: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  },
  {
    sequelize,
    modelName: 'usuario',
    timestamps: false
  }

)

export default Usuario