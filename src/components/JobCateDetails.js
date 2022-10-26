
import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { HashLink as Link } from 'react-router-hash-link';
import { Tabs, TabList, TabPanel } from 'react-tabs';
import { Joboffers } from '../json/JobOffers';

class jobCateDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            joblinks: [],
            joblinks2: [],
            joblinks3: [],
            url: this.props.location,
            lastItem: '',
            totalsjob: '',
            VisitedLink: this.props.location.pathname.substr(this.props.location.pathname.lastIndexOf('/') + 1),
        }
    }

    componentDidMount() {
        Joboffers.getJoboffers2().then((menu, err) => {
            if (!err) {
                this.setState({
                    totalsjob: menu[0].totaljob,
                })
            }
        })
        Joboffers.getJoboffers().then((menus, err) => {
            if (!err) {
                this.setState({
                    joblinks: menus,
                });
            }
        })
        Joboffers.getJoboffersDetails(this.state.VisitedLink).then((menus, err) => {
            if (!err) {
                this.setState({
                    joblinks2: menus,
                });
            }
        })
        Joboffers.getJoboffersCate().then((menus, err) => {
            if (!err) {
                this.setState({
                    joblinks3: menus,
                });
            }
        })
    }
    componentDidUpdate(preprops, prestate) {

        const oldURL = preprops.location.pathname;
        const oldURLString = oldURL.substr(oldURL.lastIndexOf('/') + 1);
        const newUrl = this.props.location.pathname;
        const newUrlString = newUrl.substr(newUrl.lastIndexOf('/') + 1);
        if (oldURLString !== newUrlString) {
            Joboffers.getJoboffersDetails(newUrlString).then((Insights, err) => {
                if (!err) {
                    this.setState({
                        VisitedLink: newUrlString,
                        joblinks2: Insights,
                        //Loading: false,
                    });
                }
            });
        }
    }
    render() {
        const { joblinks2, joblinks3, VisitedLink, totalsjob } = this.state;
        return (
            <>
                <Header headerClass={'job-head'} />

                <div className="job-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <Tabs>
                                    <TabList>
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3" ><h3>Job Offers</h3></div>
                                            <div className="col-lg-9 col-md-9">
                                                <p className="job-sec-p">
                                                    <Link to={`/jobOffer`}>All ({totalsjob})</Link>
                                                </p>
                                                {joblinks3 && joblinks3.map(link => {
                                                    return (
                                                        link.slug === VisitedLink ? <p className="job-offer-2"><Link to={`/jobOffer/${link.slug}`}>{link.name} ({link.size})</Link></p> :
                                                            <p className="job-sec-p"><Link to={`/jobOffer/${link.slug}`}>{link.name} ({link.size})</Link></p>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </TabList>

                                    <TabPanel>
                                        <div className="row">
                                            {joblinks2.map(link => {
                                                return (
                                                    <div className="col-lg-4 col-md-6">
                                                        <Link to={`/job-detail/${link.slug}`}>
                                                            <div className="job-box">
                                                                <h4>{link.name}</h4>
                                                                <p dangerouslySetInnerHTML={{ __html: link.content }}></p>
                                                                <h6>{link.Address}</h6>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                )
                                            })}
                                        </div>

                                    </TabPanel>

                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </>
        );
    }
}

export default jobCateDetails;