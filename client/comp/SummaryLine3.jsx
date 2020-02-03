import React from 'react';
import PropTypes from 'prop-types';
import { LineWrapper, Vdivider, SaleStatus, Zestimate } from './style.jsx'
import Popup from './ZestimatePopup.jsx';

class SummaryLine3 extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {popup: false};

    this.popupLeft = '';
    this.popupWidth = '';

    // References
    this.zestRef = React.createRef();   // zestimate text
    this.popupRef = React.createRef();  // popup

    this.showPopupOnClick = this.showPopupOnClick.bind(this);
    this.hidePopupOnClick = this.hidePopupOnClick.bind(this);
  }

  componentDidMount() {
    // compute left value where the popup appear
    this.popupLeft = `${this.zestRef.current.offsetLeft + this.zestRef.current.offsetWidth + 15}px`;
    // compute width of popup, so it does not go over on the right
    this.popupWidth = `${500 - this.popupLeft.substring(0,this.popupLeft.length-2)}px`;
  }

  showPopupOnClick() {
    // show popup
    this.setState({popup: true});

    // make other parts of app to close popup when clicked;
    const target = document.getElementById('app');
    target.addEventListener('click', this.hidePopupOnClick, {once: true});
  }

  hidePopupOnClick(e) {
    if (e.target.classList[3] === "closeIcon") { // close button clicked
      this.setState({popup: false});
    } else if (document.getElementById('zestimatePopup').contains(e.target)) { // popup other than close button clicked
      // do not hide, but make app part clickable again
      const target = document.getElementById('app');
      target.addEventListener('click', this.hidePopupOnClick, {once: true});
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
        <SaleStatus id="summary_status" status={this.props.saleStatus}><b>{this.props.saleStatus}</b></SaleStatus>
        <Vdivider/>
        <span id="summary_zestimate">
          <Zestimate ref={this.zestRef} onClick={this.showPopupOnClick}>
            Zestimate<sup>®</sup>: 
          </Zestimate>
          ${this.props.zestimate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
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
