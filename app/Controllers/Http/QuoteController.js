const { post } = require('@adonisjs/framework/src/Route/Manager');

'use strict'

const Quote = use('App/Models/Quote');
const Helpers = use('Helpers');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with quotes
 * async index({ view }) {
            const quote = await Quote.all()
            return view.render('index', {
                quotes: quote.toJSON()
            })
        }
         async verindex({ view }) {
        return view.render('index')
    }
 */
class QuoteController {

    //VISTA FORMULARIO 
    async create({ view }) {
        return view.render('quotes.create-quote')
    }

    async ver({ view }) {
        const quotes = await Quote.all();
        return view.render('quotes.quote', {
            quotes: quotes.toJSON()
        })
    }


    //INTRODUCIR FORMULARIO
    async store({ request, auth, session, response }) {

        // if (myFile.movedAll()) {
        //     const movedFiles = myFile.movelList()
        //     await Promise.all(movedFiles.map((file) => {
        //         return 
        //     }))
        //`/uploads/${new_name}const quote = new Quote()
        // }
        const quote = await Quote.create({

            user_id: auth.user.id,
            username: auth.user.username,
            nombre: request.input('nombre'),
            apellidom: request.input('apellidom'),
            apellidop: request.input('apellidop'),
            calle: request.input('calle'),
            numero: request.input('numero'),
            colonia: request.input('colonia'),
            codigo: request.input('codigo'),
            telefono: request.input('telefono'),
            rfc: request.input('rfc'),
            estatus: request.input('estatus'),
            observaciones: request.input('observaciones'),
            file: request.input('file')


        })

        session.flash({ 'successmessage': 'Se ha creado el formulario' })
        return response.redirect('quote')
    }



    //EDITAR FORMULARIO
    async edit({ params, view }) {
        const quote = await Quote.find(params.id)
        return view.render('quotes.edit-quote', {
            quote: quote.toJSON()
        })
    }

    async update({ params, request, response, session }) {
            const quote = await Quote.find(params.id)
            quote.nombre = request.input('nombre'),
                quote.apellidom = request.input('apellidom'),
                quote.apellidop = request.input('apellidop'),
                quote.estatus = request.input('estatus'),
                quote.observaciones = request.input('observaciones')
            await quote.save()
            session.flash({ 'successmessage': 'Se actualizo el formulario' })
            return response.redirect('/quote')
        }
        //ELIMINAR DATO DEL FORMULARIO
    async destroy({ params, response, session }) {
        const quote = await Quote.find(params.id)
        await quote.delete()
        session.flash({ 'successmessage': 'Se a eliminado el formulario' })
        return response.redirect('/quote')
    }
}

module.exports = QuoteController