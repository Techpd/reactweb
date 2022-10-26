
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
                                        <img src={webImg} />
                                        <h4>100% in-house team</h4>
                                        <p>we have a dedicated and experienced team of web developers who comprehend your business needs and accordingly serve you optimal business solutions.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <img src={webImg1} />
                                        <h4>Technology Experts</h4>
                                        <p>we recruit the top 1% of the skilled developers</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <img src={webImg2} />
                                        <h4>Top Class Office Setup</h4>
                                        <p>one of the best workplaces and setup.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <img src={webImg3} />
                                        <h4>Reliable Services</h4>
                                        <p>Genuine 5-star reviews across the platforms.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <img src={webImg4} />
                                        <h4>Cost-effective offers</h4>
                                        <p>we serve you two ways: one, reduce the cost significantly. Two, improve the ROI.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <img src={webImg5} />
                                        <h4>AI-driven Workflow</h4>
                                        <p>resolve and dissolve the issues before they occur.</p>
                                    </div>
                                </OwlCarousel>

                                <div className="row">
                                    <div className="col-lg-4 col-md-4">
                                        <img src={webImg} />
                                        <h4>100% in-house team</h4>
                                        <p>we have a dedicated and experienced team of web developers who comprehend your business needs and accordingly serve you optimal business solutions.</p>
                                    </div>

                                    <div className="col-lg-4 col-md-4">
                                        <img src={webImg1} />
                                        <h4>Technology Experts</h4>
                                        <p>we recruit the top 1% of the skilled developers</p>
                                    </div>

                                    <div className="col-lg-4 col-md-4">
                                        <img src={webImg2} />
                                        <h4>Top Class Office Setup</h4>
                                        <p>one of the best workplaces and setup.</p>
                                    </div>

                                    <div className="col-lg-4 col-md-4">
                                        <img src={webImg3} />
                                        <h4>Reliable Services</h4>
                                        <p>Genuine 5-star reviews across the platforms.</p>
                                    </div>

                                    <div className="col-lg-4 col-md-4">
                                        <img src={webImg4} />
                                        <h4>Cost-effective offers</h4>
                                        <p>we serve you two ways: one, reduce the cost significantly. Two, improve the ROI.</p>
                                    </div>

                                    <div className="col-lg-4 col-md-4">
                                        <img src={webImg5} />
                                        <h4>AI-driven Workflow</h4>
                                        <p>resolve and dissolve the issues before they occur.</p>
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