import React from 'react';

/* Example for Hiding Vertical Scroll Bar
<div style={{
      height: '500px',
      width: '100%',
      overflow: 'hidden'
    }}>
      <div style={{
        width: '100%',
        height: '99%',
        overflow: 'auto',
        paddingRight: '15px'
      }}>
      </div>
    </div>   
*/

const containerStyle = {
  width: '468px',
  height: '35px',
  overflow: 'hidden',
  margin:'0px 16px',
  borderBottom: '1px solid #D1D1D5'
}
const navbarStyle = {
  display: 'flex',
  overflowX: 'auto',
  overflowY: 'hidden',
  width: '100%',
  height: '60px',
  margin: '0px',
  // paddingBottom: '18px',
};

const spanStyle = {
  flexShrink: '0',
  margin: '0px',
  padding: '3px 6px',
  textAlign: 'center'
};

let NavigationBar = ({pRef, scrollOnClick}) => {
  var renderVal = (
     <div style={{width: '500px'}}>
      <div id='container' style={containerStyle}>  
        <div id='leftarrow' style={{position:'absolute', zIndex:1}}>&lt;</div>
        <div id='rightarrow' style={{position:'absolute', left: '484px', zIndex:1}}>&gt;</div>
        <nav id='navbar' style={navbarStyle}>
          <span className='ov' ref={pRef} style={spanStyle} onClick={scrollOnClick}>Overview</span>
          <span className='ff' style={spanStyle} onClick={scrollOnClick}>Facts and features</span>
          <span className='hv' style={spanStyle} onClick={scrollOnClick}>Home value</span>
          <span className='pth' style={spanStyle} onClick={scrollOnClick}>Price and tax history</span>
          <span className='mc' style={spanStyle} onClick={scrollOnClick}>Monthly Cost</span>
          <span className='rv' style={spanStyle} onClick={scrollOnClick}>Rental Value</span>
          <span className='ns' style={spanStyle} onClick={scrollOnClick}>Nearby schools</span>
          <span className='ct' style={spanStyle} onClick={scrollOnClick}>Commute time</span>
          <span className='nh' style={spanStyle} onClick={scrollOnClick}>Neighborhood</span>
          <span className='hfy' style={spanStyle} onClick={scrollOnClick}>Home for you</span>
          <span className='sh' style={spanStyle} onClick={scrollOnClick}>Simlar Homes</span>
        </nav>
      </div>
    </div>
  );

  return renderVal;
};

export default NavigationBar;