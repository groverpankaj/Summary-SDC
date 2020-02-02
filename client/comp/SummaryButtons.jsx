// modules
import React from 'react';
import PropTypes from 'prop-types';
// child elements
import ModalCA from './ModalCA.jsx';
import ModalTT from './ModalTT.jsx';
// style
import { WhiteButton, BlueButton } from './style.jsx'


class SummaryButtons extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { modalType: 0 };

    this.caRef = React.createRef();
    this.ttRef = React.createRef();

    this.showModalOnclick = this.showModalOnclick.bind(this);
    this.hideModalOnclick = this.hideModalOnclick.bind(this);
  }

  componentDidMount() {
    let left = (innerWidth - this.caRef.current.clientWidth) / 2;
    let top = (innerHeight - this.caRef.current.clientHeight) / 2;
    this.caRef.current.style.left = `${left}px`;
    this.caRef.current.style.top = `${top}px`;
    this.caRef.current.hidden = true;
    // compute where Take a tour model should apper
    left = (innerWidth - this.ttRef.current.clientWidth) / 2;
    top = (innerHeight - this.ttRef.current.clientHeight) / 2;
    this.ttRef.current.style.left = `${left}px`;
    this.ttRef.current.style.top = `${top}px`;
    this.ttRef.current.hidden = true;
  }

  showModalOnclick(e) {
    if(e.target.innerHTML.startsWith('C')) {
      this.caRef.current.hidden = false;
    } else {
      this.ttRef.current.hidden = false;
    }
    const target = document.getElementById('app');
    target.addEventListener('click', this.hideModalOnclick, {once: true});
  }

  hideModalOnclick(e) {
    if (e.target.classList[3] === "closeIcon") { // close button clicked
      this.caRef.current.hidden = true;
      this.ttRef.current.hidden = true;
    } else if (this.caRef.current.contains(e.target) || this.ttRef.current.contains(e.target)) { // popup other than close button clicked
      // do not hide, but make app part clickable again
      const target = document.getElementById('app');
      target.addEventListener('click', this.hideModalOnclick, {once: true});
    } else { // outside of popup clicked
      this.caRef.current.hidden = true;
      this.ttRef.current.hidden = true;
    }
  }

  render() {
    let buttons = this.props.tourButton ?
                  (<form>
                    <WhiteButton type="button" onClick={this.showModalOnclick}>Contact Agent</WhiteButton>
                    <BlueButton type="button" tourButton onClick={this.showModalOnclick}>Take a tour</BlueButton>
                  </form>) :
                  (<form><BlueButton type="button" onClick={this.showModalOnclick}>Contact Agent</BlueButton></form>);

    return (
      <div id="summaryButtons">
        {buttons}
        <ModalCA caRef={this.caRef}/>
        <ModalTT ttRef={this.ttRef} hideModalOnclick={this.hideModalOnclick}/>
      </div>
    );
  }
}

SummaryButtons.propTypes = {
  tourButton: PropTypes.bool
}

export default SummaryButtons;