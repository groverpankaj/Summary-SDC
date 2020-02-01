import React from 'react';
import PropTypes from 'prop-types';
import { Container, ContainerToHideScroll, StyledNavBar, StyledArrow, NavTitle } from './style.js'

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

const NavigationBar = React.forwardRef(
  function nv({ onview, showarrow, scrollOnClick, slideOnClick, showHideOnSlide }, ref) {
    return (
      <Container>
        <ContainerToHideScroll>
          <StyledArrow id="leftarrow" 
                      className="material-icons"
                      left="2px"
                      display={showarrow.left}
                      onClick={slideOnClick}>
            chevron_left
          </StyledArrow>
          <StyledArrow id="rightarrow"
                      className="material-icons"
                      left="490px"
                      display={showarrow.right}
                      onClick={slideOnClick}>
            chevron_right
          </StyledArrow>
          <StyledNavBar id="navbar" onScroll={showHideOnSlide} ref={ref}>
            {Object.keys(onview).map((name, ind) => {
              return <NavTitle key={ind} className={name} onClick={scrollOnClick} onview={onview[name]}>{navTitle[ind]}</NavTitle>
            })}
          </StyledNavBar>
        </ContainerToHideScroll>
      </Container>
    );
  }
);

NavigationBar.propTypes = {
  onview: PropTypes.object,
  showarrow: PropTypes.object,
  scrollOnClick: PropTypes.func,
  slideOnClick: PropTypes.func,
  showHideOnSlide: PropTypes.func,
}

export default NavigationBar;
