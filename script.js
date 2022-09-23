const startButton = document.querySelector(".startButton")
const start = document.querySelector(".start")
const game = document.querySelector(".game")
const gameContainer = document.querySelector(".game-container");
const playAgain = document.querySelector(".playAgain")
const final = document.querySelector(".final");
const scoreCount = document.querySelector(".scoreCount");
const wrong = document.querySelector(".pop");
const close = document.querySelector(".close");
const againButton = document.querySelector(".againButton");
const gap = document.querySelector(".gap");

let startGame = false;
let player = {step: 1.5}
let time;
let right;
let score;

var objects = [ "AXE", "FengYou","Boomerang", "BeeChengHiang", "Yeos", "Hanbok", "TWG","BreadTalk","Strawberry", "TigerBalm", "OldChangKee", "Sushi"]

startButton.addEventListener("click", () => {
    start.classList.add("hide")
    game.classList.remove("hide")
    startGame = true
    score = 0
    began()
})

window.addEventListener('dblclick', function(event) {
    event.preventDefault();
    }, { passive: false });

close.addEventListener("click", () => {
    wrong.classList.add("hide")
    gap.setAttribute("style", "z-index: 0;")
    startGame = true
    fallingObject()
})

againButton.addEventListener("click", () => {
    final.classList.add("hide")
    game.classList.remove("hide")
    startGame = true
    score = 0
    began()
})

function spawnObject(){
    let border = gameContainer.getBoundingClientRect();
    let object = document.createElement("div");
    var index = Math.floor(Math.random() * Math.floor(objects.length))
    console.log(index)
    console.log(objects.length)
    console.log(border.width)
    object.classList.add(objects[index])
    object.y = 0;
    object.style.top = object.y + 'px';
    object.style.left = Math.floor(Math.random() * (border.width - 200)) + 'px';
    gameContainer.appendChild(object);
    function addMark(){
        object.addEventListener("click", () => {
            object.classList.add("fadeOut")
                right = true;
                score = score + 1
        })
    }
    function noMark(){
        object.addEventListener("click", () => {
            object.classList.add("hide")
            right = false;
            startGame = false;
            wrong.classList.remove("hide")
            gap.setAttribute("style", "z-index: 100;")
    })
    }
    if(objects[index] == "AXE"){
        addMark();
    }
    if(objects[index] == "FengYou"){
        addMark();
    }
    if(objects[index] == "Boomerang"){
        noMark();
    }
    if(objects[index] == "BeeChengHiang"){
        addMark();
    }
    if(objects[index] == "Yeos"){
        addMark();
    }
    if(objects[index] == "Hanbok"){
        noMark();
    }
    if(objects[index] == "TWG"){
        addMark();
    }
    if(objects[index] == "BreadTalk"){
        addMark();
    }
    if(objects[index] == "Strawberry"){
        noMark();
    }
    if(objects[index] == "TigerBalm"){
        addMark();
    }
    if(objects[index] == "OldChangKee"){
        addMark();
    }
    if(objects[index] == "Sushi"){
        noMark();
    }
}

function fallingObject(){
    if(startGame){
        moveObject()
        window.requestAnimationFrame(fallingObject);
    }
}

function moveObject(){
    let AXE = document.querySelectorAll(".AXE");
    let FengYou = document.querySelectorAll(".FengYou");
    let Boomerang = document.querySelectorAll(".Boomerang");
    let BeeChengHiang = document.querySelectorAll(".BeeChengHiang");
    let Yeos = document.querySelectorAll(".Yeos");
    let Hanbok = document.querySelectorAll(".Hanbok");
    let TWG = document.querySelectorAll(".TWG");
    let BreadTalk = document.querySelectorAll(".BreadTalk");
    let Strawberry = document.querySelectorAll(".Strawberry");
    let TigerBalm = document.querySelectorAll(".TigerBalm");
    let OldChangKee = document.querySelectorAll(".OldChangKee");
    let Sushi = document.querySelectorAll(".Sushi");
    let border = gameContainer.getBoundingClientRect();
    
    let spwanTime = border.height / 4

    function spawnItem(item){
        if(item.y >= spwanTime && item.y < (spwanTime + 1.5)){
            spawnObject();
        }
        if(item.y > (border.height + 200)){
            gameContainer.removeChild(item);
        }
        item.y = item.y + player.step;
        item.style.top = item.y +"px";
        console.log("s" + spwanTime)
        console.log("d" + item.y)
    }
    AXE.forEach(function(item){
        spawnItem(item);
    })
    FengYou.forEach(function(item){
        spawnItem(item);
    })
    Boomerang.forEach(function(item){
        spawnItem(item);
    })
    BeeChengHiang.forEach(function(item){
        spawnItem(item);
    })
    Yeos.forEach(function(item){
        spawnItem(item);
    })
    Hanbok.forEach(function(item){
        spawnItem(item);
    })
    TWG.forEach(function(item){
        spawnItem(item);
    })
    BreadTalk.forEach(function(item){
        spawnItem(item);
    })
    Strawberry.forEach(function(item){
        spawnItem(item);
    })
    TigerBalm.forEach(function(item){
        spawnItem(item);
    })
    OldChangKee.forEach(function(item){
        spawnItem(item);
    })
    Sushi.forEach(function(item){
        spawnItem(item);
    })
}

function began(){
    if(startGame == true){
        window.requestAnimationFrame(fallingObject);
        spawnObject()
    }
}

function updateScore(){
    if(startGame == true){
        scoreCount.innerHTML = `${score}/5`;

        if(score == 5){
            console.log("stop")
            let delay = setTimeout(() => {
                startGame = false
                remove()
                game.classList.add("hide")
                final.classList.remove("hide")
              }, 200);
        }
    }
}

function remove(){
    let AXE = document.querySelectorAll(".AXE");
    let FengYou = document.querySelectorAll(".FengYou");
    let Boomerang = document.querySelectorAll(".Boomerang");
    let BeeChengHiang = document.querySelectorAll(".BeeChengHiang");
    let Yeos = document.querySelectorAll(".Yeos");
    let Hanbok = document.querySelectorAll(".Hanbok");
    let TWG = document.querySelectorAll(".TWG");
    let BreadTalk = document.querySelectorAll(".BreadTalk");
    let Strawberry = document.querySelectorAll(".Strawberry");
    let TigerBalm = document.querySelectorAll(".TigerBalm");
    let OldChangKee = document.querySelectorAll(".OldChangKee");
    let Sushi = document.querySelectorAll(".Sushi");
    
    AXE.forEach(function(item){
        gameContainer.removeChild(item);
    })
    FengYou.forEach(function(item){
        gameContainer.removeChild(item);
    })
    Boomerang.forEach(function(item){
        gameContainer.removeChild(item);
    })
    BeeChengHiang.forEach(function(item){
        gameContainer.removeChild(item);
    })
    Yeos.forEach(function(item){
        gameContainer.removeChild(item);
    })
    Hanbok.forEach(function(item){
        gameContainer.removeChild(item);
    })
    TWG.forEach(function(item){
        gameContainer.removeChild(item);
    })
    Strawberry.forEach(function(item){
        gameContainer.removeChild(item);
    })
    TigerBalm.forEach(function(item){
        gameContainer.removeChild(item);
    })
    OldChangKee.forEach(function(item){
        gameContainer.removeChild(item);
    })
    Sushi.forEach(function(item){
        gameContainer.removeChild(item);
    })
    BreadTalk.forEach(function(item){
        gameContainer.removeChild(item);
    })
}

setInterval(updateScore, 1)
