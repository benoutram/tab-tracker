const Joi = require('joi')

module.exports = {
    register (req, res, next) {
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{8,32}$/)
        }

        const {error, value} = Joi.validate(req.body, schema)

        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                res.status(400).send({
                    error: 'This e-mail address provided was not valid' 
                })
                break
                case 'password':
                res.status(400).send({
                    error: 'This password provided did not match the allowed rules' 
                })
                break
                default:
                res.status(400).send({
                    error: 'Invalid registration information'
                })
            }
        } else {
            next()
        }
    }
}