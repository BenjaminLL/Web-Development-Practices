var max = document.querySelector("#max_game");
var player_one = document.querySelector("#one");
var player_two = document.querySelector("#two");
var one_score = document.querySelector("#first_score");
var two_score = document.querySelector("#second_score");
var reset = document.querySelector("#reset");
var num = document.querySelector("input");


var act_score_1 = 0;
var act_score_2 = 0;

var terminate = false;

// add score for both player 1 and player 2
player_one.addEventListener("click", function() {
	add_score(1);
});
player_two.addEventListener("click", function() {
	add_score(2);
});

function add_score(n) {

	if (terminate) return;

	if (n === 1) {
		++act_score_1;
		one_score.textContent = act_score_1;

		if (act_score_1 == max.textContent) {
			terminate = true;
			one_score.classList.add("color");
		}
	} else {
		++act_score_2;
		two_score.textContent = act_score_2;

		if (act_score_2 == max.textContent) {
			terminate = true;
			two_score.classList.add("color");
		}
	}

}



// reset the score of the game

reset.addEventListener("click", function() {
	reset_all();
});


function reset_all() {
	act_score_1 = 0;
	act_score_2 = 0;
	one_score.textContent = 0;
	two_score.textContent = 0;
	one_score.classList.remove("color");
	two_score.classList.remove("color");
	terminate = false;
}


num.addEventListener("change", function(){

	max.textContent = this.value;
	reset_all();
	
})
