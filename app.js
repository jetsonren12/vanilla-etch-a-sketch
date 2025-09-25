let body = document.querySelector('body')
let sketch = document.querySelector('.sketch-container')
let tile = document.createElement('div')

for(let x = 10; x > 0; x--){
    let column = document.createElement('div')
    column.setAttribute('class','column-container')
    for(let y = 10; y > 0; y--){
        let tile = document.createElement('div')
        tile.setAttribute('class','tile')
        column.append(tile)
    }
    sketch.append(column)
}












