
import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';
import FormPopup from '../container/FormPopup';
import ReviewSec from '../container/ReviewSec';
import EuquireSec from '../container/EuquireSec';
import AwardSec from '../container/AwardSec';
import { Helmet } from "react-helmet";
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';
import { AboutJson } from '../json/aboutJson';

import arrow2 from '../images/arrow2.png';
import storyLogo from '../images/story-logo.png';
import storyLogo1 from '../images/story-logo1.png';
import storyLogo2 from '../images/story-logo2.png';
import priImg from '../images/pri-img.png';
import priImg1 from '../images/pri-img1.png';
import priMob from '../images/pri-mob.png';
import unsplash1 from '../images/unsplash1.png'
import unsplash2 from '../images/unsplash2.png'
import unsplash6 from '../images/unsplash6.png'
import story from '../images/story-img.jpg'
import { HashLink as Link } from 'react-router-hash-link';
import priMob1 from '../images/pri-mob1.png';
import { TailSpin } from 'react-loader-spinner'

class About extends Component {

	constructor(props) {
		super(props)
		this.state = {
			ContentData: [],
			Storyjson: [],
			Helpjson: [],
			Officejson: [],
			Culturejson: [],
			Loading: true,
		}
	}

	componentDidMount() {
		AboutJson.getAbout().then((data, err) => {
			if (!err) {
				this.setState({
					ContentData: data,
					Loading: false,


				});
			}
		});
		AboutJson.getStory().then((story, err) => {
			if (!err) {
				this.setState({
					Storyjson: story,
					Loading: false,


				});
			}
		});
		AboutJson.gethelp().then((help, err) => {
			if (!err) {
				this.setState({
					Helpjson: help,
					Loading: false,


				});
			}
		});
		AboutJson.getoffice().then((office, err) => {
			if (!err) {
				this.setState({
					Officejson: office,
					Loading: false,


				});
			}
		});
		AboutJson.getCulture().then((culture, err) => {
			if (!err) {
				this.setState({
					Culturejson: culture,
					Loading: false,


				});
			}
		});
	}


