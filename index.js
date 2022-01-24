let input = document.querySelector('#radius_input')
let radius = 0
input.addEventListener('change', () => {radius = input.value})

let root = document.querySelector('#root')

let button = document.querySelector('#button')

let area = () => {
  let a = Math.trunc(Math.PI * radius ** 2)
  return a
}
function alerta() {
  let p = document.createElement('p')
  p.textContent = `the area of your circle is ${area()}`
  if (root.innerHTML.includes('<p>')){
    let old = root.querySelector('p')
    old.remove()
    root.appendChild(p)
  } else {
    root.appendChild(p)
  }
}


button.addEventListener('click', alerta)
