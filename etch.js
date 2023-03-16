
function changeclr(event){
    console.log('clickedlol')
}
function set_easel(dimension){
    if(dimension > 100){
        dimension = 100
    }
    const canvas = document.querySelector('#canvas')
    for (let index = 0; index < dimension * dimension; index++) {
        const square = document.createElement('div')
        dim = 'height:'+ String(960 / dimension) +'px;'
        dime = 'width:' + String(960 / dimension) + 'px;'
        console.log(dim)
        square.classList.add('div')
    
        
        square.style.cssText = dim+ dime+'background-color: white;border-radius: 5px;'
        square.addEventListener('mouseover',function(e)  {
           const randomColor = Math.floor(Math.random()*16777215).toString(16);
           e.target.style.backgroundColor = '#'+ randomColor;
        })
        
        canvas.appendChild(square);
        
    }
}



set_easel(75)

const reset = document.querySelector('#btn')
btn.addEventListener('click',() => {
    var num = parseInt(prompt('enter a dimension'))
    if(isNaN(num)){
        num = 50
    }
    console.log(num)
    const canvas = document.querySelector('#canvas')
    while(canvas.firstChild) {
        canvas.removeChild(canvas.lastChild);
    }
    set_easel(num)
})