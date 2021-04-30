
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const error_textEl = document.getElementsByClassName("error-text");

function onSubmit(){
    const emailValue = document.getElementById("email").value;
    const emailEl = document.getElementById("email");
    if(re.test(emailValue)){
        emailEl.style.border ="";
        error_textEl[0].classList.remove("display-block");
    }else{
        console.log("incorrect");
        error_textEl[0].classList.add("display-block");
        emailEl.style.borderColor = "hsl(354, 100%, 66%)";
        
    }
}