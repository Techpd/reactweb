
import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import FormPopup from '../container/FormPopup';
import FeatureSec from '../container/FeatureSec';
import WorkSec from '../container/WorkSec';
import ReviewSec from '../container/ReviewSec';
import EuquireSec from '../container/EuquireSec';
import AwardSec from '../container/AwardSec';
import { HashLink as Link } from 'react-router-hash-link';
import { Main } from '../json/Main';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';

import img1 from '../images/serv-icon1.svg';
import img2 from '../images/serv-icon2.svg';
import img3 from '../images/serv-icon3.svg';
import img4 from '../images/serv-icon4.svg';

import imgs1 from '../images/tech-icon.png';
import imgs2 from '../images/tech-icon1.svg';
import imgs3 from '../images/tech-icon2.svg';
import imgs4 from '../images/tech-icon3.svg';
import imgs5 from '../images/tech-icon4.svg';
import imgs6 from '../images/tech-icon5.svg';
import Dedication from '../images/Dedication.svg';
import Timer from '../images/Timer.svg';
import project from '../images/Support.svg';
import result from '../images/result.svg';
import Star from '../images/Team.svg';
import Launch from '../images/Launch.svg';
import Developer2 from '../images/Developer2.svg';

import star from '../images/star.png';
import banimg from '../images/ban-img.png';
import arrow from '../images/arrow.png';
import arrow3 from '../images/arrow3.png';
import bannerMob from '../images/banner-mob.jpg';
import { ErrorBoundary } from 'react-error-boundary';

import { TailSpin } from 'react-loader-spinner'

import { FaArrowRight } from 'react-icons/fa';


class Home extends Component {

	constructor(props) {
		super(props)
		this.state = {
			serviceJson: [],
			technologyJson: [],
			teamJson: [],
			careerJson: [],
			chooseJson: [],
			Titlejson: [],
			Loading: true,
			error: false,
		}
	}

