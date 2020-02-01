import React from 'react';
import PropTypes from 'prop-types';
import { LineWrapper, Vdivider, SaleStatus, Zestimate } from './style.js'
import Popup from './ZestimatePopup.jsx';

class SummaryLine3 extends React.Component {
  constructor(props){
    super(props);

    this.zestRef = React.createRef();
    this.popupRef = React.createRef();

    this.showPopupOnClick = this.showPopupOnClick.bind(this);
    this.hidePopupOnClick = this.hidePopupOnClick.bind(this);
  }

  componentDidMount() {
    // compute left value where the popup appear
    const popupPositionLeft = this.zestRef.current.offsetLeft + this.zestRef.current.offsetWidth + 15;
    // compute width of popup, so it does not go over on the right
    const popoupWidth = 500 - popupPositionLeft;

    // set style of popup with computed value
    this.popupRef.current.style.left = `${popupPositionLeft}px`;
    this.popupRef.current.style.width = `${popoupWidth}px`;
    
    this.popupRef.current.hidden = true;
  }

  showPopupOnClick() {
    this.popupRef.current.hidden = false;

    // make other parts of app to close popup when clicked;
    const target = document.getElementById('app');
    target.addEventListener('click', this.hidePopupOnClick);
  }

  hidePopupOnClick(e) {
    if (e.target.id === "closeIcon") { // close button clicked
      this.popupRef.current.hidden = true;  
    } else if (this.popupRef.current.contains(e.target)) { // popup other than close button clicked
      /*  do not hide by doing nothing  */
    } else { // outside of popup clicked
      this.popupRef.current.hidden = true;  
    }    
  }

  render() {
    return (
      <LineWrapper id="summaryLine3" fontsize='13px' ref={this.props.sl3Ref}>
        <SaleStatus id="summary_status" status={this.props.saleStatus}><b>{this.props.saleStatus}</b></SaleStatus>
        <Vdivider/>
        <span id="summary_zestimate">
          <Zestimate ref={this.zestRef} onClick={this.showPopupOnClick}>
            Zestimate<sup>®</sup>: 
          </Zestimate>
          ${this.props.zestimate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </span>
        <Popup ref={this.popupRef} hidePopupOnClick={this.hidePopupOnClick}/>
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
