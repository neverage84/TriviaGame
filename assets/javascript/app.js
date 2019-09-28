
//on load hide questions and gifs
window.onload =function() {
    $(".QuestionArea").hide();
    $(".GIFArea").hide();
    
};


//establishing global variables
var BatmanAudio = new Audio("../images/Batman.mp3");
var MP3s = []
var count = 0;
var number = 21;
var CorrectAnswersSelected = 0;
var IncorrectAnswers = 0;
var IntervalID;
var ShowGame;
var Unanswered =  0;
var response = "";
var TenQuestions  = 0;
var Sounds = ["../images/PowerUp.mp3","../images/PowerUp.mp3","../images/Laser.mp3","../images/Joker.mp3","../images/Flash.mp3","../images/Bullet.mp3","../images/Explosion.mp3","../images/Missile.mp3","../images/Torpedo.mp3"];
var GIFs = ["../images/IronMan.gif", "../images/Thor.gif", "../images/joker.gif","../images/Flash.gif","../images/superman.gif","../images/infinity.gif","../images/captain.gif","../images/avengers.gif"];
var QuestionBase = [
    {
        Question: "Which Superhero's identity is Tony Stark?",
        Option1: {
          answer: "Batman",
          correct: "false"
        },
        Option2:{
            answer: "Iron Man",
            correct: "true"
        },
        Option3:{
            answer: "Captain America",
            correct: "false"
        },
        Option4: {
            answer: "Thor",
            correct: "false"
        },
        GIFAnswer: "The Correct Answer is Iron Man."
   
    
    },
    {
        Question: "What is the name of Thor's Hammer?",
        Option1: {
            answer: "Helmdall",
            correct: "false"
        },
        Option2: { 
            answer: "The Bifrost",
            correct: "false"
        },
        Option3: {
            answer: "Mjolnir",
            correct: "true"
        },
        Option4: {
            answer:"Oden",
            correct: "false"
        },
        GIFAnswer: "The Correct Answer is Mjolnir."
    },
    {
        Question: "Who is Harley Quinn's love interest?",
        Option1: {
            answer: "The Joker",
            correct: "true"
        },
        Option2: { 
            answer: "Two Face",
            correct: "false"
        },
        Option3: {
            answer: "Robin",
            correct: "false"
        },
        Option4: {
            answer:"Bane",
            correct: "false"
        },
        GIFAnswer: "The Correct Answer is The Joker."
    },
    {
        Question: "Who is a faster runner than Superman?",
        Option1: {
            answer: "Quiksilver",
            correct: "false"
        },
        Option2: { 
            answer: "The Flash",
            correct: "true"
        },
        Option3: {
            answer: "Green Hornet",
            correct: "false"
        },
        Option4: {
            answer:"Trick Question..No One!",
            correct: "false"
        },
        GIFAnswer: "The Correct Answer is The Flash."
    },
    {
        Question: "What is Superman's real name?",
        Option1: {
            answer: "Clark Kent",
            correct: "false"
        },
        Option2: { 
            answer: "Peter Parker",
            correct: "false"
        },
        Option3: {
            answer: "Kal-El",
            correct: "true"
        },
        Option4: {
            answer:"Scott Summers",
            correct: "false"
        },
        GIFAnswer: "The Correct Answer is Kal-El."
    },
    {
        Question: "How many Infinity Stones are there in the MCU?",
        Option1: {
            answer: "5",
            correct: "false"
        },
        Option2: { 
            answer: "6",
            correct: "true"
        },
        Option3: {
            answer: "7",
            correct: "false"
        },
        Option4: {
            answer:"8",
            correct: "false"
        },
        GIFAnswer: "The Correct Answer is six."
    },
    {
        Question: "What is the name of the Super Soldier Project in Captain America: The First Avenger?",
        Option1: {
            answer: "Project Next-life",
            correct: "false"
        },
        Option2: { 
            answer: "Project Infinity",
            correct: "false"
        },
        Option3: {
            answer: "Project Rebirth",
            correct: "true"
        },
        Option4: {
            answer:"Project Sunrise",
            correct: "false"
        },
        GIFAnswer: "The Correct Answer is Project Rebirth."
    },
    {
        Question: "What do the Avengers eat after the Battle of New York in the first Avengers Movie?",
        Option1: {
            answer: "Soup",
            correct: "false"
        },
        Option2: { 
            answer: "Cheeseburgers",
            correct: "false"
        },
        Option3: {
            answer: "A Home cooked meal",
            correct: "false"
        },
        Option4: {
            answer:"Schwarma",
            correct: "true"
        },
        GIFAnswer: "The Correct Answer is Schwarma."
    },


]
//Put question text in related div.
$("#QuestionID").html(QuestionBase[count].Question);
$("#Option1_ID").html(QuestionBase[count].Option1.answer);
$("#Option2_ID").html(QuestionBase[count].Option2.answer);
$("#Option3_ID").html(QuestionBase[count].Option3.answer);
$("#Option4_ID").html(QuestionBase[count].Option4.answer);
//Assign value to each div option
$("#Option1_ID").val(QuestionBase[count].Option1);
$("#Option2_ID").val(QuestionBase[count].Option2);
$("#Option3_ID").val(QuestionBase[count].Option3);
$("#Option4_ID").val(QuestionBase[count].Option4);


