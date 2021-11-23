

/*const addRow = () => {
	const table = document.getElementById("myTable");
	let row = table.insertRow();
	let data = "row 3 data 1"

	row.innerText = data;
}*/


/*function addRow() {
	const table = document.getElementById("myTable");
	let row = table.insertRow();
	let data = "row 3 data 1"

	row.innerText = data;
}*/

 function addRow() {
   const table = document.getElementById("myTable");
   const row = table.insertRow(0);
   const data1 = row.insertCell(0);
   const data2 = row.insertCell(1);
   data1.innerHTML = "New data1";
   data2.innerHTML = "New data2";
} 