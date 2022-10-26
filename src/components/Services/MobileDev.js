
import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Header from '../Header';
import Footer from '../Footer';
import FormPopup from '../../container/FormPopup';
import WorkSec from '../../container/WorkSec';
import EasySec from '../../container/EasySec';
import WebSec from '../../container/WebSec';
import ReviewSec from '../../container/ReviewSec';
import EuquireSec from '../../container/EuquireSec';
import AwardSec from '../../container/AwardSec';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';
import { PostCate } from '../../json/PostCate';
import 'react-accessible-accordion/dist/fancy-example.css';
import FAQ from '../../container/FAQ';
import AwardFormsec from '../../container/AwardFormsec';
import { TailSpin } from 'react-loader-spinner';
import Partner from '../../container/Partner';
import { Helmet } from "react-helmet";
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';

class Mobile_Developementjs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            MobileJson: [],
            Loading: true,
        }
    }

    componentDidMount() {
        PostCate.getMobile().then((Mobile, err) => {
            if (!err) {
                this.setState({
                    MobileJson: Mobile,
                    Loading: false,

                });
            }
        });
    }
    render() {
        const { MobileJson } = this.state;

        const culture = {
            items: 1,
            responsive: {
                480: { items: 2 },
                320: { items: 1, }
            },
            loop: true
        };

        return (
            this.state.Loading ? <div className="spinner"><TailSpin color="#00ccff" height={80} width={80} /></div> :
                <>
                    <Header headerClass={'serv-head'} />

                    <Helmet>
                        <title>Mobile App Development Company | App Development Services
                        </title>
                        <meta name="discription" content="Are you looking for mobile app Development Company in India that can ensure you the appealing and engaging apps?  iQuinceSoft is the name you can bank upon. Call us at +1 (347) 960-4166" />
                    </Helmet>

                    <div className="service-banner service-banner-cat">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-12" >
                                    <p>MOBILE APP DEVELOPMENT</p>
                                    <h1><strong>Persuasive, Intuitive and Converting Mobile Apps</strong></h1>
                                    <ul>
                                        <li>Mobile is the first gadget we use to seek information!Keep your web apps in sync with it for more traffic, sales and revenue.</li>
                                        <li>An industry with more than 258 billion users and $158 billion revenue, Mobile applications are the best way to reach your target audience with instant feedback and easy access to the global audience.</li>
                                    </ul>
                                </div>
                                <div className="col-lg-5 col-md-12" ><AwardFormsec /></div>
                            </div>
                        </div>
                    </div>

                    <div className="culture-sec cr-sec">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2"></div>
                                <div className="col-lg-8 col-md-12" >
                                    <h3>Why do you need Mobile Developement?</h3>
                                    <p>Immense market potential, Customer base and instant feedback with easy to access the global clientele makes mobile app development vital for your business and its growth.</p>
                                </div>

                                <OwlCarousel options={culture}>
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Accessible from different Platforms</h4>
                                        <p>Mobile apps are the mobile identity of a business with easy to access from any gadget and platform</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Promote Brand Recognition</h4>
                                        <p>Mobile Application is one of the best tool to promote branding. It helps people recall the brand fast with easy brand awareness and recognition</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Powerful Analytics</h4>
                                        <p>Mobile App offers an intuitive and robust interface that helps businesses. It provides an analytical report that is easy to understand by business owners.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Customer Support</h4>
                                        <p>Every online business prefers Mobile App. Customer support makes it most accessible across the globe. Mobile App customer support team will also support you in every issue. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Mobile App is fast</h4>
                                        <p>Fast and responsive e-commerce experience for online stores. This is a crucial benefit of Mobile App. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Facilitates Quick Customer Feedback </h4>
                                        <p>Mobile applications can help the business with instant customer feedbacks. Feedbacks can offer meaningful insights to improve and serve customers with more fruitful services </p>
                                    </div>


                                </OwlCarousel>


                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Accessible from different Platforms</h4>
                                        <p>Mobile apps are the mobile identity of a business with easy to access from any gadget and platform</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Promote Brand Recognition</h4>
                                        <p>Mobile Application is one of the best tool to promote branding. It helps people recall the brand fast with easy brand awareness and recognition</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Powerful Analytics</h4>
                                        <p>Mobile App offers an intuitive and robust interface that helps businesses. It provides an analytical report that is easy to understand by business owners.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Customer Support</h4>
                                        <p>Every online business prefers Mobile App. Customer support makes it most accessible across the globe. Mobile App customer support team will also support you in every issue. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Mobile App is fast</h4>
                                        <p>Fast and responsive e-commerce experience for online stores. This is a crucial benefit of Mobile App. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Facilitates Quick Customer Feedback </h4>
                                        <p>Mobile applications can help the business with instant customer feedbacks. Feedbacks can offer meaningful insights to improve and serve customers with more fruitful services </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="culture-sec web-sec">
                        <h3>Mobile App Services</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12" >
                                    <OwlCarousel options={culture}>


                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg1} /> */}
                                            <h4>API Integration</h4>
                                            <p>We manage every single facet of an online store with the help of API integration. We connect the PHP app to the Mobile App store with REST API.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg2} /> */}
                                            <h4>Mobile App Migration</h4>
                                            <p>We ensure the migration process is perfectly executed and there is no loss of any existing data, including orders, customer details and products. We offer flawless and straightforward migration for your current eCommerce store from any platform.</p>
                                        </div>



                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg4} /> */}
                                            <h4>Payment Gateway Integration</h4>
                                            <p>We add several secured payment gateways within your eCommerce portal. We offer your customer several gateways and carry out their shopping with easy check-out. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Hire Mobile App Developers</h4>
                                            <p>Hire iQuinceSoft Mobile App developers and save efforts, time and money significantly. Our developers work as per your instructions and contribute as an extended in-house team.</p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Post-Release Support</h4>
                                            <p>iQuinceSoft has a team that is obsessed with the post-release services. this enables us to engage in regular feedback and we work on our areas of improvement (if any)</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Mobile App Consulting</h4>
                                            <p>We offer need-based customized consulting services to help you grow with the growth of your business and improve sales. </p>
                                        </div>
                                    </OwlCarousel>

                                    <div className="row">


                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg1} /> */}
                                            <h4>API Integration</h4>
                                            <p>We manage every single facet of an online store with the help of API integration. We connect the PHP app to the Mobile App store with REST API.</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg2} /> */}
                                            <h4>Mobile App Migration</h4>
                                            <p>We ensure the migration process is perfectly executed and there is no loss of any existing data, including orders, customer details and products. We offer flawless and straightforward migration for your current eCommerce store from any platform.
                                            </p>
                                        </div>


                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg4} /> */}
                                            <h4>Payment Gateway Integration</h4>
                                            <p>We add several secured payment gateways within your eCommerce portal. We offer your customer several gateways and carry out their shopping with easy check-out. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Hire Mobile App Developers</h4>
                                            <p>Hire iQuinceSoft Mobile App developers and save efforts, time and money significantly. Our developers work as per your instructions and contribute as an extended in-house team.</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Post-Release Support</h4>
                                            <p>iQuinceSoft has a team that is obsessed with the post-release services. this enables us to engage in regular feedback and we work on our areas of improvement (if any)</p>
                                        </div>


                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Mobile App Consulting</h4>
                                            <p>We offer need-based customized consulting services to help you grow with the growth of your business and improve sales. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <FormPopup />
                        <h5><Link to={'#EuquireSec'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Or, Use this form to share your requirements.<span>Get guaranteed response within 8 Hrs.</span></Link></h5>
                    </div>

                    <Partner />

                    <EasySec />

                    <WebSec />

                    <WorkSec />

                    <div className="frequent-sec">
                        <h3>Frequently Asked Questions</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2 col-md-1"></div>
                                <div className="col-lg-8 col-md-10" >
                                    <Accordion allowZeroExpanded preExpanded={['a']}>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Why choose iQuinceSoft for your mobile app development services?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                We are process-centric people. We craft a process for your mobile app development that ensures high productivity and efficiency. iQuinceSoft ensures you get the future-proof solutions and offer top-notch mobile application development services.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                How much does it cost to develop a mobile app?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                The answer to this question is not straight, as the cost varies. It depends on the project complexity, development process, User interface designs, and the size of the app.
                                                For a precise quote, please get in touch with our team.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                How long does it take to develop an app?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                It depends on the tech stacks used and scopes with other varying factors. The usual time taken by the mobile app development process is 3 to 8 months.
                                                To slash down the time-to-market, iQuinceSoft can prioritize the features which focus on the core ones first.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Do you sign confidentiality agreements?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Yes. We do sign Non-Disclosure Agreements to keep your source code and project confidential.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                        <FormPopup />
                        <h5><Link to={'#EuquireSec'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Or, Use this form to share your requirements.<span>Get guaranteed response within 8 Hrs.</span></Link></h5>
                    </div>

                    <div className="culture-sec insight-sec">
                        <h3>Featured Insights</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <OwlCarousel options={culture}>
                                        {MobileJson && MobileJson.map(MobileJsonS => {
                                            return (
                                                <div className="cult-box">
                                                    <div class="tech-dot"></div>
                                                    <h4>{MobileJsonS.name}</h4>
                                                    <p dangerouslySetInnerHTML={{ __html: MobileJsonS.content.substr(0, 100) }}></p>
                                                    <Link to={`/PostPage/${MobileJsonS.slug}`} >READ MORE </Link>
                                                </div>
                                            );
                                        })}
                                    </OwlCarousel>

                                    <div className="row">
                                        {MobileJson && MobileJson.map((MobileJsonS, index) => {
                                            return (

                                                <div className="col-lg-4 col-md-4">
                                                    <div className="insight-box" key={MobileJsonS.id}>
                                                        <h4>{MobileJsonS.name}</h4>
                                                        <p dangerouslySetInnerHTML={{ __html: MobileJsonS.content.substr(0, 100) }}></p>
                                                        <Link to={`/PostPage/${MobileJsonS.slug}`} >READ MORE </Link>
                                                    </div>
                                                </div>

                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <FormPopup />
                        <h5><Link to={'#EuquireSec'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Or, Use this form to share your requirements.<span>Get guaranteed response within 8 Hrs.</span></Link></h5>
                    </div>

                    <ReviewSec />

                    <EuquireSec />

                    <AwardSec />

                    <Footer />
                </>
        );
    }
}

export default Mobile_Developementjs;

