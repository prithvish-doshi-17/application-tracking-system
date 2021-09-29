import 'bootstrap/dist/css/bootstrap.min.css'
import './static/App.css';

import React from 'react';
import Sidebar from './sidebar/Sidebar'
import ApplicationPage from './application/ApplicationPage'
import SearchPage from './search/SearchPage'


export default class App extends React.Component {
  constructor(props){
    super(props)
    let mapRouter = {
      'SearchPage': <SearchPage/>,
      'ApplicationPage' : <ApplicationPage/>
    }
    this.state ={
      currentPage: <ApplicationPage/>,
      mapRouter: mapRouter
    }
  };

  switchPage(pageName){
    this.setState({
      currentPage: this.state.mapRouter[pageName]
    })
  }

  render() {
    let app = (<div className="main-page">
      <Sidebar switchPage={this.switchPage.bind(this)}/>
      <div className="main">
        <div className="content">
          <h1 className="text-center">My applications</h1>
          <div className="">
            {/* <span className="btn-icon ">
              <button className="btn btn-danger btn-icon"><i className="fas fa-plus"></i>&nbsp;New</button>
            </span> */}
          </div>
          {this.state.currentPage}
        </div>
      </div>
    </div>
    )
    return app;
  }
}
