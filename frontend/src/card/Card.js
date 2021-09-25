import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            jobTitle: props.application.jobTitle,
            companyName: props.application.companyName,
            date: props.application.date,
            class: props.application.class,
            id: props.application.id,
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
                            {this.state.jobTitle}
                        </h6>
                    </div>
                    <p className="small-content-text">
                        Company Name: {this.state.companyName}<br/>
                        Date: {this.state.date}
                    </p>
                </div>
            </div>
        );
    }
}

export default Card;