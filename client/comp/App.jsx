// npm packages
import React from 'react';
import styled from 'styled-components';
import $ from 'jquery';
// module: data
import sample from '../sample/sample.js';
// module react components
import Summary from './Summary.jsx';
import NavigationBar from './NavigationBar.jsx';
import DetailPanel from './DetailPanel.jsx';
// module: styled-components
import { StyledApp } from './style.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showarrow: {left: 'hidden', right: 'visible'},
      onview: {
        'ov': true,
        'ff': false,
        'hv': false,
        'pth': false,
        'mc': false,
        'rv': false,
        'ns': false,
        'ct': false,
        'nh': false,
        'hfy': false,
        'sh': false
      }
    }
    this.sl3Ref = React.createRef();

    // bind functions
    this.scrollOnClick = this.scrollOnClick.bind(this);
    this.slideOnClick = this.slideOnClick.bind(this);
    this.slideOnScroll = this.slideOnScroll.bind(this);
    this.showHideOnSlide = this.showHideOnSlide.bind(this);
  }

  componentDidMount(){
    console.log('Log from App:');
    console.log(this.sl3Ref);
  }
  /*
    START: Define Event Listner
    
    slide implies horizontal scroll within navigation bar
    scroll implies vertical scroll within detail panel
  */
  scrollOnClick(e) { // to scroll up and down through detail panel when navigation bar is clicked
    const clicked = e.target.classList[2]; // get assgined classname of clicked one 

    // compute how much needed to be scrolled down within the panel
    const scrollAmount = $(`div.${clicked}`)[0].offsetTop - $('#detailpanel')[0].offsetTop;
    $('#detailpanel')[0].scrollTop = scrollAmount  // scroll down the panel

    // scrollIntoView does not work for some reason
    // $(`div.${clicked}`)[0].scrollIntoView();
  }

  slideOnClick(e) { // to slide navigation bar when arrow on navigation bar is clicked
    const clicked = e.target.id;
    const scrollAmount = (clicked.startsWith('l')) ? -250 : 250;
    $('#navbar')[0].scrollLeft += scrollAmount;
  }
  
  showHideOnSlide() { // to show and hide arrows when slide through navigation bar
    this.setState((state) => {
      // left arrow: 16 is left margin value of navigation bar
      state.showarrow.left = ($('#navbar')[0].scrollLeft > 16) ? 'visible' : 'hidden';
      // right arrow: 16 is right margin value of navigation bar
      const maxScroll = $('#navbar')[0].scrollWidth - $('#navbar')[0].clientWidth;
      state.showarrow.right = ($('#navbar')[0].scrollLeft < maxScroll - 16) ? 'visible' : 'hidden';

      return state;
    })
  }


  slideOnScroll(e) { //to slide navigation bar when user scroll through the detail panel
    const offsetTopValue = e.target.scrollTop + $('#detailpanel')[0].offsetTop;
    // get pixel distance from the top of the page
    const navNameInitials = Object.keys(this.state.onview);
    
    for (let i = 1; i < navNameInitials.length + 1; i += 1) {
      if(i === navNameInitials.length) { // handle case when the detail panel shows the last component 'similar homes'
        $('span.sh')[0].scrollIntoView();
        this.setState((state) => {
          for (let key in state.onview) { // chnage rendering option
              state.onview[key] = (key === 'sh') ? true : false;
          }
          return state;
        });
      } else { // handle when the detail panel shows the other components
        if (offsetTopValue < $(`div.${navNameInitials[i]}`)[0].offsetTop) { // find where panel is at
          $(`span.${navNameInitials[i-1]}`)[0].scrollIntoView(); // scroll to the right title in navigation bar

          this.setState((state) => { // chnage rendering option by updating state
            for (let key in state.onview) { 
              state.onview[key] = (key === navNameInitials[i-1]) ? true : false;
            }
            return state;
          });

          break;
        }
      }
    } 
  }
  /*
    END: Define Event Listner
  */

  render() {
    return (
      <StyledApp>
        <Summary house={sample[0]} sl3Ref={this.sl3Ref}/>
        <NavigationBar onview={this.state.onview}
                        showarrow={this.state.showarrow}
                        scrollOnClick={this.scrollOnClick}
                        slideOnClick={this.slideOnClick}
                        showHideOnSlide={this.showHideOnSlide} />
        <DetailPanel slideOnScroll={this.slideOnScroll} />
      </StyledApp>
    );
  }
}

export default App;