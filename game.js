const userscore=document.querySelector("#user");
const compscore=document.querySelector("#computer");
let uscore=0;
let cscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const generatecompchoice=()=>{
    const options=["rock","paper","scissors"];
    let idx=Math.floor(Math.random()*3);
    return options[idx];
}
const drawgame=()=>{
    console.log("game is draw");
    msg.innerText="DRAW";
    msg.style.backgroundColor="#081b31";
}
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin)
    {
        console.log("you have won the game");
        msg.innerText=`you win!\n${userchoice} beats ${compchoice}`;
        uscore++;
        userscore.innerText=uscore;
        msg.style.backgroundColor="green";
    }
    else
    {+
        console.log("computer has beaten you");
        msg.innerText=`you lost!\n${compchoice} beats ${userchoice}`;
        cscore++;
        compscore.innerText=cscore;
        msg.style.backgroundColor="red";
    }
}
const playgame=(userchoice)=>{
    console.log("user choice=",userchoice)
    //generate computer choice->modular
    const compchoice=generatecompchoice();
    console.log("computer choice=",compchoice);
    if(compchoice===userchoice)
    {
        drawgame();
    }
    else
    {
        let userwin=true;
        if(userchoice=="rock")
        {
            //scissors or paper
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper")
        {
            //rock or scissors
            userwin=compchoice==="scissors"?false:true;
        }
        else
        {
            //rock or paper
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
}
choices.forEach((choice)=>{
    console.log(choice);
    const choiceid=choice.getAttribute("id");
    choice.addEventListener("click",()=>{
        playgame(choiceid);    
    })
})