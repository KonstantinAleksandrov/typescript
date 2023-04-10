const deliveryMethod = (): string => {
    return 'overnight'
}
const shipWeight = (): number =>{
    const el = document.getElementById('weight')
    if(!el) return 0
    return parseInt(el.innerHTML)
}
function sendUpdates(emailAddr:string[] = []) {
    function sendEmail(addr:string) {
      console.log(`Shipping to ${addr} via ${deliveryMethod()} delivery`)
      if (shipWeight() > 100) {
        console.log('WARNING: Oversize package')
      }
    }
    emailAddr.map((item) => {
        sendEmail(item.trim())
    })
  }
  