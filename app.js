let body = document.querySelector('body')
let sketch = document.querySelector('.sketch-container')

let header = document.querySelector('#header-container')


let input = document.createElement('input')
input.setAttribute('type', 'text')
input.setAttribute('value', '')
input.addEventListener('click', (e) => {e.target.value = ''})

let btn = document.createElement('button')
btn.innerText = 'Submit'

btn.addEventListener('click', (e) => {
    if(btn.innerText === 'Submit'){
        buildSketch(input.value)
        input.value = ''
        btn.innerText = 'Reset'
    } else {
        btn.innerText = 'Submit'
        removeSketch()
    }

})

function buildSketch(n){
    createColumn(n)
}

function removeSketch(){
    let columns = document.querySelectorAll('.column-container')
    columns.forEach(c => c.remove())
}

function createColumn(n){
    for(let x = n ; x > 0 ; x--){
        let column = document.createElement('div')
        column.setAttribute('class','column-container')
        createTile(column,n)
        sketch.append(column)
    }
}

function createTile(col,n){
    for(let y = n ; y > 0 ; y--){
        let tile = document.createElement('div')
        tile.setAttribute('class','tile')
        tile.addEventListener('mouseover', () =>{
            tile.style.backgroundColor = `${randomColor()}`
        })
        col.append(tile)
    }
}

function randomColor(){
    let alphacharacters = 'abcdef0123456789'
    let hex = '#'
    for(let x = 6; x > 0; x--){
        hex += alphacharacters[Math.floor(Math.random() * 16)]
    }
    return hex
}


header.append(input)
header.append(btn)














