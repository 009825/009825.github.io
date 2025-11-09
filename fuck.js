const input = document.getElementById("input");
const button = document.getElementById("button");
const result = document.getElementById("result");
let answer;

button.onclick = function(){
    answer = input.value;
    answer = Number(answer);
    
    if(answer != 1){
        window.alert("you are a failure")
    }
    else{
        window.alert("what?")
        window.alert("you come here and dont even talk to me?")
        window.alert("you think you can just ignore me?")
        window.alert("we need to talk")
        window.alert("follow me")
        result.textContent = "https://www.roblox.com/pt/games/98362505930811/Me"
    }
}