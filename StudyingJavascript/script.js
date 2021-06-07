//Example 1

/*function increaseHighScore(currentScore) {
    var newHighScore = 2 * currentScore;
    return newHighScore;

}

console.log(increaseHighScore(4) );



var newHighScore = function(currentScore) {
    
    return(
        console.log(2 * currentScore)
    )

} (2);

newHighScore(10);*/



//Example 2

/*var harley = {

    name : "Street750",
    color : "Black",

    getBudgetForCustomStuff : function(a) {
        return("you need to lower budget",
            console.log(this.name)
                )
    
    },

    shoutOuts : [
        {kevin : "A cool black monster with 750cc"},
        {sam : "Heavy bike with full power"}
    ]

};

harley.getBudgetForCustomStuff(8000);
harley.shoutOuts;

document.getElementById("test").innerHTML = harley.shoutOuts;*/



//Example 3

/*var walk = function () {
    return("He is able to walk.")
}

var SuperHero = function() {
    var power, villain;
}

SuperHero.prototype.walk = walk;
peterParker = new SuperHero;
peterParker.power = "AirSwing";
peterParker.villain = "Green Goblin";
peterParker.walk();

console.log(peterParker.walk())

clark = new SuperHero;
clark.power = "fly";
clark.villain = "Lex Luthor";

console.log(clark.villain)*/



//Example 4

function mDown(obj) {
    obj.style.backgroundColor = "pink";
    obj.innerHTML = "You Clicked!"
}

    function mUp(obj) {
        obj.style.backgroundColor = "purple";
        obj.innerHTML = "Go away!"
    }

    function mOver(obj) {
        obj.style.backgroundColor = "green";
        obj.innerHTML = "Click"
    }

    function mOut(obj) {
        obj.style.backgroundColor = "orange";
        obj.innerHTML = "Hey! click me!"
    }

    