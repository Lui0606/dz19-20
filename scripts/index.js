let click_on = false
on.style.display = 'none'

button.addEventListener('click', () => {
  if (click_on == false) {
    click_on = true

    off.style.display = 'none'
    on.style.display = 'block'

    red.style.backgroundColor = 'red'
  }

  else if (click_on == true) {
    click_on = false

    off.style.display = 'block'
    on.style.display = 'none'

    red.style.backgroundColor = 'white'
    yellow.style.backgroundColor = 'white'
    green.style.backgroundColor = 'white'
  }
})

red.addEventListener('click', () => {
  if (click_on == true) {
    red.style.backgroundColor = 'red'
    yellow.style.backgroundColor = 'white'
    green.style.backgroundColor = 'white'
  }
})

yellow.addEventListener('click', () => {
  if (click_on == true) {
    red.style.backgroundColor = 'white'
    yellow.style.backgroundColor = 'yellow'
    green.style.backgroundColor = 'white'
  }
})

green.addEventListener('click', () => {
  if (click_on == true) {
    red.style.backgroundColor = 'white'
    yellow.style.backgroundColor = 'white'
    green.style.backgroundColor = 'green'
  }
})