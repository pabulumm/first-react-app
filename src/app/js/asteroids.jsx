import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

const DATE_FORMAT = "YYYY-MM-DD";

export default class Asteroids extends React.Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
		// this.handleDateChange = this.handleDateChange.bind(this);

		this.state = {
			asteroids: [],
			astCnt: 0,
			startDate: moment(),
			astFocus: {}
		};
	}

	componentDidMount() {
		const APIKEY = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=' + this.state.startDate.format(DATE_FORMAT) + '&api_key=3ZZ6PLwWWcWoQwdbYbzjww5yOY0qH8RFjeG79ltT';
		$.getJSON(APIKEY).done((data) => {
			let asteroids = [];
			$.each(data.near_earth_objects, function(neoDate) {
				$.each(data.near_earth_objects[neoDate], function(index, neo) {
					asteroids.push(neo);
				});
			});
			this.setState({
				asteroids: asteroids,
				astFocus: asteroids[0],
				astCnt: data.element_count
			});

		});
	}

	handleClick(e) {
		if(e.target && e.target.nodeName == "LI") {
			$("#asteroid-list .active").removeClass('active');
			$(e.target).addClass('active');
			let asteroid = this.state.asteroids.filter((ast) => {
				return ast.name == e.target.innerHTML;
			});
			this.setState({
				astFocus: asteroid[0]
			});
		}
	}

	// handleDateChange(date) {
	//     this.setState({
	//       startDate: date
	//     });
 //  	}

	render() {
		const asteroids = this.state.asteroids.map((neo, i) => {
			let cls = (i === 0) ? "list-group-item active" : "list-group-item";
			return ( <li key={neo.neo_reference_id} className={cls}>{neo.name}</li> )
		});
		let asteroidDetail = (this.state.astFocus.constructor === Object && Object.keys(this.state.astFocus).length !== 0) ? <AsteroidDetail ast={this.state.astFocus} /> : "";

		return(
			<div id="asteroids" className="container card">
				<div className="heading">
					<h3>Asteroids</h3>
					<small className="text-muted">{this.state.astCnt} NEOs found in the week of {this.state.start_date}</small>
				</div>
				<div className = "row">
					<div className="col-md-5">
						<DatePicker selected={moment()}/>	
						<ul id="asteroid-list" className="list-group" onClick={this.handleClick}>{asteroids}</ul>
					</div>
					<div className="col-md-7">
					{asteroidDetail}
					</div>
				</div>
			</div>
		)
	}
}

class AsteroidDetail extends React.Component {
	render() {

		let diameters = this.props.ast.estimated_diameter.meters.estimated_diameter_min.toFixed(2).toString()
			+ " - " + this.props.ast.estimated_diameter.meters.estimated_diameter_max.toFixed(2).toString() + " meters";
		return (
			<div className="card container asteroid-detail">
				<table className="table">
					<caption>Asteroid Detail</caption>
					<tbody>
						<tr>
							<th>Name</th>
							<td>{this.props.ast.name}</td>
						</tr>
						<tr>
							<th>Magnitude</th>
							<td>{this.props.ast.absolute_magnitude_h}</td>
						</tr>
						<tr>
							<th>Diameter</th>
							<td>{diameters}</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}