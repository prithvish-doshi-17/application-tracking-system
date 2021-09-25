import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
export default class CardEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            closeEditModal: props.closeEditModal
        }
    }

    render() {
        
        let view = !this.props.application ? <div /> : <div>
            <Modal show={this.props.show} onHide={this.state.closeEditModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.application.companyName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-group">
                        <label htmlFor="job_title" className="col-form-label">Job Title</label>
                        <input type="text" className="form-control" id="job_title" defaultValue={this.props.application.jobTitle}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Date" className="col-form-label">Date</label>
                        <input type="date" className="form-control" id="Date" defaultValue={this.props.application.date}/>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="class">Application Type</label>
                        </div>
                        <select className="custom-select" id="class" defaultValue={this.props.application.class}>
                            <option >Choose...</option>
                            <option value="1">Applied</option>
                            <option value="2">Wish list</option>
                            <option value="3">Waiting Referral</option>
                            <option value="3">Rejected</option>
                        </select>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-secondary" onClick={this.state.closeEditModal}>
                        Close
                    </button>
                    <button type="button" className="btn btn-success" onClick={this.state.closeEditModal}>
                        Save Changes
                    </button>
                </Modal.Footer>
            </Modal>
        </div >
        return view
        // <div className="modal fade" id="exampleModal"  tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        //     <div className="modal-dialog" role="document">
        //         <div className="modal-content">
        //             <div className="modal-header">
        //                 <h5 className="modal-title" id="exampleModalLabel">
        //                     <form>
        //                         <div className="form-group">
        //                             <label htmlFor="company_name" className="col-form-label">Company Name</label>
        //                             <input type="text" className="form-control" id="company_name"/>
        //                         </div>
        //                     </form>    
        //                 </h5>
        //                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        //                     <span aria-hidden="true">&times;</span>
        //                 </button>
        //             </div>
        //             <div className="modal-body">

        //             </div>
        //             <div className="modal-footer">
        //                 <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        //                 <button type="button" className="btn btn-primary">Save</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    }
}