window.imagewidth = 30;
window.imageheight = 50;

$(document).ready(function(){
	window.application = new view(function(){
		this.createGrid(1,this.render);
	});
});


$("#move1").click(function(){
	window.application.move(1);
});

$("#move2").click(function(){
	window.application.move(2);
})

$("#move3").click(function(){
	window.application.move(3);
})