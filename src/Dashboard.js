import React, { Component } from 'react';
import Data from './Data';
import axios from 'axios';
import './dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super();
        this.state = {
            globaldeaths: '',
            globalnewcases: '',
            globalnewdeaths: '',
            globalrecovered: '',
            globaltotal: '',
            localdeaths: '',
            localactivecases: '',
            localnewdeaths: '',
            localrecovered: '',
            localtotal: '',
            localsuspected:''
        }

    }

    async componentDidMount() {
        axios.get('https://hpb.health.gov.lk/api/get-current-statistical')
            .then(res => {
                this.setState({
                    globaldeaths: res.data.data.global_deaths,
                    globalnewcases: res.data.data.global_new_cases,
                    globalnewdeaths: res.data.data.global_new_deaths,
                    globalrecovered: res.data.data.global_recovered,
                    globaltotal: res.data.data.global_total_cases,

                    localdeaths: res.data.data.local_deaths,
                    localactivecases: res.data.data.local_active_cases,
                    localnewdeaths: res.data.data.global_new_deaths,
                    localrecovered: res.data.data.local_recovered,
                    localtotal: res.data.data.local_total_cases,
                    localsuspected:res.data.data.local_total_number_of_individuals_in_hospitals
                })
                // console.log(res.data.data);
            })
    }
    render() {
        return (
            <div>
                <fieldset>
                    <legend>Local Covid 19</legend>

                    <div className="row">
                        <div className="col-md-2">
                            <Data title={"Local Deaths"} value={this.state.localdeaths} />
                        </div>
                        <div className="col-md-2">
                            <Data title={"Local Active Cases"} value={this.state.localactivecases} />
                        </div>
                        <div className="col-md-2">
                            <Data title={"Local new Deaths"} value={this.state.localnewdeaths} />
                        </div>
                        <div className="col-md-2">
                            <Data title={"Local Recovered"} value={this.state.localrecovered} />
                        </div>
                        <div className="col-md-2">
                            <Data title={"Local Total"} value={this.state.localtotal} />
                        </div>
                        <div className="col-md-2">
                            <Data title={"Local Suspects in hospital"} value={this.state.localsuspected} />
                        </div>
                    </div>
                </fieldset>
                <br/><br/>
                <fieldset>
                    <legend>Global Covid 19</legend>

                    <div className="row">
                        <div className="col-md-2">
                            <Data title={"Global Deaths"} value={this.state.globaldeaths} />
                        </div>
                        <div className="col-md-2">
                            <Data title={"Global New Cases"} value={this.state.globalnewcases} />
                        </div>
                        <div className="col-md-2">
                            <Data title={"Global new Deaths"} value={this.state.globalnewdeaths} />
                        </div>
                        <div className="col-md-2">
                            <Data title={"Global Recovered"} value={this.state.globalrecovered} />
                        </div>
                        <div className="col-md-2">
                            <Data title={"Global Total"} value={this.state.globaltotal} />
                        </div>
                    </div>
                </fieldset>

            </div>
        )
    }
}
export default Dashboard;