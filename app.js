let body = document.querySelector('body')
let sketch = document.querySelector('.sketch-container')
let header = document.querySelector('#header-container')
let colorContainer = document.querySelector('#btn-container')

let colorBtn = document.createElement('button')
colorBtn.innerText = 'Rainbow tiles'

let greyBtn = document.createElement('button')
greyBtn.innerText = 'Grey tiles'

let input = document.createElement('input')
input.setAttribute('type', 'text')
input.setAttribute('value', '')
input.addEventListener('click', (e) => {e.target.value = ''})

let submitBtn = document.createElement('button')
submitBtn.setAttribute('id','submit')
submitBtn.innerText = 'Submit'

submitBtn.addEventListener('click', (e) => {
    if(submitBtn.innerText === 'Submit'){
        buildSketch(input.value)
        input.value = ''
        submitBtn.innerText = 'Reset'
    } else {
        submitBtn.innerText = 'Submit'
        removeSketch()
    }

})

greyBtn.addEventListener('click', (e) => {
    let tiles = document.querySelectorAll('.tile')
    tiles.forEach(t => {
        t.addEventListener('mouseover', () => {
            t.style.backgroundColor = `grey`
        })
    })
})

colorBtn.addEventListener('click', (e) => {
    let tiles = document.querySelectorAll('.tile')
    tiles.forEach(t => {
        t.addEventListener('mouseover', () => {
            t.style.backgroundColor = `${randomColor()}`
        })
    })
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

const randomColor =() => {
    let alphacharacters = 'abcdef0123456789'
    let hex = '#'
    for(let x = 6; x > 0; x--){
        hex += alphacharacters[Math.floor(Math.random() * 16)]
    }
    return hex
}

header.append(input)
header.append(submitBtn)
colorContainer.append(colorBtn)
colorContainer.append(greyBtn)














