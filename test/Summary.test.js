import React from 'react';
import {mount, shallow} from 'enzyme';
import Summary from '../client/comp/Summary.jsx';

var sample = {
  "id":-1,
  "price":2350000,
  "bd":8,
  "ba":3.5,
  "sqft":2345,
  "address":"44 Tehama St, San Francisco, CA 94105",
  "status":"For rent",
  "tour_button":true,
  "zestimate":2740000,
  "estPayment":387
};

it('should have line1', () => {

  const wrapper = mount(<Summary property={sample}/>); // mount/render/shallow when applicable

  expect(wrapper.find('.line1')).toExist();
});

// describe('Summary component', () => {
//   var wrapper = mount(<Summary property={sample}/>); // mount/render/shallow when applicable

  
// });