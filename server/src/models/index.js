const { Sequelize, DataTypes } = require('sequelize')

const contact = require('./contact')

console.log(".env => ", process.env.USERNAME, process.env.PASSWORD, process.env.DATABASE, process.env.HOST)

function init() {
	const sequelize = new Sequelize(
		{
			username: process.env.DB_USERNAME,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_NAME,
			host: process.env.DB_HOST,
			port: process.env.DB_PORT,
			dialect: process.env.DB_DIALECT,
			logging: false,
			define: { freezeTableName: true },
			forceSync: false
		}
	)
	return sequelize
}

const dbClient = init()

const db = {}

db.sequelize = dbClient

const Contact = contact.init(dbClient, DataTypes)

db.Contact = Contact

module.exports = db
