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

export const Zestimate = styled.span`
  cursor: pointer;
  padding-bottom: 2px;
  border-bottom: 1px dashed #CCCCCC;
  font-weight: bold;
`;

/* Line 3 - Style within Popups  */
export const ZestimatePopup = styled.div`
  position: absolute;
  top: 0px;
  z-index: 1;
  padding: 0px 8px 5px 6px;
  border-radius: 6px;
  background-color: #3f3f47;
  color: #ffffff;

  &::before{
    content: "";
    position: absolute;
    top: 30%;
    left: -20px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent #3f3f47 transparent transparent ;
  }
`;

export const LinkInPopup = styled.a`
  &:link{
    color: #0662E6;
    text-decoration: none;
  }

  &:visited{
    color: #6F43C0;
  }

  &:hover{
    color: #5389C3;
    text-decoration: underline;
  }
`;
// (link and visited), hover, active

export const PopupCloseButton = styled.i`
  position: absolute;
  right: 0px;
  top: 0px;

  &:hover{
    cursor: pointer;
    color: #5389C3;
  }
`;

export const PopupIconLineI = styled.i`
  display: inline-block;

  width: 10%;
`;

export const PopupIconLineT = styled.span`
  display: inline-block;
  width: 40%;
`;

/*  Summary Line 4  */
export const DollarIconWrapper = styled.span`
  position: relative;
  top: 7px;
  padding: 0px 6px;
  font-size: 24px;
  color: #0074e4;
`;

export const PreQualLink = styled.a`
  cursor: pointer;
  color: #0074e4;
  font-weight: bold;
  text-decoration: none;
`;

/*  Summary Buttons  */
export const BlueButton = styled.button`
  margin-right: ${props => props.tourButton ? '8px' : '0px'};
  border: 1px solid #006aff;
  border-radius: 3px;
  width: ${props => props.tourButton ? '48%' : '100%'};
  height: 40px;
  background-color: #006aff;
  color: #ffffff;
  font-size: 15px;

  &:hover{
    border: 1px solid #3f8fff;
    background-color: #ffffff;
    color: #006aff;
  }
`;

export const WhiteButton = styled.button`
  margin-right: 8px;
  border: 1px solid #aaaaaa;
  border-radius: 3px;
  width: 48%;
  height: 40px;
  background-color: #ffffff;
  color: #006aff;
  font-size: 15px;

  &:hover{
    border-color: #3f8fff;
  }
`;

/*  Modal of Summary Buttons  */
// common
export const Modal = styled.div`
  position: absolute;
  z-index: 2;
  width: ${props => props.w ? props.w : '300px'};
  height: ${props => props.h ? props.h : '400px'};
  padding: 8px 0px;
  border: 1px solid #000000;
  border-radius: 10px;
  background-color: #ffffff;
`;

export const ModalCloseButton = styled.i`
  position: relative;
  left: ${props => props.w ? 
                  (parseInt(props.w.substring(0,props.w.length-2))-24).toString()+'px'
                  : '276px'};
  font-size: 24px;
  color: #535353;

  &:hover{
    cursor: pointer;
    background-color: #f1f1f1;
    border-radius: 50%;
  }
`;

export const ModalTitle = styled.div`
  padding-bottom: 15px;
  width: 100%;
  border-bottom: 1px solid #f1f1f1;
  font-size: 16px;
  fontWeight: bold;
  text-align: center;
`;

export const ModalInputWrapper = styled.div`
  margin-bottom: 10px;
  border: 1px solid #f1f1f1;
  height: 30px;

  &:hover{
    border: 1px solid #3f8fff;
  }
  &:focus{
    border: 1px solid #3f8fff;
  }
`;

// Contact Agent 
export const ModalIcon = styled.i`
  padding: 5px 6px 0px 5px;
`;

export const ModalTextInput = styled.input`
  position: relative;
  top: -9px;
  width: 217px;
  height: 27px;
  outline: none;
  border: none;
`;


// Take a Tour
export const ArrowButton = styled.button`
  box-sizing: border-box;
  position: relative;
  top: 20px;
  width: 12.5%;
  height: 80px;
  background-color: white;
  color: ${props => props.canmove ? '#006aff' : '#bfd9fe'};
  border: none;
`;

export const DateButton = styled.button`
  margin-right: 2%;
  margin-left: 2%;
  width: 21%;
  height: 85px;
  background-color: ${props => props.clicked? '#f2faff': '#ffffff'};
  border: ${props => props.clicked? '2px solid #006aff': '1px solid #a7A7a7'};
  border-radius: 3px;
  color: #006aff;

  &:hover{
    border: ${props => props.clicked? '2px solid #006aff': '1px solid #006aff'};
  }
`;

export const DateButtonDay = styled.p`
  font-size: 14px;
  font-weight: bold;
`;

export const DateButtonDate = styled.p`
  font-size: 12px;
`;

export const StyledSelect = styled.select`
  margin-top: 20px;
  margin-right: 10%;
  margin-bottom: 20px;
  margin-left: 10%;
  width: 80%;
`;
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
  position: absolute;
  left: ${props => props.left};
  zIndex: 1;
  color: #006aff;
  background-color: white;
  padding-top: 17px;
  font-size: 24px;
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