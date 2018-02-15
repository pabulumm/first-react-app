import React from 'react';


export default class NavBar extends React.Component {
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