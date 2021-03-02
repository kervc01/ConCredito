'use strict'

class Register {
    get rules() {
        return {
            name: 'required',
            email: 'required|email|unique:users',
            password: 'required|min:8'
        }
    }

    get messages() {
        return {
            'name.required': 'Se requiere nombre completo',
            'email.required': 'correo electronico requerido',
            'email.unique': 'el Email ya existe',
            'password.required': 'se requiere contraseña',
            'password.min': 'la contraseña debe tener al menos 8 caracteres'
        }
    }
}

module.exports = Register