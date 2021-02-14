class Cart {
  constructor () {
    this.contain = new Map()
    this.addingItemId = 1
  }
  add (_guntype, _name, _options, _price, _amount, _max) {
    this.contain.set(
      this.addingItemId,
      new CartItem(_guntype, _name, _options, _price, _amount, _max)
    )
    this.addingItemId++
  }
  get (index) {
    return this.contain.get(index)
  }
  clear () {
    this.contain.clear()
  }
  renderAllCartItems () {
  }
  renderTotalPrice () {

  }
}
