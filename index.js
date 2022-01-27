
// document.getElementsByClassName("set")[0].addEventListener("click",test);
let n=document.querySelectorAll(".drum").length;

for(let i=0;i<n;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        let buttonres=this.innerHTML;
        makeSound(buttonres);
        buttonAnimation(buttonres);
    });
}

function makeSound(key)
{
    switch(key){
        case "w":
            let tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            let crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            let kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    }
}

document.addEventListener("keypress",function(e){
    makeSound(e.key);
    buttonAnimation(e.key);
});

function buttonAnimation(currentKey)
{
    let activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    },100);
}