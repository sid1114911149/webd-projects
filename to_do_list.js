const hamburger=document.querySelector(".hamburger");
const navmenu=document.querySelector(".nav-menu");
const Add=document.querySelector("#Add");
const List=document.querySelector(".List");
const update=document.querySelector("#update");
const tasks=document.querySelector(".DoList");
let index;
hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n=>n.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    navmenu.classList.remove("active");
}))
document.querySelector("#home").addEventListener("click",()=>{
    alert("THE WEBPAGE WILL BE REFRESHED...");
    location.reload();
})
Add.addEventListener('click',()=> {
    document.getElementById('popup').style.display = 'block';
});
document.getElementById('btn').addEventListener('click',()=>{
    const val=document.getElementById("newevent");
    tasks.style.height="fit-content";
    tasks.style.border="3px solid #262626";
    const ele=document.createElement('li');
    const eventlist=document.getElementsByClassName("newlist");
    const count=eventlist.length;
    ele.textContent=`TASK ${count+1}:${val.value}`;
    ele.setAttribute("id",`${count}`);
    ele.setAttribute("class","newlist")
    List.appendChild(ele);
    document.getElementById('popup').style.display = 'none';
})
document.getElementById('btn2').addEventListener('click',()=>{
    const val=document.getElementById("newevent");
    const eventlist=document.getElementsByClassName("newlist");
    index=val.value;
    if(!(0<index && index<=eventlist.length)){
        alert("SORRY EVENT NOT FOUND!!!!!!");
        val.placeholder="Enter Event";
        document.getElementById('popup').style.display = 'none';
        document.getElementById("btn3").style.display="none";
        document.getElementById("btn2").style.display="none";
        document.getElementById("btn").style.display="block";
        return ;
    }
    document.getElementById('popup').style.display = 'none';
    document.getElementById("btn2").style.display="none";
    document.getElementById("btn3").style.display="block";
    val.placeholder="Enter Event ";
    document.getElementById('popup').style.display = 'block';
})
document.getElementById('btn3').addEventListener('click',()=>{
    const val=document.getElementById("newevent");
    const eventlist=document.getElementsByClassName("newlist");
    val.placeholder="Enter Event ";
    eventlist[index-1].textContent=`TASK ${index}:${val.value}`;
    document.getElementById('popup').style.display = 'none';
    document.getElementById("btn3").style.display="none";
    document.getElementById("btn").style.display="block";
})
document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});
window.addEventListener('click', function(event) {
    const popup = document.getElementById('popup');
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});
update.addEventListener("click",()=>{
    document.getElementById("btn").style.display="none";
    document.getElementById("btn2").style.display="block";
    const val=document.getElementById("newevent");
    val.placeholder="Enter Event no to Update:";
    document.getElementById('popup').style.display = 'block';
})
