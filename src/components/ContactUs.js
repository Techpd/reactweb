
import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import contImg from '../images/Chris.png';
import contImg1 from '../images/cont-img1.jpg';
import contImg2 from '../images/cont-img2.jpg';
import contImg3 from '../images/cont-img3.jpg';
import contImg4 from '../images/cont-img4.jpg';
import contImg5 from '../images/cont-img5.jpg';
import contImg6 from '../images/cont-img6.jpg';
import axios from 'axios';
import { Helmet } from "react-helmet";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPinterest, FaYoutube, FaStar, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

class ContactUs extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			number: "",
			textarea: "",

		}
		// componentDidMount(){

		// }
	}
	submitform = (e) => {
		if (this.state.name === '' || this.state.email === '' || this.state.number === '' || this.state.textarea === '') {
			alert("some field are missing filled it");
		}
		else {
			let data = new FormData()
			data.set("your-name", this.state.name);
			data.set("number", this.state.number);
			data.set("email", this.state.email);
			data.set("your-message", this.state.textarea);
			axios.post('https://dev.iquincesoft.com/iqsandbox/wp-json/contact-form-7/v1/contact-forms/2002/feedback', data, {
				headers: {
					"content-type": "multipart/form-data",
				},
			})
				.then(res => {
					res.data.status === "mail_sent"
						? this.setState({
							name: "",
							email: "",
							number: "",
							textarea: "",
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
	render() {
		return (
			<>
				<Header headerClass={'case-head'} />

				<Helmet>
					<title>Contact US | iQuinceSoft
					</title>
					<meta name="discription" content="Get customized web solutions to attract, engage and convert your target audience into loyal customers with a web design company. Call us at (347) 960-4166)" />
				</Helmet>
				<div className="contact-sec">
					<div className="container">
						<div className="row">
							<div className="col-lg-7 col-md-7" >
								<h3>What do you want to achieve? <span>SELECT AN OPTION & FILL THE FORM BELOW</span></h3>
								<div className="row check-txt">
									<div className="col-lg-4 col-md-12"><input type="checkbox" name="" /> Build a Digital Product</div>
									<div className="col-lg-4 col-md-12"><input type="checkbox" name="" /> Speed up Development</div>
									<div className="col-lg-4 col-md-12"><input type="checkbox" name="" /> Optimize product usability</div>
									<div className="col-lg-4 col-md-12"><input type="checkbox" name="" /> Scale up a team</div>
									<div className="col-lg-4 col-md-12"><input type="checkbox" name="" /> Other</div>
								</div>

								<div className="in-box"><input className="box" type="text" onChange={(e) => this.setState({ name: e.target.value })} name="" placeholder="Your Name *" /></div>
								<div className="in-box"><input className="box" type="text" onChange={(e) => this.setState({ email: e.target.value })} name="" placeholder="Your e-Mail Address *" /></div>
								<div className="in-box"><input className="box" type="text" onChange={(e) => this.setState({ number: e.target.value })} name="" placeholder="Phone Number (Optional)" /></div>
								<div className="in-box"><textarea className="box" rows="3" onChange={(e) => this.setState({ textarea: e.target.value })} placeholder="Tell us about your project or the challenge you have *"></textarea></div>

								<div className="row">
									<div className="col-lg-5 col-md-12"><Link className="send-btn" onClick={() => this.submitform()} href="#">Send us a Message</Link></div>
									<div className="col-lg-7 col-md-12"><h5>Or contact us directly at <a href="mailto:info@iquincesoft.com">info@iquincesoft.com</a></h5></div>
								</div>
							</div>

							<div className="col-lg-5 col-md-5 cont-box">
								<img alt="img" src={contImg} />
								<h4>iQuinceSoft  exceeds my expectations  in every way. We are currently working on our 60th project.</h4>
								<FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
								<h6><span>Chris Tom Shack</span>  HealthSource Group</h6>
							</div>
						</div>
					</div>
				</div>

				<div className="case-txt cont-txt" >
					<h2>Our Offices</h2>
					<div className="container">
						<div className="row">
							<div className="col-lg-4 col-md-6">
								<img alt="img" width="100%" src={contImg1} />
								<div className="case-box">
									<h3>iQuincesoft India</h3>
									<p><FaMapMarkerAlt /> <span>NH-2 Agra Delhi Highway Mathura – 281001</span></p>
									<p><FaPhoneAlt /> <span><a href="tel:13479604166">+1 (347) 960-4166</a></span></p>
								</div>
							</div>

							<div className="col-lg-4 col-md-6">
								<img alt="img" width="100%" src={contImg2} />
								<div className="case-box">
									<h3>iQuincesoft Australia</h3>
									<p><FaMapMarkerAlt /> <span>8 Zeppelin Rd, Edmondson Park,
										NSW 2174</span></p>
									<p><FaPhoneAlt /> <span><a href="tel:13479604166">+1 (347) 960-4166</a></span></p>
								</div>
							</div>

							<div className="col-lg-4 col-md-6">
								<img alt="img" width="100%" src={contImg3} />
								<div className="case-box">
									<h3>iQuincesoft USA</h3>
									<p><FaMapMarkerAlt /> <span>1125, NE 125th St North Miami FL 33161</span></p>
									<p><FaPhoneAlt /> <span><a href="tel:13479604166">+1 (347) 960-4166</a></span></p>
								</div>
							</div>
						</div>
					</div>

					<div className="cont-social">
						<a href="https://www.facebook.com/iquincesoft"><FaFacebook /></a>
						<a href="https://twitter.com/iquincesoft"><FaTwitter /></a>
						<a href="https://www.instagram.com/iquincesoft"><FaInstagram /></a>
						<a href="https://www.linkedin.com/company/iquincesoft-consulting-services-pvt-ltd-/mycompany/"><FaLinkedin /></a>
						<a href="https://in.pinterest.com/iquincesoft/"><FaPinterest /></a>
						<a href="https://www.youtube.com/c/Iquincesoft"><FaYoutube /></a></div>
				</div>

				<Footer />
			</>
		);
	}
}

export default ContactUs;