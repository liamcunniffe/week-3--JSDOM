var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
       
        var buttonInnerHtml = this.innerHtml;

        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}

document.addEventListener("Keypress",function(event){

    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key){

    switch(key){

        case "s":
        var snare = new Audio('sounds/snare.wav');
        snare.play();
        break;

        case "k":
        var kick = new Audio('sounds/kick.wav');
        kick.play();
        break;

        case "h":
        var hihat = new Audio('sounds/hihat.wav');
        hihat.play();
        break;

        case "t":
        var tom = new Audio('sounds/tom.wav');
        tom.play();
        break;

        default:console.log(key);

    }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {

        activeButton.classList.remove("pressed");

    }, 100)
}