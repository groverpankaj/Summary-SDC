import React from 'react';
import {mount, shallow} from 'enzyme';
import Summary from '../client/comp/Summary.jsx';

const sample = {
  "id":-1,
  "price":2350000,
  "bd":8,
  "ba":3.5,
  "sqft":2345,
  "address":"44 Tehama St, San Francisco, CA 94105",
  "status":"For rent",
  "zestimate":2740000,
  "tour_button":true,
  "estPayment":387
};

describe('Summary Module renders with correct value', () => {
  var wrapper = mount(<Summary property={sample}/>); // mount/render/shallow when applicable
  // console.log(wrapper.find('summary').children());
  it('should have 4 lines of text and button(s)', () => {
    expect(wrapper.find('.summary').children().length).toBe(5);
  });
  
  it('should have price, bedroom, bathroom information in 1st line', () =>{
    var line1 = wrapper.find('.line1');

    expect(line1.find('#summary_price')).toHaveText(`$ ${sample.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`);
    expect(line1.find('#summary_bed')).toHaveText(`${sample.bd} bd`);
    expect(line1.find('#summary_bath')).toHaveText(`${sample.ba} ba`);
    expect(line1.find('#summary_sqft')).toHaveText(`${sample.sqft.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} sqft`);
  });

  it('should have address in 2nd line', () =>{
    var line2 = wrapper.find('.line2');

    expect(line2).toHaveText(sample.address);
  });

  it('should have status and Zestimate value in 3rd line', () =>{
    var line3 = wrapper.find('.line3');
    
    expect(line3.find('#summary_status')).toHaveText(sample.status);
    expect(line3.find('#summary_zestimate')).toHaveText(`$ ${sample.zestimate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`);
  });

  it('should have status and Zestimate value in 4th line', () =>{
    var line4 = wrapper.find('.line4');
    
    expect(line4.find('#summary_estPayment')).toHaveText(`Est. payment: $${sample.estPayment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}/mo`);
    // expect(line4.find('#summary_zestimate')).toHaveText('$ 2,740,000');
  });
});