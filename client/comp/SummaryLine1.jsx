import React from 'react';
import PropTypes from 'prop-types';
import { LineWrapper, Vdivider, Price, Bath, BathPopup } from './style.jsx'

class SummaryLine1 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showPopup: false,
      // bath popup location and dimension
      bpL:0,
      bpT:0,
      bpW:0,
      bpH:0
    };

    // Refernces
    this.bathRef = React.createRef();       // bath text
    this.bathPopUpRef = React.createRef();  // popup 

    // bind function about Popup
    this.showPopupOnMouseEnter = this.showPopupOnMouseEnter.bind(this);
    this.hidePopuOnMouseLeave = this.hidePopuOnMouseLeave.bind(this);
  }

  showPopupOnMouseEnter() {
    this.setState({showPopup: true}, () => {
      this.setState((state) => {
        // compute location and dimension of popup
        state.bpL = `${this.bathRef.current.offsetLeft - 40}px`;
        state.bpT = `${this.bathRef.current.offsetTop + this.bathPopUpRef.current.clientHeight - 5}px`;
        state.bpW = `${this.bathPopUpRef.current.clientWidth}px`;
        state.bpH = `${this.bathPopUpRef.current.clientHeight}px`;

        return state;
      });
    })
  }

  hidePopuOnMouseLeave() {
    this.setState({showPopup: false});
  }

  render() {
    console.log(this.state.bpL);
    console.log(this.state.bpT);
    console.log(this.state.bpW);
    console.log(this.state.bpH);

    const bathPopup = !this.state.showPopup ? '' :
                      (<BathPopup id="bathPopup" ref={this.bathPopUpRef} bpL={this.state.bpL} bpT={this.state.bpT} bpW={this.state.bpW} bpH={this.state.bpH}>
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