const express = require('express')
const router = require('express').Router()
const pool = require('../config/db')

// Home page 

router.get('/', (req, res) => {
    res.render('main')
})
router.get('/home', (req, res) => {
    res.render('main')
})


router.get('/explores', (req, res) => {
    res.render('explores')
})
 
router.get('/live', (req, res) => {
    res.render('live')
})
router.get('/collection', (req, res) => {
    res.render('collection')
})
 
router.get('/item-details', (req, res) => {
    res.render('item-details')
})

router.get('/faqs', (req, res) => {
    res.render('faqs')
})
 
router.get('/partners', (req, res) => {
    res.render('partners')
})

 
router.get('/create', (req, res) => {
    res.render('create')
})
router.get('/product', (req, res) => {
    res.render('product')
})
router.get('/data', (req, res) => {
    res.render('data-tables')
})


module.exports = router