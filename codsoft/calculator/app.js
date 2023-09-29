let res = document.getElementById("result");
let no = document.getElementsByClassName("input");
let len;
console.log(no);
for(let i = 0; i<no.length ;i++){

    no[i].addEventListener("click",function(){
        len = res.innerText.length;
        // while((res.innerText[len-1] === "%" && no[1].value === "%")){
        //     res.innerText += ""
        // }
        if(no[i].value === "AC"){
            res.innerText = ""
        }
        else if(no[i].value !="AC" && no[i].value !="DC" && no[i].value !="=" ){
        res.innerText += no[i].value
        }
        else if(no[i].value === "="){
            res.innerText = eval(res.innerText)
        }
        else if(res[i].value === "DC"){
        }
    })
   
}


