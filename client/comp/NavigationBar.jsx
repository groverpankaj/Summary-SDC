import React from 'react';
import styled from 'styled-components';

/*
  START: define styled component
*/

// div to hide horizontal scroll bar of navigation bar
const ContainerToHideScroll = styled.div`
  width: 468px;
  height: 35px;
  overflow: hidden;
  margin: 0px 16px;
  border-bottom: 1px solid #D1D1D5;
`;

// div that has scroll bar and contain contents' tiles
const StyledNavBar = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;
  height: 60px;
  margin: 0px;
`;

// span that holds contents' tile string
const NavName = styled.span`
  flex-shrink: 0;
  margin: 0px;
  padding: 3px 6px;
  text-align: center;
`;

/*
  END: define styled component
*/

// <span className='ov' style={spanStyle} onClick={scrollOnClick}>Overview</span>
const NavigationBar = ({ scrollOnClick }) => {
  const renderVal = (
    <div style={{ width: '500px' }}>
      <ContainerToHideScroll>
        <div id="leftarrow" style={{ position: 'absolute', zIndex: 1 }}>&lt;</div>
        <div id="rightarrow" style={{ position: 'absolute', left: '484px', zIndex: 1 }}>&gt;</div>
        <StyledNavBar id="navbar">
          <NavName className="ov" onClick={scrollOnClick}>Overview</NavName>
          <NavName className="ff" onClick={scrollOnClick}>Facts and features</NavName>
          <NavName className="hv" onClick={scrollOnClick}>Home value</NavName>
          <NavName className="pth" onClick={scrollOnClick}>Price and tax history</NavName>
          <NavName className="mc" onClick={scrollOnClick}>Monthly Cost</NavName>
          <NavName className="rv" onClick={scrollOnClick}>Rental Value</NavName>
          <NavName className="ns" onClick={scrollOnClick}>Nearby schools</NavName>
          <NavName className="ct" onClick={scrollOnClick}>Commute time</NavName>
          <NavName className="nh" onClick={scrollOnClick}>Neighborhood</NavName>
          <NavName className="hfy" onClick={scrollOnClick}>Home for you</NavName>
          <NavName className="sh" onClick={scrollOnClick}>Simlar Homes</NavName>
        </StyledNavBar>
      </ContainerToHideScroll>
    </div>
  );

  return renderVal;
};

export default NavigationBar;
