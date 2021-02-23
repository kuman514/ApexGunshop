function sendToModal (message) {
  let element = document.querySelector('.modal-message')
  element.innerHTML = message
}

function openModal () {
  document.querySelector('.modal').classList.remove('hidden')
}

function closeModal () {
  document.querySelector('.modal').classList.add('hidden')
}

function closeInit () {
  let close = document.querySelector('.shopimg')
  close.classList.add('hidden')
  close.classList.remove('modal')
}
