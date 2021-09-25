import React, { Component } from 'react';
export default class CardEdit extends Component {
    render() {
        return(
            <div className="modal fade" id="exampleModal"  tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                <form>
                                    <div class="form-group">
                                        <label for="company_name" className="col-form-label">Company Name</label>
                                        <input type="text" className="form-control" id="company_name"/>
                                    </div>
                                </form>    
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div className="form-group">
                                    <label for="job_title" class="col-form-label">Job Title</label>
                                    <input type="text" class="form-control" id="job_title"/>
                                </div>
                                    <div className="form-group">
                                    <label for="Date" class="col-form-label">Date</label>
                                    <input type="date" class="form-control" id="Date"/>
                                </div>
                                <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <label className="input-group-text" for="class">Application Type</label>
                                        </div>
                                        <select className="custom-select" id="class">
                                            <option selected>Choose...</option>
                                            <option value="1">Applied</option>
                                            <option value="2">Wish list</option>
                                            <option value="3">Waiting Referral</option>
                                            <option value="3">Rejected</option>
                                        </select>
                                    </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}