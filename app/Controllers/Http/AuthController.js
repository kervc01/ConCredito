'use strict'


const User = use('App/Models/User');

class AuthController {
    //VISTA HOME
    homeView({ view }) {
            return view.render('home')
        }
        //VISTA LOGIN
    loginView({ view }) {
            return view.render('auth.login')
        }
        //VISTA REGISTER
    registrationView({ view }) {
        return view.render('auth.register')
    }

    async postLogin({ request, auth, response }) {
            await auth.attempt(request.input('email'), request.input('password'))
            return response.route('home')
        }
        //REGISTRO DE USUARIO CON PRIVILEGIO
    async rootRegister({ request, session, response }) {
            const user = await User.create({
                username: request.input('name'),
                email: request.input('email'),
                password: request.input('password'),
                admin: request.input('admin')
            })
            session.flash({ successmessage: 'El usuario se ha creado correctamente' })
            return response.route('login');
        }
        //REGISTRO DE USUARIO SIN PRIVILEGIO
    async userRegister({ request, session, response }) {
            const user = await User.create({
                username: request.input('name'),
                email: request.input('email'),
                password: request.input('password'),

            })
            session.flash({ successmessage: 'El usuario se ha creado correctamente' })
            return response.route('login');;
        }
        //logout
    async logout({ auth, response }) {
            await auth.logout()
            return response.route('/')
        }
        //Salir
    async namefunction({ response }) {

        return response.route('home')


    }
}


module.exports = AuthController