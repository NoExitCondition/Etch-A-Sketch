const container = document.querySelector('#container');
const btn = document.querySelector('#btn');
let rows = 16;
let cols = 16;
let color = "black";

//16 x 16 Grid
function makeGrid(rows, cols){
    container.style.setProperty('grid-rows', rows);
    container.style.setProperty('grid-cols', cols);
    for(let i = 0; i < (rows * cols); i++){
        let cell = document.createElement("div");
        //cell.innerText = (i + 1);
        container.appendChild(cell).className = "grid-item";
    }
};

function createHoverEffect(color){
    container.addEventListener("mouseover", function(event){
        event.target.style.backgroundColor = color;
    });
}

function resetGrid(){
    btn.addEventListener('click', function(e){
        clear();
        newGrid();
    })
}

//Helper functions
function clear(){
    //let wholeGrid = container.querySelectorAll('div');
    //wholeGrid.forEach(container => container.style.backgroundColor = "")

    let wholeGrid = document.querySelectorAll('div');        //select the right html element you want to interact with
    for(let i = 0; i < wholeGrid.length; i++){
        wholeGrid[i].style.backgroundColor = "";       
    }
}

function newGrid(){
    //delete grid
    let removeGrid = document.querySelectorAll('.grid-item');
    removeGrid.forEach((e) => e.parentNode.removeChild(e));
    /*
    for(let i = 0; i < removeGrid.length; i++){
        removeGrid[i].removeChild(div.childNodes);
    }
    */

    //ask user input
    let question  = window.prompt("Please enter a value for the row & column between 1 to 100");
    let convertToNum = parseInt(question);

    if(convertToNum <= 0 || convertToNum >= 100){
        window.alert("Please enter a valid number");
    }  
    //generate grid  
    else if(1 <= convertToNum || convertToNum  <= 100){
        rows = convertToNum;
        cols = convertToNum;
        makeGrid(rows, cols);
        container.removeEventListener("mouseover", createHoverEffect); 
    }
}

function main(){
    makeGrid(rows, cols);
    createHoverEffect(color);
    resetGrid();
}

main();