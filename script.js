const startButton = document.querySelector(".startButton")
const start = document.querySelector(".start")
const game = document.querySelector(".game")
const gameContainer = document.querySelector(".game-container");
const playAgain = document.querySelector(".playAgain")
const final = document.querySelector(".final");
const scoreCount = document.querySelector(".scoreCount");
const wrong = document.querySelector(".wrong");
const close = document.querySelector(".close");
const againButton = document.querySelector(".againButton");

let startGame = false;
let faster = {step: 3}
let player = {step: 0.5}
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

close.addEventListener("click", () => {
    wrong.classList.add("hide")
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
    object.y = -100;
    object.style.top = object.y + 'px';
    object.style.left = Math.floor(Math.random() * (border.width - 150)) + 'px';
    gameContainer.appendChild(object);
    if(objects[index] == "AXE"){
        object.addEventListener("click", () => {
                object.classList.add("hide")
                right = true;
                score = score + 1
        })
    }
    if(objects[index] == "FengYou"){
        object.addEventListener("click", () => {
            object.classList.add("hide")
            right = true;
            score = score + 1
    })
    }
    if(objects[index] == "Boomerang"){
        object.addEventListener("click", () => {
            object.classList.add("hide")
            right = false;
            startGame = false;
            wrong.classList.remove("hide")
    })
    }
    if(objects[index] == "BeeChengHiang"){
        object.addEventListener("click", () => {
            object.classList.add("hide")
            right = true;
            score = score + 1
    })
    }
    if(objects[index] == "Yeos"){
        object.addEventListener("click", () => {
            object.classList.add("hide")
            right = true;
            score = score + 1
    })
    }
    if(objects[index] == "Hanbok"){
        object.addEventListener("click", () => {
            object.classList.add("hide")
            right = false;
            startGame = false;
            wrong.classList.remove("hide")
    })
    }
    if(objects[index] == "TWG"){
        object.addEventListener("click", () => {
            object.classList.add("hide")
            right = true;
            score = score + 1
    })
    }
    if(objects[index] == "BreadTalk"){
        object.addEventListener("click", () => {
            object.classList.add("hide")
            right = true;
            score = score + 1
    })
    }
    if(objects[index] == "Strawberry"){
        object.addEventListener("click", () => {
            object.classList.add("hide")
            right = false;
            startGame = false;
            wrong.classList.remove("hide")
    })
    }
    if(objects[index] == "TigerBalm"){
        object.addEventListener("click", () => {
            object.classList.add("hide")
            right = true;
            score = score + 1
    })
    }
    if(objects[index] == "OldChangKee"){
        object.addEventListener("click", () => {
            object.classList.add("hide")
            right = true;
            score = score + 1
    })
    }
    if(objects[index] == "Sushi"){
        object.addEventListener("click", () => {
            object.classList.add("hide")
            right = false;
            startGame = false;
            wrong.classList.remove("hide")
    })
    }
}

function fallingObject(){
    if(startGame){
        console.log("S");
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
    
    let slow = border.height / 4
    let spwanTime = border.height / 2
    AXE.forEach(function(item){
        if(item.y > spwanTime && item.y < (spwanTime + 0.5)){
            spawnObject();
        }
        if(item.y > (border.height)){
            gameContainer.removeChild(item);
        }
        if(item.y < slow){
            item.y = item.y + faster.step;
            item.style.top = item.y +"px";
        }
        else{
            item.y = item.y + player.step;
            item.style.top = item.y +"px";
        }
    })
    FengYou.forEach(function(item){
        if(item.y > spwanTime && item.y < (spwanTime + 0.5)){
            spawnObject();
        }
        if(item.y > (border.height)){
            gameContainer.removeChild(item);
        }
        if(item.y < slow){
            item.y = item.y + faster.step;
            item.style.top = item.y +"px";
        }
        else{
            item.y = item.y + player.step;
            item.style.top = item.y +"px";
        }
    })
    Boomerang.forEach(function(item){
        if(item.y > spwanTime && item.y < (spwanTime + 0.5)){
            spawnObject();
        }
        if(item.y > (border.height)){
            gameContainer.removeChild(item);
        }
        if(item.y < slow){
            item.y = item.y + faster.step;
            item.style.top = item.y +"px";
        }
        else{
            item.y = item.y + player.step;
            item.style.top = item.y +"px";
        }
    })
    BeeChengHiang.forEach(function(item){
        if(item.y > spwanTime && item.y < (spwanTime + 0.5)){
            spawnObject();
        }
        if(item.y > (border.height)){
            gameContainer.removeChild(item);
        }
        if(item.y < slow){
            item.y = item.y + faster.step;
            item.style.top = item.y +"px";
        }
        else{
            item.y = item.y + player.step;
            item.style.top = item.y +"px";
        }
    })
    Yeos.forEach(function(item){
        if(item.y > spwanTime && item.y < (spwanTime + 0.5)){
            spawnObject();
        }
        if(item.y > (border.height)){
            gameContainer.removeChild(item);
        }
        if(item.y < slow){
            item.y = item.y + faster.step;
            item.style.top = item.y +"px";
        }
        else{
            item.y = item.y + player.step;
            item.style.top = item.y +"px";
        }
    })
    Hanbok.forEach(function(item){
        if(item.y > spwanTime && item.y < (spwanTime + 0.5)){
            spawnObject();
        }
        if(item.y > (border.height)){
            gameContainer.removeChild(item);
        }
        if(item.y < slow){
            item.y = item.y + faster.step;
            item.style.top = item.y +"px";
        }
        else{
            item.y = item.y + player.step;
            item.style.top = item.y +"px";
        }
    })
    TWG.forEach(function(item){
        if(item.y > spwanTime && item.y < (spwanTime + 0.5)){
            spawnObject();
        }
        if(item.y > (border.height)){
            gameContainer.removeChild(item);
        }
        if(item.y < slow){
            item.y = item.y + faster.step;
            item.style.top = item.y +"px";
        }
        else{
            item.y = item.y + player.step;
            item.style.top = item.y +"px";
        }
    })
    BreadTalk.forEach(function(item){
        if(item.y > spwanTime && item.y < (spwanTime + 0.5)){
            spawnObject();
        }
        if(item.y > (border.height)){
            gameContainer.removeChild(item);
        }
        if(item.y < slow){
            item.y = item.y + faster.step;
            item.style.top = item.y +"px";
        }
        else{
            item.y = item.y + player.step;
            item.style.top = item.y +"px";
        }
    })
    Strawberry.forEach(function(item){
        if(item.y > spwanTime && item.y < (spwanTime + 0.5)){
            spawnObject();
        }
        if(item.y > (border.height)){
            gameContainer.removeChild(item);
        }
        if(item.y < slow){
            item.y = item.y + faster.step;
            item.style.top = item.y +"px";
        }
        else{
            item.y = item.y + player.step;
            item.style.top = item.y +"px";
        }
    })
    TigerBalm.forEach(function(item){
        if(item.y > spwanTime && item.y < (spwanTime + 0.5)){
            spawnObject();
        }
        if(item.y > (border.height)){
            gameContainer.removeChild(item);
        }
        if(item.y < slow){
            item.y = item.y + faster.step;
            item.style.top = item.y +"px";
        }
        else{
            item.y = item.y + player.step;
            item.style.top = item.y +"px";
        }
    })
    OldChangKee.forEach(function(item){
        if(item.y > spwanTime && item.y < (spwanTime + 0.5)){
            spawnObject();
        }
        if(item.y > (border.height)){
            gameContainer.removeChild(item);
        }
        if(item.y < slow){
            item.y = item.y + faster.step;
            item.style.top = item.y +"px";
        }
        else{
            item.y = item.y + player.step;
            item.style.top = item.y +"px";
        }
    })
    Sushi.forEach(function(item){
        if(item.y > spwanTime && item.y < (spwanTime + 0.5)){
            spawnObject();
        }
        if(item.y > (border.height)){
            gameContainer.removeChild(item);
        }
        if(item.y < slow){
            item.y = item.y + faster.step;
            item.style.top = item.y +"px";
        }
        else{
            item.y = item.y + player.step;
            item.style.top = item.y +"px";
        }
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
        scoreCount.innerHTML = `${score}/10`;

        if(score == 10){
            startGame = false
            remove()
            game.classList.add("hide")
            final.classList.remove("hide")
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
}

setInterval(updateScore, 1)
