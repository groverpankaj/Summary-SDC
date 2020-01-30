import React from 'react';
import $ from 'jquery';
import sample from '../sample/sample.js'
import Summary from './Summary.jsx';
import NavigationBar from './NavigationBar.jsx';
import DetailPanel from './DetailPanel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.pRef = React.createRef();
  }

  scrollOnClick(e) {
    var scrollToClass = e.target.className;
    // console.log(typeof this.pRef.current);
    // window.scrollTo(0,150);
    // console.log(scrollToClass)
    var offset = $(`h3.${scrollToClass}`)[0].offsetTop - $('#detailpanel').offset().top;
    $('#detailpanel')[0].scrollTo({left: 0, top: offset, behavior: 'smooth'});
  }

  render() {
    return (
      <div style={{overflow:'hidden'}}>
        <Summary property={sample[0]}/>
        <NavigationBar pRef={this.pRef}scrollOnClick={this.scrollOnClick.bind(this)}/>
        <DetailPanel />
      </div>
    )
  }
}

export default App