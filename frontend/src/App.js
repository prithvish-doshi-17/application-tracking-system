import 'bootstrap/dist/css/bootstrap.min.css'
import './static/App.css';

import React from 'react';
import Sidebar from './sidebar/Sidebar'


export default class App extends React.Component {
  // constructor(props){
  //   super(props)
  // };

  loadPage() {

  };

  render() {
    let app = (<div className="main-page">
      <Sidebar />
      <div class="main">
        <div className="content">
          <h1 className="text-center">To Do List</h1>
          <div className="mb-3">
            <span className="btn-icon">
              <button className="btn btn-danger btn-icon"><i className="fas fa-plus"></i>&nbsp;Ajouter</button>
            </span>
          </div>
          <span id="tab">
            <div class="row">
              <div class="col">
                <div class="card card-col">
                  <div class="card-body noPadding">
                    <input type="text" class="text-center title-col form-control-lg" value="Titre 1" />
                  </div>
                </div>
              </div>
              <div class="col"></div>
              <div class="col"></div>
            </div>

            <div class="row">

            </div>
          </span>
        </div>

      </div>
    </div>
    )
    return app;
  }
}
