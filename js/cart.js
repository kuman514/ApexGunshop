class Cart {
  constructor () {
    this.contain = new Map()
    this.addingItemId = 1
    this.totalPrice = 0
  }
  add () {
    let option1Sel = document.querySelector('.option1').querySelector('select')
    let guntypeIndex = Number(option1Sel.options[option1Sel.selectedIndex].value)
    if (guntypeIndex === 0) {
      alert('총기 종류를 선택해주세요.')
      return
    }
    let guntype = gunTypeName.get(guntypeIndex)

    let option2Sel = document.querySelector('.option2').querySelector('select')
    let nameIndex = Number(option2Sel.options[option2Sel.selectedIndex].value)
    if (nameIndex === 0) {
      alert('총기를 선택해주세요.')
      return
    }
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
        new CartItem(this.addingItemId, guntype, name, options, price, 1, max)
      )
      this.renderAppend(this.addingItemId)
      this.addingItemId++
      this.onChange()
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
  renderAppend (added) {
     document.querySelector('.cart').innerHTML += this.contain.get(added).getRenderHTML
  }
  calculateTotalPrice () {
    this.totalPrice = 0
    this.contain.forEach(item => {
      this.totalPrice += item.price * item.amount
    })
  }
  renderTotalPrice () {
    document.querySelector('.total').innerHTML = `<h2>총 가격 ${this.totalPrice}원</h2>`
  }
  onChange () {
    this.calculateTotalPrice()
    this.renderTotalPrice()
  }
}
