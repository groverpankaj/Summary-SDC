import React from 'react';
import PropTypes from 'prop-types';
import { LineWrapper, Vdivider, Price, Bath, BathPopup } from './style.jsx'

class SummaryLine1 extends React.Component {
  constructor(props){
    super(props);
    this.state = {showPopup: true};

    // Refernces
    this.bathRef = React.createRef();       // bath text
    this.bathPopUpRef = React.createRef();  // popup 

    // variables about dimension and position of popup
    this.bpL=0;
    this.bpT=0;
    this.bpW=0;
    this.bpH=0;

    // bind function about Popup
    this.showPopupOnMouseEnter = this.showPopupOnMouseEnter.bind(this);
    this.hidePopuOnMouseLeave = this.hidePopuOnMouseLeave.bind(this);
  }

  componentDidMount() {
    // set location and deimension value of the bath popup, so it can referred by conditional rendering
    this.bpL = `${this.bathRef.current.offsetLeft + this.bathPopUpRef.current.clientWidth / 4}px`;
    this.bpT = `${this.bathRef.current.offsetTop + this.bathPopUpRef.current.clientHeight - 5}px`;
    this.bpW = `${this.bathPopUpRef.current.clientWidth}px`;
    this.bpH = `${this.bathPopUpRef.current.clientHeight}px`;

    // hide the bath popup
    this.setState({showPopup: false});
  }

  showPopupOnMouseEnter() {
    this.setState({showPopup: true});
  }

  hidePopuOnMouseLeave() {
    this.setState({showPopup: false});
  }

  render() {
    const bathPopup = !this.state.showPopup ? '' :
                      (<BathPopup id="bathPopup" ref={this.bathPopUpRef} bpL={this.bpL} bpT={this.bpT} bpW={this.bpW} bpH={this.bpH}>
                        {Number.isInteger(this.props.ba) ? `${this.props.ba} full bath` : `${this.props.ba - 0.5} full bath + 1 half bath `}
                      </BathPopup>);

    return (
      <LineWrapper id="summaryLine1" fontsize='15px'>
        <Price id="summary_price">${this.props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Price>

        <span><b>{this.props.bd}</b> bd</span>

        <Vdivider/>

        <Bath id="summary_bath" ref={this.bathRef} onMouseEnter={this.showPopupOnMouseEnter} onMouseLeave={this.hidePopuOnMouseLeave}>
          <b>{Math.ceil(this.props.ba)}</b> ba
        </Bath>
        
        {bathPopup}

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