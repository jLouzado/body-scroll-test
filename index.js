const cardSizes = ['small', 'medium', 'large']
const listLengths = [3, 15, 30]

const NUM_AVAILABLE_COLORS = 5

const PANES = ['pane1', 'pane2', 'pane3']

// number => number
const rand = limit => Math.floor(Math.random() * limit)

// T[] => T
const sample = arr => arr[rand(arr.length)]

PANES.forEach(pane => {
  const length = sample(listLengths)
  const target = document.getElementById(pane)

  const cards = Array(length)
    .fill(null)
    .map(el => {
      const size = sample(cardSizes)
      const color = rand(NUM_AVAILABLE_COLORS)
      const card = document.createElement('div')
      card.classList.add('card', `card--${size}`, `card--color${color + 1}`)

      return card
    })
    .forEach(card => {
      target.appendChild(card)
    })

  document
    .querySelector(`#${pane} .title`)
    .appendChild(document.createTextNode(`(${length})`))
})
