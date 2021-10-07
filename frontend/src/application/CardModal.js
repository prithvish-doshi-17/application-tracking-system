import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
export default class CardEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            closeEditModal: props.closeEditModal,
            submitFunc: props.submitFunc,
            id: props.application.id,
            companyName: props.application.companyName,
            date: props.application.date,
            jobTitle: props.application.jobTitle,
            class: props.application.class
        }
    }

    // set data to state automatically corresponding to the attribute 'id' of input field
    // ex: <input id = 'date'> => setState({date: value})
    handleChange(event){
		this.setState({ [event.target.id]: event.target.value });
	}

    submitAction(){
        this.state.closeEditModal()
        let application = {
            id: this.state.id,
            companyName: this.state.companyName,
            jobTitle: this.state.jobTitle,
            date: this.state.date,
            class: this.state.class
        }
        // call parent function to handle data change
        this.state.submitFunc(application)

    }

    render() {

        let function_btn = null
        if (this.props.mode === 'update') {
            function_btn = <button type="button" className="btn btn-success" onClick={this.submitAction.bind(this)}>
                Update
            </button>
        }else{
            function_btn = <button type="button" className="btn btn-success" onClick={this.submitAction.bind(this)}>
                Create
            </button>
        }

        let view = !this.props.application ? <div /> : <div>
            <Modal show={this.props.show} onHide={this.state.closeEditModal}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {this.props.application.companyName}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-group">
                        <label htmlFor="companyName" className="col-form-label">Company Name</label>
                        <input type="text" className="form-control" id="companyName" value={this.state.companyName} onChange={this.handleChange.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="job_title" className="col-form-label">Job Title</label>
                        <input type="text" className="form-control" id="jobTitle" value={this.state.jobTitle} onChange={this.handleChange.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="date" className="col-form-label">Date</label>
                        <input type="date" className="form-control" id="date" value={this.state.date} onChange={this.handleChange.bind(this)}/>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="class">Application Type</label>
                        </div>
                        <select className="custom-select" id="class" value={this.state.class} onChange={this.handleChange.bind(this)}>
                            <option >Choose...</option>
                            <option value="1">Wish list</option>
                            <option value="2">Waiting Referral</option>
                            <option value="3">Applied</option>
                            <option value="4">Rejected</option>
                        </select>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-secondary" onClick={this.state.closeEditModal}>
                        Close
                    </button>
                    {function_btn}
                </Modal.Footer>
            </Modal>
        </div >
        return view
    }
}