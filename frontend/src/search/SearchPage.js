import React, { Component } from 'react';
import Card from '../application/Card';
import CardModal from '../application/CardModal';

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
    }
]

const searchResult = [
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
    constructor(props){
        super(props)
        this.state={
            rows:[]
        }
    }

    search() {
        // let result = []
        this.setState({
            rows: searchResult
        })
    }

    closeCell() {
        //TODO:
    }

    addToWaitlist() {
        //TODO:
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
                                    return <td key={column.id}>{value}</td>
                                })}
                                &nbsp;&nbsp;&nbsp;
                                <button type="button" className="btn btn-secondary" onClick={this.addToWaitlist(this)}> Add </button>
                                &nbsp;&nbsp;&nbsp;
                                <button type="button" style = {{backgroundColor:'red'}} className="btn btn-secondary" onClick={this.closeCell(this)}> Delete </button>                        
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}
