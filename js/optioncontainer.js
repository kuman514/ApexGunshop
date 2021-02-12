class optionContainer {
  constructor () {
    this.contain = [[], [], []]
    this.refreshOptions(1, 0)
    //this.render(1)
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
        }
        break
      case 3:
        if (selected !== 0) {
          this.contain[index] = Array.from(attachType.get(selected))
        }
        break
      default:
        break
    }
  }
  render (level) {
    let index = level - 1
    let targetDiv = document.querySelector(`.option${level}`)
    console.log(targetDiv)
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
            inner += `<option value="${item}">${gunTypeName.get(item)}</option>`
          })
          target.innerHTML = inner
        }
        break
      case 3:
        break
      default:
        break
    }
  }
}

let optionCnt = new optionContainer()
