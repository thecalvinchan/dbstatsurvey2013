function view() {
	this.collection = new collection();
	this.dom = document.getElementById("graphContainer");
	this.domheight = this.dom.clientHeight;
	this.domwidth = this.dom.clientWidth;
    this.ratio = this.collection.returnRatio();
	//Creates a grid to log people
	var columnCount = this.domwidth/imagewidth;
	var rowCount = this.domheight/imageheight;
	this.maxPeopleCount = columnCount * rowCount;
	this.grid = new Array(3);
	var vertDist = Math.floor(this.domheight/imageheight)+1;
	for (var j=0; j<3; j++)
	{
		this.grid[j] = new Array(Math.floor(this.ratio[j]/vertDist)+1);
		for (var i=0; i<this.grid[j].length; i++)
		{
			this.grid[j][i] = new Array(vertDist);
		}
	}	
	console.log(this.dom);
}

view.prototype.render = function() {
	for (var i=0; i<this.collection.people.length; i++)
	{
		var number = Math.floor(Math.random()*7)+1;
		console.log(number);
		var string = '<img src="assets/silhouettes/males/'+number+'.png"/>'
		this.dom.innerHTML += string;
	}
}