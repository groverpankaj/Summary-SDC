// modules
import React from 'react';
import PropTypes from 'prop-types';
// child elements
import ModalCA from './ModalCA.jsx';
import ModalTT from './ModalTT.jsx';
// style
import { GreyOverlay, WhiteButton, BlueButton } from './style.jsx'


class SummaryButtons extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { modalType: 0 };

    this.showModalOnclick = this.showModalOnclick.bind(this);
    this.hideModalOnclick = this.hideModalOnclick.bind(this);
  }

  showModalOnclick(e) {
    // decide which modal to show 
    const whichModal = e.target.innerHTML.startsWith('C') ? 1 : 2;
    
    //  show modal
    this.setState ({ modalType: whichModal });

    // make other parts of the app clickable
    const target = document.getElementById('app');
    target.addEventListener('click', this.hideModalOnclick, {once: true});
  }

  hideModalOnclick(e) {
    if (e.target.classList[3] === "closeIcon") { // close button clicked
      this.setState ({ modalType: 0 });
    } else if (document.getElementById('summaryModal').contains(e.target)) { // modal other than close button clicked
      // do not hide, but make app part clickable again
      const target = document.getElementById('app');
      target.addEventListener('click', this.hideModalOnclick, {once: true});
    } else { // outside of popup clicked
      this.setState ({ modalType: 0 });
    } 
  }

  render() {
    let buttons = this.props.tourButton ?
                  (<form>
                    <WhiteButton type="button" onClick={this.showModalOnclick}>Contact Agent</WhiteButton>
                    <BlueButton type="button" tourButton onClick={this.showModalOnclick}>Take a tour</BlueButton>
                  </form>) :
                  (<form><BlueButton type="button" onClick={this.showModalOnclick}>Contact Agent</BlueButton></form>);
    let modal;
    switch(this.state.modalType) {
      case 1: 
        modal = (<span>
                  <ModalCA hideModalOnclick={this.hideModalOnclick}/>
                  <GreyOverlay id="greyOverlay"/>
                </span>);
        break;
      case 2:
        modal = (<span>
                  <ModalTT hideModalOnclick={this.hideModalOnclick}/>
                  <GreyOverlay id="greyOverlay" style={{width: innerWidth, height: innerHeight}}/>
                </span>);
        break;
      default:
        modal = <div></div>;
    }

    return (
      <div id="summaryButtons">
        {buttons}
        {modal}
      </div>
    );
  }
}

SummaryButtons.propTypes = {
  tourButton: PropTypes.bool
}

export default SummaryButtons;