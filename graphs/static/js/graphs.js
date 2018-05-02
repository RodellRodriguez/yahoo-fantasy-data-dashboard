let CATEGORIES = ['assists','blocks','field_goal_percentage'
	,'free_throw_percentage','points','rebounds'
	,'steals','three_points_made','turnovers'];

let NUM_OF_TEAMS = 8;

let api_response = fetch('/api')
	.then(response => {return response.json(); })
	.catch(function(error){console.log('error is ',error)});

api_response.then(data => {
	for(let category of CATEGORIES){
		let all_stats_per_category = get_team_stats(data, category);
		make_graphs(all_stats_per_category, category);
		make_tables(all_stats_per_category, category);
	}	
})	

function make_graphs(stats, category){
	c3.generate({
	        data: {
	            columns: stats
	        },
	        axis: {
		        x: {
		            label: {
		                text: 'Week',
		                position: 'outer-left'
		            }
		        },
		        y: {
		            label: {
		                text: category.charAt(0).toUpperCase() + category.slice(1),
		                position: 'outer-middle'

		            }
		        }
		    },
		    title: {
  				text: category
			},
		    bindto: '#'+ category+ '_chart'
	    });
}

function get_team_stats(data, stat_category){
	let stats_data = [];
	for (let team_id = 1; team_id <= NUM_OF_TEAMS; team_id++){
		let stat_array = data.stats.filter(attributes => attributes['team'] == team_id)
						.map(attributes => attributes[stat_category]);
		stat_array.unshift(data.team[team_id-1].name);
		stats_data.push(stat_array);
	}
	console.log("Returning stats data for", stat_category,"category");
	console.log(stats_data);
	return stats_data;
}

function make_tables(stats, stat_category){
	var heading = new Array("Team Name", "Average");

	//Create Table
	var table =document.createElement('TABLE'); 

	var tableBody = document.createElement('TBODY');
	table.appendChild(tableBody);

	//Create Table Headings
	var tr = document.createElement('TR');
	tableBody.appendChild(tr)
	for (i=0; i < heading.length; i++){
		var th = document.createElement('TH');
		th.width = '150'
		th.appendChild(document.createTextNode(heading[i]))
		tr.appendChild(th);
	}

	// Create Table Rows
	for (i=0; i < stats.length; i++){
		var tr = document.createElement('TR');
		var td = document.createElement('TD');
		td.appendChild(document.createTextNode(stats[i][0]));
		tr.appendChild(td)
		
		td = document.createElement('TD');
		td.appendChild(document.createTextNode(calc_avg(stats[i].slice(1))));
		td.style.textAlign = "middle";
		tr.appendChild(td)

		tableBody.appendChild(tr);
	}

	document.querySelector('#'+ stat_category+ '_table').appendChild(table);

}

function calc_avg(stats){
	const average = stats.reduce((sum,current) => {
		if (isString(sum) || isString(current)){
			sum = parseFloat(sum).toFixed(4);
			current = parseFloat(current).toFixed(4);
		}
		return sum+current;
	})/stats.length;
	console.log("average is >>>", average);
	return average;
}

function isString (value) {
	return typeof value === 'string' || value instanceof String;
}

api_response.then(data => console.log('asasdsad',data));

