
// for( var i = 0 ; i < document.querySelectorAll(".drum").length ; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click", function(){

//         var button_pressed = this.innerText;

//         if (button_pressed == "w"){
//             var audio = new Audio("./sounds/tom-1.mp3");
//             audio.play();
//         }
//         else if (button_pressed == "a"){
//             var audio = new Audio("./sounds/tom-2.mp3");
//             audio.play();
//         }
//         else if (button_pressed == "s"){
//             var audio = new Audio("./sounds/tom-3.mp3");
//             audio.play();
//         }
//         else if (button_pressed == "d"){
//             var audio = new Audio("./sounds/tom-4.mp3");
//             audio.play();
//         }
//         else if (button_pressed == "j"){
//             var audio = new Audio("./sounds/crash.mp3");
//             audio.play();
//         }
//         else if (button_pressed == "k"){
//             var audio = new Audio("./sounds/kick-bass.mp3");
//             audio.play();
//         }
//         else if (button_pressed == "l"){
//             var audio = new Audio("./sounds/snare.mp3");
//             audio.play();
//         }
//     });

    
// }


document.addEventListener("click", function(event){

    if (event.target.classList.contains("drum")){

        var button_pressed = event.target.innerText;
        console.log(button_pressed);
        if (button_pressed[0] == "w"){
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
        }
        else if (button_pressed[0] == "a"){
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
        }
        else if (button_pressed[0] == "s"){
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
        }
        else if (button_pressed[0] == "d"){
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
        }
        else if (button_pressed[0] == "j"){
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
        }
        else if (button_pressed[0] == "k"){
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
        }
        else if (button_pressed[0] == "l"){
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
        }

        buttonAnimation(button_pressed[0]);
    }
});


document.addEventListener("keypress", function(event){

        var key_pressed = event.key;

        if (key_pressed == "w" || key_pressed == "W"){
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
        }

        else if (key_pressed == "a" || key_pressed == "A"){
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
        }

        else if (key_pressed == "s" || key_pressed == "S"){
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
        }

        else if (key_pressed == "d" || key_pressed == "D"){
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
        }

        else if (key_pressed == "j" || key_pressed == "J"){
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
        }

        else if (key_pressed == "k" || key_pressed == "K"){
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
        }

        else if (key_pressed == "l" || key_pressed == "L"){
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
        }

        else {
            alert("You pressed a wrong key");
        }
        buttonAnimation(key_pressed);

});


function buttonAnimation(curKey){

    var activeBut = document.querySelector("." + curKey.toLowerCase());
    activeBut.classList.add("pressed");
    
    setTimeout(function(){
        activeBut.classList.remove("pressed");
    }, 100);
}
