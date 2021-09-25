import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import '../static/Sidebar.css'
export default class Sidebar extends Component {
    loadPage(){

    }
    render() {
        return (
            <div className="left-nav">
                <div className="left-nav-item">
                    <i className="fas fa-columns left-nav-icon" onClick={this.loadPage.bind(this)}></i>
                    <i className="fas fa-plus left-nav-icon" onClick={this.loadPage.bind(this)}></i>
                    <i className="fas fa-chart-pie left-nav-icon" onClick={this.loadPage.bind(this)}></i>
                </div>
            </div>
        );
    }
}
