window.imagewidth = 30;
window.imageheight = 50;

$(document).ready(function(){
	var application = new view(function(){
		this.createGrid(this.render);
	});
});