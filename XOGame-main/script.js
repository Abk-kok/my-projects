const box = [['','' ,''],
             ['','' ,''],
             ['','' ,'']];

const lbl=document.getElementById("lbl");
const lbl1=document.getElementById("lbl1");
const replay=document.getElementById("replay");
const container=document.getElementById("container");
replay.style.display="none";
lbl1.style.display="none"

let mark='';
let turnCount=0;
function markBox(row, col){
    const btn = document.getElementById(`btn${row}${col}`);
    if (btn.textContent === ''){
        lbl1.style.display="none"

        mark = mark === "X" ? "O":"X";

        btn.textContent = mark;

        if (btn.textContent=="X"){
         btn.style.backgroundColor= "rgba(132, 135, 163, 1)";
        }
        if (btn.textContent=="O"){
         btn.style.backgroundColor= "rgba(141, 112, 112, 1)";
        }

        if (btn.textContent=="X"){
         lbl.textContent = "Player O's Turn";
         lbl.style.color="red";
        } else {
         lbl.textContent = "Player X's Turn";
         lbl.style.color="blue";
        }

        turnCount++;
        lbl1.textContent="";
        box[row][col]=btn.textContent;

        gameWin();
    }
    else{
        lbl1.style.display="block";
        lbl1.textContent = "💀Choose an empty cell!";
        lbl1.style.color="red";
        lbl1.style.fontWeight="bolder";
        lbl1.style.fontSize="1.5em";
    }
}


function gameWin(){
    if (box[0][0]==="X" && box[0][1]==="X" && box[0][2]==="X" ||
        box[1][0]==="X" && box[1][1]==="X" && box[1][2]==="X" ||
        box[2][0]==="X" && box[2][1]==="X" && box[2][2]==="X" ||
        box[0][0]==="X" && box[1][0]==="X" && box[2][0]==="X" ||
        box[0][1]==="X" && box[1][1]==="X" && box[2][1]==="X" ||
        box[0][2]==="X" && box[1][2]==="X" && box[2][2]==="X" ||
        box[0][0]==="X" && box[1][1]==="X" && box[2][2]==="X" ||
        box[0][2]==="X" && box[1][1]==="X" && box[2][0]==="X")
        {
        alert("Player X won the game");
        lbl.textContent='Player X won the game';
        replay.style.display="block";
        container.style.pointerEvents="none";
    }
    else if
       (box[0][0]==="O" && box[0][1]==="O" && box[0][2]==="O" ||
        box[1][0]==="O" && box[1][1]==="O" && box[1][2]==="O" ||
        box[2][0]==="O" && box[2][1]==="O" && box[2][2]==="O" ||
        box[0][0]==="O" && box[1][0]==="O" && box[2][0]==="O" ||
        box[0][1]==="O" && box[1][1]==="O" && box[2][1]==="O" ||
        box[0][2]==="O" && box[1][2]==="O" && box[2][2]==="O" ||
        box[0][0]==="O" && box[1][1]==="O" && box[2][2]==="O" ||
        box[0][2]==="O" && box[1][1]==="O" && box[2][0]==="O")
        {
        alert("Player O won the game");
        lbl.textContent='Player O won the game';
        replay.style.display="block";
        container.style.pointerEvents="none";
    } else if(turnCount>=9){
            alert("Draw, please play again");
            lbl.textContent="Draw";
            lbl.style.color="black";
            replay.style.display="block";
            // container.style.pointerEvents="none";
        }
}


replay.onclick=newGame;
function newGame(){
    replay.style.display="none";
    for (let row=0; row<3; row++){
        for (let colm=0; colm<3; colm++){
            const newBox=document.getElementById(`btn${row}${colm}`);
            newBox.textContent='';
            newBox.style.backgroundColor='';
            box[row][colm]='';
        }
    }
    turnCount=0;
    container.style.pointerEvents='';
    const temp = mark === "X"? "O":"X";
    lbl.textContent = `player ${temp}, please begin the game`;
}