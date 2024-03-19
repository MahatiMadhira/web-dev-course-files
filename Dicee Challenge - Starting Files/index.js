
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    
    var img_name1 = "dice" + randomNumber1 + ".png";
    var img_name2 = "dice" + randomNumber2 + ".png";
    var source1 = "./images/" + img_name1;
    var source2 = "./images/" + img_name2;
    
    document.querySelectorAll("img")[0].setAttribute("src", source1);
    document.querySelectorAll("img")[1].setAttribute("src", source2);

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins! ⛳️";
    }
    else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! ⛳️";
    }
    else {
        document.querySelector("h1").innerHTML = "Draw! ⛳️";
    }
