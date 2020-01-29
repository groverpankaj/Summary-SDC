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

let NavigationBar = () => {
  var renderVal = (
     <div style={{width: '500px'}}>
      <div id='container' style={containerStyle}>  
        <div id='leftarrow' style={{position:'absolute', zIndex:1}}>&lt;</div>
        <div id='rightarrow' style={{position:'absolute', left: '484px', zIndex:1}}>&gt;</div>
        <nav id='navbar' style={navbarStyle}>
          <span style={spanStyle}>Overview</span>
          <span style={spanStyle}>Facts and features</span>
          <span style={spanStyle}>Home value</span>
          <span style={spanStyle}>Price and tax history</span>
          <span style={spanStyle}>Monthly Cost</span>
          <span style={spanStyle}>Rental Value</span>
          <span style={spanStyle}>Nearby schools</span>
          <span style={spanStyle}>Commute time</span>
          <span style={spanStyle}>Neighborhood</span>
          <span style={spanStyle}>Home for you</span>
          <span style={spanStyle}>Simlar Homes</span>
        </nav>
      </div>
    </div>
  );

  return renderVal;
};

export default NavigationBar;