//#1 change this function into a ternary and assign it to variable called experiencePoints
let strength = 17
let speed = 14

const monsterMan = (strength,speed){
    if (strength > 14 && speed > 13)
        return true;
    else return false;
}
function monsterDragon(){
    if (strength > 20 && speed > 20)
        return true;
    else return false;
}
function monsterHippo(){
    if (strength > 20 || speed > 13)
        return true;
    else return false;
}
function monsterMermaid(){
    if (strength > 12 || speed > 20)
        return true;
    else return false;
}


function experiencePoints() {
    return monsterDragon();
}
var winBattle = experiencePoints() ? "+10 Experience" : "+1 Experience, Hard Loss"

//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a Bandit" + winBattle;
            break;
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}
