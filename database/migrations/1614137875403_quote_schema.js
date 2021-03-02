'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QuoteSchema extends Schema {
    up() {
        this.create('quotes', (table) => {
            table.increments()
            table.integer('user_id').notNullable()
            table.string('username', 80).notNullable()
            table.string('nombre').notNullable()
            table.string('apellidom').notNullable()
            table.string('apellidop').notNullable()
            table.string('calle').notNullable()
            table.string('numero').notNullable()
            table.string('colonia').notNullable()
            table.string('codigo').notNullable()
            table.string('telefono').notNullable()
            table.string('rfc').notNullable()
            table.string('estatus')
            table.string('observaciones')
            table.string('file')
            table.timestamps()

        })
    }

    down() {
        this.drop('quotes')
    }
}

module.exports = QuoteSchema