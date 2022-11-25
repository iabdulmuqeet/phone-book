exports.makeModel = (sequelize, DataTypes) => {
  const Contact = sequelize.define(
    'Contact',
    {
      contactId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      firstName: {
        type: DataTypes.STRING(55),
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING(55),
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
    },
    { underscored: true, tableName: 'contact' }
  )
  return Contact
}
