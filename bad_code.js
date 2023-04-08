function deliveryMethod() {
  // TODO
  return 'overnight'
}

function shipWeight() {
  const el = document.getElementById('weight')
  if (!el) {
    return 0
  }
  return parseInt(el.innerHTML)
}

function sendUpdates(emailAddr) {
  function sendEmail(addr) {
    console.log(`Shipping to ${addr} via ${deliveryMethod() || 'standard'} delivery`)
    if (shipWeight() > 100) {
      console.log('WARNING: Oversize package')
    }
  }

  if (Array.isArray(emailAddr)) {
    emailAddr.map((item, key) => {
      sendEmail(item.trim())
    })
  } else {
    sendEmail(emailAddr.trim())
  }
}