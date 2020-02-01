import React from 'react';
import styled from 'styled-components';

const StyledPopup = styled.div`
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

const BathPopup = React.forwardRef((props, ref) => (
  <StyledPopup ref={ref} />
));

export default BathPopup;
