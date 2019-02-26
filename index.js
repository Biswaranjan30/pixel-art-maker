let setColor='red'

let canvasDiv = document.createElement('div');
canvasDiv.className = 'canvas'

for(let i=0;i<64;i++) {
    let divContainer = document.createElement('div');
    divContainer.className = 'divContainer'

    for(let j=0;j<64;j++) {
        let div = document.createElement('div');
        div.className = 'grid';
        div.onclick = ()=> div.style.backgroundColor =setColor;
       // div.onmouseover = function(){
         //   div.style.backgroundColor = 'blue';};
        divContainer.append(div);
    }
    canvasDiv.append(divContainer);
}
document.body.append(canvasDiv);

let palletDiv = document.createElement('div');
palletDiv.className = 'pallet'

let colors = ['red','blue','green','pink','violet','yellow','RosyBrown','DarkCyan','MidnightBlue','PeachPuff','Olive'];
let colorDiv = document.createElement('div');
colorDiv.className = 'colorDiv';

colors.forEach(function(element) {
    let item = document.createElement('div');
    item.style.backgroundColor = element;
    item.className = 'item';
    item.onclick=()=> setColor= element;
     colorDiv.append(item);
});

palletDiv.append(colorDiv);
document.body.append(palletDiv);