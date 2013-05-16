function view(callback) {
	var obj = this;
	this.collection = new collection(function(){
		if (callback)
			callback.call(obj);
	});
	this.numbers = [document.getElementById("bracket1"),document.getElementById("bracket2"),document.getElementById("bracket3"),document.getElementById("bracket4")];
	this.dom = document.getElementById("graphContainer");
	this.domheight = this.dom.clientHeight-40;
	this.domwidth = this.dom.clientWidth-40;
    this.grid = []; 
}

view.prototype.createGrid = function(stage,callback) {
	//Clears existing grid
	this.grid = [];
	//Creates a grid to log people
	var columnCount = Math.floor(this.domwidth/4/imagewidth)+1;
	var rowCount = Math.floor(this.domheight/imageheight)+1;
	this.grid = new Array(4);
	this.gridCount = [columnCount,rowCount,columnCount,rowCount,columnCount,rowCount,columnCount,rowCount]; //[0,1,2,3,4,5][a_col,a_row,b_col,b_row,c_col,c_row]
	for (var j=0; j<4; j++)
	{
		if (this.collection.returnRatio(stage)[j]>columnCount*rowCount)
		{
			var temp = Math.floor(this.collection.returnRatio(stage)[j]/rowCount)+1;
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
		callback.call(this,stage);
}

view.prototype.render = function(stage) {
	for (var i=0; i<this.numbers.length;i++)
	{
		this.numbers[i].innerHTML = this.collection.returnRatio(stage)[i] + "<p>students</p>";
	}
	this.dom.innerHTML = "";
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
		if (randX >= this.grid[gridLoc].length-1)
			var tempLeft = xLoc-Math.floor(Math.random()*20);
		else
			var tempLeft = xLoc+Math.floor(Math.random()*20);
		this.collection.people[i].dom_id = 'person'+i;
		//FIX: classes should not be space delimited
		var string = '<img class="'+this.collection.people[i].major+'" id="person'+i+'" src="assets/silhouettes/males/'+number+'.png" grid="'+gridLoc+'" style="top:'+(yLoc+Math.floor(Math.random()*20)+20)+'px; left:'+tempLeft+'px;"/>'
		this.dom.innerHTML += string;
	}
}


view.prototype.move = function(stage) {
	var temp = this;
	var number = stage+1;
	for (var i=0; i<this.numbers.length;i++)
	{
		this.numbers[i].innerHTML = this.collection.returnRatio(stage)[i] + "<p>students</p>";
	}
	this.createGrid(stage,function(){
		for (var i=0; i<temp.collection.people.length; i++)
		{
			var number = Math.floor(Math.random()*7)+1;
			var gridLoc = temp.collection.people[i].position[stage-1]-1;
			var randX = Math.floor(Math.random()*temp.gridCount[2*gridLoc]);
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
			var xLoc = Math.floor(((randX)/temp.gridCount[2*gridLoc]+gridLoc)*temp.domwidth/4);
			var yLoc = Math.floor(randY/temp.gridCount[2*gridLoc+1]*(temp.domheight-imageheight-20));
			if (randX >= temp.grid[gridLoc].length-1)
				var tempLeft = xLoc-Math.floor(Math.random()*20);
			else
				var tempLeft = xLoc+Math.floor(Math.random()*20);
			//Animating with jQuery
			$('#person'+i).animate({	
				top: yLoc+Math.floor(Math.random()*20)+20,
				left: tempLeft
			},1300);
		}
	});
}
