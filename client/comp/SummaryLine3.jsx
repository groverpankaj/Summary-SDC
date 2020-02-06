import React from 'react';
import PropTypes from 'prop-types';
import { LineWrapper, Vdivider, SaleStatus, Zestimate } from './style.jsx'
import Popup from './ZestimatePopup.jsx';

class SummaryLine3 extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      resizeFlag: true,
      popup: false
    };

    this.popupLeft = '';
    this.popupWidth = '';

    // References
    this.zestRef = React.createRef();   // zestimate text
    this.popupRef = React.createRef();  // popup

    this.showPopupOnClick = this.showPopupOnClick.bind(this);
    this.hidePopupOnClick = this.hidePopupOnClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.setState((state) => {
        state.resizeFlag = !state.resizeFlag;
        
        if(!this.popupLeft) {
          
        }
        
      });
      
    });
  }

  showPopupOnClick() {
    // compute left value where the popup appear
    this.popupLeft = this.zestRef.current.offsetLeft + this.zestRef.current.offsetWidth + 15;
    
    // compute width of popup, so it does not go over on the right
    this.popupWidth = document.getElementById('summary').offsetLeft + document.getElementById('summary').clientWidth - 15 - this.popupLeft;

    // change to string
    this.popupLeft = this.popupLeft.toString() + 'px';
    this.popupWidth = this.popupWidth.toString() + 'px';
    
    // show popup
    this.setState({popup: true});

    // make other parts of app to close popup when clicked;
    document.addEventListener('click', this.hidePopupOnClick, {once: true});
  }

  hidePopupOnClick(e) {
    if (e.target.classList[3] === "closeIcon") { // close button clicked
      this.setState({popup: false});
    } else if (document.getElementById('zestimatePopup').contains(e.target)) { // popup other than close button clicked
      // do not hide, but make app part clickable again
      document.addEventListener('click', this.hidePopupOnClick, {once: true});
    } else { // outside of popup clicked
      this.setState({popup: false});
    }
  }

  render() {
    let popup = this.state.popup ? 
                <Popup popupLeft={this.popupLeft} popupWidth={this.popupWidth} hidePopupOnClick={this.hidePopupOnClick}/>
                : '';

    return (
      <LineWrapper id="summaryLine3" fontsize='13px' ref={this.props.sl3Ref}>
        <SaleStatus id="summary_salesStatus" status={this.props.saleStatus}><b>{this.props.saleStatus}</b></SaleStatus>
        <Vdivider/>
        <span id="summary_zestimate">
          <Zestimate ref={this.zestRef} onClick={this.showPopupOnClick}>
            Zestimate<sup>®</sup>: 
          </Zestimate>
          &nbsp;${this.props.zestimate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </span>
        {popup}
      </LineWrapper>
    );
  }
}

SummaryLine3.propTypes = {
  saleStatus: PropTypes.string,
  zestimate: PropTypes.number,
  sl3Ref: PropTypes.object
}

export default SummaryLine3;
