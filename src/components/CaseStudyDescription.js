import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { HashLink as Link } from 'react-router-hash-link';
import ReviewSec from '../container/ReviewSec';
import EuquireSec from '../container/EuquireSec';
import AwardSec from '../container/AwardSec';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import arrow4 from '../images/arrow4.png';
import PDF from '../images/PDF.png';
import casePDF from '../images/case-PDF.png';
import { Work } from '../json/work';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import aboutimage from '../images/about-banner.jpg';
import { FaFacebook, FaLinkedin, FaTwitter, FaLink } from 'react-icons/fa';
import { FacebookShareButton, FacebookIcon, LinkedinShareButton, LinkedinIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon } from "react-share";

class CaseStudyDescription extends Component {
	constructor(props) {
		super(props)
		this.state = {
			workJson: [],
			url: this.props.match.params.post,
		}
	}

	componentDidMount() {
		Work.getWork(this.state.url).then((work, err) => {
			if (!err) {
				this.setState({
					workJson: work,
				});
			}
		});
	}
	exportPDF = () => {
		const input = document.getElementById('content1');
		html2canvas(input, { logging: true, letterRendering: 1, useCORS: true }).then(canvas => {
			const imgWidth = 160;
			const imgHeight = canvas.height * imgWidth / canvas.width;
			const imgData = canvas.toDataURL('img/jpg', 1.0);
			const pdf = new jsPDF('p', 'mm', 'a4');
			pdf.addImage(imgData, 'JPG', 25, 0, imgWidth, imgHeight);
			pdf.save(`Budgeting ${document.getElementsByClassName('pdf-title')[0].innerText}.pdf`);
			// console.log("url_case" + url_case);
		})
	}

