import React from 'react';
import {mount, shallow} from 'enzyme';
import Summary from '../client/comp/Summary.jsx';

const sample = [
  {
    "id":-1,
    "price":2350000,
    "bd":8,
    "ba":3.5,
    "sqft":123,
    "address":"44 Tehama St, San Francisco, CA 94105",
    "saleStatus":"For rent",
    "zestimate":2740000,
    "tourButton":true,
    "estPayment":387
  },
  {
    "id":-2,
    "price":34600,
    "bd":4,
    "ba":2,
    "sqft":1234,
    "address":"44 Tehama St, San Francisco, CA 94105",
    "saleStatus":"For rent",
    "zestimate":50000,
    "tourButton":true,
    "estPayment":387
  }
]

describe('Summary Module renders with correct value', () => {
  var wrapper = mount(<Summary house={sample[0]}/>); // mount/render/shallow when applicable
  // console.log(wrapper.find('summary').children().length);

  it('should have elements', () => {
    expect(wrapper).toContainMatchingElement('.summary');
  });

  xit('should have 5 children (4 lines of text and 1 line of buttons)', () => {
    expect(wrapper.find('.summary').children().length).toBe(5);
  });
  
  xit('should have price, bedroom, bathroom information in 1st line', () =>{
    var line1 = wrapper.find('#summaryLine1');

    expect(line1.find('#summary_price')).toHaveText(`$ ${sample.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`);
    expect(line1.find('#summary_bed')).toHaveText(`${sample.bd} bd`);
    expect(line1.find('#summary_bath')).toHaveText(`${sample.ba} ba`);
    expect(line1.find('#summary_sqft')).toHaveText(`${sample.sqft.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} sqft`);
  });

  xit('should have address in 2nd line', () =>{
    var line2 = wrapper.find('#summaryLine2');

    expect(line2).toHaveText(sample.address);
  });

  xit('should have status and Zestimate value in 3rd line', () =>{
    var line3 = wrapper.find('#summaryLine3');
    
    expect(line3.find('#summary_salesStatus')).toHaveText(sample.status);
    expect(line3.find('#summary_zestimate')).toHaveText(`$ ${sample.zestimate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`);
  });

  xit('should have status and Zestimate value in 4th line', () =>{
    var line4 = wrapper.find('#summaryLine4');
    
    expect(line4.find('#summary_estPayment')).toHaveText(`Est. payment: $${sample.estPayment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}/mo`);
    // expect(line4.find('#summary_zestimate')).toHaveText('$ 2,740,000');
  });
});