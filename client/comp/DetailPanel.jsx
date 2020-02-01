import React from 'react';
import PropTypes from 'prop-types';
import { DP } from './style.js'

// this react element is merely to provide panel in which user can scroll up and down
// the position within this panel is referenced in other modules

const DetailPanel = React.forwardRef(
  function dp(props, ref) {
    return (
      <DP id="detailpanel" ref={ref} onScroll={props.slideOnScroll}>
        <div className="ov">
          <h3>Overview</h3>
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
          <h3>Facts and features</h3>
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
          <h3>Home value</h3>
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
          <h3>Price and tax history</h3>
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
          <h3>Monthly Cost</h3>
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
          <h3>Rental Value</h3>
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
          <h3>Nearby schools</h3>
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
          <h3>Commute time</h3>
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
          <h3>Neighborhood</h3>
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
          <h3>Home for you</h3>
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
          <h3>Simlar Homes</h3>
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
          <h3>Listing provided by</h3>
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
          <h3>Realy Long Footer Here</h3>
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
      </DP>
    );
  }
)

DetailPanel.propTypes = {
  slideOnScroll: PropTypes.func
}

export default DetailPanel;
