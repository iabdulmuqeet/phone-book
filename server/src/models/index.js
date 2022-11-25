const config = require('config')
const { Sequelize, DataTypes } = require('sequelize')

const contact = require('./contact')

function init() {
	const sequelize = new Sequelize({ ...config.get('db') })
	return sequelize
}

const dbClient = init()

const db = {}

db.sequelize = dbClient

const Contact = contact.init(dbClient, DataTypes)

db.Contact = Contact

module.exports = db
