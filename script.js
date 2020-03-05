$(document).ready(function(){
	
	var magic8Ball = {};
	
	magic8Ball.listOfAnswers = ["It is certain", "It is decidedly so", "Reply hazy try again", "Ask again later", "Don't count on it", "My reply is no", "Outlook good", "Signs point to yes"];
	
	$("#answer").hide();

	magic8Ball.askQuestion = function(question) {
		$("#answer").fadeIn(4000);
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
		var randomNumber = Math.random();
		var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
		var randomIndex = Math.floor(randomNumberForListOfAnswers);
		var answer = this.listOfAnswers[randomIndex]; 
		
		$("#answer").text( answer );

		console.log("You asked: " + question); 
		console.log("Your answer is: " + answer);
};

	var onClick = function() {
		$("#answer").hide();
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
 		setTimeout(
       function() {
		   var question = prompt("ASK A YES/NO QUESTION!")
    		magic8Ball.askQuestion(question)
}, 500);
		$("#8ball").effect( "shake" );
}		
	$("#questionButton").click( onClick );
		
});


