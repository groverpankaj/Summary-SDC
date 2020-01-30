import React from 'react';
import styled from 'styled-components';

/*
  START: define styled component
*/

const hControl = 55; // variable to controll height of navigation bar

// div to hide horizontal scroll bar of navigation bar
const ContainerToHideScroll = styled.div`
  width: 468px;
  height: ${hControl}px;
  overflow: hidden;
  margin: 0px 10px;
  border-top: 1px solid #D1D1D5;
  border-bottom: 1px solid #D1D1D5;

`;

// div that has scroll bar and contain contents' tiles
const StyledNavBar = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;
  height: ${hControl+15}px;
  margin: 0px;
  scroll-behavior: smooth;
  font-family: "Open Sans",Gotham,gotham,Tahoma,Geneva,sans-serif;
  font-size: 85%
`;

const StyledArrow = styled.i`
  position: absolute;
  zIndex: 1;
  color: #006aff;
  background-color: white;
  padding-top: 12px;
  font-size: 30px;
  visibility: ${props => (props.visible? 'visible': 'hidden')};
`;

// span that holds contents' tile string
const NavTitle = styled.span`
  flex-shrink: 0;
  margin: 0px;
  padding: ${hControl/3}px 15px 3px 15px;
  text-align: center;
  cursor: pointer;
  ${props => (props.onview ? `color: #006aff;
                              border-bottom: 3px solid #006aff;`
                            :`&:hover {
                              color: #cfe6fd;
                              }`
              )}
`;

/*
  END: define styled component
*/

const navTitle = [ // array that holds string value of title, used to render titles on navigation bar with the use of map
      'Overview', 
      'Facts and feature',
      'Home value', 'Price and tax history',
      'Monthly Cost',
      'Rental Value',
      'Nearby schools',
      'Commute time',
      'Neighborhood',
      'Home for you',
      'Similar Homes'
    ];

        // <div id="leftarrow" style={}>&lt;</div>
        // <i id="leftarrow" className="material-icons" style={{ position: 'absolute', zIndex: 1 }}>keyboard_arrow_left</i>
        // <div id="rightarrow" style={{ position: 'absolute', left: '484px', zIndex: -1 }}>&gt;</div>
const NavigationBar = ({ onview, scrollOnClick }) => {
  const renderVal = (
    <div style={{ width: '500px' }}>
      <ContainerToHideScroll>
        <StyledArrow id="leftarrow" className="material-icons" visible={true} style={{left: '10px'}}>keyboard_arrow_left</StyledArrow>
        <StyledArrow id="rightarrow"
                      className="material-icons"
                      style={{ left: '470px' }}
                      visible={true}>
                      keyboard_arrow_right
        </StyledArrow>
        <StyledNavBar id="navbar">
          {Object.keys(onview).map((name, ind) => {
            return <NavTitle key={ind} className={name} onClick={scrollOnClick} onview={onview[name]}>{navTitle[ind]}</NavTitle>
          })}
          
        </StyledNavBar>
      </ContainerToHideScroll>
    </div>
  );

  return renderVal;
};

export default NavigationBar;
