import React from 'react';
import PropTypes from 'prop-types';
import { ButtonCA, ButtonTT } from './style.js'


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
    console.log(document);
    // const body 
  }

  render() {
    let modal = <span></span>;
    switch(this.state.modalType) {
      case 1:
        modal = <div>Contact Agent!</div>;
        break;
      case 2:
        modal = <div>Reserve Tour!</div>;
        break;
      default:
        modal = <span></span>;
    }

    let buttons = this.props.tourButton ?
                  (<form>
                    <ButtonCA type="button" tourButton={true} onClick={this.showModalOnclick}>Contact Agent</ButtonCA>
                    <ButtonTT type="button" onClick={this.showModalOnclick}>Take a tour</ButtonTT>
                  </form>) :
                  (<form><ButtonCA type="button" onClick={this.showModalOnclick}>Contact Agent</ButtonCA></form>);
    return (
      <div>
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