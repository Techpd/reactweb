import React, { Component } from 'react';
import FormPopup from './FormPopup';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import { HashLink as Link } from 'react-router-hash-link';
import handshake from '../../src/images/handshake.png';

class partner extends Component {
    render() {
        const servSlide = {
            items: 1,
            responsive: {
                320: { items: 1, }
            },
            loop: true
        };
        return (
            <div className="serv-sec serv-sec-2">
                <div className="container">
                    <h2 className="heading-2">Partner with iQuinceSoft</h2>
                    <OwlCarousel options={servSlide}>
                        <div className="serv-txt">
                            <h4><span></span> Startups</h4>
                            <p>Support and guidance are crucial to assist and help startups. We help you develop your small-scale startups into funded unicorns. We hold you on this journey to successful unicorns from the ideation of startups.
                                We help you curate your idea with the help of design and development till the product launch and scale your business.
                            </p>
                        </div>

                        <div className="serv-txt">
                            <h4><span></span> Small Businesses</h4>
                            <p>We are blurring the physical and digital boundaries, making it Phygital. We help you with the development skills and scale your business to newer heights of success.  </p>
                        </div>

                        <div className="serv-txt">
                            <h4><span></span> Enterprise</h4>
                            <p>We ensure better outcomes with a smooth automated process and a significant reduction in the cost and solutions that derive business insights. Thus, we help you with scaling your business. </p>
                        </div>

                        <div className="serv-txt">
                            <h4><span></span> Software Companies</h4>
                            <p>We comprehend the need for a talent pool of skilled workforce. We offer dedicated developer teams to help, assist and support skilled resources. Thus, we address the need for a skilled workforce.  </p>
                        </div>
                    </OwlCarousel>

                    <div className="row" >
                        <div className="col-lg-6 col-md-6">
                            <div className="serv-txt">
                                <h4><span className="serv-sec-span"></span> Startups</h4>
                                <p>Startups fail because of the lack of appropriate support and valuable insights. We help you at every step of your journey to Success. From the ideation to strategic planning to designing and development until the product launch, and help you make it a huge success. </p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="serv-txt">
                                <h4><span className="serv-sec-span"></span> Small Businesses</h4>
                                <p>We are blurring the physical and digital boundaries, making it Phygital. We help you with the development skills and scale your business to newer heights of success.  </p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="serv-txt">
                                <h4><span className="serv-sec-span"></span> Enterprise</h4>
                                <p>We ensure better outcomes with a smooth automated process and a significant reduction in the cost and solutions that derive business insights. Thus, we help you with scaling your business. </p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="serv-txt">
                                <h4><span className="serv-sec-span"></span> Software Companies</h4>
                                <p>We comprehend the need for a talent pool of skilled workforce. We offer dedicated developer teams to help, assist and support skilled resources. Thus, we address the need for a skilled workforce. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <FormPopup />
                <h5><Link to={'#EuquireSec'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Or, Use this form to share your requirements.<span>Get guaranteed response within 8 Hrs.</span></Link></h5>
            </div>

        )
    }
}
export default partner;