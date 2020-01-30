import React from 'react';

let DetailPanel = ({slideOnScroll}) => {
// this react element is merely to provide panel in which user can scroll up and down
// the position within this panel will be referenced in other modules
  return (
    <div id="detailpanel" style={{height: '600px',overflowY: 'scroll'}} onScroll={slideOnScroll}>
      <div className='ov'>Overview</div>
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
        some detail<br />
        some detail<br />
      <div className='ff'>Facts and features</div>
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
      <div className='hv'>Home value</div>
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
      <div className='pth'>Price and tax history</div>
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
      <div className='mc'>Monthly Cost</div>
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
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
      <div className='rv'>Rental Value</div>
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
      <div className='ns'>Nearby schools</div>
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
      <div className='ct'>Commute time</div>
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
      <div className='nh'>Neighborhood</div>
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
      <div className='hfy'>Home for you</div>
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
      <div className='sh'>Simlar Homes</div>
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
        some detail<br />
    </div>
  );
}

export default DetailPanel