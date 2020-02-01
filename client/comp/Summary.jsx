import React from 'react';
import PropTypes from 'prop-types';
import SummaryLine1 from './SummaryLine1.jsx'
import SummaryLine3 from './SummaryLine3.jsx'
import { SummaryWrapper, LineWrapper, DollarIconWrapper, ButtonCA, ButtonTT } from './style.js'

class Summary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const button = this.props.house.tourButton ? 
                (<form>
                  <ButtonCA type="button" tourButton={true}>Contact Agent</ButtonCA>
                  <ButtonTT type="button">Take a tour</ButtonTT>
                </form>) :
                (<form><ButtonCA type="button">Contact Agent</ButtonCA></form>);

    return (
      <SummaryWrapper className="summary">
        <SummaryLine1 price={this.props.house.price} bd={this.props.house.bd} ba={this.props.house.ba} sqft={this.props.house.sqft}/>

        <LineWrapper id="summaryLine1" fontsize='14px' style={{fontWeight: 'bold'}}>
          <span id="summary_address">{this.props.house.address}</span>
        </LineWrapper>

        <SummaryLine3 ref={this.props.sl3Ref} saleStatus={this.props.house.saleStatus} zestimate={this.props.house.zestimate} />

        <LineWrapper className="summaryLine4" fontsize='14px' style={{position: 'relative', top: '-10px'}}>
          <span id="summary_estPayment"><b>Est. payment</b>: ${this.props.house.estPayment}/mo</span>
          <DollarIconWrapper><i className="material-icons">monetization_on</i></DollarIconWrapper>
          <span style={{color: '#0074e4'}}><b>Get pre-qualified</b></span>
        </LineWrapper>
        {button}
      </SummaryWrapper>
    );
  }
}

Summary.propTypes = {
  house: PropTypes.object,
  sl3Ref: PropTypes.object,
}

export default Summary;