	render() {

		const { workJson } = this.state;
		return (
			<>
				<Header headerClass={'serv-head'} />
				<div id="content1">
					{workJson && workJson.map((link, key) => {
						return (
							<div className="about-banner" id="content">
								<div className="about-box abt-desc">
									<div className="container">
										<div className="row">
											<div className="col-lg-5 col-md-9" data-aos="fade-right">
												<Link to="/case-studies"><h4 style={{ color: "white" }}><img alt="img" src={arrow4} /> CASE STUDIES</h4></Link>
												<img alt="img" className="dd-5" src={link.brand_logo} />
												<h1 className="pdf-title">{link.name}</h1>
												<p className="about-banner-data" dangerouslySetInnerHTML={{ __html: link.content }}></p>
											</div>
											<div className="col-lg-7 col-md-3" >
												<FacebookShareButton
													url={'https://dev.iquincesoft.com/careers'}
													quote={'Share Me'}
													className="Demo__some-network__share-button">
													<FacebookIcon size={50} height={70} round />
												</FacebookShareButton>
												<LinkedinShareButton
													url={'https://dev.iquincesoft.com/careers'}
													quote={'Share Me'}
													className="Demo__some-network__share-button">
													<LinkedinIcon size={50} height={70} round />
												</LinkedinShareButton>
												<TwitterShareButton
													url={'https://dev.iquincesoft.com/careers'}
													quote={'Share Me'}
													className="Demo__some-network__share-button">
													<TwitterIcon size={50} height={70} round />
												</TwitterShareButton>
												<WhatsappShareButton
													url={'https://dev.iquincesoft.com/careers'}
													quote={'Share Me'}
													className="Demo__some-network__share-button">
													<WhatsappIcon size={50} height={70} round />
												</WhatsappShareButton>

											</div>
										</div>
									</div>

								</div>

								<img alt="img" className="abt-img" width="100%" height="900px" src={link.img} />
								<img alt="img" className="abt-mob" width="100%" src={link.img} />
							</div>
						);
					})}
					{workJson && workJson.map(link => {
						return (
							<div className="case-tab">
								<Tabs>
									<TabList >
										<Tab>ABOUT THE CLIENT</Tab>
										<Tab>THE CHALLENGE</Tab>
										<Tab>THE SOLUTION</Tab>
										<Tab>THE RESULT</Tab>
									</TabList>

									<TabPanel >
										<div className="container">
											<div className="row">
												<div className="col-lg-6 col-md-6">
													<h3>About the Client</h3>
													<p dangerouslySetInnerHTML={{ __html: link.client1 }}></p>
												</div>

												<div className="col-lg-6 col-md-6">
													<h4>{link.client2}</h4>
												</div>
											</div>
										</div>

										<div className="case-content">
											<div className="container">
												<div className="row">
													<div className="col-lg-6 col-md-6">
														<h3>The Challenge</h3>
														<p dangerouslySetInnerHTML={{ __html: link.challenges }}></p>
													</div>

													<div className="col-lg-6 col-md-6">
														<h4>{link.challenges2}</h4>
													</div>
												</div>
											</div>
										</div>

										<div className="container">
											<div className="row">
												<div className="col-lg-6 col-md-6">
													<h3>The Solution</h3>
													<p dangerouslySetInnerHTML={{ __html: link.solution }}></p>
												</div>

												<div className="col-lg-6 col-md-6">
													<h4>{link.solution2}</h4>
												</div>
											</div>
										</div>

										<div className="case-content">
											<div className="container">
												<div className="row">
													<div className="col-lg-6 col-md-6">
														<h3>The Results</h3>
														<p dangerouslySetInnerHTML={{ __html: link.result }}></p>
													</div>

													<div className="col-lg-6 col-md-6">
														<h4>{link.result2}</h4>
													</div>
												</div>
											</div>
										</div>
									</TabPanel>

									<TabPanel>
										<div className="container">
											<div className="row">
												<div className="col-lg-6 col-md-6">
													<h3>The challenges</h3>
													<p dangerouslySetInnerHTML={{ __html: link.challenges }}></p>
												</div>

												<div className="col-lg-6 col-md-6">
													<h4>{link.challenges2}</h4>
												</div>
											</div>
										</div>
										<ul>
											<li><Link to={"#"}>TECH STACK</Link></li>
											<li><Link to={"#"}>LARAVEL</Link></li>
											<li><Link to={"#"}>WORDPRESS</Link></li>
											<li><Link to={"#"}>REACT</Link></li>
											<li><Link to={"#"}>NODE</Link></li>
										</ul>
									</TabPanel>

									<TabPanel>
										<div className="case-content dd-6">
											<div className="container">
												<div className="row">
													<div className="col-lg-6 col-md-6">
														<h3>The Solution</h3>
														<p dangerouslySetInnerHTML={{ __html: link.solution }}></p>
													</div>

													<div className="col-lg-6 col-md-6">
														<h4>{link.solution2}</h4>
													</div>
												</div>
											</div>
										</div>
									</TabPanel>

									<TabPanel>
										<div className="case-content dd-6">
											<div className="container">
												<div className="row">
													<div className="col-lg-6 col-md-6">
														<h3>The Results</h3>
														<p dangerouslySetInnerHTML={{ __html: link.result }}></p>
													</div>

													<div className="col-lg-6 col-md-6">
														<h4>{link.result2}</h4>
													</div>
												</div>
											</div>
										</div>
									</TabPanel>
								</Tabs>

								<div className="container">
									<div className="row">
										<div className="col-lg-12 col-md-12">
											<h3>About the Client</h3>
											<p>For the last decade, our client has worked in the digitisation space to help organisations transition from manual, paper-based forms and processes to automated, smart online systems. This automation results in long-term cost savings for their end client.</p>
											<p>They’ve been successful with their offerings and have contracts with several key government departments. When they contacted us to help scale their production team, we were happy to do so.</p>
											<p>Their biggest concerns had to do with the ability to scale their production team in a cost-efficient way, and to ensure that the quality was up to standard for their government clients.</p>

											<h3>The Challenge</h3>
											<p>For the last decade, our client has worked in the digitisation space to help organisations transition from manual, paper-based forms and processes to automated, smart online systems. This automation results in long-term cost savings for their end client.</p>
											<p>They’ve been successful with their offerings and have contracts with several key government departments. When they contacted us to help scale their production team, we were happy to do so.</p>
											<p>Their biggest concerns had to do with the ability to scale their production team in a cost-efficient way, and to ensure that the quality was up to standard for their government clients.</p>

											<h3>The Solution</h3>
											<p>For the last decade, our client has worked in the digitisation space to help organisations transition from manual, paper-based forms and processes to automated, smart online systems. This automation results in long-term cost savings for their end client.</p>
											<p>They’ve been successful with their offerings and have contracts with several key government departments. When they contacted us to help scale their production team, we were happy to do so.</p>
											<p>Their biggest concerns had to do with the ability to scale their production team in a cost-efficient way, and to ensure that the quality was up to standard for their government clients.</p>

											<ul>
												<li><Link to={"#"}>TECH STACK</Link></li>
												<li><Link to={"#"}>LARAVEL</Link></li>
												<li><Link to={"#"}>WORDPRESS</Link></li>
												<li><Link to={"#"}>REACT</Link></li>
												<li><Link to={"#"}>NODE</Link></li>
											</ul>

											<h3>The Results</h3>
											<p>For the last decade, our client has worked in the digitisation space to help organisations transition from manual, paper-based forms and processes to automated, smart online systems. This automation results in long-term cost savings for their end client.</p>
											<p>They’ve been successful with their offerings and have contracts with several key government departments. When they contacted us to help scale their production team, we were happy to do so.</p>
											<p>Their biggest concerns had to do with the ability to scale their production team in a cost-efficient way, and to ensure that the quality was up to standard for their government clients.</p>
										</div>
									</div>
								</div>
								<h5 ><a onClick={() => this.exportPDF()} target="_blank" rel="noreferrer"><img alt="img" src={casePDF} /> DOWNLOAD CASE STUDY</a></h5>
							</div>
						);
					})
					}
				</div>

				<ReviewSec />

				<EuquireSec />

				<AwardSec />

				<Footer />
			</>
		);
	}
}

export default CaseStudyDescription;
