const express = require('express')
const router = require('express').Router()

// Home page

router.get('/', (req, res) => {
    res.render('main')
})
router.get('/home', (req, res) => {
    res.render('main')
})

// Eplore

router.get('/explore', (req, res) => {
    res.render('main')
})

module.exports = router