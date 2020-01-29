import React from 'react';
import sample from '../sample/sample.js'
import Summary from './Summary.jsx';
import NavigationBar from './NavigationBar.jsx';

var App = (props) =>{
  return (
    <div id="main_panel">
      <Summary property={sample[0]}/>
      <NavigationBar />
      <div>Detail Panel</div>
    </div>
  )
}

export default App