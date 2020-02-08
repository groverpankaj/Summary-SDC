import React from 'react';
import PropTypes from 'prop-types';
import { ZestimatePopup, LinkInPopup, PopupCloseButton, PopupIconLineI, PopupIconLineT } from './style.jsx';

const Popup = ({ popupLeft, popupTop, popupWidth, hidePopupOnClick }) => (
  <ZestimatePopup id="zestimatePopup" left={popupLeft} top={popupTop} width={popupWidth} >
    <PopupCloseButton className="material-icons closeIcon" onClick={hidePopupOnClick}>close</PopupCloseButton>

    <p>The Zestimate is Zillow&apos;s best estimate of this home&apos;s market value. It is not an appraisal and it should be used as a starting point. <LinkInPopup href="https://www.zillow.com/zestimate/">Learn more</LinkInPopup>.</p>
    <p>If your facts are wrong, your Zestimate may be incorrect. <LinkInPopup href="#">Update them here</LinkInPopup>.</p>
    <p>The Zestimate incorporates multiple data models and responds to factors like:</p>

    <div className="zpu_iconline">
        <PopupIconLineI className="material-icons">directions_walk</PopupIconLineI>
        <PopupIconLineT>Neighborhood details</PopupIconLineT>
        <PopupIconLineI className="material-icons-outlined">house</PopupIconLineI>
        <PopupIconLineT>Home facts</PopupIconLineT>
    </div>
    <div className="zpu_iconline">
        <PopupIconLineI className="material-icons">visibility</PopupIconLineI>
        <PopupIconLineT>Popularity on Zillow</PopupIconLineT>
        <PopupIconLineI className="material-icons-outlined">calendar_today</PopupIconLineI>
        <PopupIconLineT>Listing price</PopupIconLineT>
    </div>
  </ZestimatePopup>
);

Popup.propTypes = {
  popupLeft: PropTypes.string,
  popupWidth: PropTypes.string,
  hidePopupOnClick: PropTypes.func
}

export default Popup;
