
import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { HashLink as Link } from 'react-router-hash-link';
import { Joboffers } from '../json/JobOffers';
import jobImg from '../images/job-img.png';
import jobImg1 from '../images/job-img1.png';
import jobImg2 from '../images/job-img2.png';
import jobImg3 from '../images/job-img3.png';
import jobImg4 from '../images/job-img4.png';
import jobImg5 from '../images/job-img5.png';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import axios from 'axios';
import { ProSidebar, Menu, MenuItem, SubMenu, FaHeart, FaGem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
class JobDetail extends Component {
	constructor(props) {
		super(props)
		this.state = {
			InsightsJson: [],
			page: 1,
			First_Name: '',
			Last_Name: '',
			Email: '',
			Mobile: '',
			Message: '',
			image: {},
			url: this.props.match.params.post

		}
	}
	componentDidMount() {
		Joboffers.getJoboffersDetails2(this.state.url).then((Insights, err) => {
			if (!err) {
				this.setState({
					InsightsJson: Insights,
					Loading: false,
				});
			}
		});
	}

	submitForm = e => {
		// e.preventDefault();
		if (this.state.First_Name === '' || this.state.Last_Name === '' || this.state.Email === '' || this.state.Mobile === '' || this.state.Message === '') {
			alert("some field are missing filled it");
		}
		else {
			let formData = new FormData()
			formData.set("your-FirstName", this.state.First_Name)
			formData.set("your-LastName", this.state.Last_Name)
			formData.set("your-email", this.state.Email)
			formData.set("your-Mob", this.state.Mobile)
			formData.set("your-message", this.state.Message)
			formData.append("file", this.state.image);
			// formdata.append("Image", { uri: photo.uri, name: 'image.jpg', type: 'image/jpeg' })
			axios.post('https://dev.iquincesoft.com/iqsandbox/wp-json/contact-form-7/v1/contact-forms/1812/feedback', formData, {
				headers: {
					"content-type": "multipart/form-data",
				},
			})
				.then(res => {
					res.data.status === "mail_sent"
						? this.setState({
							First_Name: '',
							Last_Name: '',
							Email: '',
							Mobile: '',
							Message: '',
						})
						: this.setState({ errorMessage: res.data.message }, () => {
							setTimeout(() => {
								this.setState({ errorMessage: "" })
							}, 2000)
						})
				})
			alert("thank you for submission");
		}
	}
	uploadPicture = (e) => {

	};
	render() {
		const { InsightsJson } = this.state;
		return (
			<>
				<Header headerClass={'job-head'} />

				<div className="job-detail">
					<div className="container">
						<div className="row">

							<div className="col-lg-1"></div>
							<div className="col-lg-5 col-md-6"><img alt="img" width="100%" src={jobImg} /></div>
							<div className="col-lg-2"></div>
							<div className="col-lg-4 col-md-6">
								{InsightsJson && InsightsJson.map(link => {
									return (
										<div className="job-dt-box" id="job-dt">
											<h4>{link.name}</h4>
											<p dangerouslySetInnerHTML={{ __html: link.content }}></p>
											<h6><span>{link.Job_Access}</span>

												<Popup className="job-popup" trigger={<button type="button">Apply for this job</button>}
													modal lockScroll={true}  >
													{close => (
														<div className="modal">
															<button className="close" onClick={close}>&times; </button>
															<div className="content">
																<h3>You are applying for {link.name}</h3>
																<form>
																	<h4>Required:</h4>
																	<div className="row">
																		<div className="col-lg-6 col-md-6"><input onChange={e => this.setState({ First_Name: e.target.value })} class="box-2" type="text" name="" placeholder="*First Name" /></div>
																		<div className="col-lg-6 col-md-6"><input onChange={e => this.setState({ Last_Name: e.target.value })} class="box-2" type="text" name="" placeholder="*Last Name" /></div>
																	</div>
																	<input onChange={e => this.setState({ Email: e.target.value })} class="box-2" type="text" name="" placeholder="*Email" />
																	<p>
																	</p>
																	<input onChange={e => this.setState({ Mobile: e.target.value })} class="box-2" type="text" name="" placeholder="*Telephone" />
																	<textarea onChange={e => this.setState({ Message: e.target.value })} class="box-2" rows="4" placeholder="Message"></textarea>
																	<label for="files" className="btn">*Attach your Resume</label>
																	<input class="box-2" id="files" style={{ visibility: "hidden" }} type="file" name='videoFile' title="Choose a Resume please" placeholder="Attach your Resume" onChange={e => this.setState({
																		image: URL.createObjectURL(e.target.files[0]),
																	})} />
																	<p>
																		<input type="checkbox" value="" /> <span>I consent to iQuinceSoft to get my data processed in the form for the current and future recruitment processes.
																		</span>
																	</p>
																	<Link onClick={() => this.submitForm()} to="#">Enquire Now</Link>
																</form>
															</div>
														</div>
													)
													}
												</Popup>


											</h6>
											<h5><Link to={'#Requir'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Requirements</Link></h5>
											<h5><Link to={'#Benefits'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Benefits</Link></h5>
											<h5><Link to={'#process'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Recruitment processments</Link></h5>
										</div>
									)
								})}
							</div>
						</div>
					</div >
				</div >

				<div className="job-txt">
					<div className="container">
						<div className="row">
							<div className="col-lg-8 col-md-12">
								<h3 id="Requir">We expect from you:</h3>
								{InsightsJson && InsightsJson.map(link => {
									return (
										<p dangerouslySetInnerHTML={{ __html: link.content1 }}></p>
									);
								})}
							</div>
						</div>


						<div className="row">
							<div className="col-lg-10 col-md-12">
								<h4>If you fail to make it through,  <span>don't lose hope and try again!!</span></h4>
							</div>
						</div>

						<div className="row">
							<div className="col-lg-8 col-md-12">
								<h3 >What is my benefit in Joining iQuinceSoft?</h3>
								<ul>
									<li>An organization with a difference, iQuinceSoft, is serving the needs, and demands of the european and american markets with satisfaction.  Joining us can be an learning opprotunity of oceans.</li>
									<li>We keep you as an integral part of the project related processes.</li>
									<li>We are a team of seasoned and skilled professionals who are well-versed with the markets and IT related processes. Thus, we enables an learning environment where you can scale up your capabilities.</li>
									<li>We use the technological advancements to stay up-to-date.</li>
									<li>Immense growth opportunities.</li>
									<li>We offer benefits you find nowhere else, which are confidential and included in your offer letters.</li>
									<li id="Benefits">We ensure you enjoy the high degrees of work-life balance.</li>
									<li>iQuinceSoft offer not just job offer but career opportunities that can help you grow and prosper with the organization</li>

								</ul>

								<h3 >Recruitment process</h3>
								<p>If you think you have it in you, test it with a piece of paper called CV and a process called INTER_VIEW</p>

								<div className="row">
									<div className="col-lg-6 col-md-6">
										<h5>Initial interview</h5>
										<img alt="img" width="100%" src={jobImg1} />
										<p id="process" >We would love to know about your experience, expertise, and expectations towards iQuinceSoft. If your expertise can benefit us mutually, we will proceed further on the process of interview. If you have any doubts/queries, feel free to ask.</p>
									</div>
									<div className="col-lg-6 col-md-6"><img alt="img" width="100%" src={jobImg1} /></div>
								</div>

								<div className="row">
									<div className="col-lg-6 col-md-6">
										<h5>You are given a test assignment</h5>
										<img alt="img" width="100%" src={jobImg2} />
										<p>If we mutually agrees that we can work together, we proceed with a test assignment to learn your approach to solve the problems.</p>
									</div>
									<div className="col-lg-6 col-md-6" ><img alt="img" width="100%" src={jobImg2} /></div>
								</div>

								<div className="row">
									<div className="col-lg-6 col-md-6">
										<h5>We invite you to an interview</h5>
										<img alt="img" width="100%" src={jobImg3} />
										<p>It's time to face each other. If we find you suitable, you are welcome at our headoffice for a face-to-face round of interview. apart from the HR team, the respective TLs/ Managers can interact with you with more technical conversation.</p>
									</div>
									<div className="col-lg-6 col-md-6"><img alt="img" width="100%" src={jobImg3} /></div>
								</div>

								<div className="row">
									<div className="col-lg-6 col-md-6">
										<h5>Welcome to iQuinceSOFT</h5>
										<img alt="img" width="100%" src={jobImg4} />
										<p>Once we find you suitable, We welcome you onboard.</p>
									</div>
									<div className="col-lg-6 col-md-6" ><img alt="img" width="100%" src={jobImg4} /></div>
								</div>

								<div className="row">
									<div className="col-lg-6 col-md-6">
										<h5>What if you are not selected?</h5>
										<img alt="img" width="100%" src={jobImg5} />
										<p>No 'Goodbye and better luck next time' Jargons! We share our inputs and feedbacks to you in regards to the interviews you had with us with your prominent 'Areas of Improvement.' Work on these areas and come back again. We love to hire the ambitious people who value feedbacks and can bounce back to the board.</p>
									</div>
									<div className="col-lg-6 col-md-6"><img alt="img" width="100%" src={jobImg5} /></div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<Footer />
			</>
		);
	}
}

export default JobDetail;
