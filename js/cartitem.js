class CartItem {
  constructor (_guntype, _name, _options, _price, _amount, _max) {
    this.type = _guntype
    this.name = _name
    this.options = _options
    this.price = _price
    this.amount = _amount
    this.maxAmount = _max
  }
  get getRenderHTML () {
    return `
      <div id="1" class="cartitem">
        <p>${this.toString}</p>
        <p>수량 <input type="number" value="1"></p>
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
}