	componentDidMount() {
		Main.getMAIN_TITLE().then((title, err) => {

			if (!err) {
				this.setState({
					Titlejson: title,
					Loading: false,
				});
			}

		});
		Main.getService().then((services, err) => {
			try {
				if (!err) {
					this.setState({
						serviceJson: services,
						Loading: false,
					});
				}
			} catch (error) {
				this.setState({
					error: true,
				})
			}

		});

		Main.getTechnology().then((technology, err) => {
			if (!err) {
				this.setState({
					technologyJson: technology,
					Loading: false,
				});
			}
		});

		Main.getTeam().then((team, err) => {
			if (!err) {
				this.setState({
					teamJson: team,
					Loading: false,
				});
			}
		});

		Main.getCareer().then((career, err) => {
			if (!err) {
				this.setState({
					careerJson: career,
					Loading: false,
				});
			}
		});
		Main.getchoose().then((Choose, err) => {
			if (!err) {
				this.setState({
					chooseJson: Choose,
					Loading: false,
				});
			}
		});
		Main.getchoose2().then((Choose2, err) => {
			if (!err) {
				this.setState({
					chooseJson2: Choose2,
					Loading: false,
				});
			}
		});
	}
	render() {

		if (this.state.error === true) {
			return (console.log("error api data not found"));
		}

		const { serviceJson, teamJson, careerJson, chooseJson, chooseJson2 } = this.state;
		const service = {
			items: 4,
			responsive: {
				1200: { items: 4, },
				768: { items: 3 },
				480: { items: 2 },
				320: { items: 1, }
			},
			loop: true,
			autoplay: true
		};

		const technology = {
			items: 6,
			responsive: {
				1200: { items: 6, },
				992: { items: 5, },
				768: { items: 3 },
				480: { items: 2 },
				320: { items: 1, }
			},
			loop: true,
			autoplay: true
		};

		const teamSlide = {
			items: 4,
			responsive: {
				1200: { items: 4, },
				768: { items: 3 },
				480: { items: 2 },
				320: { items: 1, }
			},
			loop: true
		};

		const whySlide = {
			items: 2,
			responsive: {
				1200: { items: 2, },
				768: { items: 2 },
				640: { items: 2 },
				320: { items: 1, }
			},
			loop: true
		};

		return (

			this.state.Loading ? <div className="spinner"><TailSpin color="#00ccff" height={80} width={80} /></div> :
				<>
					<ErrorBoundary fallbackRender={({ error, resetErrorBoundary, componentStack }) => (
						<div>
							<h1>An error occurred: {error.message}</h1>
							<button onClick={resetErrorBoundary}>Try again</button>
						</div>
					)}
					>
						<Header />
						<div className="banner-sec">
							<div className="container">
								<div className="row">
									<div className="col-lg-8 col-md-8" >
										<h1><img alt="img" src={star} /> <span> We offer <del>services</del> solutions<em>that meet your <del>needs</del> demands.</em></span></h1>
										<div className="row">
											<div className="col-lg-5 col-md-5"><h2>Web <span>software</span> <span>mobile</span> cloud<em>.</em></h2></div>
											<div className="col-lg-7 col-md-7">
												<div className="banner-section">
													<center><img alt="img" className="arrow" src={arrow} /></center>
													<center><FormPopup /></center>
													<h5><Link to={'#EuquireSec'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Or, Use this form to share your requirements.<span>Get guaranteed response within 8 Hrs.</span></Link></h5>
												</div>
											</div>
										</div>
									</div>

									<div className="col-lg-4 col-md-4"><img width="100%" alt="img" src={banimg} /></div>
								</div>
							</div>
						</div>

						<div className="mob-sec">
							<img alt="img" width="100%" src={bannerMob} />
							<div className="mob-box">
								<h4><span> We offer <del>services</del> solutions that meet your <del>needs</del> demands.</span></h4>
								<ul>
									<li><Link to="/web-development-company">WEB</Link></li>
									<li><Link to="#">SOFTWARE</Link></li>
									<li><Link to="/mobile-developement">MOBILE</Link></li>
									<li><Link to="/devops-consulting">CLOUD</Link></li>
								</ul>
								<FormPopup />
							</div>
						</div>

						<FeatureSec />

						<div className="service-sec">
							<div className="container">
								<div className="row">
									<div className="col-lg-2"></div>
									<div className="col-lg-8 col-md-12">
										<h3>Improve your business, scale your development and design capabilities with the help of our dedicated custom teams.</h3>
									</div>
								</div>

								<div className="row">
									<div className="col-lg-1"></div>
									<div className="col-lg-10 col-md-12">
										<OwlCarousel loop options={service}>
											<div className="serv-box">
												<a href="/web-development">
													<img alt="img" src={img4} />
													<h4>Web</h4>
													<div className="arrow-icon"><FaArrowRight /></div>
												</a>
											</div>

											<div className="serv-box">
												<a href="/mobile-app-developement">
													<img alt="img" src={img2} />
													<h4>Mobile</h4>
													<div className="arrow-icon"><FaArrowRight /></div>
												</a>
											</div>

											<div className="serv-box">
												<a href="/devops-consulting">
													<img alt="img" src={img1} />
													<h4>Dev Ops</h4>
													<div className="arrow-icon"><FaArrowRight /></div>
												</a>
											</div>

											<div className="serv-box">
												<a href="/cloud-development">
													<img alt="img" src={img3} />
													<h4>Cloud Development</h4>
													<div className="arrow-icon"><FaArrowRight /></div>
												</a>
											</div>

										</OwlCarousel>

									</div>
								</div>
							</div>
							<h6><a href="/service">View More Services </a></h6>
							<FormPopup />
						</div>

						<div className="technology-sec">
							<h3>Technologies</h3>
							<div className="container">
								<div className="row">
									<div className="col-lg-12 col-md-12">

										<OwlCarousel options={technology}>
											<div className="tech-box">
												<a href="/cloud-development">
													<div className="tech-dot"></div>
													<img alt="img" src={imgs6} />
													<h4>Cloud</h4>
													<div className="arrow-icon"><FaArrowRight /></div>
												</a>
											</div>

											<div className="tech-box">
												<a href="/ecommerce-developers">
													<div className="tech-dot"></div>
													<img alt="img" src={imgs5} />
													<h4>e-Commerce</h4>
													<div className="arrow-icon"><FaArrowRight /></div>
												</a>
											</div>

											<div className="tech-box">
												<a href="/mobile-app-developement">
													<div className="tech-dot"></div>
													<img alt="img" src={imgs4} />
													<h4>Mobile</h4>
													<div className="arrow-icon"><FaArrowRight /></div>
												</a>
											</div>

											<div className="tech-box">
												<Link to="/hire-php-developers">
													<div className="tech-dot"></div>
													<img alt="img" src={imgs3} />
													<h4>Server-Side</h4>
													<div className="arrow-icon"><FaArrowRight /></div>
												</Link>
											</div>

											<div className="tech-box">
												<Link to="/product-design">
													<div className="tech-dot"></div>
													<img alt="img" src={imgs2} />
													<h4>Product Design
													</h4>
													<div className="arrow-icon"><FaArrowRight /></div>
												</Link>
											</div>

											<div className="tech-box">
												<Link to="/hire-wordpress-developers">
													<div className="tech-dot"></div>
													<img alt="img" src={imgs1} />
													<h4>CMS</h4>
													<div className="arrow-icon"><FaArrowRight /></div>
												</Link>
											</div>
										</OwlCarousel>

									</div>
								</div>
							</div>
							<h6><a href="/service">View More Services </a></h6>
							<FormPopup />
							<h5><Link to={'#EuquireSec'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Or, Use this form to share your requirements.<span>Get guaranteed response within 8 Hrs.</span></Link></h5>
						</div>

						<WorkSec />

						<div className="team-sec" >
							<h3>Industry Experience</h3>
							<h4>Our team is specialized in a wide array of industry verticals.</h4>
							<div className="container">
								<div className="row">
									<div className="col-lg-12 col-md-12">
										{teamJson.length && (
											<OwlCarousel options={teamSlide}>
												{teamJson.map((teamJsons, index, teamJson) => {
													index *= 3;
													if (index < (teamJson.length - teamJson.length % 3)) {
														return (
															<div>
																<div key={teamJson[index].id} className="team-box">{teamJson[index].name} <img alt="img" src={teamJson[index].img} /></div>
																<div key={teamJson[index + 1].id} className="team-box">{teamJson[index + 1].name} <img alt="img" src={teamJson[index + 1].img} /></div>
																<div key={teamJson[index + 2].id} className="team-box">{teamJson[index + 2].name} <img alt="img" src={teamJson[index + 2].img} /></div>
															</div>
														);
													}
												})}
											</OwlCarousel>
										)}
									</div>
								</div>
							</div>
							<FormPopup />
							<h5><Link to={'#EuquireSec'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Or, Use this form to share your requirements.<span>Get guaranteed response within 8 Hrs.</span></Link></h5>
						</div>

						<div className="why-sec">
							<div className="container">
								<div className="row">
									<div className="col-lg-4 col-md-4" >
										{chooseJson2 && chooseJson2.map((Choosejson2S, index) => {
											return (
												(index === 0) ?
													<>
														<h3>Why Choose <span>iQuinceSOFT?</span></h3>
														<p key={index} dangerouslySetInnerHTML={{ __html: Choosejson2S.content }}></p>
														<div key={index} className="tech-box dd">
															<div className="tech-dot"></div>
															<h6>Corporate Social Responsibility</h6>
															<img alt="img" width="100%" src={Choosejson2S.img} />
														</div>
													</>
													:
													<div key={index} className="tech-box dd-1">
														<div key={index} className="tech-dot"></div>
														<img height="60px" alt="img" src={Choosejson2S.img} />
														<h4>A decade of dedication</h4>
													</div>

											);
										})}
									</div>

									<div className="col-lg-8 col-md-8">
										<OwlCarousel options={whySlide}>
											<div>
												<div className="tech-box dd-1 tech-box-color">
													<div className="tech-dot"></div>
													<img height="60px" alt="img" src={Star} />
													<h4>150 + 5-Star Reviews</h4>
												</div>

												<div className="tech-box dd-1">
													<div className="tech-dot"></div>
													<img height="60px" alt="img" src={Timer} />
													<h4>Time-bound delivery</h4>
												</div>
												<div className="tech-box dd-1 tech-box-color">
													<div className="tech-dot"></div>
													<img height="60px" alt="img" src={Developer2} />
													<h4>Top 3% Developers</h4>
												</div>
											</div>
											<div>
												<div className="tech-box dd-1">
													<div className="tech-dot"></div>
													<img height="60px" alt="img" src={project} />
													<h4>Unparalleled Support (Post-delivery)</h4>
												</div>
												<div className="tech-box dd-1 tech-box-color">
													<div className="tech-dot"></div>
													<img height="60px" alt="img" src={Launch} />
													<h4>20,000 + projects delivered successfully</h4>
												</div>
												<div className="tech-box dd-1">
													<div className="tech-dot"></div>
													<img height="60px" alt="img" src={result} />
													<h4>Results that matter</h4>
												</div>
											</div>
										</OwlCarousel>
										{/* <OwlCarousel options={whySlide}>
											<div>
												<div className="tech-box dd-1">
													<div className="tech-dot"></div>
													<img height="60px" alt="img" src={Star} />
													<h4>150 + 5-Star Reviews</h4>
												</div>
											</div>
											<div>
												<div className="tech-box dd-1">
													<div className="tech-dot"></div>
													<img height="60px" alt="img" src={Star} />
													<h4>150 + 5-Star Reviews</h4>
												</div>

											</div>
										</OwlCarousel> */}
										{/* <div className="tech-box dd">
											<div className="tech-dot"></div>
											<img alt="img" width="100%" src={whyVd} />
										</div> */}
									</div>

								</div>
							</div>
							<FormPopup />
							<h5><Link to={'#EuquireSec'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Or, Use this form to share your requirements.<span>Get guaranteed response within 8 Hrs.</span></Link></h5>
						</div>

						<div className="career-sec">
							<div className="container">
								<div className="row">
									<div className="col-lg-7 col-md-9" >
										{careerJson.length && careerJson.map((careerJsons, index) => {
											return (
												<div key={index}>
													<h3>{careerJsons.name}</h3>
													<p dangerouslySetInnerHTML={{ __html: careerJsons.content }}></p>
													<Link to={'/careers'}><img alt="img" src={arrow3} />search and apply</Link>
												</div>
											);
										})}
									</div>
								</div>
							</div>
						</div>

						<ReviewSec />

						<EuquireSec />

						<AwardSec />

						<Footer />
					</ErrorBoundary>
				</>
		);
	}
}

export default Home;