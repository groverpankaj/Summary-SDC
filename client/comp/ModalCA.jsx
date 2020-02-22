// modules
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
// child elements
import ModalCAInputs from './ModalCAInputs.jsx';
import AgentInfo from './AgentInfo.jsx';
// style
import { Modal, ModalCloseButton, ModalTitle } from './style.jsx'


// const ModalCA = ({ hideModalOnclick }) => {
//   return (
//     <Modal id='summaryModal' w='600px' h='500px'>
//       <ModalCloseButton className="material-icons closeIcon" w='600px' onClick={hideModalOnclick}>close</ModalCloseButton>

//       <ModalTitle>Contact Agent</ModalTitle>

//       <div style={{padding: '10px 20px', height: '400px', textAlgin: 'center', overflowY: 'scroll'}}>
//         <div id="modalCA_Left" style={{display: 'inline-block', paddingRight: '10px', width: '45%'}}>
//           <ModalCAInputs />
//         </div>

//         <div id="modalCA_Right" style={{display: 'inline-block', paddingLeft: '10px', width: '45%'}}>
//           <AgentInfo agentType={'Seller\'s Agent'} groupname={'1-mypad'} star={1} reviews={1} sales={1} phonenumber={'(415) 268-0355'}/>
//           <AgentInfo agentType={'Premier Agent'} groupname={'2-Draftbnb'} star={2} reviews={2} sales={2} phonenumber={'(415) 268-0355'}/>
//           <AgentInfo agentType={'Premier Agent'} groupname={'4-The Coding Cadets'} star={4} reviews={4} sales={4} phonenumber={'(415) 268-0355'}/>
//           <AgentInfo agentType={'Premier Agent'} groupname={'5-Trippy Advisors'} star={5} reviews={5} sales={5} phonenumber={'(415) 268-0355'}/>
//           <a href="#" style={{fontSize: '12px'}}>Learn how to appear as the agent above</a>
//         </div>
//       </div>
//     </Modal>
//   )
// }

// ModalCA.propTypes = {
//   hideModalOnclick: PropTypes.func
// }

class ModalCA extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      agents: []
    }
  }

  componentDidMount() {
    const id = (window.location.href).match(/\d+$/) | 1;  // get id value from the link
    // if does not exist, get the data with id=1

    axios.get(`/api/summary/agents/${id}`)
      .then((res) => {
        
        let agentsArray = [];

        for(let i = 0; i < res.data.length; i++) {
          if(res.data[i].listingagent) {
            agentsArray.unshift(res.data[i])
          } else {
            agentsArray.push(res.data[i])
          }
        }

        this.setState({
          agents: agentsArray
        }
          // , () => console.log(this.state)
        )
      })


  }

  render() {

    return (
      <Modal id='summaryModal' w='600px' h='500px'>
        <ModalCloseButton className="material-icons closeIcon" w='600px' onClick={this.props.hideModalOnclick}>close</ModalCloseButton>

        <ModalTitle>Contact Agent</ModalTitle>

        <div style={{ padding: '10px 20px', height: '400px', textAlgin: 'center', overflowY: 'scroll' }}>
          <div id="modalCA_Left" style={{ display: 'inline-block', paddingRight: '10px', width: '45%' }}>
            <ModalCAInputs />
          </div>

          <div id="modalCA_Right" style={{ display: 'inline-block', paddingLeft: '10px', width: '45%' }}>
            {
              this.state.agents.map((agent, index) => {
                return (<AgentInfo
                  key = {index}
                  agentType={(agent.listingagent) ? 'Listing Agent' : 'Premium Agent'}
                  groupname={agent.firstname + ' ' + agent.lastname}
                  star={parseFloat(parseFloat(agent.review).toFixed(2))}
                  reviews={parseInt(agent.reviewcount)}
                  sales={agent.recentsale}
                  phonenumber={agent.phoneno}
                  image={agent.image}
                  url={agent.url}
                  />);
              })
            }
            {/* <AgentInfo agentType={'Seller\'s Agent'} groupname={'1-mypad'} star={1} reviews={1} sales={1} phonenumber={'(415) 268-0355'}/>
          <AgentInfo agentType={'Premier Agent'} groupname={'2-Draftbnb'} star={2} reviews={2} sales={2} phonenumber={'(415) 268-0355'}/>
          <AgentInfo agentType={'Premier Agent'} groupname={'4-The Coding Cadets'} star={4} reviews={4} sales={4} phonenumber={'(415) 268-0355'}/>
          <AgentInfo agentType={'Premier Agent'} groupname={'5-Trippy Advisors'} star={5} reviews={5} sales={5} phonenumber={'(415) 268-0355'}/> */}
            <a href="#" style={{ fontSize: '12px' }}>Learn how to appear as the agent above</a>
          </div>
        </div>
      </Modal>
    )


  }
}
// ({ hideModalOnclick }) => {

// }

// ModalCA.propTypes = {
//   hideModalOnclick: PropTypes.func
// }




export default ModalCA;
