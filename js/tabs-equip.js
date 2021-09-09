var questions = document.querySelectorAll('.equip-list li');
var answer = document.querySelectorAll('.equip-present li');
for (var i = 0; i < questions.length; i++) {
	(function (i){
			var question = questions[i];
			question.onclick = function (){
				for (var j = 0; j < answer.length; j++) {
					var displayStyle = window.getComputedStyle(answer[j]).display;
					if(displayStyle == "flex") {
						answer[j].style.display = "none";
					}
				}
				answer[i].style.display = "flex";
			}
	})(i);
};

(function(){
	var link = document.getElementsByClassName('equip-list__nav');
	for( var i = 0; i < link.length; i++ ){
			link[i].addEventListener('click', function(){
					for( var u = 0; u < link.length; u++ ){
							link[u].classList.remove('equip-list__nav-active');
					}
					this.classList.add('equip-list__nav-active');
			});
	}
	})();