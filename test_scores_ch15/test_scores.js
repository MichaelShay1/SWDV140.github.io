"use strict";

const updateDisplay = scores => {
    // display all scores
    $("#all").text(scores.join(", "));
    // display average score
    $("#avg").text(avg.toFixed(2));
    // display last 3 scores
    $("#last").text(copy.join(", "));
}

const getLast3Scores = scores => {
    let last3Scores = [];
    const len = scores.length;
    last3Scores = (len <= 3) ? scores.slice() : scores.slice(len - 3, len); // copy last three
    last3Scores.reverse();
    return last3Scores;
};

const getAvgScore = scores => {
    const total = scores.reduce( (tot, val) => tot + val, 0 );
    const avg = total/scores.length;
    return avg.toFixed(2);
};

$(document).ready( () => {

    const scores = [];

    $("#add_score").click( () => {
        
        const score = parseFloat($("#score").val());
                
        if (isNaN(score) || score < 0 || score > 100) {
            $("#add_score").next().text("Score must be between 0 and 100."); 
            // $("#message").text("Score must be between 1 and 100.");
        }
        else {
            $("#add_score").next().text("");  
            // $("#message").text("");  // remove any previous error message

            // add score to scores array 
            scores.push(score);
            updateDisplay(scores);
        }
        
        // get text box ready for next entry
        $("#score").val("");
        $("#score").focus(); 
    });

    $("#delete_score").click( () => {
        const index = parseInt($("#index").val());
        if (isNaN(index)) {
            $("#delete_score").next().text("Index must be a whole number.");
        } else if (index < 0 || index > scores.length - 1) {
            $("#delete_score").next().text("Invalid Index")
        } else {
            $("#delete_score").next().text("");

            scores.splice(index, 1);
            updateDisplay(scores);
        }
    }); 

    // set focus on initial load
    $("#score").focus();
});