import React from 'react';
import $ from 'jquery';
import sample from '../sample/sample.js';
import Summary from './Summary.jsx';
import NavigationBar from './NavigationBar.jsx';
import DetailPanel from './DetailPanel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showarrow: {left: false, right: true},
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

    this.scrollOnClick = this.scrollOnClick.bind(this);
    this.slideOnScroll = this.slideOnScroll.bind(this);
  }

  // function to scroll up and down through detail panel when navigation bar is clicked
  scrollOnClick(e) {
    const clicked = e.target.classList[2]; // get assgined classname of clicked one
    
    $(`div.${clicked}`)[0].scrollIntoView();

    /* implemntation with scrolTo function instead of scrollIntoView()
    const scrollTopValue = $(`div.${clicked}`)[0].offsetTop - $('#detailpanel')[0].offsetTop; // compute how much needed to be scrolled down within the panel
    $('#detailpanel')[0].scrollTo({ left: 0, top: scrollTopValue, behavior: 'smooth' });      // scroll down the panel
    */
  }

  // functon to slide navigation bar when user scroll through the detail panel
  slideOnScroll(e) {
    var htmlElement = event.target
    htmlElement.scrollLeft;

    const scrollTopValue = e.target.scrollTop; // get how much is scrolled down from the top
    const offsetTopValue = scrollTopValue + $('#detailpanel')[0].offsetTop; // get pixel distance from the top of the page

    const navNameInitial = Object.keys(this.state.onview);
    

    for (let i = 1; i < navNameInitial.length + 1; i += 1) {
      if(i === navNameInitial.length) { // handle case when the detail panel shows the last component 'similar homes'
        $('span.sh')[0].scrollIntoView();
        this.setState((state) => {
          for (let key in state.onview) { // chnage rendering option
              state.onview[key] = (key === 'sh') ? true : false;
            }
            return state;
        });
      } else { // handle the detail panel shows the other components
        if (offsetTopValue < $(`div.${navNameInitial[i]}`)[0].offsetTop) { // find where panel is at
          $(`span.${navNameInitial[i-1]}`)[0].scrollIntoView();

          /* implemntation with scrolTo function instead of scrollIntoView()
          const scrollLeftValue = $(`span.${navNameInitial[i - 1]}`)[0].offsetLeft - $('#navbar')[0].offsetLeft - 10;
          $('#navbar')[0].scrollTo(scrollLeftValue, 0); // slide to navigation bar
          */

          this.setState((state) => {
            for (let key in state.onview) { // chnage rendering option
              state.onview[key] = (key === navNameInitial[i-1]) ? true : false;
            }
            return state;
          })

          break;
        }
      }
    }
    
  }

  render() {
    return (
      <div style={{ overflow: 'hidden' }}>
        <Summary property={sample[0]} />
        <NavigationBar onview={this.state.onview} scrollOnClick={this.scrollOnClick} />
        <DetailPanel slideOnScroll={this.slideOnScroll} />
      </div>
    );
  }
}

export default App;
