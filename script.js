console.log("Welcome.....");
let music = new Audio('/Tic Tac toe/music.mp3');
let audioturn = new Audio('/Tic Tac toe/ting.mp3');
let gameover = new Audio('/Tic Tac toe/gameover.mp3');
let turn = "X";

const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}

const checkWin = () =>{

}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn =changeTurn();
            audioturn();
            checkWin();
            document.getElementsByClassName("info")[0].innerText ="Turn for" + turn ;

        }
    })
})