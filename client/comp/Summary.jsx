import React from 'react';
import PropTypes from 'prop-types';
import SummaryLine1 from './SummaryLine1.jsx'
import { SummaryWrapper, LineWrapper, SpanStatus, Vdivider, SpanZestimate, DollarIconWrapper, ButtonCA, ButtonTT} from './style.js'

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
        <SummaryLine1 id="summary_line1" price={this.props.house.price} bd={this.props.house.bd} ba={this.props.house.ba} sqft={this.props.house.sqft}/>

        <LineWrapper className="summary_line2" id="summary_address" fontsize='14px' style={{fontWeight: 'bold'}}>{this.props.house.address}</LineWrapper>

        <LineWrapper className="line3" fontsize='13px'>
            <SpanStatus id="summary_status" status={this.props.house.status}><b>{this.props.house.status}</b></SpanStatus>
            <Vdivider/>
            <span id="summary_zestimate">
              <SpanZestimate>Zestimate<sup>®</sup>: </SpanZestimate>
              ${this.props.house.zestimate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
        </LineWrapper>
        <LineWrapper className="line4" fontsize='14px' style={{position: 'relative', top: '-10px'}}>
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
  property: PropTypes.object
}

export default Summary;
