import React, { Component } from 'react';
import $ from 'jquery'

const columns = [
    {
        label: 'Company Name',
        id: 'companyName'
    }, {
        label: 'Job tilte',
        id: 'jobTitle'
    }, {
        label: 'Date',
        id: 'date'
    }, {
        label: '',
        id: 'func'
    }
]

export default class SearchPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: '',
            rows: [],
            addedList: []
        }
    }

    search() {
        if (!this.state.searchText) {
            alert("Search bar cannot be empty!!")
            return
        }
        $.ajax({
            url: 'http://localhost:5000/search',
            method: 'get',
            data: {
                keywords: this.state.searchText
            },
            contentType: 'application/json',
            success: (data) => {
                let res = data.map((d, i) => {
                    return {
                        id: i,
                        jobTitle: d.jobTitle,
                        companyName: d.companyName,
                        location: d.location
                    }
                });
                this.setState({
                    rows: res
                });
            }
        })
    }



    deleteTheApplication(id) {
        let newRows = this.state.rows.filter(app => {
            return app.id !== id
        })
        let newAddedList = this.state.addedList.filter(app => {
            return app.id !== id
        })
        this.setState({
            rows: newRows,
            addedList: newAddedList
        })
    }

    addToWaitlist(job) {
        let newAddedList = this.state.addedList
        newAddedList.push(job.id)
        this.getNewId().done((newID=>{
            let newApplication = {
                id: newID,
                jobTitle: job.jobTitle,
                companyName: job.companyName,
                date: job.date,
                class: '1'
            };
            $.ajax({
                url: 'http://localhost:5000/application',
                method: 'POST',
                data:JSON.stringify({
                    application: newApplication
                }),
                contentType: 'application/json',
                success: (msg)=>{
                    alert(msg);
                }
            })
        }))
        this.setState({
            addedList: newAddedList
        })
    }

    getNewId() {
        return $.ajax({
            async: false,
            url: 'http://localhost:5000/getNewId',
            method: 'GET'
        })
    }

    removeFromWaitlist(job) {
        let newAddedList = this.state.addedList.filter(v => {
            return v !== job.id
        })
        this.setState({
            addedList: newAddedList
        })
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    render() {
        let rows = this.state.rows

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-6 input-group mb-3">
                            <input type="text" id="searchText" className="form-control" placeholder="Keyword" aria-label="Username" aria-describedby="basic-addon1" value={this.state.searchText} onChange={this.handleChange.bind(this)} />
                        </div>
                        <div>
                            <button type="button" className="btn btn-secondary" onClick={this.search.bind(this)}>Search</button>
                        </div>
                    </div>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            {columns.map(column => {
                                return <th key={column.id + '_th'}>{column.label}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(row => {
                            return <tr key={row.id}>
                                {columns.map(column => {
                                    const value = row[column.id];
                                    if (column.id !== 'func') {
                                        return <td key={column.id}>{value}</td>
                                    } else {
                                        let addButton = this.state.addedList.includes(row.id)
                                            ? <button type="button" className="btn btn-outline-secondary" onClick={this.removeFromWaitlist.bind(this, row)}> Added </button>
                                            : <button type="button" className="btn btn-secondary" onClick={this.addToWaitlist.bind(this, row)}> Add </button>
                                        return <td key={row.id + '_func'}>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        {addButton}
                                                    </div>
                                                    &nbsp;&nbsp;
                                                    <div className="col-md-2">
                                                        <button type="button" style={{ backgroundColor: 'red' }} className="btn btn-secondary" onClick={this.deleteTheApplication.bind(this, row.id)}> Delete </button>
                                                    </div>
                                                </div>
                                            </div>


                                        </td>
                                    }

                                })}

                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}
