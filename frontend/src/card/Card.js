import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showEditModal: props.showEditModal
        }

    }

    stopPropagation(e){
        e.stopPropagation()
    }

    render() {
        return (
            <div className="card card-col" key={this.state.id+"_card"}  onClick={this.state.showEditModal}>
                <div className="card-body">
                    <div className="card-action">
                        <h6 className="card-title"  onClick={this.stopPropagation}>
                            {this.props.application.jobTitle}
                        </h6>
                    </div>
                    <p className="small-content-text" key={this.props.application.companyName}>
                        Company Name: {this.props.application.companyName}<br/>
                        Date: {this.props.application.date}
                    </p>
                </div>
            </div>
        );
    }
}

export default Card;