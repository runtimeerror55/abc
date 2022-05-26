let innerWidth = window.innerWidth
let innerHeight = window.innerHeight
let rows = Math.floor(innerHeight / 25)
let columns = Math.floor(innerWidth / 25)
let container2 = document.querySelector('.container2')
for (let i = 0; i < rows; i++) {

    let newRow = document.createElement('div')
    newRow.classList.add('rows', `row${i}`)
    container2.appendChild(newRow)
    for (let j = 0; j < columns; j++) {
        let newColumn = document.createElement('span')
        newColumn.classList.add('boxes2', `row${i}column${j}`)
        newRow.appendChild(newColumn)
    }
}

let x = 0
for (let j = 0; j < 2; j++) {

    for (let i = 0; i < rows; i++) {
        let box = document.querySelector(`.row${i}column${x}`)
        box.style.backgroundColor = "red"
    }
    x = columns - 1
}