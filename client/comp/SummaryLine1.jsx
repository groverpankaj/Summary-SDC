import React from 'react';
import PropTypes from 'prop-types';
import { LineWrapper, Vdivider, Price, Bath, BathPopup } from './style.js'

class SummaryLine1 extends React.Component {
  constructor(props){
    super(props);

    // Refernces related to Popup
    this.bathRef = React.createRef();       // bath text
    this.bathPopUpRef = React.createRef();  // popup 

    // bind function about Popup
    this.showPopupOnMouseEnter = this.showPopupOnMouseEnter.bind(this);
    this.hidePopuOnMouseLeave = this.hidePopuOnMouseLeave.bind(this);
  }

  componentDidMount() {
    // compute left, top value where the bath popup appear
    const popupPositionLeft = this.bathRef.current.offsetLeft - this.bathPopUpRef.current.clientWidth / 2;
    const popupPositionTop = this.bathRef.current.offsetTop + this.bathRef.current.offsetHeight + 10;

    // set location the bath popup by inline style
    this.bathPopUpRef.current.style.left = `${popupPositionLeft}px`;
    this.bathPopUpRef.current.style.top = `${popupPositionTop}px`;
    
    // hide the bath popup
    this.bathPopUpRef.current.hidden = true;
  }

  showPopupOnMouseEnter() {
    this.bathPopUpRef.current.hidden = false;
  }

  hidePopuOnMouseLeave() {
    this.bathPopUpRef.current.hidden = true;
  }

  render() {
    return (
      <LineWrapper id="summaryLine1" fontsize='15px'>
        <Price id="summary_price">${this.props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Price>

        <span><b>{this.props.bd}</b> bd</span>

        <Vdivider/>

        <Bath id="summary_bath" ref={this.bathRef} onMouseEnter={this.showPopupOnMouseEnter} onMouseLeave={this.hidePopuOnMouseLeave}>
          <b>{Math.ceil(this.props.ba)}</b> ba
        </Bath>

        <BathPopup ref={this.bathPopUpRef}>
          {Number.isInteger(this.props.ba) ? `${this.props.ba} full bath` : `${this.props.ba - 0.5} full bath + 1 half bath `}
        </BathPopup>

        <Vdivider/>

        <span id="summary_sqft"><b>{this.props.sqft.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</b> sqft</span>
      </LineWrapper>
    );
  }
}

// prop type check up
SummaryLine1.propTypes = {
  price: PropTypes.number,
  bd: PropTypes.number,
  ba: PropTypes.number,
  sqft: PropTypes.number
}

export default SummaryLine1;