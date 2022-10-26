
import React, { Component } from 'react';
import FormPopup from '../container/FormPopup';
import { HashLink as Link } from 'react-router-hash-link';

import easy from '../images/easy-icon.svg';
import easy1 from '../images/easy-icon1.svg';

class EasySec extends Component {
	render() {
		return (
			<>
				<div className="easy-sec">
					<h3>Ease of selection – Variable Pricing to fit your Budget & Business</h3>
					<div className="container">
						<div className="row">
							<div className="col-lg-1"></div>
							<div className="col-lg-5 col-md-6" >
								<div className="easy-box">
									<img alt="img" src={easy} />
									<h4><span>Please send me a fixed Price Quote</span> Starting from</h4>
									<h6>$<span>20/</span>Hr</h6>
									<p>We serve you by keeping your details confidential at just $20/Hr. </p>
								</div>
							</div>

							<div className="col-lg-5 col-md-6" >
								<div className="easy-box">
									<img alt="img" src={easy1} />
									<h4><span>I need to hire a developer.</span> Starting from</h4>
									<h6>$<span>2400/</span>Month</h6>
									<p>We ensure you get what you need. Hire a dedicated web developer who’ll work as per your instruction for 8Hr/day and 160 hours per month with a monthly rolling contract.
										Save 25% over fixed pricing projects.</p>
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

export default EasySec;