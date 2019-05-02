// const getFormFields = require('../../lib/get-form-fields.js')
// const ui = require('./ui.js')

const onLogIn = event => {
  event.preventDefault()
  console.log('clicked')
  document.getElementById('navbar').hidden = true
  document.getElementById('navbar2').hidden = false
  document.getElementById('inventoryView').hidden = false
  document.getElementById('landingPage').hidden = true
}

const onLogOut = event => {
  event.preventDefault()
  console.log('clicked')
  document.getElementById('navbar2').hidden = true
  document.getElementById('navbar').hidden = false
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
    const meterVal = cardMeter[i].value
    if (meterVal <= 1) {
      $('#rxAlert4').text('REORDER REQUESTED!')
      $('#rxAlert4').fadeOut(5000)
      setTimeout(function shipRecd () {
        $('#rxAlert4a').text('Shipment Received, press "Restock"')
      }, 7000)
      // $('#rxAlert4a').text('Shipment Received, press "Restock"')
      // document.getElementById('meterRestock').hidden = false
    }
    console.log(meterVal)
  }
}

const meterRefresh = event => {
  event.preventDefault()
  console.log('clicked restock')
  document.getElementById('meter4').value = 10
}

const onSendMsg = event => {
  event.preventDefault()
  console.log('msg sent!')
  // $('#sendMsg').trigger('reset')
  // $('#msgSuccess').text('Your message has been sent. Please allow 2 Business Days for a repsonse.')
}

module.exports = {
  onLogIn,
  onLogOut,
  onRunSim,
  meterRefresh,
  onSendMsg
}
