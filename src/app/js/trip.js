import React from 'react';


/*
	Class: Trip

	@prop title (string) - the title of the trip
	@prop start (datetime) - the start date of the trip
	@prop end (datetime) - the end date of the trip
	@prop description (string) - a description of the trip
	@prop gallery (Gallery) - the images associated with the trip
	*/
	class Trip extends React.Component {
		render() {
			console.log("Rendering a trip");
			return(
				<div className="trip">
				<h3>{this.props.title}</h3>
				<small><span className="icon icon-sm icon-calendar"></span>
				{this.props.start} - {this.props.end}</small>
				<p>{this.props.description}</p>
				<img src={this.props.murl} alt={this.props.mdesc} />
				</div>
				)
		}
	}


	
/*
	Class: TripList

	Returns a display listing of trip objects 

	@prop trips (Trip[]) - the array of Trip objects to list
	*/
	export default class TripList extends React.Component {
		constructor(props) {
			super(props);
		}

		getTrips(count) {
			var trips = [], trip = [];

			var x=1;
			for(var i=0;i<count;i++) {
				trip["title"] = "Trip Title "+x;
				trip["start"] = "July 3";
				trip["end"] = "July 24";
				trip["description"] = "Retro master cleanse umami banh mi vinyl af post-ironic yr stumptown 90's 8-bit roof party kogi health goth. Salvia try-hard vape occupy selfies, iPhone schlitz. Pickled banjo humblebrag hell of shaman 90's authentic gluten-free gastropub plaid dreamcatcher vexillologist keytar kale chips helvetica. Lumbersexual flannel seitan, selvage PBR&B salvia kombucha yr food truck tote bag palo santo etsy bicycle rights.";
				trip["murl"] = "/app/img/sierras-sample.jpg"; 
				trip["mdesc"] = "Sierra Nevada sample image.";
				trips.push(trip);
				trip = [];
				x++;
			}

			return trips;
		}

		render() {
			console.log(this.getTrips(4));
			return (
				<div id="triplist" className="listing">
				{this.getTrips(4).map(function(trip,index) {
					return (
						<Trip 
						key={guid()}
						title={trip.title}
						start={trip.start}
						end={trip.end}
						gallery={trip.gallery} />
						)
				})}
				</div>
				)
		}
	}

/*
	Function: GetTrips

	Returns an array of trip objects

	*/
// export function getTrips(count) {
// 	var trips = [], trip = [];

// 	for(var i=0;i<count;i++) {
// 		trip["title"] = "Trip Title {i}";
// 		trip["start"] = "July 3";
// 		trip["end"] = "July 24";
// 		trip["description"] = "Retro master cleanse umami banh mi vinyl af post-ironic yr stumptown 90's 8-bit roof party kogi health goth. Salvia try-hard vape occupy selfies, iPhone schlitz. Pickled banjo humblebrag hell of shaman 90's authentic gluten-free gastropub plaid dreamcatcher vexillologist keytar kale chips helvetica. Lumbersexual flannel seitan, selvage PBR&B salvia kombucha yr food truck tote bag palo santo etsy bicycle rights.";
// 		trip["gallery"]["src"] = "/app/img/sierras-sample.jpg"; 
// 		trip["gallery"]["alt"] = "Sierra Nevada sample image.";
// 		trips.push(trip);
// 	}

// 	console.log(trips);
// 	return trips;
// }

function guid() {
	function s4() {
		return Math.floor((1 + Math.random()) * 0x10000)
		.toString(16)
		.substring(1);
	}
	return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
	s4() + '-' + s4() + s4() + s4();
}