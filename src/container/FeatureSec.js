
import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import icon from '../images/icon.png';
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';
import icon5 from '../images/icon5.png';
import icon6 from '../images/icon6.png';
import icon7 from '../images/icon7.png';
import icon8 from '../images/icon8.png';
import icon9 from '../images/icon9.png';

class FeatureSec extends Component {
	render() {
		return (
			<>
				<div className="feature-sec">
					<h3>Our Featured Clients</h3>
					<div className="container">
						<div className="row">
							<div className="col-lg-12 col-md-12">
								<ul>
									<li><Link to="#"><img alt="img" src={icon} /></Link></li>
									<li><Link to="#"><img alt="img" src={icon1} /></Link></li>
									<li><Link to="#"><img alt="img" src={icon2} /></Link></li>
									<li><Link to="#"><img alt="img" src={icon3} /></Link></li>
									<li><Link to="#"><img alt="img" src={icon4} /></Link></li>
									<li><Link to="#"><img alt="img" src={icon5} /></Link></li>
									<li><Link to="#"><img alt="img" src={icon6} /></Link></li>
									<li><Link to="#"><img alt="img" src={icon7} /></Link></li>
									<li><Link to="#"><img alt="img" src={icon8} /></Link></li>
									<li><Link to="#"><img alt="img" src={icon9} /></Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default FeatureSec;