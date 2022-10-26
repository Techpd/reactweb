
import React, { Component } from 'react';

import award from '../images/award-img.png';
import award1 from '../images/award-img1.png';
import award2 from '../images/award-img2.png';
import award3 from '../images/award-img3.png';

class AwardSec extends Component {
	render() {
		return (
			<>
				<div className="award-sec">
					<h3>Recent Awards & Certifications</h3>
					<div className="container">
						<div className="row">
							<div className="col-lg-1"></div>
							<div className="col-lg-10 col-md-12">
								<ul>
									<li><img alt="img" src={award} /></li>
									<li><img alt="img" src={award1} /></li>
									<li><img alt="img" src={award2} /></li>
									<li><img alt="img" src={award3} /></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default AwardSec;