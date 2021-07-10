let soundArray = [`audiotag1`,`audiotag2`,`audiotag3`, `audiotag4`, `audiotag5`, `audiotag6`, `audiotag7`, `audiotag8`, `audiotag9`, `audiotag10`, `audiotag11`, `audiotag12`, `audiotag13`, `audiotag14`, `audiotag15`]
let keyArray = [`q`,`w`,`e`,`r`,`t`,`a`,`s`,`d`,`f`,`g`,`z`,`x`,`c`,`v`,`b`]
let keyCodeArray = [`KeyQ`,`KeyW`,`KeyE`,`KeyR`,`KeyT`,`KeyA`,`KeyS`,`KeyD`,`KeyF`,`KeyG`,`KeyZ`,`KeyX`,`KeyC`,`KeyV`,`KeyB`]
const texts = document.getElementsByTagName("p");
const hexagons = document.getElementsByClassName("hexagon")

//key events
for (let i=0; i<soundArray.length; i++){
    window.addEventListener("keydown", (event)=>{
            if (event.code == keyCodeArray[i]) {
                document.getElementById(soundArray[i]).play();
            }
    })
}


//click-events
for(let i=0; i<soundArray.length; i++){
    hexagons[i].addEventListener("click", (event)=>{
        let hexagon = event.target;
        if (hexagon.id == keyArray[i])
        document.getElementById(soundArray[i]).play();
    })
}

