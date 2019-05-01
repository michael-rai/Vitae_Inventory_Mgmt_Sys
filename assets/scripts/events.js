// const getFormFields = require('../../lib/get-form-fields.js')

const onLogIn = event => {
  event.preventDefault()
  console.log('clicked')
  document.getElementById('navbarText').hidden = false
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

const onRunSim = event => {
  event.preventDefault()
  console.log('clicked runSim')
  // $('#simMsg').fadeIn(5000)
  $('#simMsg').text('Simulation Running...')
  const cardMeter = document.getElementsByTagName('meter')
  for (let i = 0; i < cardMeter.length; i++) {
    console.log(cardMeter[i].value)
  }
}

module.exports = {
  onLogIn,
  onLogOut,
  onRunSim
}
