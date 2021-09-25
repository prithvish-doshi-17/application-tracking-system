import React, { Component } from 'react';
import Card from './Card';

const application_list = [
    {
        jobTitle: 'Backend Engineer',
        companyName: 'Facebook',
        date: '09/22/21',
        class: 1,
        id: 1
    }, {
        jobTitle: 'Front-end Engineer',
        companyName: 'Git',
        date: '09/22/21',
        class: 2,
        id: 2
    }, {
        jobTitle: 'Software Engineer',
        companyName: 'Roblox',
        date: '09/22/21',
        class: 3,
        id: 3
    }, {
        jobTitle: 'Front-end Engineer',
        companyName: 'Google',
        date: '09/22/21',
        class: 4,
        id: 4
    }, {
        jobTitle: 'Test Engineer',
        companyName: 'FaceBook',
        date: '09/22/21',
        class: 1,
        id: 5
    }, {
        jobTitle: 'Software Engineer',
        companyName: 'Roblox',
        date: '09/22/21',
        class: 1,
        id: 6
    },
]

export default class CardBoard extends Component {

    constructor(props) {
        super(props);



        let result = this.groupApplication(application_list);
        let card_titles = this.createCardTitle(result);
        let card_class = this.createCardClaee(result);
        this.state = {
            card_titles: card_titles,
            card_class: card_class
        }
    }

    createCardClaee(applications) {
        return applications.reduce((pv, v) => {
            let app_class = <div className="col" id={v.title + "_class"}>
                {v.applications.reduce((pv, v) => {
                    let card = <Card application = {v}/>
                    pv.push(card)
                    return pv
                }, [])}
                {/* add function not implement */}
                <div className="card card-col">
                    <div className="card-body new-col">
                        <i className="fas fa-plus text-center"></i>
                    </div>
                </div>
            </div>
            pv.push(app_class)
            return pv
        }, [])
    }

    createCardTitle(applications) {
        return applications.reduce((pv, v) => {
            let title = <div className="col">
                <div className="card card-col">
                    <div className="card-body noPadding">
                        <input type="text" className="text-center title-col form-control-lg" value={v.title} />
                    </div>
                </div>
            </div>
            pv.push(title);
            return pv;
        }, [])
    }

    groupApplication(applications) {
        let result = [
            {
                title: 'Applied',
                applications: [],
                class: 1
            }, {
                title: 'Wait list',
                applications: [],
                class: 2
            }, {
                title: 'Waiting for referral',
                applications: [],
                class: 3
            }, {
                title: 'Rejected',
                applications: [],
                class: 4
            }
        ]
        applications.forEach(app => {
            let app_class = result.find(v => { return v.class === app.class })
            app_class.applications.push(app)
        })
        return result;
    }

    render() {
        return (
            <span id="tab">
                <div className="row">
                    {this.state.card_titles}
                </div>
                <div className="row">
                    {this.state.card_class}
                </div>
            </span>)
    }
}