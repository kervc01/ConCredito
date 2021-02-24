'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')
const Hash = use('Hash')

class UserSeeder {
    async run() {
        const admin = await Database.insert({
            username: 'root',
            email: 'root@root.com',
            password: await Hash.make('root'),
            admin: 1
        }).into('users')
    }
}

module.exports = UserSeeder