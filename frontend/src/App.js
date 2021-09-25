import 'bootstrap/dist/css/bootstrap.min.css'
import './static/App.css';

import React from 'react';
import Sidebar from './sidebar/Sidebar'
import CardBoard from './card/CardBoard'


export default class App extends React.Component {
  // constructor(props){
  //   super(props)
  // };

  loadPage() {

  };

  render() {
    let app = (<div className="main-page">
      <Sidebar />
      <div className="main">
        <div className="content">
          <h1 className="text-center">My applications</h1>
          <div className="">
            <span className="btn-icon ">
              <button className="btn btn-danger btn-icon"><i className="fas fa-plus"></i>&nbsp;New</button>
            </span>
          </div>
          <CardBoard/>
        </div>

      </div>
    </div>
    )
    return app;
  }
}
