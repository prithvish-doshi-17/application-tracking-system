import React, { Component } from 'react';
import Card from './Card';
import CardModal from './CardModal';

let application_list = [
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

export default class CardBoard extends Component {

    constructor(props) {
        super(props);



        let result = this.groupApplication(application_list);
        let card_titles = this.createCardTitle(result);
        let card_class = this.createCardClass(result);
        this.state = {
            applications: application_list, 
            card_titles: card_titles,
            card_class: card_class,
            showModal:false
        }
    }



    updateCardBoard(application){
        let newApplications = this.state.applications
        if (application.id >= newApplications.length){
            newApplications.push(application)
        }else{
            newApplications[application.id] = application
        }
        
        let result = this.groupApplication(newApplications);
        let card_titles = this.createCardTitle(result);
        let card_class = this.createCardClass(result);
        this.setState({
            applications: newApplications, 
            card_titles: card_titles,
            card_class: card_class,
            showModal:false,
            application: null
        })
    }

    showEditModal(application, mode) {
        let modalMode = mode
        if (!application.id)
            application.id = this.state.applications.length
        this.setState({
            showModal: true,
            application: application,
            modalMode: modalMode
        })
    }

    closeEditModal() {
        this.setState({
            showModal: false,
            application: null
        })
    }

    createCardClass(applications_group) {
        return applications_group.reduce((pv, v) => {
            let app_class = <div className="col" key={v.title + "_class"} id={v.title + "_class"}>
                {v.applications.reduce((pv, v) => {
                    let card = <Card application={v} key={v.id} showEditModal={this.showEditModal.bind(this, v, 'update')} />
                    pv.push(card)
                    return pv
                }, [])}
                {/* add function not implement */}
                <div className="card card-col">
                    <div className="card-body new-col" onClick={this.showEditModal.bind(this, {class: v.class}, 'create')}>
                        <i className="fas fa-plus text-center"></i>
                    </div>
                </div>
            </div>
            pv.push(app_class)
            return pv
        }, [])
    }

    createCardTitle(applications_group) {
        return applications_group.reduce((pv, v) => {
            let title = <div className="col" key={v.title + "_title"}>
                <div className="card card-col">
                    <div className="card-body noPadding">
                        <div type="text" className="text-center title-col form-control-lg" >
                            {v.title}
                        </div>
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
        let applicationModal = null
        if (this.state.application){
            applicationModal = <CardModal show={this.state.showModal} submitFunc={this.updateCardBoard.bind(this)}  mode={this.state.modalMode} application={this.state.application} closeEditModal={this.closeEditModal.bind(this)} />
        }
        return (
            <span id="tab">
                <div className="row">
                    {this.state.card_titles}
                </div>
                <div className="row">
                    {this.state.card_class}
                </div>
                {applicationModal}
            </span>
        )
    }
}