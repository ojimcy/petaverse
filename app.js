const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const morgan = require('morgan')
const {engine} = require('express-handlebars')

// load config 
dotenv.config({path: './config/config.env'})

const app = express()

if(process.env.NODE_ENV === 'developement') {
    app.use(morgan('dev'))
}

// Handlebars
app.engine('.hbs', engine({defaltLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

//Static folder
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use('/', require('./routes/index'))
app.use('/home', require('./routes/index'))
app.use('/explore', require('./routes/index'))

const PORT = process.env.PORT

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))