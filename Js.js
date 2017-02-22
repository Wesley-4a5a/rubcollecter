// JavaScript File
RubCHECKER();


var Production = 1;
var Rub = 0;
var Tax = 0;
var Com = 0;


//LIJST BUTTONS

var Candy = 1;
var CandyA = {
    Prod : 10, 
    Tax : 0,
    Com : 1,
    Comcost: 0
    };
    
var Matchsticks = 100;  
var MatchsticksA = {
    Prod : 0, 
    Tax : 10,
    Com : 1,
    Comcost: 10
    };

var Beer = 1000;  
var BeerA = {
    Prod : 20, 
    Tax : 20,
    Com : 2,
    Comcost: 25
    };
    
//TAX
setInterval(function()
{
    Rub = Rub +(Tax * 1);
    RUB();
    RubCHECKER();
},1000)();

function work()
{
    Rub = Rub +(Production * 1);
    RUB();
    RubCHECKER();
}

function INCProduction(kind)
{
    switch (kind) {
        case 'Candy':
            Rub = Rub - Candy;
            Production = Production + CandyA["Prod"];
            Tax = Tax + CandyA["Tax"];
            Com = Com + CandyA["Com"];
            Candy = Candy * 1.15;
            Candy.toFixed(0);
            document.getElementById("CANDY").innerHTML = "Candy <br>" + Candy.toFixed(0);
            RUB();
            break;
        case 'Matchsticks':
            Rub = Rub - Matchsticks;
            Production = Production + MatchsticksA["Prod"];
            Tax = Tax + MatchsticksA["Tax"];
            Com = Com + MatchsticksA["Com"];
            Matchsticks = Matchsticks * 1.15;
            Matchsticks.toFixed(0);
            document.getElementById("MATCHSTICKS").innerHTML = "Matchsticks <br>" + Matchsticks.toFixed(0);
            RUB();
            break;
        case 'Beer':
            Rub = Rub - Beer;
            Production = Production + BeerA["Prod"];
            Tax = Tax + BeerA["Tax"];
            Com = Com + BeerA["Com"];
            Beer = Beer * 1.15;
            Beer.toFixed(0);
            document.getElementById("BEER").innerHTML = "Beer <br>" + Beer.toFixed(0);
            RUB();
            break;    
    }
    RubCHECKER();
}


var play = false;
function music()
{
       var audio = document.getElementById("audio");
       if(play == true)
       {
            audio.pause();
            play = false;
       }
       else
       {
           audio.play();
           play = true;
       }
}

function RUB()
{
    document.getElementById("RUB").innerHTML = "Rub: " + Rub.toFixed(0);
    document.getElementById("COM").innerHTML = "Com: " + Com.toFixed(0);
}


//RUB CHECKER
function RubCHECKER()
{
    if(Candy > Rub)
    {
        document.getElementById("CANDY").disabled = true;
    }
    else if ((Candy <= Rub) && (Com >= CandyA["Comcost"]))
    {
        document.getElementById("CANDY").disabled = false;    
    }
    
    if(Matchsticks > Rub)
    {
        document.getElementById("MATCHSTICKS").disabled = true;    
    }
    else if ((Matchsticks <= Rub) && (Com >= MatchsticksA["Comcost"]))
    {
        document.getElementById("MATCHSTICKS").disabled = false;    
    }
    if(Beer > Rub)
    {
        document.getElementById("BEER").disabled = true;    
    }
    else if ((Beer <= Rub) && (Com >= BeerA["Comcost"]))
    {
        document.getElementById("BEER").disabled = false;    
    }
}
