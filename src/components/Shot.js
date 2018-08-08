import React from 'react';
import Cover from './Cover';
import Stat from './Stat';
import {dribbble} from '../data/shots.js';

class Shot extends React.Component {
	render(){
		return (
	        
	        <React.Fragment>  
	          	 {dribbble.map(function(cover){
	                return <Cover data={ cover } />
	             })}
	             {dribbble.map(function(stat){
		            return <Stat data={ stat } />
		         })}
	           
	        </React.Fragment>

	       		
		);
	}
}

export default Shot;