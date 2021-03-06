'use strict'
// remove signIn and signOut
const app = require('../app.js')
const gameBoard = require('../index.js')
// remove me before code-along
const signInSuccess = (data) => {
  app.user = data.user
  $('#sign-in').hide()
  $('#sign-up').hide()
  console.log('signed in!')
  console.log(app)
}

// remove me before code-along
const signOutSuccess = () => {
  app.user = null
  $('#sign-in').show()
  $('#sign-up').show()
  console.log(app)
}

const gamePostSuccess = (data) => {
  $('#grid').show()
  app.game = data.game
  app.game.id = data.game.id
}

const changePasswordSuccess = () => {
  console.log('Password Successfully Changed.')
}

const onUpdateSuccess = () => {
  console.log('Move has been made')
}

const success = (data) => {
  console.log(data)
}

const failure = (error) => {
  console.error(error)
}

const onResetGameSuccess = function (data) {
  // app.game = data.game
  // app.game.id = data.game.id
  console.log("Game Created!")
}

const getGameSuccess = function (data) {
  // app.game.id = data.game.id
  // app.game.over = data.game.over
  $('#games-played').text(data.games.length)
  // // assign variable to game data array
  // let games = data.games
  // // hide view button and change password form
  // $('#view-games').hide()
  // $('#passChange').hide()
  // // append table of games to page
  // $('main').append('<div class="row"> <table class="table"> <thead> <tr> <th> Game ID </th> <th> Over </th> </tr> </thead> <tbody> ')
  // //loop through each game and print out the id and whether it is over
  // games.forEach(function(game) {
  //   $('.table').append('<tr> <td> <a href="javascript:" class="get-game-id" id="' + game.id + '">' + game.id + ' </a> </td> <td>' + game.over + '</td></tr>')
  //   // assign click handler to dynamically added links
  //   $('.get-game-id').on('click', function() {
  //     event.preventDefault()
  //     //gameEvents.getGameById()
  //   })
}

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  gamePostSuccess,
  onUpdateSuccess,
  getGameSuccess
}
