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