import React from 'react';
import Cover from './Cover';
import Stat from './Stat';


class Shot extends React.Component {
	render(){
		return (  
			<article className='shot'>
				<Cover image={ this.props.image }/>
                <Stat views={ this.props.views} comments={ this.props.comments } likes={ this.props.likes } />
			</article>		
		);
	}
}

export default Shot;