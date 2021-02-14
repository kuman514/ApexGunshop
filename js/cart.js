class Cart {
  constructor () {
    this.contain = new Map()
    this.addingItemId = 1
  }
  add () {
    let option1Sel = document.querySelector('.option1').querySelector('select')
    let guntypeIndex = Number(option1Sel.options[option1Sel.selectedIndex].value)
    let guntype = gunTypeName.get(guntypeIndex)

    let option2Sel = document.querySelector('.option2').querySelector('select')
    let nameIndex = Number(option2Sel.options[option2Sel.selectedIndex].value)
    let gunItem = guns.get(nameIndex)
    let name = gunItem.name
    let gunPrice = gunItem.price
    let max = gunItem.stock

    let checkedOpts = document.getElementsByName('attachment')
    let optPrice = 0
    let options = []
    checkedOpts.forEach(item => {
      let itemValue = Number(item.value)
      if (item.checked) {
        let attach = attaches.get(itemValue)
        console.log(attach)
        if (attach.stock < max) {
          max = attach.stock
        }
        optPrice += attach.price
        options.push(itemValue)
      }
    })
    let price = gunPrice + optPrice

    if (max > 0) {
      this.contain.set(
        this.addingItemId,
        new CartItem(guntype, name, options, price, 1, max)
      )
      this.renderAppend(this.addingItemId)
      this.addingItemId++
    } else {
      alert('재고가 있는 다른 총기나 옵션을 선택 바랍니다.')
    }
  }
  get (index) {
    return this.contain.get(index)
  }
  clear () {
    this.contain.clear()
  }
  renderAllCartItems () {
  }
  renderAppend (added) {
     document.querySelector('.cart').innerHTML += this.contain.get(added).getRenderHTML
  }
  renderTotalPrice () {

  }
}
