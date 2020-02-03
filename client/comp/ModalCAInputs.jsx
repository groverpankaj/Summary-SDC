import React from 'react';
import { ModalInputWrapper, ModalIcon, ModalTextInput, ModalMessageInput, ModalCheckboxWrapper, BlueButton} from './style.jsx'

class ModalCAInputs extends React.Component {
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


  handleOnChange(e) { // handle changes within input text tags
    const className = e.target.name;
    const newValue = e.target.value;

    this.setState((state) => {
      state.textInput[className] = newValue;
      return state;
    });
  }

  inputBoxOnFocus(e){ // highlight box that contains both icon and  input text not input text
    const className = e.target.name;

    this.setState((state) => {
      state.focus[className] = true;
      return state;
    });
  }

  inputBoxOnBlur(e){ // unhighlight box that contains both icon and input text
    const className = e.target.name;

    this.setState((state) => {
      state.focus[className] = false;
      return state;
    });
  }

  checkBoxOnClick(){ // make text next to checkbox also clickable
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
      <div id="modelCAInputs">
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
          By pressing Contact Agent, you agree that Zillow Group and &nbsp;
          <span style={{textDecoration: 'underline dashed #006aff', cursor: 'pointer'}}>real estate professionals</span> &nbsp;
          may call/text you about your inquiry, which may involve use of automated means and prerecorded/artificial voices. 
          You don&#39;t need to consent as a condition of buying any property, goods or services. Message/data rates may apply. 
          You also agree to our <a href="https://www.zillow.com/corp/Terms.htm">Terms of Use </a>. Zillow does not endorse any 
          real estate professionals.
        </p>
      </div>
    )
  }
}

export default ModalCAInputs;
