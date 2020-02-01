import styled from 'styled-components';

/*  App  */
export const StyledApp = styled.div`
  font-family: 'Open Sans', sans-serif;
  overflow: hidden;
`;

/*
  START: Style for Summary module
*/
export const SummaryWrapper = styled.div`
  box-sizing: border-box;
  width: 500px;
  padding: 10px 8px;
  border-top: 1px solid #D1D1D1;
  border-bottom: 1px solid #D1D1D1;
`;

/*  Common  */
export const LineWrapper = styled.div`
  padding: 2px 0px;
  font-size: ${props => props.fontsize};
`;

export const Vdivider = styled.span`
  margin: 0px 9px;
  border-right: 1px solid #d1d1d5;
`;

/*  Summary Line 1  */
export const Price = styled.span`
  font-size: 28px;
  font-weight: bold;
  padding-right: 20px;
`;

export const Bath = styled.span`
  cursor: help;
  padding-bottom: 2px;
  border-bottom: 1px dashed #CCCCCC;
`;

export const BathPopup = styled.div`
  background-color: #ffffff;
  text-align: center;
  padding: 10px 15px;
  border-radius: 3px;
  position: absolute;
  z-index: 1;
  box-shadow: 1px 2px 5px grey;

  &::before{
    content: "";
    position: absolute;
    top: -10px;
    left: 50%;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #e0e0e0 transparent;
  }
`;

/*  Summary Line 3  */
export const SaleStatus = styled.span`
  &::before{
    display:inline-block;
    margin-right: 8px;
    border-radius: 50%;
    background-color: ${props => props.status === 'For sale' ? '#ff594f' : 
                                props.status === 'For rent' ? '#975cff' : '#ffd237'};
    width: 10px;
    height: 10px;
    content: "";
  }
`;

/*  Summary Line 4  */
export const Zestimate = styled.span`
  cursor: pointer;
  padding-bottom: 2px;
  border-bottom: 1px dashed #CCCCCC;
  font-weight: bold;
`;

export const DollarIconWrapper = styled.span`
  position: relative;
  top: 7px;
  padding: 0px 6px;
  font-size: 24px;
  color: #0074e4;
`;

/*  Summary Buttons 3  */
export const ButtonCA = styled.button`
  margin-right: ${props => props.tourButton ? '8px' : '0px'};
  border: 1px solid #aaaaaa;
  border-radius: 3px;
  width: ${props => props.tourButton ? '48%' : '100%'};
  height: 40px;
  background-color: #ffffff;
  color: #006aff;
  font-size: 15px;

  &:hover{
    border-color: #3f8fff;
  }
`

export const ButtonTT = styled.button`
  margin-left: 8x;
  border: 1px solid #006aff;
  border-radius: 3px;
  width: 48%;
  height: 40px;
  background-color: #006aff;
  color: #ffffff;
  font-size: 15px;

  &:hover{
    border: 1px solid #3f8fff;
    background-color: #ffffff;
    color: #006aff;
  }
`
/*
  END: Style for Summary module
*/

/*
  START: Style for Navigation Bar
*/

const hControl = 55; // variable to controll height of navigation bar

//  Container for all subparts of Navigation Bar
export const Container = styled.div`
  box-sizing: border-box;
  border-bottom: 1px solid #D1D1D1;
  width: 500px;
`;

// div to hide horizontal scroll bar of navigation bar
export const ContainerToHideScroll = styled.div`
  height: ${hControl}px;
  overflow: hidden;
  margin: 0px 10px;
`;

// div that has scroll bar and contain contents' tiles
export const StyledNavBar = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;
  height: ${hControl+15}px;
  margin: 0px;
  scroll-behavior: smooth;
  font-size: 85%
`;

export const StyledArrow = styled.i`
  display: ${props => props.display};
  position: absolute;
  left: ${props => props.left};
  zIndex: 1;
  color: #006aff;
  background-color: white;
  padding-top: 12px;
  font-size: 36px;
  cursor: pointer;
`;

// span that holds contents' title string
export const NavTitle = styled.span`
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
  END: Style for Navigation Bar
*/

/*  Detail Panel  */
export const DP = styled.div`
  height: 300px;
  overflow-y: scroll;
  scroll-behavior: smooth;
`;