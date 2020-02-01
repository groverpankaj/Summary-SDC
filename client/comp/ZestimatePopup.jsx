import React from 'react';
import PropTypes from 'prop-types';
import { ZestimatePopup, LinkInPopup, CloseButton } from './style.js';

const Popup = React.forwardRef(
  function zpp ({ hidePopupOnClick }, ref) {
    return (
      <ZestimatePopup ref={ref}>
        <CloseButton className="material-icons" onClick={hidePopupOnClick}>close</CloseButton>
        <p>The Zestimate is Zillow&apos;s best estimate of this home&apos;s market value. It is not an appraisal and it should be used as a starting point. <LinkInPopup href="https://www.zillow.com/zestimate/">Learn more</LinkInPopup>.</p>
        <p>If your facts are wrong, your Zestimate may be incorrect. <LinkInPopup href="#">Update them here</LinkInPopup>.</p>
        <p>The Zestimate incorporates multiple data models and responds to factors like:</p>
        <div>
          <div><i className="material-icons">directions_walk</i>Neighborhood details</div>
          <div><i className="material-icons-outlined">house</i>Home facts</div>
        </div>
        <div>
          <div><i className="material-icons">visibility</i>Popularity on Zillow</div>
          <div><i className="material-icons-outlined">calendar_today</i>Listing price</div>
        </div>
      </ZestimatePopup>
    )
  }
);

Popup.propTypes = {
  hidePopupOnClick: PropTypes.func
}

export default Popup;
