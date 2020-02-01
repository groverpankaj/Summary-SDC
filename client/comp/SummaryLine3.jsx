import React from 'react';
import PropTypes from 'prop-types';
import { LineWrapper, Vdivider, SaleStatus, Zestimate} from './style.js'

const SummaryLine3 = React.forwardRef(
  function SL3(props, ref) {
    return (
      <LineWrapper id="summary_line3" fontsize='13px' ref={ref}>
        <SaleStatus id="summary_status" status={this.props.saleStatus}><b>{this.props.saleStatus}</b></SaleStatus>
        <Vdivider/>
        <span id="summary_zestimate">
          <Zestimate>Zestimate<sup>®</sup>: </Zestimate>
          ${this.props.zestimate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </span>
      </LineWrapper>
    );
  }
);

SummaryLine3.propTypes = {
  saleStatus: PropTypes.string,
  zestimate: PropTypes.number
}

export default SummaryLine3;
