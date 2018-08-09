import React from 'react';
import Popular from './Popular';
import Recent from './Recent';
import Debut from './Debut';
import All from './All';

class Filters extends React.Component {
	render(){
		return (
			<nav className="filter">
			  <ul>
			  	<All />
				<Popular />
				<Recent />
				<Debut />
			  </ul>
			</nav>
		);
	}
}

export default Filters;