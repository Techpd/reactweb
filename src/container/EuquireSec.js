
import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Euquire } from '../json/euquire';
import formImg from '../images/form-img.png';
import axios from 'axios';
import { FaRegUserCircle, FaRegEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaEnvelopeOpenText } from 'react-icons/fa';

class EuquireSec extends Component {

	constructor(props) {
		super(props)
		this.state = {
			euquireJson: [],
			name: "",
			email: "",
			number: "",
			Company: "",
			message: "",
			image: {},
		}
	}

	componentDidMount() {
		Euquire.getEuquire().then((euquire, err) => {
			if (!err) {
				this.setState({
					euquireJson: euquire,
				});
			}
		});
	}
	submitForm = e => {

		if (this.state.name === '' || this.state.email === '' || this.state.number === '' || this.state.Company === '' || this.state.message === '') {
			alert("some field are missing filled it");
		}
		else {
			let formData = new FormData()
			formData.set("your-name", this.state.name)
			formData.set("your-email", this.state.email)
			formData.set("number", this.state.number)
			formData.set("Companyname", this.state.Company)
			formData.set("your-message", this.state.message)
			formData.set("Image", this.state.image)
			// formdata.append("Image", { uri: photo.uri, name: 'image.jpg', type: 'image/jpeg' })
			axios.post('https://dev.iquincesoft.com/iqsandbox/wp-json/contact-form-7/v1/contact-forms/1675/feedback', formData, {
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
							Company: "",
							message: "",
							image: {},
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
		const { euquireJson } = this.state;
		return (
			<>
				<div className="euquire-sec" id="EuquireSec">
					<div className="container">
						<div className="row" >
							<div className="col-lg-1"></div>
							<div className="col-lg-5 col-md-6">
								<div className="form-box">
									{euquireJson.length && euquireJson.map(euquireJsons => {
										return (
											<div key={euquireJsons.id}>
												<h3 dangerouslySetInnerHTML={{ __html: euquireJsons.name }}></h3>
												<p dangerouslySetInnerHTML={{ __html: euquireJsons.content }}></p>
											</div>
										);
									})}
									<ul>
										<li><img alt="img" src={formImg} /> Adam</li>
										<li><img alt="img" src={formImg} /> Boyle</li>
										<li><img alt="img" src={formImg} /> Clyde</li>
										<li><img alt="img" src={formImg} /> Donny</li>
									</ul>
								</div>
							</div>

							<div className="col-lg-5 col-md-6">
								<form>
									<div className="in-box"><FaRegUserCircle /> <input onChange={e => this.setState({ name: e.target.value })} className="box" type="text" name="" placeholder="Name" /></div>
									<div className="in-box"><FaRegEnvelope /> <input onChange={e => this.setState({ email: e.target.value })} className="box" type="text" name="" placeholder="Work e-Mail*" /></div>
									<div className="in-box"><FaPhoneAlt /> <input onChange={e => this.setState({ number: e.target.value })} className="box" type="text" name="" placeholder="Phone Number" /></div>
									<div className="in-box"><FaMapMarkerAlt /> <input onChange={e => this.setState({ Company: e.target.value })} className="box" type="text" name="" placeholder="Company" /></div>
									<div className="in-box"><FaEnvelopeOpenText /> <textarea onChange={e => this.setState({ message: e.target.value })} className="box" rows="3" placeholder="Message / Response*"></textarea></div>
									<label style={{ fontWeight: "600", borderBottom: "1px solid black" }} for="data">Attach files if any</label>
									<input style={{ visibility: "hidden" }} title="Choose a Resume please" id="data" name="" type="file" accept=".png, .jpg" placeholder="Attach files if any." onChange={this.fileSelectHandler} />
									<Link onClick={() => this.submitForm()} to="#">Enquire Now</Link>
								</form>
							</div>
						</div>
					</div>
				</div >
			</>
		);
	}
}

export default EuquireSec;