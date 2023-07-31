const selection = document.querySelectorAll('input[name=selection')
const bottom = document.querySelector('.bottom-section')
const grids = document.createElement('div')
const btn = document.querySelector('#btn')

const uppercase = document.getElementById('uppercase')
const lowercase = document.getElementById('lowercase')
const numeric = document.getElementById('numeric')
const special = document.getElementById('special')
const scope = document.getElementById('length')
const output = document.getElementById('genpass')

btn.addEventListener('click', () => {

  let password = []
  let passGen = []

  selection.forEach(function (elem) {
    elem.addEventListener('change', () => { }
    )
  })

  if (uppercase.checked) {
    password = password.concat(upperLetters)
  }
  if (lowercase.checked) {
    password = password.concat(lowerLetters)
  }
  if (numeric.checked) {
    password = password.concat(numberList)
  }
  if (special.checked) {
    password = password.concat(specialCharList)
  }

  if (!uppercase.checked && !lowercase.checked && !numeric.checked && !special.checked) {
    alert('No selections made!')
    return
  }

  const numVal = scope.value
  const parsed = parseInt(numVal)

  if (parsed < 10 || parsed > 128) {
    alert('You can only choose between 10 and 128 characters!')
    return
  }

  if (!parsed) {
    alert('You must specify a length!')
    return
  }

  for (let i = 0; i < parsed; i++) {
    let random = password[Math.floor(Math.random() * password.length)]
    passGen.push(random)
    output.innerHTML = passGen.join('')
  }
})







