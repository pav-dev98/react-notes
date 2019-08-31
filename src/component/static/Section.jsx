import React from 'react';

class Section extends React.Component{

  render(){
    if(!this.props.children){
        return (<div className="section"></div>)
    }
    else{
      return (
        <div className="section">
          <>
            {this.props.children}
          </>
        </div>)
    }
  }
}

export default Section;
