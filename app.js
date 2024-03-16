let boxs=document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#newgame")
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")

let trunO=true; // two players are playerX, playerY 
// winning patters
const winpatter=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
]
const resetGame=()=>{
    trunO=true;
    enableBtn();
    msgContainer.classList.add("hide")
}
boxs.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(trunO){
            box.innerText="O"
            trunO=false//here its is the trun of "x"
        }
        else{
            box.innerText="X"
            trunO=true;// here its is the trun of "o"
        }
        box.disabled=true;
        checkwinner()
    })
})
// here this function is disables the box
const disableBtn=()=>{
    for(let box of boxs){
        box.disabled=true;
    }
}
// here this function is enable the box
const enableBtn=()=>{
    for(let box of boxs){
        box.disabled=false;
        box.innerText="";   
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`
    msgContainer.classList.remove("hide")
    disableBtn()
}

const checkwinner=()=>{
    for(let pattern of winpatter){
        let pos1val=boxs[pattern[0]].innerText
        let pos2val=boxs[pattern[1]].innerText
        let pos3val=boxs[pattern[2]].innerText
      if(pos1val !="", pos2val != "", pos3val != ""){
        if(pos1val===pos2val && pos2val===pos3val){
            console.log("winner", pos1val)
            showWinner(pos1val)
        }
      }
    }
}
newgamebtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);