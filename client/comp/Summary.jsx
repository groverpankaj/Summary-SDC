import React from 'react';
import styled from 'styled-components';

/*
  START: define styled-components
*/
const SummaryWrapper = styled.div`
  box-sizing: border-box;
  width: 500px;
  padding: 10px 8px;
  border-top: 1px solid #D1D1D1;
  border-bottom: 1px solid #D1D1D1;
`;

const LineWrapper = styled.div`
  padding: 2px 0px;
  font-size: ${props => props.fontsize};
`;

const SpanPrice = styled.span`
  font-size: 28px;
  font-weight: bold;
  padding-right: 20px;
`;


const SpanBath = styled.span`
  cursor: help;
  padding-bottom: 2px;
  border-bottom: 1px dashed #CCCCCC;
`;

const SpanStatus = styled.span`
  &::before{
    display:inline-block;
    margin-right: 8px;
    border-radius: 50%;
    background-color: ${props => props.status === 'For sale' ? '#ff594f' : 
                                props.status === 'For rent' ? '#975cff' : '#ffd237'};
    width: 10px;
    height: 10px;
    content: "";
  }
`;

const SpanZestimate = styled.span`
  cursor: pointer;
  padding-bottom: 2px;
  border-bottom: 1px dashed #CCCCCC;
  font-weight: bold;
`;

const Vdivider = styled.span`
  margin: 0px 9px;
  border-right: 1px solid #d1d1d5;
`;

const DollarIconWrapper = styled.span`
  position: relative;
  top: 7px;
  padding: 0px 6px;
  font-size: 24px;
  color: #0074e4;
`;

const ButtonCA = styled.button`
  margin-right: ${props => props.tourButton ? '8px' : '0px'};
  border: 1px solid #aaaaaa;
  border-radius: 3px;
  width: ${props => props.tourButton ? '48%' : '100%'};
  height: 40px;
  background-color: #ffffff;
  color: #006aff;
  font-size: 15px;

  &:hover{
    border-color: #3f8fff;
  }
`
const ButtonTT = styled.button`
  margin-left: 8x;
  border: 1px solid #006aff;
  border-radius: 3px;
  width: 48%;
  height: 40px;
  background-color: #006aff;
  color: #ffffff;
  font-size: 15px;

  &:hover{
    border: 1px solid #3f8fff;
    background-color: #ffffff;
    color: #006aff;
  }
`

/*
  END: define styled-components
*/

const Summary = ({ property }) => {
  const button = property.tour_button ? 
                (<form>
                  <ButtonCA type="button" tourButton={true}>Contact Agent</ButtonCA>
                  <ButtonTT type="button">Take a tour</ButtonTT>
                </form>) :
                (<form><ButtonCA type="button">Contact Agent</ButtonCA></form>);

  return (
    <SummaryWrapper className="summary">
      <LineWrapper className='line1' fontsize='15px'>
        <SpanPrice id="summary_price">${property.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</SpanPrice>
        <span id="summary_bed"><b>{property.bd}</b> bd</span>
        <Vdivider/>
        <SpanBath id="summary_bath"><b>{property.ba}</b> ba</SpanBath>
        <Vdivider/>
        <span id="summary_sqft"><b>{property.sqft.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</b> sqft</span>
      </LineWrapper>
      <LineWrapper className="line2" id="summary_address" fontsize='14px' style={{fontWeight: 'bold'}}>{property.address}</LineWrapper>
      <LineWrapper className="line3" fontsize='13px'>
          <SpanStatus id="summary_status" status={property.status}><b>{property.status}</b></SpanStatus>
          <Vdivider/>
          <span id="summary_zestimate">
            <SpanZestimate>Zestimate<sup>®</sup>: </SpanZestimate>
            ${property.zestimate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
      </LineWrapper>
      <LineWrapper className="line4" fontsize='14px' style={{position: 'relative', top: '-10px'}}>
        <span id="summary_estPayment"><b>Est. payment</b>: ${property.estPayment}/mo</span>
        <DollarIconWrapper><i className="material-icons">monetization_on</i></DollarIconWrapper>
        <span style={{color: '#0074e4'}}><b>Get pre-qualified</b></span>
      </LineWrapper>
      {button}
    </SummaryWrapper>
  );
}

export default Summary;
