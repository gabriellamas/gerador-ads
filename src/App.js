import React, { Component } from 'react';
import './base.css';
import AdsGenerator from './pages/ads-editor/index'

class App extends Component {
  render() {
    return (
      <div>
        <AdsGenerator/>
      </div>
    );
  }
}

export default App;
