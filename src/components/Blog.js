import { HashLink as Link } from 'react-router-hash-link';
import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Inspired } from '../json/Inspired';
import { TailSpin } from 'react-loader-spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import MyErrorBoundary from '../container/MyErrorBoundary';

class Blog extends Component {
	constructor(props) {
		super(props)
		this.state = {
			InsightsJson: [],
			page: 1,
			all: 0,
			data3: [],
			data: [],
			data2: [],
			catedata: [],
			Loading: true,
			thePath: this.props.location.pathname,
			allpost: '',
			setsearchterm: [],
			search: "",
			error: false,
			searchdata: [],
		}
	}
	componentDidMount() {

		Inspired.getInspiredAllPost().then((Insights, err) => {
			if (!err) {
				this.setState({
					allpost: Insights[0].totaljob,
				});
			}
		})


		Inspired.getInspired2(this.state.page).then((Insights, err) => {
			if (!err) {
				this.setState({
					data: Insights,
					Loading: false,
				});
			}
		});
		Inspired.getcate().then((Insights, err) => {
			if (!err) {
				this.setState({
					catedata: Insights,
					Loading: false,
				});
			}
		});

		var a = this.state.thePath.substr(this.props.location.pathname.lastIndexOf('/') + 1);
		Inspired.getInspired3(this.state.page, a).then((Insights, err) => {
			if (!err) {
				this.setState({
					data: Insights,
					Loading: false,
				});
			}
		});
	}

	fetch = (pageNumber) => {

		Inspired.getInspired2(this.state.page + 1).then((Insights, err) => {
			if (!err) {
				this.setState({
					data: this.state.data.concat(Insights),
					Loading: false,
					page: this.state.page + 1,
				});
			}
		});
	}


	fetchMoreData = (page) => {
		return this.fetch(page);
	};

	handlefilter = (e) => {
		if (e.target.value === '') {
			this.setState({
				data: this.state.searchdata,
			})
		}
		else {
			Inspired.searchdata(e.target.value).then((Insights, err) => {
				if (!err) {
					this.setState({
						data: Insights,
					});
				}
			})

			console.log("a===" + e.target.value)
		}
	}

	render() {

		const { data, page, catedata, allpost, error } = this.state;
		if (error) {
			return <p>hello wolrd</p>;
		}
		else {
			return (
				this.state.Loading ? <div className="spinner"><TailSpin color="#4ad3ff" height={80} width={80} /></div> :
					<>
						<Header headerClass={'case-head'} />
						<div className="blog-banner">
							<div className="container">
								<div className="row">
									<div className="col-lg-2"></div>
									<div className="col-lg-8 col-md-12" >
										<h1>Let's share some chat, mate!!</h1>
										<p><span></span></p>
										<div className="in-box">
											<input className="box" name="" placeholder="Supercharge your brain" />
										</div>

									</div>
								</div>
							</div>
						</div>
						<MyErrorBoundary>
							<div className="blog-sec">
								<div className="container">
									<div className="row">
										<div className="col-lg-12 col-md-12">
											<h2>Recent articles from our web development blog </h2>
											<Tabs>
												<TabList>
													<div className="row">
														<div className="col-lg-10 col-md-9">
															<Tab>All Posts ({allpost})</Tab>
															{catedata && catedata.map((dataS, index) => {
																if (dataS.size !== 0 && dataS.catename !== 'Uncategorized') {
																	return (
																		<p key={index}><Link to={`/blog/${dataS.cateslug}`}>{dataS.catename} ({dataS.size})</Link></p>
																	);
																}
															})}
														</div>
														<div className="col-lg-2 col-md-3"><input onInput={(e) => this.handlefilter(e)} className="box" type="text" name="" placeholder="Search" /></div>
													</div>
												</TabList>

												<TabPanel  >
													<InfiniteScroll style={{ overflow: 'hidden' }}
														dataLength={data.length}
														next={() => this.fetchMoreData(page)}
														hasMore={true}
													>
														<div className="row case-txt" >
															{data.map(dataS => {
																return (
																	<div className="col-lg-4 col-md-6">
																		<div className="case-main">
																			<Link to={`/blog/${dataS.slug}`} ><h4>Read More</h4> <img alt="img" width="100%" src={dataS.img} /></Link>
																			<div className="case-box">
																				<h5><img alt="img" src={dataS.author_profile} /><span><strong>{dataS.author_name}</strong> {dataS.description}</span></h5>
																				<Link to={`/blog/${dataS.slug}`} ><h3>{dataS.name}</h3></Link>
																			</div>
																		</div>
																	</div>

																);
															})}
														</div>
													</InfiniteScroll>

												</TabPanel>

												<TabPanel>
													<h3>Any content 2</h3>
												</TabPanel>

												<TabPanel>
													<h3>Any content 3</h3>
												</TabPanel>

												<TabPanel>
													<h3>Any content 4</h3>
												</TabPanel>

												<TabPanel>
													<h3>Any content 5</h3>
												</TabPanel>

												<TabPanel>
													<h3>Any content 6</h3>
												</TabPanel>

												<TabPanel>
													<h3>Any content 7</h3>
												</TabPanel>

												<TabPanel>
													<h3>Any content 8</h3>
												</TabPanel>

												<TabPanel>
													<h3>Any content 9</h3>
												</TabPanel>

												<TabPanel>
													<h3>Any content 10</h3>
												</TabPanel>

												<TabPanel>
													<h3>Any content 11</h3>
												</TabPanel>
											</Tabs>
										</div>
									</div>
								</div>
							</div>
						</MyErrorBoundary>
						<Footer />
					</>
			);
		}
	}
}
export default Blog;

// handlefilter = (e) => {
// 	if (e.target.value === '') {
// 		this.setState({
// 			data: this.state.searchdata,
// 		})
// 	}
// 	else {
// 		this.state.searchdata.filter(person => person.name.toLowerCase().includes(e.target.value.toLowerCase())).map(filteredName => (
// 			this.setState({
// 				dat3: filteredName.name,
// 			})
// 		))
// 	}
// }
// this.state.searchdata.filter(person => person.name.toLowerCase().includes(e.target.value.toLowerCase())).map(filteredName => (
			// 	this.setState({
			// 		data: filteredName.name,
			// 	})
			// ))