import React, { Component } from 'react';

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

let searchResult = [
    {
        jobTitle: 'Backend Engineer',
        companyName: 'Facebook',
        date: '2021-09-22',
        class: 1,
        id: 0
    }, {
        jobTitle: 'Front-end Engineer',
        companyName: 'Git',
        date: '2021-09-22',
        class: 2,
        id: 1
    }, {
        jobTitle: 'Software Engineer',
        companyName: 'Roblox',
        date: '2021-09-22',
        class: 3,
        id: 2
    }, {
        jobTitle: 'Front-end Engineer',
        companyName: 'Google',
        date: '2021-09-22',
        class: 4,
        id: 3
    }, {
        jobTitle: 'Test Engineer',
        companyName: 'FaceBook',
        date: '2021-09-22',
        class: 1,
        id: 4
    }, {
        jobTitle: 'Software Engineer',
        companyName: 'Roblox',
        date: '2021-09-22',
        class: 1,
        id: 5
    }
]

export default class SearchPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rows: [],
            addedList: []
        }
    }

    search() {
        // let result = []
        this.setState({
            rows: searchResult
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

    addToWaitlist(id) {
        let newAddedList = this.state.addedList
        newAddedList.push(id)
        this.setState({
            addedList: newAddedList
        })
    }

    removeFromWaitlist(id) {
        let newAddedList = this.state.addedList.filter(v => {
            return v !== id
        })
        this.setState({
            addedList: newAddedList
        })
    }


    render() {
        let rows = this.state.rows

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-6 input-group mb-3">
                            <input type="text" className="form-control" placeholder="Keyword" aria-label="Username" aria-describedby="basic-addon1" />
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
                                return <th key={column.id}>{column.label}</th>
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
                                            ? <button type="button" className="btn btn-outline-secondary" onClick={this.removeFromWaitlist.bind(this, row.id)}> Added </button>
                                            : <button type="button" className="btn btn-secondary" onClick={this.addToWaitlist.bind(this, row.id)}> Add </button>
                                        return <td>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        {addButton}
                                                    </div>
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
