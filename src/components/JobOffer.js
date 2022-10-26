
import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { HashLink as Link } from 'react-router-hash-link';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Joboffers } from '../json/JobOffers';

class JobOffer extends Component {

	constructor(props) {
		super(props)
		this.state = {
			joblinks: [],
			joblinks2: [],
			joblinks3: [],
			url: this.props.location,
			lastItem: '',
			thePath: this.props.location.pathname,
			totalsjob: "",
			items: '',
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
		Joboffers.getJoboffersDetails(this.state.thePath).then((menus, err) => {
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


	render() {
		const { joblinks, joblinks3, totalsjob } = this.state;
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

												<Tab> All ({totalsjob})</Tab>
												{joblinks3 && joblinks3.map(link => {
													return (
														<Tab ><Link to={`/jobOffer/${link.slug}`}> {link.name} ({link.size})</Link></Tab>
													);
												})}
											</div>
										</div>
									</TabList>

									<TabPanel>
										<div className="row">
											{joblinks && joblinks.map(link => {
												return (
													<div className="col-lg-4 col-md-6">
														<Link to={`/jobDetail/${link.slug}`}>
															<div className="job-box">
																<h4>{link.name}</h4>
																<p dangerouslySetInnerHTML={{ __html: link.content1 }}></p>
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

export default JobOffer;
