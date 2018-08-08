import React from 'react';

class Stat extends React.Component {
	render(){
    console.log(this.props.data[0]);
		return(
            <React.Fragment>
              <li><i className='fa fa-eye' />{this.props.data[0]}</li>
              <li><i className='fa fa-comment' />{this.props.data[1]}</li>
              <li><i className='fa fa-heart' />{this.props.data[2]}</li>
            </React.Fragment>
		);
	}
}

export default Stat;