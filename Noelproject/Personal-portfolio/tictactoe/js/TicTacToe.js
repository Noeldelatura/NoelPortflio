let turn = true;
let btnClicked = 0

let btn = document.querySelectorAll(".btn")
btn.forEach(b=>{
    b.addEventListener("click", btnClick)
})

function btnClick() {
    if(this.textContent != "") return 
    btnClicked++
    
    if(turn) this.textContent = "X" 
    else this.textContent = "O"

    let obj = check()
    if (obj.win) {
        let btn = document.querySelectorAll(".btn")

            btn[obj.pos[0]].style.color = "red"
            btn[obj.pos[1]].style.color = "red"
            btn[obj.pos[2]].style.color = "red"
        setTimeout(() => {
        alert(this.textContent + " win")
        reset()
        }, 100)
    }else if(obj.isTie){
        setTimeout(() => {
            alert(" Tie")
            reset()
        }, 100)
    }

    turn = !turn 
}



function reset() {
    let btn = document.querySelectorAll(".btn")
    turn = !turn 
    btnClicked = 0
    btn.forEach(b=>{
        b.textContent = ""
        b.style.color= ""
    })
}

function check() {
    let btn = document.querySelectorAll(".btn")
    let obj = {win:false, isTie:false, pos:[]}

    if(btn[0].textContent == btn[1].textContent && btn[1].textContent == btn[2].textContent && btn[2].textContent != "")
    obj = {win:true, isTie:false, pos:[0,1,2]}

    else if(btn[3].textContent == btn[4].textContent && btn[4].textContent == btn[5].textContent && btn[5].textContent != "")
    obj = {win:true, isTie:false, pos:[3,4,5]}


    else if(btn[6].textContent == btn[7].textContent && btn[7].textContent == btn[8].textContent && btn[8].textContent != "")
    obj = { win: true, isTie: false, pos: [6, 7, 8] }

    else if (btn[0].textContent == btn[3].textContent && btn[3].textContent == btn[6].textContent && btn[6].textContent != "")
    obj = { win: true, isTie: false, pos: [0, 3, 6] }


    else if(btn[1].textContent == btn[4].textContent && btn[4].textContent == btn[7].textContent && btn[7].textContent != "")
    obj = { win: true, isTie: false, pos: [1, 4, 7] }

    else if(btn[2].textContent == btn[5].textContent && btn[5].textContent == btn[8].textContent && btn[8].textContent != "")
    obj = { win: true, isTie: false, pos: [2, 5, 8] }

    else if(btn[0].textContent == btn[4].textContent && btn[4].textContent == btn[8].textContent && btn[8].textContent != "")
    obj = { win: true, isTie: false, pos: [0, 4, 8] }

    else if(btn[2].textContent == btn[4].textContent && btn[4].textContent == btn[6].textContent && btn[6].textContent != "")
    obj = { win: true, isTie: false, pos: [2, 4, 6] }

    else if(btnClicked==9)
    obj.isTie = true

return obj

}