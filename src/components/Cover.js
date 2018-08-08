import React from 'react';
import Stat from './Stat';
import {dribbble} from '../data/shots.js';

class Cover extends React.Component {
	render(){
		return (
		<article className='shot'>
		  <figure>
            <img src={this.props.data.img} alt='' />
          </figure>
          <div className='shots__stats'>
            <ul className='shots__list'>
            	<Stat data={this.props.data.stats} />
            </ul>
         </div>
		</article>
		);
	}
}

export default Cover;