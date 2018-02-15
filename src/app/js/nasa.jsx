import React from 'react';



export default class NasaAPOD extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			apodData: {}
		};
	}

	componentWillMount() {
		const APIKEY = 'https://api.nasa.gov/planetary/apod?api_key=3ZZ6PLwWWcWoQwdbYbzjww5yOY0qH8RFjeG79ltT';
		$.getJSON(APIKEY).done((data) => {this.setState({apodData: data})});
	}

	render() {
		return(
			<div id="nasaAPOD" className="container-fluid section">
				<h3>NASA APOD</h3>
				<img src={this.state.apodData.url} alt={this.state.apodData.title} className="center" />
			</div>
		)
	}
}