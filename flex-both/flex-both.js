// const cardSizes = ['small', 'medium', 'large']
// const listLengths = [3, 15, 30]
// const stickyRatio = [true, false, false, false, false, false]

// const NUM_AVAILABLE_COLORS = 5

// // number => number
// const rand = (limit) => Math.floor(Math.random() * limit)

// // T[] => T
// const sample = (arr) => arr[rand(arr.length)]

// Array.of(document.getElementsByClassName('pane')).forEach((pane) => {
//   const length = sample(listLengths)

//   const cards = Array(length)
//     .fill(null)
//     .map((el, index) => {
//       const size = sample(cardSizes)
//       const color = rand(NUM_AVAILABLE_COLORS)
//       const card = document.createElement('div')
//       card.classList.add('card', `card--${size}`, `card--color${color + 1}`)
//       if (sample(stickyRatio) && index < length - 1) {
//         card.classList.add('card--sticky')
//         card.appendChild(document.createTextNode(`STICKY #${index + 1}`))
//       } else {
//         card.appendChild(document.createTextNode(`#${index + 1}`))
//       }

//       card.className

//       return card
//     })
//     .forEach((card) => {
//       pane.appendChild(card)
//     })

//   // pane.appendChild(document.createTextNode(`(${length})`))
// })
