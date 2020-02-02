import React from 'react';
import { Modal, LineWrapper, ModalCloseButton, ModalTitle, ModalInputWrapper, ModalIcon, ModalTextInput, BlueButton} from './style.jsx'

class ModalCA extends React.Component {
  constructor(props){
    super(props);

    this.state = { name:'', phone:'', email: 'example@gmail.com', message:'I am interested in (address)'};

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    const className = e.target.name
    const newValue = e.target.value;
    this.setState((state) => {
      state[className] = newValue;
      return state;
    });
  }

  render() {
   return (
      <Modal id='summaryModal' w='400px' h='300px'>
        <ModalCloseButton className="material-icons closeIcon" w='400px'>close</ModalCloseButton>
        <ModalTitle>Contact Agent!</ModalTitle>
        <div style={{padding: '10px 20px', overflowY: 'auto'}}>
          <div style={{paddingBottom: '10px'}}>
            <div>ROUND IMG</div>
            <div>
              <div>Seller's Agent</div>
              <div>Venture Real Estate Group</div>

              <div>&#9733;4.9/5 • 70 reviews</div>
              <div>14 Recent sales</div>
              <div>(206) 981-5218</div>
            </div>
          </div>
          <div id="modelInputs">
            <ModalInputWrapper>
              <ModalIcon className="material-icons">person</ModalIcon>
              <ModalTextInput type="text" name='name' onChange={this.handleOnChange} placeholder="Name" value={this.state.name}/>
            </ModalInputWrapper>
            <ModalInputWrapper>
              <ModalIcon className="material-icons">phone</ModalIcon>
              <ModalTextInput type="text" name='phone' onChange={this.handleOnChange} placeholder="Phone" value={this.state.phone}/>
            </ModalInputWrapper>
            <ModalInputWrapper>
              <ModalIcon className="material-icons">mail</ModalIcon>
              <ModalTextInput type="text" name='email' onChange={this.handleOnChange} placeholder="Email" value={this.state.email}/>
            </ModalInputWrapper>
            <input type="text" name='message' onChange={this.handleOnChange} value={this.state.message} style={{}}/>
          </div>
          <BlueButton>Contact Agent</BlueButton>
        </div>
          
      </Modal>
    )
  }
}


export default ModalCA;