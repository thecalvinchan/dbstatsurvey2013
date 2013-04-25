function view() {
	this.collection = new collection();
	this.dom = document.getElementById("graphContainer");
	this.domheight = this.dom.clientHeight-20;
	this.domwidth = this.dom.clientWidth-20;
    this.grid = [];
}

view.prototype.createGrid = function(callback) {
	//Clears existing grid
	this.grid = [];
	//Creates a grid to log people
	var columnCount = Math.floor(this.domwidth/4/imagewidth)+1;
	var rowCount = Math.floor(this.domheight/imageheight)+1;
	this.grid = new Array(4);
	this.gridCount = [columnCount,rowCount,columnCount,rowCount,columnCount,rowCount]; //[0,1,2,3,4,5][a_col,a_row,b_col,b_row,c_col,c_row]
	for (var j=0; j<4; j++)
	{
		if (this.collection.ratio[j]>columnCount*rowCount)
		{
			var temp = Math.floor(this.collection.ratio[j]/rowCount)+1;
			this.grid[j] = new Array(temp);
			this.gridCount[j+j] = temp;
		}
		else 
			this.grid[j] = new Array(columnCount);
		for (var i=0; i<this.grid[j].length; i++)
		{
			this.grid[j][i] = new Array(rowCount);
		}
	}	
	console.log(this.dom);
	if (callback)
		callback();
}

view.prototype.render = function() {
	for (var i=0; i<this.collection.people.length; i++)
	{
		var number = Math.floor(Math.random()*7)+1;
		//console.log(number);
		var gridLoc = this.collection.people[i].position[0]-1;
		var randX = Math.floor(Math.random()*this.gridCount[gridLoc]);
		var randY = Math.floor(Math.random()*this.gridCount[2*gridLoc+1]);
		do
		{
			if (!this.grid[gridLoc][randX][randY])
			{
				this.grid[gridLoc][randX][randY] = true;
				break;
			}
			else
			{
				randX = Math.floor(Math.random()*this.grid[gridLoc].length);
				randY = Math.floor(Math.random()*this.grid[gridLoc][randX].length);
			}
		}
		while (this.grid[gridLoc][randX][randY])
		var xLoc = Math.floor(randX/this.gridCount[gridLoc]*this.domwidth/4+gridLoc*this.domwidth/4);
		var yLoc = Math.floor(randY/this.gridCount[2*gridLoc+1]*(this.domheight-imageheight-20));
		this.collection.people[i].dom_id = 'person'+i;
		var string = '<img id="person'+i+'" src="assets/silhouettes/males/'+number+'.png" grid="'+gridLoc+'" style="top:'+(yLoc+Math.floor(Math.random()*20)+20)+'px; left:'+(xLoc+Math.floor(Math.random()*20)+10)+'px;"/>'
		this.dom.innerHTML += string;
	}
}


view.prototype.move = function(stage) {
	var temp = this;
	this.createGrid(function(){
		for (var i=0; i<temp.collection.people.length; i++)
		{
			var number = Math.floor(Math.random()*7)+1;
			var gridLoc = temp.collection.people[i].position[stage]-1;
			var randX = Math.floor(Math.random()*temp.gridCount[gridLoc]);
			var randY = Math.floor(Math.random()*temp.gridCount[2*gridLoc+1]);
			do
			{
				if (!temp.grid[gridLoc][randX][randY])
				{
					temp.grid[gridLoc][randX][randY] = true;
					break;
				}
				else
				{
					randX = Math.floor(Math.random()*temp.grid[gridLoc].length);
					randY = Math.floor(Math.random()*temp.grid[gridLoc][randX].length);
				}
			}
			while (temp.grid[gridLoc][randX][randY])
			var xLoc = Math.floor(randX/temp.gridCount[gridLoc]*temp.domwidth/4+gridLoc*temp.domwidth/4);
			var yLoc = Math.floor(randY/temp.gridCount[2*gridLoc+1]*(temp.domheight-imageheight-20));
			//Animating with jQuery
			$('#person'+i).animate({	
				top: yLoc,
				left: xLoc
			},1300);
		}
	});
}
