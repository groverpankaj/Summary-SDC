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
    this.showModalOnclick = this.showModalOnclick.bind(this);
  }

  showModalOnclick(e) {
    if(e.target.innerHTML.startsWith('C')) {
      this.setState({ modalType: 1 });
    } else {
      this.setState({ modalType: 2 });
    }
    // console.log(document);
    // const body 
  }

  render() {
    let buttons = this.props.tourButton ?
                  (<form>
                    <WhiteButton type="button" onClick={this.showModalOnclick}>Contact Agent</WhiteButton>
                    <BlueButton type="button" tourButton onClick={this.showModalOnclick}>Take a tour</BlueButton>
                  </form>) :
                  (<form><BlueButton type="button" onClick={this.showModalOnclick}>Contact Agent</BlueButton></form>);

    let modal = <span></span>;
    switch(this.state.modalType) {
      case 1:
        modal = <ModalCA />;
        break;
      case 2:
        modal = <ModalTT />;
        break;
      default:
        modal = <span></span>;
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