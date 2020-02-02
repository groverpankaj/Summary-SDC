// modules
import React from 'react';
import PropTypes from 'prop-types';
// child elements
import ModalCA from './ModalCA.jsx';
import ModalTT from './ModalTT.jsx';
// style
import { Grey, WhiteButton, BlueButton } from './style.jsx'


class SummaryButtons extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { modalType: 0 };

    // References
    this.caRef = React.createRef();   // Contact modal
    this.ttRef = React.createRef();   // Take a Tour modal
    this.greyRef = React.createRef();  // div that colors out whole page when modal opens up

    this.showModalOnclick = this.showModalOnclick.bind(this);
    this.hideModalOnclick = this.hideModalOnclick.bind(this);
  }

  componentDidMount() {
    // hide the modal and grey  
    this.greyRef.current.style.display = 'none';
    this.caRef.current.hidden = true;
    this.ttRef.current.hidden = true;
  }

  showModalOnclick(e) {
    // compute the coverage of grey
    this.greyRef.current.style.width = `${innerWidth}px`;
    this.greyRef.current.style.height = `${innerHeight}px`;
    this.greyRef.current.style.display = 'block';


    // decide which modal to show  
    let modalToShow = e.target.innerHTML.startsWith('C') ? this.caRef.current : this.ttRef.current;
        
    //  show modal
    modalToShow.hidden = false;
    
    // set the modal location at center
    modalToShow.style.left = `${(innerWidth - modalToShow.clientWidth) / 2}px`;
    modalToShow.style.top = `${(innerHeight - modalToShow.clientHeight) / 2}px`; 

    // make other parts of the app clickable
    const target = document.getElementById('app');
    target.addEventListener('click', this.hideModalOnclick, {once: true});
  }

  hideModalOnclick(e) {
    if (e.target.classList[3] === "closeIcon") { // close button clicked
      this.caRef.current.hidden = true;
      this.ttRef.current.hidden = true;
      this.greyRef.current.style.display = 'none';
    } else if (this.caRef.current.contains(e.target) || this.ttRef.current.contains(e.target)) { // popup other than close button clicked
      // do not hide, but make app part clickable again
      const target = document.getElementById('app');
      target.addEventListener('click', this.hideModalOnclick, {once: true});
    } else { // outside of popup clicked
      this.caRef.current.hidden = true;
      this.ttRef.current.hidden = true;
      this.greyRef.current.style.display = 'none';
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
        <Grey ref={this.greyRef} />
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