import React from 'react';

export default class Animation extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div id="animation" className="container section">
				<h3>Animation</h3><br/>
				<HorizontalSlide id="circle-1" shape="circle" timing={quad} duration="2000" name="Quad"/>
				<HorizontalSlide id="circle-4" shape="circle" timing={circ} duration="2000" name="Circular"/>
				<HorizontalSlide id="circle-2" shape="circle" timing={bounce} duration="2000" name="Bounce"/>
			</div>
		)
	}
}

class HorizontalSlide extends React.Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		console.log("Animation initiated.");

		var elem = document.getElementById(e.target.id);

		var self=this;
		window.requestAnimationFrame(function(timestamp) {
			let starttime = timestamp || new Date().getTime();
			move(timestamp, elem, self.props.timing, self.props.duration, starttime);
			// move(timestamp, elem, bounce, 2000, starttime);
		});
	}

	render() {
		return (	
			<div className="animation-frame">
			<h4 className="animation-title text-muted">{this.props.name}</h4>
				<div className="animation-bar">
					<div id={this.props.id} className={this.props.shape} onClick={this.handleClick}></div>
				</div>
			</div>
		)
	}
}


/* ANIMATION FUNCTIONS */
function linear(timeFraction) {
	return timeFraction;
}
function quad(timeFraction) {
  return Math.pow(timeFraction, 2)
}
function circ(timeFraction) {
  return 1 - Math.sin(Math.acos(timeFraction));
}
function back(x, timeFraction) {
  return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x)
}
function bounce(timeFraction) {
  for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
    if (timeFraction >= (7 - 4 * a) / 11) {
      return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
    }
  }
}
function elastic(x, timeFraction) {
  return Math.pow(2, 10 * (timeFraction - 1)) * Math.cos(20 * Math.PI * x / 3 * timeFraction)
}
// accepts a timing function, returns the transformed variant
function makeEaseOut(timing) {
  return function(timeFraction) {
    return 1 - timing(1 - timeFraction);
  }
}


/* A function to perform an animation with a timing function input */
function move(timestamp, el, timing, duration, st) {
	// let timestamp = timestamp || new Date().getTime();
	let timeFraction = (timestamp - st) / duration;
	if(timeFraction > 1) timeFraction = 1;
	// let bounceEaseOut = makeEaseOut(bounce);
	// let progress = bounceEaseOut(timeFraction);
	let progress = timing(timeFraction);
	progress = Math.min(progress, 1);
	// el.style.left = (dist * progress).toFixed(2) + 'px';
	el.style.left = (97 * progress).toFixed(2) + '%';
	if (timeFraction < 1) {
		window.requestAnimationFrame(function(timestamp) {
			move(timestamp, el, timing, duration, st);
		});
	}
}

/* A function to perform an animation with a distance input */
function moveDist(timestamp, el, dist, duration) {
	// let timestamp = timestamp || new Date().getTime();
	let timeFraction = (timestamp - starttime) / duration;
	if(timeFraction > 1) timeFraction = 1;
	// let bounceEaseOut = makeEaseOut(bounce);
	// let progress = bounceEaseOut(timeFraction);
	let progress = bounce(timeFraction);
	progress = Math.min(progress, 1);
	// el.style.left = (dist * progress).toFixed(2) + 'px';
	el.style[direction] = (97 * progress).toFixed(2) + '%';
	if (timeFraction < 1) {
		window.requestAnimationFrame(function(timestamp) {
			move(timestamp, el, dist, duration);
		});
	}
}