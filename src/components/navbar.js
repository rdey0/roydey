import React from 'react'



//Hide navbar when scrolling down and show when scrolling up
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar-container").style.top = "0";
  } else {
    document.getElementById("navbar-container").style.top = "-5em";
  }
  prevScrollpos = currentScrollPos;
}

export default class NavBar extends React.Component{
    constructor(){
        super();
    }

    // Scroll to whatever section was clicked on
    handle_click=(event)=> {
        var selected_section = event.target.innerText;
        var section_id = selected_section.toLowerCase() + '-container';
        var element = document.getElementById(section_id);
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        });
    }

    render(){
        return(
            <div id='navbar-container'>
                <div className='item-container'>
                    <div className='navbar-item' onClick={this.handle_click}>HOME</div>
                    <div className='navbar-item' onClick={this.handle_click}>ABOUT</div>
                    <div className='navbar-item'>RESUME</div>
                    <div className='navbar-item' onClick={this.handle_click}>PORTFOLIO</div>
                    <div className='navbar-item' onClick={this.handle_click}>CONTACT</div>
                </div>
            </div>
        )
    }  
}