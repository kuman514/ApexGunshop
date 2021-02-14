class CartItem {
  constructor (_id, _guntype, _name, _options, _price, _amount, _max) {
    this.id = _id
    this.type = _guntype
    this.name = _name
    this.options = _options
    this.price = _price
    this.amount = _amount
    this.maxAmount = _max
  }
  get getRenderHTML () {
    return `
      <div id="${this.id}" class="cartitem">
        <p>${this.toString}</p>
        <p>수량 <input type="number" value="${this.amount}" onchange="cart.get(${this.id}).onNumberChange(this)"></p>
      </div>
    `
  }
  get toString () {
    let optToStr = ' '
    if (this.options.length > 0) {
      optToStr = ' + '
      for (let i = 0; i < this.options.length; i++) {
        let attach = attaches.get(this.options[i])
        if (i < this.options.length - 1) {
          optToStr += `${attach.name}, `
        } else {
          optToStr += `${attach.name} `
        }
      }
    }
    return `[${this.type}] ${this.name}${optToStr}/ 개당 ${this.price}원`
  }
  onNumberChange (element) {
    let finalNum = Math.min(this.maxAmount, Math.max(0, element.value))
    this.amount = finalNum
    element.value = this.amount
  }
}
