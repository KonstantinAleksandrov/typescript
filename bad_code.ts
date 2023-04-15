function deliveryMethod(): 'overnight' | 'standard' {
  // TODO
  return 'overnight'
}

function shipWeight(): number {
  const el: HTMLElement = document.getElementById('weight')
  if (!el) {
    return 0
  }
  return parseInt(el.innerHTML)
}

interface SendUpdates {
   (param: string[], param2: number): string[];
   (param: string): void;
}

// function sendUpdates(emailAddr: string[]): string[]
// function sendUpdates(emailAddr: string): void

const sendUpdates: SendUpdates = (emailAddr, id?) => {
  function sendEmail(addr: string): void {
    console.log(`Shipping to ${addr} via ${deliveryMethod() || 'standard'} delivery`)
    if (shipWeight() > 100) {
      console.log('WARNING: Oversize package')
    }
  }

  if (Array.isArray(emailAddr)) {
    emailAddr.map((item, key) => {
      sendEmail(item.trim())
    })
    return emailAddr.map(addr => addr + id)
  } else {
    sendEmail(emailAddr.trim())
  }
}