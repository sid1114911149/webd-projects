let btn=document.querySelectorAll(".btn");
let sum=document.querySelector("#result");
let exp=document.querySelector("#expression");
let sum1=0,a="",b="0",c=0;
btn.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(box.innerText=="AC"){
            exp.innerText=""
            sum.innerText=""
            sum1=0;
            a="";
            b="0"
            c=0;
        }
        else{
            let name=box.getAttribute("name");
            if(name=="variable"){
                c=parseInt(`${b}`);
                console.log(c);
                if(a==""){
                    sum1=c;
                }
                else if(a=="+"){
                    sum1=sum1+c;
                }
                else if(a=="-"){
                    sum1=sum1-c;
                }
                else if(a=="*"){
                    sum1=sum1*c;
                }
                else if(a=="/"){
                    sum1=sum1/c;
                }
                else if(a=="%"){
                    sum1=(sum1/100)*c;
                }
                console.log(b);
                console.log(sum1);
                a=box.innerText;
                b="0";
            }
            else{
                b=b+box.innerText;
                console.log(b);
                console.log(sum1);
            }
            sum.innerText=`${sum1}`;
            exp.innerText=exp.innerText+box.innerText;
            }
        }    
)})