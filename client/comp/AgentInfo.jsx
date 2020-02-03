import React from 'react';
import PropTypes from 'prop-types';
import { ModalAgentInfoWrapper } from './style.jsx'

const AgentInfo = ({agentType, groupname, star, reviews, sales, phonenumber}) => (
  <div style={{paddingBottom: '10px'}}>
    <input type="radio" name='contactAgent' style={{display: 'inline-block', position: 'relative', top: '-30px'}}/>
    <img src="Sam_Deuter.jpg" width="70" height="70" style={{display: 'inline-block', marginLeft: '10px', borderRadius: '50%'}}/>
    <ModalAgentInfoWrapper>
      <div style={{color: '#6D6D6D'}}>{agentType}</div>
      <a href="#">{groupname}</a>
      <div><span style={{color: '#3dca5a'}}>&#9733;</span> {star}/5 • <a href="#">{reviews} reviews</a></div>
      <div>{sales} Recent sales</div>
      <div>{phonenumber}</div>
    </ModalAgentInfoWrapper>
  </div>
);

AgentInfo.propTypes = {
  agentType: PropTypes.string,
  groupname: PropTypes.string,
  star: PropTypes.number,
  reviews: PropTypes.number,
  sales: PropTypes.number,
  phonenumber: PropTypes.string
}

export default AgentInfo;