'use strict'

// use require with a reference to bundle the file and use it in this file
const events = require('./events.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#logIn').on('submit', events.onLogIn)
  $('#logOut').on('click', events.onLogOut)
  $('#runSim').on('click', events.onRunSim)
  $('#restock4').on('click', events.meterRefresh)
  $('#sendMsgForm').on('submit', events.onSendMsg)
})
