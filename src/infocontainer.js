import React, { Component } from 'react';  
import Popup from './popup.js';  


class InfoContainer extends Component {  

  constructor(props){  
super(props);  
this.state = { showPopup: false };  
}  

  togglePopup() {  
this.setState({  
     showPopup: !this.state.showPopup  
});  
 }  

  render() {  
return (  
<div>  
<h1>  </h1>  
<button onClick={this.togglePopup.bind(this)}>Info</button>  

{this.state.showPopup ?  
<Popup  
          text= "Info" 
          closePopup={this.togglePopup.bind(this)}  
/>  
: null  
}  
</div>  

);  
}  
}  

export default InfoContainer;