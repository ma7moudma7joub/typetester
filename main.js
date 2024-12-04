const words = [
    "Hello",
    "Programming",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing"
  ];
  const lvls = {
    "Easy": 5,
    "Normal": 3,
    "Hard": 2
  };
let defaultlvl = "Normal";
let defaultsec = lvls[defaultlvl];

 let level = document.querySelector(".level");
 let second = document.querySelector(".time");
 let theword = document.querySelector(".typeword");
 let allwords = document.querySelector(".words");
 let start = document.querySelector(".start")
 let timeleft = document.querySelector(".timeleft");
 let scorefrom = document.querySelector(".scorefrom");
 let scoreto = document.querySelector(".scoreto");
let input = document.querySelector("input");
let finishmessage = document.querySelector(".finish");

level.innerHTML = defaultlvl;
second.innerHTML = defaultsec;
timeleft.innerHTML = defaultsec;
scoreto.innerHTML = words.length;

input.onpaste = function() {
    return false
}

start.onclick = function(){
    this.remove();
    input.focus();
    generator();
}

function generator() {
    let randomwords = words[Math.floor(Math.random()*words.length)];
    let randomindex =  words.lastIndexOf(randomwords);
    words.splice(randomindex,1);
    theword.innerHTML= randomwords;
    allwords.innerHTML = "";

    for (i =0; i < words.length; i++) {
        let span = document.createElement("span");
        let txt = document.createTextNode(words[i]);
        span.appendChild(txt);
        allwords.appendChild(span);
    }
    startplay();
}

 function startplay() {
    timeleft.innerHTML=defaultsec;
   let start = setInterval(() => {
    timeleft.innerHTML--;
    if ( timeleft.innerHTML === "0") {
        clearInterval(start);

        if (theword.innerHTML.toLowerCase() === input.value) {
            input.value="";
            scorefrom.innerHTML++;
            if (words.length>0) {
                generator();
            }else {
                let span = document.createElement("span");
                span.classList.add("good");
                let spantxt = document.createTextNode("You Are Not A Sucker");
                span.appendChild(spantxt);
                finishmessage.appendChild(span);
            }
        } else {
            let span = document.createElement("span");
            span.classList.add("bad");
            let spantxt = document.createTextNode("Game Over Sucker");
            span.appendChild(spantxt);
            finishmessage.appendChild(span);
        }
    }
   },1000);
}