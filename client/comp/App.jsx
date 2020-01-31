import React from 'react';
import styled from 'styled-components';
import $ from 'jquery';

import sample from '../sample/sample.js';
import Summary from './Summary.jsx';
import NavigationBar from './NavigationBar.jsx';
import DetailPanel from './DetailPanel.jsx';

const StyledApp = styled.div`
  font-family: 'Open Sans', sans-serif;
  overflow: hidden;
`;

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
    
    // bind functions
    this.scrollOnClick = this.scrollOnClick.bind(this);
    this.slideOnClick = this.slideOnClick.bind(this);
    this.slideOnScroll = this.slideOnScroll.bind(this);
    this.showHideOnSlide = this.showHideOnSlide.bind(this);
  }

  /*
    START: Define Event Listner
    
    slide implies horizontal scroll within navigation bar
    scroll implies vertical scroll within detail panel
  */
  scrollOnClick(e) { // to scroll up and down through detail panel when navigation bar is clicked
    const clicked = e.target.classList[2];    // get assgined classname of clicked one   

    // compute how much needed to be scrolled down within the panel
    const scrollTopValue = $(`div.${clicked}`)[0].offsetTop - $('#detailpanel')[0].offsetTop;
    $('#detailpanel')[0].scrollTop = scrollTopValue  // scroll down the panel

    // scrollIntoView does not work for some reason
    // $(`div.${clicked}`)[0].scrollIntoView();
  }

  slideOnClick(e) { // to slide navigation bar when arrow on navigation bar is clicked
    const clicked = e.target.id
    const scrollAmount = (clicked.startsWith('l')) ? -250 : 250;
    $('#navbar')[0].scrollLeft += scrollAmount;
  }
  
  showHideOnSlide() { // to show and hide arrows when slide through navigation bar
    this.setState((state) => {
      // left arrow
      state.showarrow.left = ($('#navbar')[0].scrollLeft > $('span.ov')[0].scrollWidth/5) ? 'visible' : 'hidden';
      // right arrow: 798 is the maximum pixel value that navigation bar can slide
      state.showarrow.right = ($('#navbar')[0].scrollLeft < 798 - $('span.sh')[0].scrollWidth/5) ? 'visible' : 'hidden';

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
            return state
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
        <Summary property={sample[0]} />
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