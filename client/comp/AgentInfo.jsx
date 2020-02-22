import React from 'react';
import PropTypes from 'prop-types';
import { ModalAgentInfoWrapper } from './style.jsx'


const AgentInfo = ({ agentType, groupname, star, reviews, sales, phonenumber, image, url }) => { 
  
  // image = `https://zillow-sdc.s3-us-west-1.amazonaws.com/${image}.jpg`;
  image = `/agent-images/${image}.jpg`;
  let profileurl =  '/profile/' + url;
  let reviewurl = '/reviews/' + url;
  
return(
  <div style={{paddingBottom: '10px'}}>
    <input type="radio" name='contactAgent' style={{display: 'inline-block', position: 'relative', top: '-30px'}}/>

    <img src={image} width="70" height="70" style={{display: 'inline-block', marginLeft: '10px', borderRadius: '50%'}}/>
    
    <ModalAgentInfoWrapper>
      <div style={{color: '#6D6D6D'}}>{agentType}</div>
      <a href={profileurl}>{groupname}</a>
      <div><span style={{color: '#3dca5a'}}>&#9733;</span> {star}/5 • <a href={reviewurl}>{reviews} reviews</a></div>
      <div>{sales} Recent sales</div>
      <div>{phonenumber}</div>
    </ModalAgentInfoWrapper>
  </div>
)
};

// https://zillow-sdc.s3-us-west-1.amazonaws.com/16.jpg

AgentInfo.propTypes = {
  agentType: PropTypes.string,
  groupname: PropTypes.string,
  star: PropTypes.number,
  reviews: PropTypes.number,
  sales: PropTypes.number,
  phonenumber: PropTypes.string
}

export default AgentInfo;