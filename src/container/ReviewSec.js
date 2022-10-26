
import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';
import { Review } from '../json/review';
import { HashLink as Link } from 'react-router-hash-link';
import review1 from '../images/review-icon.png';
import review2 from '../images/review-icon1.png';
import review3 from '../images/review-icon2.png';
import review4 from '../images/review-icon3.png';

import { FaStar, FaQuoteRight } from 'react-icons/fa';

class ReviewSec extends Component {

	constructor(props) {
		super(props)
		this.state = {
			reviewJson: []
		}
	}

	componentDidMount() {
		Review.getReview().then((review, err) => {
			if (!err) {
				this.setState({
					reviewJson: review,
				});
			}
		});
	}

	render() {
		const { reviewJson } = this.state;
		const reviewSlide = {
			items: 3,
			responsive: {
				1200: { items: 3, },
				768: { items: 3 },
				480: { items: 2 },
				320: { items: 1, }
			},
			loop: true,
			autoplay: true
		};

		return (
			<>
				<div className="review-sec" >
					<h3>Great Reviews <span><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></span></h3>
					<h4>98 out of 100 of our customers have gave us a 5 Star Rating on Google & Clutch.</h4>
					<div className="container">
						<div className="row">
							<div className="col-lg-1"></div>
							<div className="col-lg-10 col-md-12">
								{reviewJson.length && (
									<OwlCarousel loop options={reviewSlide}>
										{reviewJson.map(reviewJsons => {
											return (
												<div key={reviewJsons.id} className="review-box">
													<img alt="img" src={reviewJsons.img} />
													<h5><span>{reviewJsons.name}</span> {reviewJsons.designation}</h5>
													<p id="akash-bhai" dangerouslySetInnerHTML={{ __html: reviewJsons.content }}></p>
													<div className="rw-icon"><FaQuoteRight /></div>
												</div>
											);
										})}
									</OwlCarousel>
								)}
							</div>
						</div>
					</div>
					<h6><Link to="#">Read more reviews </Link></h6>
					<ul>
						<li><img alt="img" src={review1} /></li>
						<li><img alt="img" src={review2} /></li>
						<li><img alt="img" src={review3} /></li>
						<li><img alt="img" src={review4} /></li>
					</ul>
					<Link class="book-btn" to="#">Book Appointment</Link>
				</div>
			</>
		);
	}
}

export default ReviewSec;