	render() {
		const { ContentData, Storyjson, Helpjson, Officejson, Culturejson } = this.state;
		const officeSlide = {
			items: 1,
			responsive: {
				480: { items: 1 },
				320: { items: 1, }
			},
			loop: true,
			autoplay: true
		};

		const culture = {
			items: 4,
			responsive: {
				768: { items: 4 },
				480: { items: 1 },
				320: { items: 1, }
			},
			loop: true
		};

		return (
			this.state.Loading ? <div className="spinner"><TailSpin color="#00ccff" height={80} width={80} /></div> :
				<>
					<Header headerClass={'about-head'} />
					<Helmet>
						<title>About IquinceSoft | About us
						</title>
						<meta name="discription" content="India’s most valuable and customers oriented company established with the vision of managing long-lasting relationships and builds robust business solutions. Visit us!" />
					</Helmet>


					<div div className="about-banner" >
						<div className="about-box">
							<div className="container">
								<div className="row">
									<div className="col-lg-6 col-md-9">
										{Helpjson && Helpjson.map(HelpjsonS => {
											return (
												<>
													{HelpjsonS.name === 'Heading' ? <h1 dangerouslySetInnerHTML={{ __html: HelpjsonS.content }}></h1> : null}
													{HelpjsonS.name === 'Paragraph' ? <p dangerouslySetInnerHTML={{ __html: HelpjsonS.content }}></p> : null}
												</>
											);
										})
										}
										<Link to={'#story'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}><h5> <img alt="img" src={arrow2} />About us</h5></Link>
									</div>
								</div>
							</div>
						</div>
						{Helpjson && Helpjson.map(HelpjsonS => {
							return (
								<>
									{HelpjsonS.name === 'Background' ?
										<>
											<img alt="img" className="abt-img" width="100%" src={HelpjsonS.img} />
											<img alt="img" className="abt-mob" width="100%" src={HelpjsonS.img} />
										</> : null
									}
								</>
							);
						})
						}
					</div>
					<div>

					</div>


					<div className="story-sec">
						<div className="container">
							<div className="row">
								<div className="col-lg-1"></div>
								<div className="col-lg-6 col-md-7 sty-sec">
									<h4>The Story</h4>
									<h3>Get to know us</h3>
									<div className="row">
										{Storyjson && Storyjson.map(StoryjsonS => {
											return (
												<>
													{(StoryjsonS.name === 'img-1') ? <div className="col-lg-6 col-md-6"><img alt="img" width="100%" src={StoryjsonS.img} /></div> : null}
													{(StoryjsonS.name === 'img-2') ? <div className="col-lg-6 col-md-6"><img alt="img" width="100%" src={StoryjsonS.img} /></div> : null}

												</>
											);
										})}
									</div>
									<div className="row">
										{Storyjson && Storyjson.map(StoryjsonS => {
											return (
												<>
													{StoryjsonS.name === 'img-3' ?
														<><div className="col-lg-1 col-md-1"></div>
															<div className="col-lg-10 col-md-10"><img alt="img" width="100%" src={StoryjsonS.img} /></div></>
														: null
													}
												</>
											);
										})}
									</div>
									<div className="row">
										{Storyjson && Storyjson.map(StoryjsonS => {
											return (
												<>
													{StoryjsonS.name === 'img-4' ?
														<><div className="col-lg-6 col-md-6"></div>
															<div className="col-lg-6 col-md-6"><img alt="img" width="100%" src={StoryjsonS.img} /></div></>
														: null
													}
												</>
											);
										})}
									</div>
									<div className="sty-logo"><img alt="img" src={storyLogo} /> <img alt="img" src={storyLogo1} /> <img alt="img" src={storyLogo2} /></div>
								</div>

								<div className="col-lg-4 col-md-5">
									<ul >
										{Storyjson && Storyjson.map(StoryjsonS => {
											return (
												<>
													{StoryjsonS.content === '' ? null : <li><span>{StoryjsonS.name}</span> <p dangerouslySetInnerHTML={{ __html: StoryjsonS.content }}></p></li>}
												</>
											);
										})}
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div className="about-txt story-sec" id="story">
						<div className="container">
							<h4 className="container-h6">Creating Opportunities</h4>
							<div className="row">
								<div className="col-lg-6 col-md-5">
									<h1>Our Story</h1>
									<h4>"The journey of a thousand miles begins with one step." Lao Tzu.</h4>
									<p>This quote by Lao Tzu defines How one step towards your vision can help you write the stories of success on the canvas of hard hitting realities with the scorching heat of struggles.
										iQuinceSoft is a story of an ordinary man with some extra-ordinary dreams in his eyes. A resident of a Tier III town with an intent to serve his town with Jobs, Infrastructure and Economic support. iQuinceSoft is a story of shaping dreams into reality with precise thinking, goal orientation and hardwork. what a product manager from a Tier III town thinks, observes, and visualizes to offer jobs to the residents and make them more empowered as compared to Tier I towns. Hence, it took an initial step on 27th June 2012. iQuinceSoft came into existence on the ground, and Mr. Lakhendra Singh, our CEO, made it a reality and serve European and American clients with the help of a local pool of talent and made them satisfactorily pleasant with the business results.</p>
									<p>Hence, Mr. Lakhendra envisioned setting up a process-oriented web and mobile development agency. The vision to set up this agency was to offer world-level technological and business solutions.</p>
									<p>Despite hardships and struggles, Mr.Lakhendra kept pushing back the difficulties. Finally, he made it a reality to hit the competition, and today, iQuinceSoft, under the visionary leadership of Mr. Lakhendra Singh, is delivering S.M.A.R.T. solutions to European and American Clients. As of now, iQuinceSoft has delivered more than 3000+ projects successfully. We are highly rated on Clutch and many other stringent rating agencies globally.</p>
									<p>The environment is another aspect of sheer concern and care for Mr.Singh as he has planted more than 905 trees. iQuinceSoft is not just a company to make profits. It is a pledge to serve the community by considering multiple factors. Trees and Plantation drives are a way to help the purpose beautifully.</p>
									<p>As of now, iQuinceSoft is a team derived from Creativity and brilliance. We make the world of the web a better place to design, develop and deploy brilliant business solutions. We do value-addition to your business propositions and products. We adhere to a process that is agile and unique. We customize tailor-made software and web solutions that add value and meet the business needs.</p>
								</div>


								<div className="col-lg-6 col-md-7 sty-sec">
									<div className="row">
										<div className="col-lg-6 col-md-6"><img alt="img" width="100%" src={unsplash1} /></div>
										<div className="col-lg-6 col-md-6"><img alt="img" width="100%" src={unsplash2} /></div>
									</div>
									<div className="row">
										<div className="col-lg-1 col-md-1"></div>
										<div className="col-lg-10 col-md-10"><img alt="img" width="100%" src={story} /></div>
									</div>
									<div className="row">
										<div className="col-lg-6 col-md-6"></div>
										<div className="col-lg-6 col-md-6"><img alt="img" width="100%" src={unsplash6} /></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="culture-sec web-sec">
						<div className="container meet-sec">
							<h3>iQuinceSoft Values</h3>
							<div className="row">
								<div className="col-lg-1"></div>
								<div className="col-lg-10 col-md-12" >
									<OwlCarousel options={culture}>
										<div className="cult-box">
											<div class="tech-dot"></div>
											<h4>Philosophy</h4>
											<p>We believe in delivering software solutions that can serve you with a sense of creative excellence and agile development. We provide next-level software solutions that can ease your business process and help you excel in a more relieving way. </p>
										</div>

										<div className="cult-box">
											<div class="tech-dot"></div>
											<h4>Mission</h4>
											<p>We strive to achieve a position of a global leader in the world of IT-enabled business solutions and services. </p>
										</div>

										<div className="cult-box">
											<div class="tech-dot"></div>
											<h4>Vision</h4>
											<p>iQuinceSoft is a visionary dream that manages long-lasting relationships and builds robust business solutions. This created a win-win situation for our clients and us. We tend to generate and provide ample career opportunities and make a significant change in the Quality of Life of people. </p>
										</div>

										<div className="cult-box">
											<div class="tech-dot"></div>
											<h4>Core Values</h4>
											<p>We understand our clients and their needs. That is why we deliver what is expected of us and earn a mutual relationship of respect and satisfaction. We add value to create business opportunities and strengthen business relationships. </p>
										</div>

										<div className="cult-box">
											<div class="tech-dot"></div>
											<h4>Quality Management</h4>
											<p>We do regular quality checks before delivering any project. We tend to improve our business process and the critical elements. We focus on testing-enabled solutions to offer you the utmost satisfaction and value-added services. </p>
										</div>
									</OwlCarousel>

									<div className="row">
										<div className="col-lg-4 col-md-4">
											<h4>Philosophy</h4>
											<p>We believe in delivering software solutions that can serve you with a sense of creative excellence and agile development. We provide next-level software solutions that can ease your business process and help you excel in a more relieving way. </p>
										</div>

										<div className="col-lg-4 col-md-4">
											<h4>Mission</h4>
											<p>We strive to achieve a position of a global leader in the world of IT-enabled business solutions and services.
											</p>
										</div>

										<div className="col-lg-4 col-md-4">
											<h4>Vision</h4>
											<p>iQuinceSoft is a visionary dream that manages long-lasting relationships and builds robust business solutions. This created a win-win situation for our clients and us. We tend to generate and provide ample career opportunities and make a significant change in the Quality of Life of people. </p>
										</div>

										<div className="col-lg-6 col-md-4">
											<h4>Core Values</h4>
											<p>We understand our clients and their needs. That is why we deliver what is expected of us and earn a mutual relationship of respect and satisfaction. We add value to create business opportunities and strengthen business relationships. </p>
										</div>

										<div className="col-lg-6 col-md-4">
											<h4>Quality Management</h4>
											<p>We do regular quality checks before delivering any project. We tend to improve our business process and the critical elements. We focus on testing-enabled solutions to offer you the utmost satisfaction and value-added services. </p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="meet-sec">
						<h4>Leadership Team</h4>
						<h3>Meet the people who make it happen</h3>
						<div className="container">
							<div className="row">

								{ContentData && ContentData.map(ContentDatas => {
									return (
										<div className="col-lg-2 col-md-3" key={ContentDatas.id}><img alt="img" src={ContentDatas.img} /> <h5><span>{ContentDatas.name}</span> Leadership Team</h5></div>
									);
								})}

							</div>
						</div>
						<Link to={"#"} >Meet the whole team</Link>
						<h6><span>The Office</span> Step inside our headquarters</h6>
					</div>

					<div className="office-sec">
						<div className="container">
							<div className="row">
								<div className="col-lg-12 col-md-12">
									{Officejson.length && (
										<OwlCarousel options={officeSlide}>
											{Officejson.map(OfficejsonS => {
												return (
													<>
														<div>
															<h3 dangerouslySetInnerHTML={{ __html: OfficejsonS.name }}></h3>
															<img alt="img" width="100%" src={OfficejsonS.img} />
															<p dangerouslySetInnerHTML={{ __html: OfficejsonS.content }}></p>
														</div>

														<div>
															<h3 dangerouslySetInnerHTML={{ __html: OfficejsonS.name }}></h3>
															<img alt="img" width="100%" src={OfficejsonS.img} />
															<p dangerouslySetInnerHTML={{ __html: OfficejsonS.content }}></p>
														</div>

														<div>
															<h3 dangerouslySetInnerHTML={{ __html: OfficejsonS.name }}></h3>
															<img alt="img" width="100%" src={OfficejsonS.img} />
															<p dangerouslySetInnerHTML={{ __html: OfficejsonS.content }}></p>
														</div>

													</>
												);
											})}
										</OwlCarousel>
									)}
								</div>
								{Officejson && Officejson.map((OfficejsonS, index) => {
									return (
										(index % 2 === 0) ?
											<>
												<div className="col-lg-6 col-md-6 off-txt" key={OfficejsonS.id}>
													<h3 dangerouslySetInnerHTML={{ __html: OfficejsonS.name }}></h3>
													<p dangerouslySetInnerHTML={{ __html: OfficejsonS.content }}></p>
												</div>
												<div className="col-lg-6 col-md-6"><img alt="img" width="100%" src={OfficejsonS.img} /></div>
											</>
											:
											<>
												<div className="col-lg-6 col-md-6"><img alt="img" width="100%" src={OfficejsonS.img} /></div>
												<div className="col-lg-6 col-md-6 off-txt1" >
													<h3 dangerouslySetInnerHTML={{ __html: OfficejsonS.name }}></h3>
													<p dangerouslySetInnerHTML={{ __html: OfficejsonS.content }}></p>
												</div>
											</>

									);
								})}

							</div>
						</div>
					</div>

					<div className="price-sec">
						<h3>Pricing Models</h3>
						<div className="container">
							<div className="row">
								<div className="col-lg-6 col-md-6" ><img alt="img" className="pri-desk" src={priImg} /> <img alt="img" className="pri-mob" src={priMob} /> <h4>Dedicated <span>Hiring</span></h4></div>
								<div className="col-lg-6 col-md-6" ><img alt="img" className="pri-desk" src={priImg1} /> <img alt="img" className="pri-mob" src={priMob1} /> <h4>Fixed Cost <span>Projects</span></h4></div>
							</div>
						</div>
						<FormPopup />
						<h5><Link to={'#EuquireSec'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Or, Use this form to share your requirements.<span>Get guaranteed response within 8 Hrs.</span></Link></h5>
					</div>

					<div className="culture-sec" >
						<h3>Culture</h3>
						<div className="container">
							<div className="row">
								<div className="col-lg-12 col-md-12">
									{Culturejson.length && (
										<OwlCarousel options={culture}>
											{Culturejson.map((CulturejsonS) => {
												return (
													<div key={CulturejsonS.id} className="cult-box">
														<div class="tech-dot"></div>
														<img alt="img" src={CulturejsonS.img} />
														<h4 dangerouslySetInnerHTML={{ __html: CulturejsonS.name }}></h4>
														<span dangerouslySetInnerHTML={{ __html: CulturejsonS.content }}></span>
													</div>
												);
											})}


										</OwlCarousel>
									)}
								</div>
							</div>
						</div>
					</div>

					<ReviewSec />

					<EuquireSec />

					<AwardSec />

					<Footer />
				</>
		);
	}
}

export default About;



