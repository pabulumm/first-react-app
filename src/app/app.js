import React from 'react';
import ReactDOM from 'react-dom'; 


// import TripList from './js/trip.jsx';
import Animation from './js/animation.jsx';
import NasaAPOD from './js/nasa.jsx';
import Asteroids from './js/asteroids.jsx';


import css from 'bootstrap/dist/css/bootstrap.min.css';

// var $ = require('jquery');

window.$ = require('jquery/dist/jquery.min.js');
// require('bootstrap/dist/js/bootstrap.bundle.min.js');
// require("bootstrap/dist/css/bootstrap.min.css");





class CharCounter extends React.Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		var str = $("#strIn").val();
		if(str != undefined) {
			if(str.length <= 0) {return false;}
			var strArr = str.split('');
			var ret = '', c = strArr[0], count = 1;
			for(var i = 1; i<strArr.length; i++) {
				if(c != strArr[i]) {
					ret += c + count.toString();
					c = strArr[i], count = 1;
				} else {
					count++;
				}
			}
			ret += c + count.toString();
			$("#strOut").val(ret);
		}
	}

	render() {
		return (
			<div id="charCounter" className="col-md-12 demo">
				<h3>Character Counter</h3><br/>
				<form>
					<div className="form-group">
						<label htmlFor="strIn">Insert String: </label>
						<input className="form-control" id="strIn" type="text" placeholder="Enter String"/>
						<small id="inputHelp" className="form-text text-muted">Something like "aaaaabbbbccdddd"</small>
					</div>
					<div className="form-group">
			  			<button type="submit" role="button" className="btn btn-primary" onClick={this.handleClick}>Get Count</button><br/>
		  			</div>
					<div className="form-group">
			  			<label>Character Counts: </label>
			  			<input className="form-control" id="strOut" type="text"/><br/>
		  			</div>
	  			</form>
  			</div>
		)
	}
}


 
class Welcome extends React.Component {
   render() {
        return (
        	<div className="name">
		        <h1>tucker stone</h1>
	        </div>
        )
   } 
}



class App extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="container">
	  				<main role="main">
						<Welcome />
						<div className="col-md-8 offset-2">
  							<Asteroids />		
		      				<Animation />
	      				</div>
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