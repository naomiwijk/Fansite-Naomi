let aub = document.querySelector("#centreermij")
let centreermij = document.querySelector("#aub")

aub.style.backgroundColor = 'salmon';
aub.style.fontSize = '50px';
aub.style.backgroundColor = 'red';

aub.innerHTML = 'Ideeën'
centreermij.innerHTML = 'Motivatie nodig?'
centreermij.innerHTML += '        !beter klik je niet!'

aub.style.color = 'white'



let myinput = document.querySelector("#myinput");
let mybutton = document.querySelector("#mybutton");
let afbeelding = document.querySelector ("#afbeelding");

let jongerouderplaatje = document.querySelector ("#jongerouderplaatje");


function plaatjeswitch () {

    

    if(myinput.value < 30){
        jongerouderplaatje.style.backgroundImage = "URL(Images/jonger.jpg)";
    }
    else
    {       
        jongerouderplaatje.style.backgroundImage = "URL('Images/ouder.jpg')";
    }

}



mybutton.addEventListener('click', plaatjeswitch);



//myfunc();

//function zegHallo () {
//    blokje.innerHTML = "Hallo!";
//    blokje.style.backgroundColor = "tomato";
//}

//zegHallo();

