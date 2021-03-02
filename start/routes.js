'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|


| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|Route.group(() => {
    }).middleware(['auth'])
*/


/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
    //Rederizacion pagina principal
Route.on('/').render('auth.login')
Route.get('/home', 'AuthController.homeView')
    //Rederizacion register
Route.get('/register', 'AuthController.registrationView').as('register.create').middleware(['auth'])
Route.post('/register-store', 'AuthController.rootRegister').as('root-register.store').validator('Register')
Route.post('/register-store', 'AuthController.userRegister').as('user-register.store').validator('Register')
    //Rederizacion login
Route.get('/login', 'AuthController.loginView').as('login.create')
Route.post('/login-store', 'AuthController.postLogin').as('login.store')
    //Rederizacion ver index
Route.get('/index', 'QuoteController.verindex').as('')
    //Rederizacion ver formulario
Route.get('/quote', 'QuoteController.ver').as('view.quote').middleware(['auth'])
Route.get('/view-quote/:id', 'QuoteController.ver').as('view.quote')
    //Rederizacion crear formulario
Route.get('/create-quote', 'QuoteController.create').as('create.quote').middleware(['auth'])
Route.post('/store-quote', 'QuoteController.store').as('store.quote')
    //Rederizacion editar formulario
Route.get('/edit-quote/:id', 'QuoteController.edit').as('edit.quote').middleware(['auth'])
Route.post('/update-quote/:id', 'QuoteController.update').as('update.quote')
    //Rederizacion eliminar formulario
Route.post('/delete-quote/:id', 'QuoteController.destroy').as('delete.quote')


//close window
Route.post('/namefunction', 'AuthController.namefunction').as('namefunction')
    //logeo
Route.post('/logout', 'AuthController.logout').as('logout')