// npm packages
import React from 'react';
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

    // React Refs
    this.sl3Ref = React.createRef();
    this.navbarRef = React.createRef();
    this.dpRef = React.createRef();

    // variables for dynamically rendering summary line 3
    this.sl3Height = 0;

    // bind functions
    this.scrollOnClick = this.scrollOnClick.bind(this);
    this.slideOnClick = this.slideOnClick.bind(this);
    this.showHideOnSlide = this.showHideOnSlide.bind(this);
    this.twoActionsOnScroll = this.twoActionsOnScroll.bind(this);
    this.slideOnScroll = this.slideOnScroll.bind(this);
    this.renderOnScroll = this.renderOnScroll.bind(this);
  }

  componentDidMount() {
    this.sl3Height = this.sl3Ref.current.scrollHeight;
  }

  /*
    START: Event Listners
    
    slide implies horizontal scroll within navigation bar
    scroll implies vertical scroll within detail panel
  */
  scrollOnClick(e) { // to scroll up and down through detail panel when navigation bar is clicked
    // get classname of clicked one 
    const clicked = e.target.classList[2]; 
    // find element in display panel with the same class name
    const elmtInDp = this.dpRef.current.getElementsByClassName(clicked)[0];

    // compute how much needed to be scrolled down within the panel
    const scrollAmount = elmtInDp.offsetTop - this.dpRef.current.offsetTop;
    this.dpRef.current.scrollTop = scrollAmount  // scroll down the panel

    // scrollIntoView does not work for some reason
    // $(`div.${clicked}`)[0].scrollIntoView();
  }

  slideOnClick(e) { // to slide navigation bar when arrow on navigation bar is clicked
    const clicked = e.target.id; // get which arrow is clicked
    const scrollAmount = (clicked.startsWith('l')) ? -250 : 250; // decide to slide left or right
    this.navbarRef.current.scrollLeft += scrollAmount; // scroll
  }
  
  showHideOnSlide() { // to show and hide arrows when slide through navigation bar
    this.setState((state) => {
      const navbar = this.navbarRef.current;
      // left arrow
      state.showarrow.left = (navbar.scrollLeft > navbar.firstChild.clientWidth/5)
      // right arrow
      const maxScroll = navbar.scrollWidth - navbar.clientWidth;
      state.showarrow.right = (navbar.scrollLeft < maxScroll - navbar.lastChild.clientWidth/5)

      return state;
    })
  }

  twoActionsOnScroll(e) {
    this.slideOnScroll(e);
    this.renderOnScroll(e);
  }

  slideOnScroll(e) { //to slide navigation bar when user scroll through the detail panel
    // set react refs as variable
    const navbar = this.navbarRef.current;
    const dp = this.dpRef.current;

    // get pixel distance from the top of the page
    const offsetTopValue = e.target.scrollTop + dp.offsetTop;
    // console.log('offsetTopValue: ', offsetTopValue);


    for (let i = 1; i < navbar.children.length + 1; i += 1) {
      if (i === navbar.children.length) { // handle case when the detail panel shows the last component 'similar homes'
        navbar.lastChild.scrollIntoView();

        this.setState((state) => {
          for (let key in state.onview) { // chnage rendering option
              state.onview[key] = (key === navbar.lastChild.classList[2]);
          }
          return state;
        });
      } else { // handle when the detail panel shows the other components
        if (offsetTopValue < dp.children[i].offsetTop) { // find where panel is at
          navbar.children[i-1].scrollIntoView(); // scroll to the right title in navigation bar

          this.setState((state) => { // chnage rendering option by updating state
            for (let key in state.onview) { 
              state.onview[key] = (key === dp.children[i-1].classList[0]);
            }
            return state;
          });

          break;
        }
      }
    }
  }

  renderOnScroll(e) {
    const standard = this.dpRef.current.firstChild.clientHeight * 0.6;
    const where = e.target.scrollTop;

    // compute proportion 
    const p = (where < standard) ? (where / standard) : 1;

    // where = scrollTop at 0 => full height & 0 opacity
    // where = scrollTop at standard or more => 0 height & 1 opacity
    this.sl3Ref.current.style.height = `${this.sl3Height * (1 - p)}px`;
    this.sl3Ref.current.style.opacity = (1 - p);
  }
  /*
    END: Define Event Listner
  */

  render() {
    return (
      <StyledApp>
        <Summary house={sample[0]} sl3Ref={this.sl3Ref}/>
        <NavigationBar ref={this.navbarRef}
                      onview={this.state.onview}
                      showarrow={this.state.showarrow}
                      scrollOnClick={this.scrollOnClick}
                      slideOnClick={this.slideOnClick}
                      showHideOnSlide={this.showHideOnSlide} />
        <DetailPanel ref={this.dpRef} twoActionsOnScroll={this.twoActionsOnScroll} />
      </StyledApp>
    );
  }
}

export default App;