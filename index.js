
let root = document.querySelector('#root')
let p = document.createElement('p')
let input = document.querySelector('#radius_input')
let button = document.querySelector('#button')

let radius
let area = () => {
  let a = Math.trunc(Math.PI * radius ** 2)
  return a
}

input.addEventListener('change', changeValues)
function changeValues() {
  radius = input.value
  if (radius <= 0) {
    button.disabled = true
    p.textContent = `A circle can't have a radius of ${radius}`
    root.appendChild(p)
  }
  else {
    p.remove()
    button.disabled = false
    p.textContent = `the area of your circle is ${area()}`
    function alerta() {
      if (root.innerHTML.includes('<p>')){
        let old = root.querySelector('p')
        old.remove()
        root.appendChild(p)
      } else {
          root.appendChild(p)
      }
    }
    button.addEventListener('click', alerta)
  }
}

