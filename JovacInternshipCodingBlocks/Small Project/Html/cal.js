var buttons = document.querySelectorAll('button');
var screen = document.getElementById("screen")

for(let button of buttons){
button.addEventListener('click',function(e){

    // console.log(e.target.innerText) 

    const buttonText = e.target.innerText;
    if(buttonText === 'C'){
        screen.value="";
    }
    else if(buttonText =='x'){
        screen.value+='*';
    }
    else if(buttonText =='/'){
        screen.value+='/';
    } 
    else if(buttonText =='%'){
        screen.value+='%';
    }
    else if(buttonText =='-'){
        screen.value+='-';
    }
    else if(buttonText =='='){
       try{
          screen.value = eval(screen.value);
       }
       catch(invalid)
       {
           screen.value="Invalid Syntax ";
           return;
       }
    }
    else if (buttonText === "") {
            screen.value = screen.value.slice(0, -1);
        }
        
    else{
        screen.value+=buttonText;
    }   
    
});}
 