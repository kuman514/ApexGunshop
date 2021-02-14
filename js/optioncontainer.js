class optionContainer {
  constructor () {
    this.contain = [[], [], []]
    this.onChange(1, 0)
  }
  refreshOptions (level, selected) {
    let index = level - 1
    switch (level) {
      case 1:
        this.contain[index] = Array.from(gunType.keys())
        break
      case 2:
        if (selected !== 0) {
          this.contain[index] = Array.from(gunType.get(selected))
        } else {
          this.contain[index] = []
        }
        break
      case 3:
        if (selected !== 0) {
          this.contain[index] = Array.from(attachType.get(selected))
        } else {
          this.contain[index] = []
        }
        break
      default:
        break
    }
  }
  render (level) {
    let index = level - 1
    let targetDiv = document.querySelector(`.option${level}`)
    switch (level) {
      case 1: {
          let target = targetDiv.querySelector('.comboSelect')
          let inner = '<option value="0">선택하세요</option>'
          this.contain[index].forEach(item => {
            inner += `<option value="${item}">${gunTypeName.get(item)}</option>`
          })
          target.innerHTML = inner
        }
        break
      case 2: {
          let target = targetDiv.querySelector('.comboSelect')
          let inner = '<option value="0">선택하세요</option>'
          this.contain[index].forEach(item => {
            let gun = guns.get(item)
            let gunStock = `남은 수량 ${gun.stock}개`
            if (gun.stock <= 0) {
              gunStock = '재고 없음'
            }
            inner += `<option value="${item}">${gun.name} (${gun.price}원) (${gunStock})</option>`
          })
          target.innerHTML = inner
        }
        break
      case 3: {
          let target = targetDiv
          let inner = ''
          this.contain[index].forEach(item => {
            let attach = attaches.get(item)
            let attachStock = `남은 수량 ${attach.stock}개`
            let disable = ''
            if (attach.stock <= 0) {
              attachStock = '재고 없음'
              disable = 'disabled'
            }
            inner += `<input type="checkbox" name="attachment" value="${item}" ${disable}> ${attach.name} (+${attach.price}원) (${attachStock})<br>`
          })
          target.innerHTML = inner
        }
        break
      default:
        break
    }
  }
  onChange (level, selected) {
    this.refreshOptions(level, Number(selected))
    this.render(level)
  }
}
