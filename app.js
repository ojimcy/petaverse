const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const morgan = require('morgan')
const {engine} = require('express-handlebars')

// database
const db = require('./config/db')

// load config 
dotenv.config({path: './config/config.env'})

// Test DB connection
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err))

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
app.use('/collection', require('./routes/index'))
app.use('/item-details', require('./routes/index'))
app.use('/faqs', require('./routes/index'))
app.use('/partners', require('./routes/index'))

app.use('/create', require('./routes/index'))
app.use('/product', require('./routes/index'))
app.use('/data', require('./routes/index'))

const PORT = process.env.PORT

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))