import React from 'react';

var Summary = ({property}) => {
  console.log(property);

  const vDivider_style = {
    'marginLeft': '3px',
    'marginRight': '3px'
  };
  const vDivider = <span className="vDivider" style={vDivider_style}> | </span>;

  const button = property.tour_button ? 
                  (<form><button type="button">Contact Agent</button></form>) :
                  (<form><button type="button">Contact Agent</button>
                  <button type="button">Take a tour</button></form>);

  return (
    <div className="summary">
      <div className='line1'>
        <span id="summary_price">$ {property.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
        {vDivider}
        <span id="summary_bed">{property.bd} bd</span>
        {vDivider}
        <span id="summary_bath">{property.ba} ba</span>
        {vDivider}
        <span id="summary_sqft">{property.sqft.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} sqft</span>
      </div>
      <div className="line2" id="summary_address">{property.address}</div>
      <div className="line3">
        <div>
          <span id="summary_status">{property.status}</span>
          {vDivider}
          <span>Zestimate: </span>
          <span id="summary_zestimate">$ {property.zestimate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
        </div>
      </div>
      <div className="line4">
        <span id="summary_estPayment">Est. payment: ${property.estPayment}/mo</span>
        <span style={{color: 'blue'}}>$</span>
        <span style={{color: 'blue'}}>Get pre-qualified</span>
      </div>
      {button}
    </div>
  );
}

export default Summary;