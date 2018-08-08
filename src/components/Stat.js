import React from 'react';

class Stat extends React.Component {
	render(){
		return(
          <div className='shots__stats'>
            <ul className='shots__list'>
              <li><i className='fa fa-eye' />{this.props.views}</li>
              <li><i className='fa fa-comment' />{this.props.comments}</li>
              <li><i className='fa fa-heart' />{this.props.likes}</li>
            </ul>
          </div>
		);
	}
}

export default Stat;