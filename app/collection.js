function collection() {
	this.people = new Array();
	this.people = [
		{dom_id:'',position: [1,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [3,2,3]},
		{dom_id:'',position: [1,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [3,2,3]},
		{dom_id:'',position: [1,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [3,2,3]},
		{dom_id:'',position: [1,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [3,2,3]},
		{dom_id:'',position: [1,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [3,2,3]},
		{dom_id:'',position: [1,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [3,2,3]},
		{dom_id:'',position: [1,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [3,2,3]},
		{dom_id:'',position: [1,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [3,2,3]},
		{dom_id:'',position: [1,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [3,2,3]},
		{dom_id:'',position: [1,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [3,2,3]},
		{dom_id:'',position: [1,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [3,2,3]},
		{dom_id:'',position: [1,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [3,2,3]},
		{dom_id:'',position: [1,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [3,2,3]},
		{dom_id:'',position: [1,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [3,2,3]},
		{dom_id:'',position: [1,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [3,2,3]},
		{dom_id:'',position: [1,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [3,2,3]},
		{dom_id:'',position: [1,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [3,2,3]},
		{dom_id:'',position: [1,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [3,2,3]},
		{dom_id:'',position: [1,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [3,2,3]},
		{dom_id:'',position: [1,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [3,2,3]},
		{dom_id:'',position: [1,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [3,2,3]},
		{dom_id:'',position: [1,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [3,2,3]},
		{dom_id:'',position: [1,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [3,2,3]},
		{dom_id:'',position: [1,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [3,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [3,2,3]},
		{dom_id:'',position: [1,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [2,2,3]},
		{dom_id:'',position: [3,2,3]},
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