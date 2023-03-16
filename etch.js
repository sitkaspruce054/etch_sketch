const canvas = document.querySelector('#canvas')
const square = document.createElement('div');



function changeclr(event){
    console.log('clickedlol')
}
canvas.appendChild(square)
for (let index = 0; index < 75*75; index++) {
    const square = document.createElement('div')
    dim = 'height:'+ String(960 / 75) +'px;'
    dime = 'width:' + String(960 / 75) + 'px;'
    console.log(dim)
    square.classList.add('div')

    
    square.style.cssText = dim+ dime+'background-color: white;border-radius: 5px;'
    square.addEventListener('mouseover',function(e)  {
       e.target.style.background = 'black';
    })
    
    canvas.appendChild(square);
    
}
