import React from 'react';

class Stat extends React.Component {
  /* el constructor recibe props como argumentos */
  constructor(props) {
    /* super hereda lo que trae components */
    super();
    console.log("++++++");
    //así se pueden acceder las props en el constructor
    console.log(props);
    //este es el estado del componente
    this.state = {
      liked: false,
      likes: props.likes
    };
  }

  incrementLikes = (e) => {
    e.preventDefault();
    let likesState = 0
    if (this.state.liked === false) {
        likesState = parseInt(this.state.likes) + 1
        this.state.liked = true
    } else {
        likesState = parseInt(this.state.likes) - 1
        this.state.liked = false
    }
    this.setState({
        likes: likesState
    })
  }

	render(){
    console.log("---------");
    console.log(this.state.likes);
		return(
          <div className='shots__stats'>
            <ul className='shots__list'>
              {/*se usa this para acceder a las props*/}
              <li><i className='fa fa-eye' />{this.props.views}</li>
              <li><i className='fa fa-comment' />{this.props.comments}</li>
              <li><a href="" className={ (this.state.liked === true) ? 'liked' : '' } onClick={ this.incrementLikes }><i className='fa fa-heart' />{this.state.likes}</a></li>
            </ul>
          </div>
		);
	}
}

export default Stat;