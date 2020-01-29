import React from 'react';
import sample from '../sample/sample.js'
import Summary from './Summary.jsx';

var MainPanel = (props) =>{
  return (
    <div id="main_panel">
      <Summary property={sample[0]}/>
      <div>Navgiation Bar</div>
      <div>Detail Panel</div>
    </div>
  )
}

export default MainPanel