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
	let id = category+ '_chart';
	let chart_container = document.getElementById(id);
	let chart = c3.generate({
	        data: {
	            columns: stats
	        },
	        axis: {
		        x: {
		            label: {
		                text: 'Week',
		                position: 'outer-left'
		            },
		            tick:{
		            	//Starts x-axis at Week 1 instead of Week 0
		            	format: function (x) { return x+1; }
		            }
		        },
		        y: {
		            label: {
		                text: category.charAt(0).toUpperCase() + category.slice(1),
		                position: 'outer-middle'

		            }
		        }
		    },
		    //Chart will appear on html side with the id pattern below
		    //bindto: '#'+ id
	    });
	let wrapper = document.createElement("div");
	wrapper.className += "col-lg-8";
	wrapper.appendChild(chart.element);
	chart_container.appendChild(wrapper);
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
	var heading = new Array("Name", "Avg.");

	//Create Table
	var table =document.createElement('TABLE'); 
	var tableBody = document.createElement('TBODY');
	table.appendChild(tableBody);

	//Create Table Headings
	var tr = document.createElement('TR');
	tableBody.appendChild(tr)
	let width = '200';
	for (i=0; i < heading.length; i++){
		var th = document.createElement('TH');
		th.width = width;
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
		td.style.textAlign = "center";
		tr.appendChild(td)

		tableBody.appendChild(tr);
	}

	let table_container = document.querySelector('#'+ stat_category+ '_table');
	let wrapper = document.createElement("div");
	wrapper.className += "col-lg-4";
	wrapper.appendChild(table);
	table_container.appendChild(wrapper);

}

function calc_avg(stats){
	const average = stats.reduce((sum,current) => {
		if (isString(sum) || isString(current)){
			sum = parseFloat(sum);
			current = parseFloat(current);
		}
		return sum+current;
	})/stats.length;
	console.log("average is >>>", average);
	return average.toFixed(3);
}

function isString (value) {
	return typeof value === 'string' || value instanceof String;
}

function wrapElement(element, wrapper_tag, wrapper_class){
	let parent = element.parentNode;
	let wrapper = document.createElement(wrapper_tag);
	wrapper.className += " " + wrapper_class;
	parent.replaceChild(wrapper, element);
	wrapper.appendChild(element);
}

api_response.then(data => console.log('asasdsad',data));


