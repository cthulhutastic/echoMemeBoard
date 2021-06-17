let soundArray = [`audiotag1`,`audiotag2`,`audiotag3`, `audiotag4`, `audiotag5`, `audiotag6`, `audiotag7`, `audiotag8`, `audiotag9`, `audiotag10`, `audiotag11`, `audiotag12`, `audiotag13`, `audiotag14`, `audiotag15`]
let keyArray = [`q`,`w`,`e`,`r`,`t`,`a`,`s`,`d`,`f`,`g`,`z`,`x`,`c`,`v`,`b`]
let keyCodeArray = [`KeyQ`,`KeyW`,`KeyE`,`KeyR`,`KeyT`,`KeyA`,`KeyS`,`KeyD`,`KeyF`,`KeyG`,`KeyZ`,`KeyX`,`KeyC`,`KeyV`,`KeyB`]
const texts = document.getElementsByTagName("p");
const hexagons = document.getElementsByClassName("hexagon")

for (let text of texts) {
    text.addEventListener("mouseover", (event)=>{
        let text = event.target;
        text.textContent = text.textContent.toUpperCase();
    })
    
    text.addEventListener("mouseout", (event)=>{
        let text = event.target;
        text.textContent = text.textContent.toLowerCase();
    })
    }
//key events
// trying to shorten the code. Does not seem to be working, check back later.
// while(i=0; i<soundArray.length; i++){
//     window.addEventListener("keydown", (event)=>{
//             if (event.code == keyCodeArray[i]) {
//                 document.getElementById(soundArray[i]).play();
//             }
//     })
// }



window.addEventListener("keydown", (event)=>{
    if (event.code == keyCodeArray[0]) {
        document.getElementById(soundArray[0]).play();
    }
})

window.addEventListener("keydown", (event)=>{
    if (event.code == keyCodeArray[1]) {
        document.getElementById(soundArray[1]).play();
    }
})
window.addEventListener("keydown", (event)=>{
    if (event.code == keyCodeArray[2]) {
        document.getElementById(soundArray[2]).play();
    }
})
window.addEventListener("keydown", (event)=>{
    if (event.code == keyCodeArray[3]) {
        document.getElementById(soundArray[3]).play();
    }
})
window.addEventListener("keydown", (event)=>{
    if (event.code == keyCodeArray[4]) {
        document.getElementById(soundArray[4]).play();
    }
})
window.addEventListener("keydown", (event)=>{
    if (event.code == keyCodeArray[5]) {
        document.getElementById(soundArray[5]).play();
    }
})
window.addEventListener("keydown", (event)=>{
    if (event.code == keyCodeArray[6]) {
        document.getElementById(soundArray[6]).play();
    }
})
window.addEventListener("keydown", (event)=>{
    if (event.code == keyCodeArray[7]) {
        document.getElementById(soundArray[7]).play();
    }
})
window.addEventListener("keydown", (event)=>{
    if (event.code == keyCodeArray[8]) {
        document.getElementById(soundArray[8]).play();
    }
})
window.addEventListener("keydown", (event)=>{
    if (event.code == keyCodeArray[9]) {
        document.getElementById(soundArray[9]).play();
    }
})
window.addEventListener("keydown", (event)=>{
    if (event.code == keyCodeArray[10]) {
        document.getElementById(soundArray[10]).play();
    }
})
window.addEventListener("keydown", (event)=>{
    if (event.code == keyCodeArray[11]) {
        document.getElementById(soundArray[11]).play();
    }
})
window.addEventListener("keydown", (event)=>{
    if (event.code == keyCodeArray[12]) {
        document.getElementById(soundArray[12]).play();
    }
})
window.addEventListener("keydown", (event)=>{
    if (event.code == keyCodeArray[13]) {
        document.getElementById(soundArray[13]).play();
    }
})
window.addEventListener("keydown", (event)=>{
    if (event.code == keyCodeArray[14]) {
        document.getElementById(soundArray[14]).play();
    }
})


//click-events
//Much like the above, trying to shorten the code by automating the listener event creation
// for(i=0; i<soundArray.length; i++){
//     hexagons[i].addEventListener("click", (event)=>{
//         let hexagon = event.target;
//         if (hexagon.id == keyArray[i])
//         document.getElementById(soundArray[i]).play();
//     })
// }

hexagons[0].addEventListener("click", (event)=>{
    let hexagon = event.target;
    if (hexagon.id == keyArray[0])
    document.getElementById(soundArray[0]).play();
})
hexagons[1].addEventListener("click", (event)=>{
    let hexagon = event.target;
    if (hexagon.id == keyArray[1])
    document.getElementById(soundArray[1]).play();
})
hexagons[2].addEventListener("click", (event)=>{
    let hexagon = event.target;
    if (hexagon.id == keyArray[2])
    document.getElementById(soundArray[2]).play();
})
hexagons[3].addEventListener("click", (event)=>{
    let hexagon = event.target;
    if (hexagon.id == keyArray[3])
    document.getElementById(soundArray[3]).play();
})
hexagons[4].addEventListener("click", (event)=>{
    let hexagon = event.target;
    if (hexagon.id == keyArray[4])
    document.getElementById(soundArray[4]).play();
})
hexagons[5].addEventListener("click", (event)=>{
    let hexagon = event.target;
    if (hexagon.id == keyArray[5])
    document.getElementById(soundArray[5]).play();
})
hexagons[6].addEventListener("click", (event)=>{
    let hexagon = event.target;
    if (hexagon.id == keyArray[6])
    document.getElementById(soundArray[6]).play();
})
hexagons[7].addEventListener("click", (event)=>{
    let hexagon = event.target;
    if (hexagon.id == keyArray[7])
    document.getElementById(soundArray[7]).play();
})
hexagons[8].addEventListener("click", (event)=>{
    let hexagon = event.target;
    if (hexagon.id == keyArray[8])
    document.getElementById(soundArray[8]).play();
})
hexagons[9].addEventListener("click", (event)=>{
    let hexagon = event.target;
    if (hexagon.id == keyArray[9])
    document.getElementById(soundArray[9]).play();
})
hexagons[10].addEventListener("click", (event)=>{
    let hexagon = event.target;
    if (hexagon.id == keyArray[10])
    document.getElementById(soundArray[10]).play();
})
hexagons[11].addEventListener("click", (event)=>{
    let hexagon = event.target;
    if (hexagon.id == keyArray[11])
    document.getElementById(soundArray[11]).play();
})
hexagons[12].addEventListener("click", (event)=>{
    let hexagon = event.target;
    if (hexagon.id == keyArray[12])
    document.getElementById(soundArray[12]).play();
})
hexagons[13].addEventListener("click", (event)=>{
    let hexagon = event.target;
    if (hexagon.id == keyArray[13])
    document.getElementById(soundArray[13]).play();
})
hexagons[14].addEventListener("click", (event)=>{
    let hexagon = event.target;
    if (hexagon.id == keyArray[14])
    document.getElementById(soundArray[14]).play();
})