//function to hide game start menu when Kapow is clicker
function GameStart() {
    $(".GameStart").hide();
    $(".TitleRow").hide();
    $(".QuestionArea").show();
}
//Kapow click function
$(".Kapow").on("click",function() {
        runTimer();
        ShowGame = setTimeout(GameStart, 1000);
        BatmanAudio.play();      
});
//Answer click function
$(".Choice").click(AnswerCheck);
//Answer Check function
function AnswerCheck() {
    response = ($(this).val().correct);
    console.log(response);
    if (response === "true") {
        TenQuestions++;
        CorrectAnswersSelected++;
        stop();
        DisplayGIF();
        number = 23;
        runTimer();
        NextQuestion();
        PlaySound();
        
       
    }
    else {
        TenQuestions++;
        IncorrectAnswers++;
        stop();
        DisplayGIF();
        number = 23;
        runTimer();
        NextQuestion();
        PlaySound();
        
    }
}
//Display Question
function DisplayQuestion() {
    $(".GIFArea").hide();
    
$("#QuestionID").html(QuestionBase[count].Question);
$("#Option1_ID").html(QuestionBase[count].Option1.answer);
$("#Option2_ID").html(QuestionBase[count].Option2.answer);
$("#Option3_ID").html(QuestionBase[count].Option3.answer);
$("#Option4_ID").html(QuestionBase[count].Option4.answer);
$("#Option1_ID").val(QuestionBase[count].Option1);
$("#Option2_ID").val(QuestionBase[count].Option2);
$("#Option3_ID").val(QuestionBase[count].Option3);
$("#Option4_ID").val(QuestionBase[count].Option4);
$(".QuestionArea").show();
}
//Next Question
function NextQuestion(){
    if (TenQuestions < 8) {
        count++;
        setTimeout(DisplayQuestion, 3000);
    }
    else {
        stop();
        setTimeout(EndGame, 3000);
    }
}
//Timer functions
function runTimer() {
    IntervalID = setInterval(decrement, 1000);
}
function decrement(){
    number--;
    $("#TimeRemainingID").html("<h2> Time Remaining: " + number + "</h2>");
    if (number === 0) {
        TenQuestions++;
        stop();
        $("#TimeUp").html("<h2>" + "Time's Up!" + "</h2>");
        DisplayGIF();
        number = 23;
        runTimer();
        NextQuestion();
        Unanswered++;
        PlaySound();
        
        
    }
}
function stop() {
    clearInterval(IntervalID);
}
//function to display the GIF
function DisplayGIF(){
    $(".QuestionArea").hide();
    $(".GIFArea").show();
    $("#CorrectAnswerID").html("<h2>" + "<br>" + QuestionBase[count].GIFAnswer + "</h2>");
    $(".GIFID").html("<img src=" + GIFs[count] + "> ");
}
//sound effect for each question
function PlaySound(){
    var SoundByte = new Audio(Sounds[count]);
    
    SoundByte.play();
}
//function to display score when game finished
function EndGame(){
    $("#CorrectAnswerID").html("<h2>" + "<br>" + "Correct Answers: " + CorrectAnswersSelected + "<br>" + "Incorrect Answers: " + IncorrectAnswers + "<br>" + "Unanswered Questions: " + Unanswered + "</h2>");
    $("#TimeUp").html("");
    var button = $("<BUTTON>");
    button.html("Restart");
    button.addClass("btn-info btn-lg Restart");
    $(".GIFID").empty();
    $("#TimeUp").empty();
    $(".GIFID").append(button);
    console.log(button);
    
    
}
//What does the reset button do?
$(".GIFID").on("click", function() {
    count = 0;
    number = 21;
    CorrectAnswersSelected = 0;
    IncorrectAnswers = 0;
    Unanswered = 0;
    TenQuestions = 0;
    runTimer();
    DisplayQuestion();
});