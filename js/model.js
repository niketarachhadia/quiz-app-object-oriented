var Quiz = {
	'questions': [{	"question" : "Q 1 - Which built-in method calls a function for each element in the array?",
					"choices" : [ "while()","loop()","forEach()","None of above"],
					"correctAnswer" : "forEach()",
					"userAnswer" : "",
					"isCorrect" : false},
				{"question" : "Q 2 - Which of the following function of String object returns the characters in a string between two indexes into the string?",
					"choices" : ["slice()","splice()","substr()","substring()"],
					"correctAnswer" : "substring()",
					"userAnswer" : "",
					"isCorrect" : false},
				{"question" : "Q 3 - Which of the following function of String object creates a string to blink as if it were in a <blink> tag?",
					"choices" : ["anchor()","big()","blink()","italics()"],
					"correctAnswer" : "blink()",
					"userAnswer" : "",
					"isCorrect" : false},
				{"question" : "Q 4 - Which of the following function of Array object joins all elements of an array into a string?",
					"choices" : ["concat()","join()","pop()","map()"],
					"correctAnswer" : "join()",
					"userAnswer" : "",
					"isCorrect" : false},
				{"question" : "Q 5 - Which built-in method returns the character at the specified index?",
					"choices" : ["characterAt()","getCharAt()","charAt()","None of the above"],
					"correctAnswer" : "charAt()",
					"userAnswer" : "",
					"isCorrect" : false},
				{"question" : "Q 6 - Which built-in method reverses the order of the elements of an array?",
					"choices" : ["changeOrder(order)","reverse()","sort(order)","None of the above."],
					"correctAnswer" : "reverse()",
					"userAnswer" : "",
					"isCorrect" : false},
				{"question" : "Q 7 - Which of the following function of Array object sorts the elements of an array?",
					"choices" : ["toSource()","sort()","toString()","unshift()"],
					"correctAnswer" : "sort()",
					"userAnswer" : "",
					"isCorrect" : false},
				{"question" : "Q 8 - Which of the following function of String object creates a string to be displayed as bold as if it were in a <b> tag?",
					"choices" : ["anchor()","big()","blink()","bold()"],
					"correctAnswer" : "bold()",
					"userAnswer" : "",
					"isCorrect" : false},
				{"question" : "Q 9 - Which of the following function of Array object represents the source code of an object?",
					"choices" : ["toSource()","splice()","toString()","unshift()"],
					"correctAnswer" : "toSourse()",
					"userAnswer" : "",
					"isCorrect" : false},
				{"question" : "Q 10 - Which of the following is the correct syntax to print a page using JavaScript?",
					"choices" : ["window.print();","browser.print();","navigator.print();","document.print();"],
					"correctAnswer" : "window.print();",
					"userAnswer" : "",
					"isCorrect" : false}],						
 	'index' : 0,
 	'correctCount' : 0,
 	'inCorrectCount' : 0,
 	'getCurrentQuestion' : function(){
 		var returnVal = this.questions[this.index]; 		
 		return returnVal;
 	},
 	'moveToNext' : function(){
 		this.index++;
 	},
	'setUserAnswer': function(answer){
		var correctAns = this.questions[this.index].correctAnswer;
		this.questions[this.index].userAnswer = 'answer';
		if(answer === correctAns){
			this.questions[this.index].isCorrect = true;
			this.correctCount++;
		}else{
			this.questions[this.index].isCorrect = false;
			this.inCorrectCount++;
		}
		return this.questions[this.index].isCorrect;
	}
};






































// var q1 = "Q 1 - Which built-in method calls a function for each element in the array?";
// var q2 = "Q 2 - Which of the following function of String object returns the characters in a string between two indexes into the string?";
// var q3 = "Q 3 - Which of the following function of String object creates a string to blink as if it were in a <blink> tag?";
// var q4 = "Q 4 - Which of the following function of Array object joins all elements of an array into a string?";
// var q5 = "Q 5 - Which built-in method returns the character at the specified index?";
// var q6 = "Q 6 - Which built-in method reverses the order of the elements of an array?";
// var q7 = "Q 7 - Which of the following function of Array object sorts the elements of an array?";
// var q8 = "Q 8 - Which of the following function of String object creates a string to be displayed as bold as if it were in a <b> tag?";
// var q9 = "Q 9 - Which of the following function of Array object represents the source code of an object?";
// var q10 = "Q 10 - Which of the following is the correct syntax to print a page using JavaScript?";
