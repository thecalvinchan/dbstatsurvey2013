function collection() {
	this.people = new Array();
	this.people = [
		{stage:0,position:1},{stage:1,position:2},{stage:1,position:3}
	];
	console.log("New Collection Created");
}

collection.prototype.returnRatio = function() {
	var ratio = [0,0,0];
	for (var i=0; i<this.people.length; i++)
	{
		switch (this.people[i].position)
		{
			case 1:
			ratio[0]++;
			break;
			case 2:
			ratio[1]++;
			break;
			case 3:
			ratio[2]++;
			break;
		}
	}
	return ratio;
}