import React from 'react';
import Popular from './Popular';
import Recent from './Recent';
import Debut from './Debut';
import All from './All';

class Filters extends React.Component {
	render(){
		return (
			<div className="filter">
			  <ul className="filter-list">
			  	<All />
				<Popular />
				<Recent />
				<Debut />
			  </ul>
			</div>
		);
	}
}

export default Filters;