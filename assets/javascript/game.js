$(document).ready(function () {
    var crystal = {
        blue: {
            name: "blue",
            value: 0
        },
        green: {
            name: "green",
            value: 0
        },
        grey: {
            name: "grey",
            value: 0
        },
        lime: {
            name: "lime",
            value: 0
        }
    };

    var currentScore = 0;
    var targetScore = 0;

    var winCount = 0;
    var lossCount = 0;

    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
        //The maximum is exclusive and the minimum is inclusive
    };

    var startGame = function () {
        // * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
        currentScore = 0;

        // * The random number shown at the start of the game should be between 19 - 120.
        targetScore = getRandom(19, 120);

        // * Each crystal should have a random hidden value between 1 - 12.
        // crystal.blue.value = getRandom(1, 12);
        // crystal.green.value = getRandom(1, 12);
        // crystal.grey.value = getRandom(1, 12);
        // crystal.lime.value = getRandom(1, 12);


        $('#crystals-container').children('img').each(function (index, crystalHTML) {
            $(crystalHTML).attr('data-value', getRandom(1, 12));
        });

        // loop through image array, create image html button
        // append image html button to crystals container
        $("#your-score").text(currentScore);
        $("#target-score").text(targetScore);

        // testing the console
        console.log("-----------------");
        console.log("Target Score: " + targetScore);
        console.log("blue: " + crystal.blue.value + " | green: " + crystal.green.value + " | grey: " + crystal.grey.value +
            " | lime: " + crystal.lime.value);
        console.log("------------------");

    };

    var checkWin = function () {
        if (currentScore > targetScore) {
            alert("Sorry try again!");
            lossCount++;
            $("#loss-count").text(lossCount);
            startGame();
        }

        else if (currentScore === targetScore) {
            alert("Congrats you won!");
            winCount++;
            $("#win-count").text(winCount);
            startGame();
        }


    };

    var addValues = function (clickedCrystal) {
        currentScore += parseInt($(clickedCrystal).attr('data-value'));

        $("#your-score").text(currentScore);
        checkWin();
        console.log("Your Score: " + currentScore);
    };

    // function getImage(imageURL) {
    //     // use jquery to create html image 
    //     // after created return it 
    //     // when created the image button give data attribute of a new random number "use randomNumber"

    //     function checkStatus() {
    //         if (playerScore === randomNumber) {
    //             // Player wins
    //             winAmount += 1;
    //             startGame();
    //         } else if (playerScore > randomNumber) {
    //             // Player losses
    //             loseAmount += 1;
    //             startGame();
    //         }
    //     }
    // };

    startGame();

    $("#blue").click(function () {
        // addValues(crystal.blue);
        addValues(this);
        // alert()
    });
    $("#green").click(function () {
        // addValues(crystal.green);
        addValues(this);
    });
    $("#grey").click(function () {
        // addValues(crystal.grey);
        addValues(this);
    });
    $("#lime").click(function () {
        // addValues(crystal.lime);
        addValues(this);
    });
})