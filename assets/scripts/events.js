// const getFormFields = require('../../lib/get-form-fields.js')

const onLogIn = event => {
  event.preventDefault()
  console.log('clicked')
  document.getElementById('inventoryView').hidden = false
  document.getElementById('landingPage').hidden = true
}

const onLogOut = event => {
  event.preventDefault()
  console.log('clicked')
  document.getElementById('inventoryView').hidden = true
  document.getElementById('landingPage').hidden = false
  // $('landingPage').fadeIn(700)
}

module.exports = {
  onLogIn,
  onLogOut
}
