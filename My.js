const button = document.getElementById("button");
const text = document.getElementById("text");
const h3 = document.getElementById("h3");
const p = document.getElementById("p");
let ans;

button.onclick = function(){
    ans = text.value
    if(ans=="my precious time"){
        h3.textContent = "Your new number is 11"
        p.textContent = ""
    }
    else if(ans=="My precious time"){
        h3.textContent = "Your new number is 11"
        p.textContent = ""
    }
    else{
        p.textContent = "for why even live, if you dont know your place"
    }
}