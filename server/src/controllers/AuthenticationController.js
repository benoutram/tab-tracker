const {User} = require('../models')

module.exports = {
    async register (req, res) {
        try {
          const user = await User.create(req.body)
          res.send({
            message: user.toJSON()
          })
        }
        catch(err) {
            res.status(400).send({
               error: 'This e-mail address already exists' 
            })
        }
    }
}