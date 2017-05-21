/*
 * Module dependencies
 */
var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib')

var app = express()
// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}
app.set('views', __dirname + '/views')
app.set('view engine', 'pug')
app.use(express.logger('dev'))
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
))
app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
  res.render('index',
  { title : 'Home' }
  )
})
app.get('/story', function (req, res) {
  res.render('story',
  { title : 'Our Story' }
  )
})
app.get('/travel', function (req, res) {
  res.render('travel',
  { title : 'Travel' }
  )
})
app.get('/burlington', function (req, res) {
  res.render('burlington',
  { title : 'In and Around Burlington' }
  )
})
app.get('/faq', function (req, res) {
  res.render('faq',
  { title : 'FAQ' }
  )
})
app.get('/family', function (req, res) {
  res.render('family',
  { title : 'Family' }
  )
})
app.listen(port)