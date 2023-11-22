const express = require('express')
const app = express()
const port = 3001

const db = require('./models')

//Routers
const usersRouter = require('./routes/users')
app.use(usersRouter)


db.sequelize.sync().then(()=>{
    app.listen(port, () => {
        console.log('Server running on port ', port);
    })
})