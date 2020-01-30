import React from 'react';
import $ from 'jquery';
import sample from '../sample/sample.js'
import Summary from './Summary.jsx';
import NavigationBar from './NavigationBar.jsx';
import DetailPanel from './DetailPanel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  // function to scroll up and down through detail panel when navigation bar is clicked
  scrollOnClick(e) { 
    var clicked = e.target.className; // get classname of clicked one
  
    var scrollTopValue = $(`div.${clicked}`)[0].offsetTop - $('#detailpanel')[0].offsetTop;
    // compute how much needed to be scrolled down within the panel

    $('#detailpanel')[0].scrollTo({left: 0, top: scrollTopValue, behavior: 'smooth'}); // scroll down the panel
  }

  // functon to slide navigation bar when user scroll through the detail panel
  slideOnScroll(e) { 
    var scrollTopValue = e.target.scrollTop // get how much is scrolled down from the top
    var offsetTopValue = scrollTopValue + $('#detailpanel')[0].offsetTop; // get pixel distance from the top of the page

    var moduleID = ['ov', 'ff', 'hv', 'pth', 'mc', 'rv', 'ns', 'ct', 'nh', 'hfy', 'sh', 'dummy'];

    for(let i=1; i<moduleID.length; i++) {
     if (offsetTopValue < $(`div.${moduleID[i]}`)[0].offsetTop) { // find where panel is at
        var scrollLeftValue = $(`span.${moduleID[i-1]}`)[0].offsetLeft - $('#navbar')[0].offsetLeft;

        $('#navbar')[0].scrollTo({left: scrollLeftValue, top:0, behavior: 'smooth'})
  
        break;
      }
    }
  }

  render() {
    return (
      <div style={{overflow:'hidden'}}>
        <Summary property={sample[0]}/>
        <NavigationBar scrollOnClick={this.scrollOnClick.bind(this)}/>
        <DetailPanel slideOnScroll={this.slideOnScroll}/>
      </div>
    )
  }
}

export default App