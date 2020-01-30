import React from 'react';

let DetailPanel = (props) => {
// this react element is merely to provide panel in which user can scroll up and down
// the position within this panel will be referenced in other modules
  return (
    <div id="detailpanel" style={{height: '600px',overflowY: 'scroll'}}>
      <h3 className='ov'>Overview</h3>
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
      <h3 className='ff'>Facts and features</h3>
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
      <h3 className='hv'>Home value</h3>
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
      <h3 className='pth'>Price and tax history</h3>
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
      <h3 className='mc'>Monthly Cost</h3>
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
      <h3 className='rv'>Rental Value</h3>
        some detail<br />
        some detail<br />
        some detail<br />
      <h3 className='ns'>Nearby schools</h3>
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
      <h3 className='ct'>Commute time</h3>
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
      <h3 className='nh'>Neighborhood</h3>
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
      <h3 className='hfy'>Home for you</h3>
        some detail<br />
        some detail<br />
        some detail<br />
      <h3 className='sh'>Simlar Homes</h3>
        some detail<br />
        some detail<br />
        some detail<br />
    </div>
  );
}

export default DetailPanel