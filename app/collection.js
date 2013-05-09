function collection(callback) {
	this.people = new Array();
	var temp = this;
	//using jQuery to grab JSON
	$.getJSON('data/undergrad.json', function(data) {
		for (x in data)
		{
			for (var i=0; i<data[x].bracket1; i++)
			{
				var pos = [];
				pos[0]=1;
				pos[1]=parseInt(data[x]["1year"]);
				pos[2]=parseInt(data[x]["10years"]);
				temp.people.push({"dom_id":"","position":pos,"major":data[x].Major});
			}
			for (var i=0; i<data[x].bracket4; i++)
			{
				var pos = [];
				pos[0]=4;
				pos[1]=parseInt(data[x]["1year"]);
				pos[2]=parseInt(data[x]["10years"]);
				temp.people.push({"dom_id":"","position":pos,"major":data[x].Major});
			}
			for (var i=0; i<data[x].bracket2; i++)
			{
				var pos = [];
				pos[0]=2;
				pos[1]=parseInt(data[x]["1year"]);
				pos[2]=parseInt(data[x]["10years"]);
				temp.people.push({"dom_id":"","position":pos,"major":data[x].Major});
			}
			for (var i=0; i<data[x].bracket3; i++)
			{
				var pos = [];
				pos[0]=3;
				pos[1]=parseInt(data[x]["1year"]);
				pos[2]=parseInt(data[x]["10years"]);
				temp.people.push({"dom_id":"","position":pos,"major":data[x].Major});
			}
		}
		temp.ratio = temp.returnRatio(1);
		if (callback)
			callback();
	});
}

collection.prototype.returnRatio = function(stage) {
	var ratio = [0,0,0,0];
	for (var i=0; i<this.people.length; i++)
	{
		switch (this.people[i].position[stage-1])
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
			case 4:
			ratio[3]++;
			break;
		}
	}
	return ratio;
}