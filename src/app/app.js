import React from 'react';
import ReactDOM from 'react-dom'; 


import TripList from './js/trip.js';


import css from 'bootstrap/dist/css/bootstrap.min.css';

// var $ = require('jquery');

window.$ = require('jquery/dist/jquery.min.js');
require('bootstrap/dist/js/bootstrap.bundle.min.js');
// require("bootstrap/dist/css/bootstrap.min.css");


var trips = {
	"trip": {
		"title": "Trip Title 1",
		"start": "July 3",
		"end": "July 24",
		"description": "Retro master cleanse umami banh mi vinyl af post-ironic yr stumptown 90's 8-bit roof party kogi health goth. Salvia try-hard vape occupy selfies, iPhone schlitz. Pickled banjo humblebrag hell of shaman 90's authentic gluten-free gastropub plaid dreamcatcher vexillologist keytar kale chips helvetica. Lumbersexual flannel seitan, selvage PBR&B salvia kombucha yr food truck tote bag palo santo etsy bicycle rights.",
		"gallery": {
			"src": "/app/img/sierras-sample.jpg",
			"alt": "Sierra Nevada sample image.",
		}
	}
};

class NavBar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
		        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
		          	<span className="navbar-toggler-icon"></span>
		        </button>

		        <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample10">
			          <ul className="navbar-nav">
				            <li className="nav-item active">
				              	<a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
				            </li>
				            <li className="nav-item">
				              	<a className="nav-link" href="#">About</a>
				            </li>
				            <li className="nav-item">
				              	<a className="nav-link disabled" href="#">Contact</a>
				            </li>
				            <li className="nav-item dropdown">
					            <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown10" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
					            <div className="dropdown-menu" aria-labelledby="dropdown10">
					                <a className="dropdown-item" href="#">Action</a>
					                <a className="dropdown-item" href="#">Another action</a>
					                <a className="dropdown-item" href="#">Something else here</a>
					            </div>
				            </li>
			          </ul>
		        </div>
		    </nav>
		)
	}
}

 
class Welcome extends React.Component {
   render() {
        return (
        	<div className="jumbotron">
		         <div className="col-sm-8 mx-auto">
            		<h1>{this.props.message}</h1>
		            <p>These are the adventures I have been on to date.</p>
		            <p>
		              	<a className="btn btn-primary" href="#" role="button">Load Trips</a>
		            </p>
		         </div>
	        </div>
        )
   } 
}

class App extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<NavBar />
				<div className="container">
	  				<main role="main">
						<Welcome message="Tuck's React App"/>
						<TripList />
	      			</main>
				</div>
			</div>
		)
	}
}
 
ReactDOM.render(
    <App />,
    document.querySelector( '.root' )
);