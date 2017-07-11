import React, { Component } from 'react'


class Submit extends Component{
  constructor(props){
    super(props);

    this.state = {};
    this.submit = this.submit.bind(this);
  }

  submit(){
    console.log("button clicked!");
    this.props.history.push('/');
  }
  render(){
    return(
      <div> 
        <h1> Submit </h1> 
        <button onClick={this.submit}>Submit</button>
      </div>
    );
  }
}

export default Submit;