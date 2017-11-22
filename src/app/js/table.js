import React from 'react';

/*
	TableRow
		
		Returns a Bootstrap Styled Table

	@prop fields - the table column headers
	@prop data - the array of objects containing the values
				for each table cell in the row
*/
class TableRow extends React.Component {
	render() {
		return (
			<tr>
				{props.data.map(function(value,index){
					return <td>{value}</td>;
				})}
			</tr>
		)
	}
}

class DisplayTable extends React.Component {
	render() {
		return (
			<table className="table">
				<thead>
					
				</thead>
				<tbody>
					{props.data.map(function(obj,index){
						return <TableRow data="{obj}"/>
					})}
				</tbody>
			</table>
		)
	}	
}