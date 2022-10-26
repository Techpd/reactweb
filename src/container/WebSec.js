
import React, { Component } from 'react';
import FormPopup from '../container/FormPopup';

import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';
import { HashLink as Link } from 'react-router-hash-link';

import webImg from '../images/web-icon.png';
import webImg1 from '../images/web-icon1.png';
import webImg2 from '../images/web-icon2.png';
import webImg3 from '../images/web-icon3.png';
import webImg4 from '../images/web-icon4.png';
import webImg5 from '../images/web-icon5.png';

class WebSec extends Component {
	render() {
		const culture = {
			items: 1,
			responsive: {
				480: { items: 2 },
				320: { items: 1, }
			},
			loop: true
		};

		return (
			<>
				<div className="culture-sec web-sec">
					<h3>Why iQuinceSoft?</h3>
					<div className="container">
						<div className="row">
							<div className="col-lg-1"></div>
							<div className="col-lg-10 col-md-12" >
								<OwlCarousel options={culture}>
									<div className="cult-box">
										<div class="tech-dot"></div>
										<img alt="img" src={webImg} />
										<h4>Reliable Services</h4>
										<p>Services that make your details 100% confidential and safe. You can bank on us.</p>
									</div>

									<div className="cult-box">
										<div class="tech-dot"></div>
										<img alt="img" src={webImg1} />
										<h4>Ratings and Reviews</h4>
										<p>Reviews and Ratings across the globe to validate what we speak of ourselves.</p>
									</div>

									<div className="cult-box">
										<div class="tech-dot"></div>
										<img alt="img" src={webImg2} />
										<h4>Best Talent Pool to offer:</h4>
										<p>We recruit the best. Our developers are highly skilled, up-to-date, and professionals who deliver what you expect out of them.</p>
									</div>

									<div className="cult-box">
										<div class="tech-dot"></div>
										<img alt="img" src={webImg3} />
										<h4>Best place to work for:</h4>
										<p>We provide a healthy and happy work environment to sustain, grow and achieve more. </p>
									</div>

									<div className="cult-box">
										<div class="tech-dot"></div>
										<img alt="img" src={webImg4} />
										<h4>AI-driven Workflow:</h4>
										<p>Overcome the issues before the chances of getting troubled by them. </p>
									</div>

									<div className="cult-box">
										<div class="tech-dot"></div>
										<img alt="img" src={webImg5} />
										<h4>Save – Time & Money:</h4>
										<p>We are iQuinceSoft. We put that extra mile of effort to save your time and cost.</p>
									</div>
								</OwlCarousel>

								<div className="row">
									<div className="col-lg-4 col-md-4">
										<img alt="img" src={webImg} />
										<h4>Reliable Services</h4>
										<p>Services that make your details 100% confidential and safe. You can bank on us.</p>
									</div>

									<div className="col-lg-4 col-md-4">
										<img alt="img" src={webImg1} />
										<h4>Ratings and Reviews</h4>
										<p>Reviews and Ratings across the globe to validate what we speak of ourselves.</p>
									</div>

									<div className="col-lg-4 col-md-4">
										<img alt="img" src={webImg2} />
										<h4>Best Talent Pool to offer</h4>
										<p>We recruit the best. Our developers are highly skilled, up-to-date, and professionals who deliver what you expect out of them.
										</p>
									</div>

									<div className="col-lg-4 col-md-4">
										<img alt="img" src={webImg3} />
										<h4>Best place to work for</h4>
										<p>We provide a healthy and happy work environment to sustain, grow and achieve more. </p>
									</div>

									<div className="col-lg-4 col-md-4">
										<img alt="img" src={webImg4} />
										<h4>AI-driven Workflow</h4>
										<p>Overcome the issues before the chances of getting troubled by them. </p>
									</div>

									<div className="col-lg-4 col-md-4">
										<img alt="img" src={webImg5} />
										<h4>Save – Time & Money</h4>
										<p>We are iQuinceSoft. We put that extra mile of effort to save your time and cost.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<FormPopup />
					<h5><Link to={'#EuquireSec'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Or, Use this form to share your requirements.<span>Get guaranteed response within 8 Hrs.</span></Link></h5>
				</div>
			</>
		);
	}
}

export default WebSec;