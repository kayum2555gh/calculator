let input = document.getElementById('inputBox'); //acces the input box
let buttons = document.querySelectorAll('button');  //access the buttons

let string ="";   // take variable string
let arr = Array.from(buttons);   // take a variable and store the buttons in formof array

arr.forEach(button => {   //apply the foreach to acces each buttons
    button.addEventListener('click',(e) =>{  //add event listner
        if(e.target.innerHTML == '='){   // 
            string = eval(string);
            input.value=string;
        }
        else if(e.target.innerHTML=='AC'){
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML=='DEL'){
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else{
            string+=e.target.innerHTML;
            input.value=string;
        }
        
    })
})