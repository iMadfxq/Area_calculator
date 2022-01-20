const input = document.querySelector('#radius_input')
let inputContent = null
input.addEventListener('change', () => {inputContent = input.value})

const button = document.querySelector('#button')

const alerta = () => {
  alert('it works')
  console.log(inputContent)
}

button.addEventListener('click', alerta)
