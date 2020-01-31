import React from 'react';


/*
  START: define styled-components
*/
const SummaryWrapper = styled.div`
  margin: 0px;
  padding: 10px 8px;
  border-top: 1px solid #CCCCCC;
`;

const LineWrapper = styled.div`
  margin: 0px;
  padding: 0px;
`;

const SpanPrice = styled.span`
  padding-right: 10px;
  font-size: 24px;
`;

const SpanBath = styled.span`
  cursoer: help;
  margin: 0px
  border-bottom: 1px dashed #CCCCCC;
`;

const SpanStatus = styled.span`
  &::before{
    content: "";
    width: 5px;
    height: 5px;
    border-radius:50px;
    ${props => (
        (props.status === 'For sale' ? 'content:':'content');
      )}
  }
`;

const Vdivider = styled.span`
  margin-left: 3px;
  margin-right: 3px;
  color: #d1d1d5;

  &::before{
    content: "|";
  }
`;
// const ButtonCA = styled.button`
//   width: ${props => props.status? 100%}
//   color: 006aff;
// `
/*
  END: define styled-components
*/

const Summary = ({ property }) => {
  const button = property.tour_button ? 
                (<form><button type="button">Contact Agent</button></form>) :
                (<form><button type="button">Contact Agent</button>
                <button type="button">Take a tour</button></form>);

  return (
    <SummaryWrapper className="summary">
      <div className='line1'>
        <SpanPrice id="summary_price">${property.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</SpanPrice>
        <Vdivider/>
        <span id="summary_bed">{property.bd} bd</span>
        <Vdivider/>
        <SpanBath id="summary_bath">{property.ba} ba</SpanBath>
        <Vdivider/>
        <span id="summary_sqft">{property.sqft.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} sqft</span>
      </div>
      <div className="line2" id="summary_address">{property.address}</div>
      <div className="line3">
        <div>
          <span id="summary_status">{property.status}</span>
          <Vdivider/>
          <span>Zestimate: </span>
          <span id="summary_zestimate">$ {property.zestimate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
        </div>
      </div>
      <SummaryWrapper className="line4">
        <span id="summary_estPayment">Est. payment: ${property.estPayment}/mo</span>
        <span style={{color: 'blue'}}>$</span>
        <span style={{color: 'blue'}}>Get pre-qualified</span>
      </div>
      {button}
    </div>
  );
}

export default Summary;
