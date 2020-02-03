// modules
import React from 'react';
import PropTypes from 'prop-types';
// child elements
import ModalCAInputs from './ModalCAInputs.jsx';
import AgentInfo from './AgentInfo.jsx';
// style
import { Modal, ModalCloseButton, ModalTitle} from './style.jsx'

const ModalCA = ({ hideModalOnclick }) => {
  return (
    <Modal id='summaryModal' w='600px' h='500px'>
      <ModalCloseButton className="material-icons closeIcon" w='600px' onClick={hideModalOnclick}>close</ModalCloseButton>

      <ModalTitle>Contact Agent</ModalTitle>

      <div style={{padding: '10px 20px', height: '400px', textAlgin: 'center', overflowY: 'scroll'}}>
        <div id="modalCA_Left" style={{display: 'inline-block', paddingRight: '10px', width: '45%'}}>
          <ModalCAInputs />
        </div>
        
        <div id="modalCA_Right" style={{display: 'inline-block', paddingLeft: '10px', width: '45%'}}>
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

ModalCA.propTypes = {
  hideModalOnclick: PropTypes.func
}

export default ModalCA;
