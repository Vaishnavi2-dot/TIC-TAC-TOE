let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset")
let newgamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true;
const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const reset = () =>{
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        if(turn0){
            box.innerText = "X";
            box.style.color="red";
            turn0 = false;
        }
        else{
            box.innerText = "O";
            box.style.color="green";
            turn0 = true;
        }
        box.disabled = true;//so that we can't change our initial entered value;  
        checkWinner();
});
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
}
const showWinner = (winner) =>{
    msg.innerText = `Congrats! winner ${winner} you won the game`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () =>{
    for(let pattern of win){
       let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
         let pos3val = boxes[pattern[2]].innerText;
         if(pos1val !="" && pos2val!="" && pos3val!=""){
            if(pos1val=== pos2val && pos2val === pos3val){
                showWinner(pos1val);
            }
         }
    }
};

newgamebtn.addEventListener("click",reset);
reset_btn.addEventListener("click",reset);