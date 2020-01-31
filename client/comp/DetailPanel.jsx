import React from 'react';
import styled from 'styled-components';

// this react element is merely to provide panel in which user can scroll up and down
// the position within this panel will be referenced in other modules

const DivDP = styled.div`
  height: 400px;
  overflow-y: scroll;
  scroll-behavior: smooth;
`;

const DetailPanel = ({ slideOnScroll }) => (
  <DivDP id="detailpanel" onScroll={slideOnScroll}>
    <div className="ov">
      <h5>Overview</h5>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
    </div>
    <div className="ff">
      <h5>Facts and features</h5>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
    </div>
    <div className="hv">
      <h5>Home value</h5>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
    </div>
    <div className="pth">
      <h5>Price and tax history</h5>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
    </div>
    <div className="mc">
      <h5>Monthly Cost</h5>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
    </div>
    <div className="rv">
      <h5>Rental Value</h5>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
    </div>
    <div className="ns">
      <h5>Nearby schools</h5>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
    </div>
    <div className="ct">
      <h5>Commute time</h5>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
    </div>
    <div className="nh">
      <h5>Neighborhood</h5>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
    </div>
    <div className="hfy">
      <h5>Home for you</h5>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
    </div>
    <div className="sh">
      <h5>Simlar Homes</h5>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
    </div>
    <div className="lpb">
      <h5>Listing provided by</h5>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
    </div>
    <div >
      <h5>Realy Long Footer Here</h5>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
      some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
        some detail
      <br/>
    </div>
  </DivDP>
);

export default DetailPanel;
