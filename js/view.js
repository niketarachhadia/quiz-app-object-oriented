
var View = function(quiz){
	this.quiz = quiz;
	this.radioToolbar = $('.radio-toolbar');
	viewObj = this;

	$('.start-quiz-button').click(function(){
		$(".quiz-page").show();
		$(".start-page").hide();
		viewObj.displayQuestion();		
	});
	
	$(".next-button").click(function(){
		if(viewObj.quiz.index<viewObj.quiz.questions.length){
			viewObj.quiz.moveToNext();
			$(".feedback-message").text('');
			viewObj.displayQuestion();
		}else{
			$(".quiz-page").hide();
			$(".result-page").show();
			$(".final-correct").text(viewObj.quiz.correctCount);
		}		
	});

	$(".try-again-button").click(function(){
		viewObj.quiz.index = 0;
		$(".result-page").hide();
		$(".start-page").show();
	});
	
	this.displayQuestion = function(){
		var currentQuestion = viewObj.quiz.getCurrentQuestion();
		
		$('#question').text(currentQuestion.question);
		$(".current-question-no").text(viewObj.quiz.index + 1);

		viewObj.radioToolbar.empty();
		$.each(currentQuestion.choices,function(key,value){
			var radioInput = $('<input id="'+key+'" type="radio" name="radio" value = "'+ value +'">'+ value +'<br><br>');
				viewObj.radioToolbar.append(radioInput);
		});
		$("input").click(function() {
			var selectedValue = $("input:checked").val();
			$( '.radio-toolbar input' ).attr( 'disabled', true);
			if(viewObj.quiz.setUserAnswer(selectedValue)){
				viewObj.correctAnswerView();
			}else{
				viewObj.incorrectAnswerView();
			}
		});		
	};

	this.correctAnswerView = function (){
		//$(".feedback-message").text("Correct Answer!!");
		$(".correct").text(viewObj.quiz.correctCount);
		$(".in-correct").text(viewObj.quiz.inCorrectCount);
	};
	this.incorrectAnswerView = function(){
		$(".feedback-message").text("Oops..Incorrect Answer! The Correct answer is :"+ viewObj.quiz.getCurrentQuestion().correctAnswer);
		$(".in-correct").text(viewObj.quiz.inCorrectCount);
		$(".correct").text(viewObj.quiz.correctCount);
	};
};

