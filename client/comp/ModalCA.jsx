import React from 'react';
import { Modal, LineWrapper, ModalCloseButton, ModalTitle, ModalAgentInfoWrapper, ModalInputWrapper, ModalIcon, ModalTextInput, ModalMessageInput, ModalCheckboxWrapper, BlueButton} from './style.jsx'
import AgentInfo from './AgentInfo.jsx';
class ModalCA extends React.Component {
  constructor(props){
    super(props);

    
    this.state = { 
      textInput: {name:'', phone:'', email: 'example@gmail.com', message: 'I am interested in '},
      focus: {name: false, phone: false, email: false, message: false, checkbox: true}
    };

    // bind function
    this.handleOnChange = this.handleOnChange.bind(this);
    this.inputBoxOnFocus = this.inputBoxOnFocus.bind(this);
    this.inputBoxOnBlur = this.inputBoxOnBlur.bind(this);
    this.checkBoxOnClick = this.checkBoxOnClick.bind(this);
  }

  componentDidMount() {
    // get address from summary and add it to message
    const address = document.getElementById('summary_address') ? document.getElementById('summary_address').innerHTML: '(address)';
    const newMsg = this.state.textInput.message + address;
    
    
    // update message
    this.setState((state) =>{
      state.textInput.message = newMsg;
      return state;
    });

    // check the checkbox as intial
    document.getElementsByName('modalCACheckbox')[0].checked = true;
  }


  handleOnChange(e) {
    const className = e.target.name;
    const newValue = e.target.value;

    this.setState((state) => {
      state.textInput[className] = newValue;
      return state;
    });
  }

  inputBoxOnFocus(e){
    const className = e.target.name;

    this.setState((state) => {
      state.focus[className] = true;
      return state;
    });
  }

  inputBoxOnBlur(e){
    const className = e.target.name;

    this.setState((state) => {
      state.focus[className] = false;
      return state;
    });
  }

  checkBoxOnClick(){
    const target = document.getElementsByName('modalCACheckbox');
    
    // check or uncheck the checkbox
    target[0].checked = !target[0].checked;

    // bold or unbold the text next to the checkbox
    this.setState((state) => {
      state.focus.checkbox = !state.focus.checkbox

      return state;
    })
  }

  render() {
    let checkboxFontweight = this.state.focus.checkbox ? 900 : 200;

    return (
      <Modal id='summaryModal' w='600px' h='500px'>
        <ModalCloseButton className="material-icons closeIcon" w='600px'>close</ModalCloseButton>
        <ModalTitle>Contact Agent</ModalTitle>
        <div style={{padding: '10px 20px', height: '400px', textAlgin: 'center', overflowY: 'scroll'}}>
          <div id="modalCA_Left" style={{display: 'inline-block', paddingRight: '10px', width: '45%'}}>
            <div id="modelInputs">
              <ModalInputWrapper focus={this.state.focus.name}>
                <ModalIcon className="material-icons">person</ModalIcon>
                <ModalTextInput type="text" name='name'
                                onChange={this.handleOnChange} onFocus={this.inputBoxOnFocus} onBlur={this.inputBoxOnBlur}
                                placeholder="Name" value={this.state.textInput.name}/>
              </ModalInputWrapper>
              
              <ModalInputWrapper focus={this.state.focus.phone}>
                <ModalIcon className="material-icons">phone</ModalIcon>
                <ModalTextInput type="text" name='phone'
                                onChange={this.handleOnChange} onFocus={this.inputBoxOnFocus} onBlur={this.inputBoxOnBlur}
                                placeholder="Phone" value={this.state.textInput.phone}/>
              </ModalInputWrapper>
              
              <ModalInputWrapper focus={this.state.focus.email}>
                <ModalIcon className="material-icons">mail</ModalIcon>
                <ModalTextInput type="text" name='email'
                                onChange={this.handleOnChange} onFocus={this.inputBoxOnFocus} onBlur={this.inputBoxOnBlur}
                                placeholder="Email" value={this.state.textInput.email}/>
              </ModalInputWrapper>
              <ModalInputWrapper focus={this.state.focus.message} style={{height:'60px'}}>
                <ModalMessageInput name='message' 
                                  onChange={this.handleOnChange} onFocus={this.inputBoxOnFocus} onBlur={this.inputBoxOnBlur}
                                  value={this.state.textInput.message}/>
              </ModalInputWrapper>

              <ModalCheckboxWrapper fontweight={checkboxFontweight}>
                <input type="checkbox" name="modalCACheckbox"/>
                <label onClick={this.checkBoxOnClick}> I want financing information</label>
              </ModalCheckboxWrapper>
              
              
              <BlueButton>Contact Agent</BlueButton>

              <p style={{fontSize: '10px', color: '#6D6D6D'}}>
                By pressing Contact Agent, you agree that Zillow Group and 
                <span style={{textDecoration: 'underline dashed #006aff', cursor: 'pointer'}}>real estate professionals</span> 
                may call/text you about your inquiry, which may involve use of automated means and prerecorded/artificial voices. 
                You don't need to consent as a condition of buying any property, goods or services. Message/data rates may apply. 
                You also agree to our <a href="https://www.zillow.com/corp/Terms.htm">Terms of Use </a>. Zillow does not endorse any 
                real estate professionals.
              </p>
            </div>
          </div>

          <div id="modal_Right" style={{display: 'inline-block', paddingLeft: '10px', width: '45%'}}>
            <AgentInfo agentType={'Seller\'s Agent'} groupname={'1-mypad'} star={1} reviews={1} sales={1} phonenumber={'(415) 268-0355'}/>
            <AgentInfo agentType={'Premier Agent'} groupname={'2-Draftbnb'} star={2} reviews={2} sales={2} phonenumber={'(415) 268-0355'}/>
            <AgentInfo agentType={'Premier Agent'} groupname={'4-The Coding Cadets'} star={4} reviews={4} sales={4} phonenumber={'(415) 268-0355'}/>
            <AgentInfo agentType={'Premier Agent'} groupname={'5-Trippy Advisors'} star={5} reviews={5} sales={5} phonenumber={'(415) 268-0355'}/>
            <a href="#" style={{fontSize: '12px'}}>Learn how to appear as the agent above</a>
          </div>
        </div>
          
      </Modal>
    )
  }
}

export default ModalCA;