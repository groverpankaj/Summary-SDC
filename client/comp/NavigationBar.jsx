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
  font-size: 85%
`;

const StyledArrow = styled.i`
  position: absolute;
  zIndex: 1;
  color: #006aff;
  background-color: white;
  padding-top: 12px;
  font-size: 36px;
  cursor: pointer;
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
                              }`)
  }
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

const NavigationBar = ({ onview, showarrow, scrollOnClick, slideOnClick, showHideOnSlide }) => {
  const renderVal = (
    <div style={{ width: '500px' }}>
      <ContainerToHideScroll>
        <StyledArrow id="leftarrow" 
                      className="material-icons"
                      style={{left: '2px', visibility: `${showarrow.left}`}}
                      onClick={slideOnClick}>
                      chevron_left
        </StyledArrow>
        <StyledArrow id="rightarrow"
                      className="material-icons"
                      style={{ left: '475px', visibility: `${showarrow.right}`}}
                      onClick={slideOnClick}>
                      chevron_right
        </StyledArrow>
        <StyledNavBar id="navbar" onScroll={showHideOnSlide}>
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
