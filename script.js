function inizializza(){
    document.getElementById("result").innerHTML = "0";
    let pulsanti = document.querySelectorAll(".tasto");
    for(let b of pulsanti){
        b.addEventListener("click",esegui);
    }

    document.addEventListener("keydown", function(event) {
        const key = event.key;
        const result = document.getElementById("result");

        if (!isNaN(key) || key === '.') {
            if (result.innerHTML === "0") {
                result.innerHTML = key;
            } else {
                result.innerHTML += key;
            }
        } else if (key === 'Enter') {
            result.innerHTML = eval(result.innerHTML);
        } else if (key === 'Escape') {
            result.innerHTML = "0";
        }else if (key === 'Backspace') {
            let newString = "";
            for(let i =0; i<result.innerHTML.length-1;i++){
                newString += result.innerHTML.charAt(i);
            }
            result.innerHTML = newString;

            if(result.innerHTML === "") result.innerHTML = "0";
        }
        else if (key === '+') { 
            result.innerHTML = result.innerHTML.concat("+");
        }
        else if (key === '-') { 
            result.innerHTML = result.innerHTML.concat("-");
        }
        else if (key === '*') {
            result.innerHTML = result.innerHTML.concat("*");
        }
        else if (key === '/') {
            result.innerHTML = result.innerHTML.concat("/");
        }
        else if (key === '%') {
            result.innerHTML = result.innerHTML.concat("%");
        }

    });

}

function esegui(e){
    var result = document.getElementById("result");
    var source = e.target.id;

    switch(source){
        case "divide":
            result.innerHTML = result.innerHTML.concat("/");
            break;
        case "add":
            result.innerHTML = result.innerHTML.concat("+");
            break;
        case "sub":
            result.innerHTML = result.innerHTML.concat("-");
            break;
        case "mul":
            result.innerHTML = result.innerHTML.concat("*");
            break;
        case "module":
            result.innerHTML = result.innerHTML.concat("%");
            break;
        case "decimal":
            result.innerHTML = result.innerHTML.concat(".");
            break;
        case "pm":
            result.innerHTML = eval(result.innerHTML)*-1;
            break;
        case "ac":
            result.innerHTML="0";
            break;
        case "equals":
            result.innerHTML = eval(result.innerHTML);
            break;
        


        default:
            if(result.innerHTML === "0"){
                result.innerHTML = source;
            }
            else{
                result.innerHTML = result.innerHTML.concat(source);
            }
            break;
    }

}
