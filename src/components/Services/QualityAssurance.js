
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
import AwardFormsec from '../../container/AwardFormsec';
import { TailSpin } from 'react-loader-spinner';
import Partner from '../../container/Partner';
import { Helmet } from "react-helmet";
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';


class QualityAssurance extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Quality_AssuranceJson: [],
            Loading: true,
        }
    }

    componentDidMount() {
        PostCate.getQuality_Assurance().then((Quality_Assurance, err) => {
            if (!err) {
                this.setState({
                    Quality_AssuranceJson: Quality_Assurance,
                    Loading: false,

                });
            }
        });
    }
    render() {
        const { Quality_AssuranceJson } = this.state;

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
                        <title>Quality Assurance (QA) in Software Testing
                        </title>
                        <meta name="discription" content="Hire the best QA testers to streamline your post development process. Get the best manual, web, app, user experience and integrated testing for optimized results. " />
                    </Helmet>

                    <div className="service-banner service-banner-cat">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-12" >
                                    <p>QUALITY ASSURANCE</p>
                                    <h1><strong>Hire the best Quality QA testers with the available options that suit your project needs </strong><br /></h1>
                                    <ul>
                                        <li>Hire the Offshore QA testers hourly, fixed cost, or full time. Use their skills to Optimize the Outcomes.</li>
                                        <li>QA Testing is a task of sheer talent and responsibility, Hire someone like iQuinceSoft!!</li>
                                    </ul>
                                </div>
                                <div className="col-lg-5 col-md-12" ><AwardFormsec /></div>
                            </div>
                        </div>
                    </div>



                    <div className="culture-sec web-sec">
                        <h3>Testing & QA Services</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12" >
                                    <OwlCarousel options={culture}>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>Offshore Software Testing & QA services</h4>
                                            <p>iQuinceSoft employs the best QA engineers across the aspects of software applications. We ensure our deliverables meet and exceed your expectations and are of the highest standards.
                                                Outsource your software testing, and QA needs to iQuinceSoft for the highest quality standards and time-bound delivery. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>Web App Testing</h4>
                                            <p>We leverage the best testing tools for web apps across browsers and devices. We trace and track the defects in all the aspects of functionality, interface, performance, security, usability, and accessibility. We ensure that your app functions as intended. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>Mobile App Testing</h4>
                                            <p>We test every line of code to excavate bugs. We help you roll out the products quickly. We can and have tried different mobile apps for performance, functionality, network connectivity, usability, and security. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>User Experience Testing</h4>
                                            <p>The testers from iQuinceSoft can ensure you easy-to-use experiences for the customers. We source the participants who meet your customer profiles, help execute the studies and give suggestions and recommendations to improve the customer experience and engagement.  </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>Manual Testing</h4>
                                            <p>We are the trained professionals who can ensure your apps have compliant functions, security features, APIs, installation procedures, and the related aspects of functionality with proper specifications and meet your customer needs. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>Automated Testing</h4>
                                            <p>Hire our extensively trained trams from iQuinceSoft for in-depth knowledge of the testing tools to automate the tests, create automated test scripts and develop new test cases. We ensure you get an app with the consistent quality assurance you always look for.</p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>Regression Testing</h4>
                                            <p>We ensure your apps are defect-free post modifications, enhancements, and changes in the configurations. Our trained team of quality testers provides maximum test coverage to ensure the changes do not impede the smooth functioning of the applications.  </p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>Integration Testing</h4>
                                            <p>We leverage our top-down and bottom-up methods to test the smooth integration of the different modules in your app. We ensure seamless communication, keeping budget and time constraints in mind. </p>
                                        </div>

                                    </OwlCarousel>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            <h4>Offshore Software Testing & QA services</h4>
                                            <p>iQuinceSoft employs the best QA engineers across the aspects of software applications. We ensure our deliverables meet and exceed your expectations and are of the highest standards.
                                                Outsource your software testing, and QA needs to iQuinceSoft for the highest quality standards and time-bound delivery. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>Web App Testing</h4>
                                            <p>We leverage the best testing tools for web apps across browsers and devices. We trace and track the defects in all the aspects of functionality, interface, performance, security, usability, and accessibility. We ensure that your app functions as intended. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>Mobile App Testing</h4>
                                            <p>We test every line of code to excavate bugs. We help you roll out the products quickly. We can and have tried different mobile apps for performance, functionality, network connectivity, usability, and security.
                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>User Experience Testing</h4>
                                            <p>The testers from iQuinceSoft can ensure you easy-to-use experiences for the customers. We source the participants who meet your customer profiles, help execute the studies and give suggestions and recommendations to improve the customer experience and engagement.  </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>Manual Testing</h4>
                                            <p>We are the trained professionals who can ensure your apps have compliant functions, security features, APIs, installation procedures, and the related aspects of functionality with proper specifications and meet your customer needs. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>Automated Testing</h4>
                                            <p>Hire our extensively trained trams from iQuinceSoft for in-depth knowledge of the testing tools to automate the tests, create automated test scripts and develop new test cases. We ensure you get an app with the consistent quality assurance you always look for.</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>Regression Testing</h4>
                                            <p>We ensure your apps are defect-free post modifications, enhancements, and changes in the configurations. Our trained team of quality testers provides maximum test coverage to ensure the changes do not impede the smooth functioning of the applications.  </p>
                                        </div>
                                        <div className="col-lg-4 col-md-4"></div>
                                        <div className="col-lg-4 col-md-4">
                                            <h4>Integration Testing</h4>
                                            <p>We leverage our top-down and bottom-up methods to test the smooth integration of the different modules in your app. We ensure seamless communication, keeping budget and time constraints in mind. </p>
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
                                <div className="col-lg-8 col-md-10">
                                    <Accordion allowZeroExpanded preExpanded={['a']}>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                What type of software testing services do you offer?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                We offer a wide array of testing services, including functional testing, integration testing, compatibility testing, regression testing, usability testing, automated testing, and performance testing.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                As a software development company, do you sign NDAs?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Yes. We sign non-disclosure agreements to protect your business information.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                How to trust a reliable testing & QA services company?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                You can check the third-party reviews on third-party platforms like clutch and Google. You can also scroll through their social media pages to dig deeper into their profile.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                How to get started with outsourced software testing?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                • Follow the basic steps to the road of a managed outsourced software testing:
                                                • Streamline your workflow.
                                                • Choose a trusted vendor who is skilled.
                                                • Motivate your development team to collaborate with the external test team.
                                                • Assign a senior QA manager to cooperate with the vendor.
                                                • Assess the vendor performance regularly.
                                                • Handle outsourcing concerns like unexpected software upgrades efficiently.
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
                                        {Quality_AssuranceJson && Quality_AssuranceJson.map(Quality_AssuranceJsonS => {
                                            return (
                                                <div className="cult-box">
                                                    <div class="tech-dot"></div>
                                                    <h4>{Quality_AssuranceJsonS.name}</h4>
                                                    <p dangerouslySetInnerHTML={{ __html: Quality_AssuranceJsonS.content.substr(0, 100) }}></p>
                                                    <Link to={`/PostPage/${Quality_AssuranceJsonS.slug}`} >READ MORE </Link>
                                                </div>
                                            );
                                        })}
                                    </OwlCarousel>

                                    <div className="row">
                                        {Quality_AssuranceJson && Quality_AssuranceJson.map((Quality_AssuranceJsonS, index) => {
                                            return (

                                                <div className="col-lg-4 col-md-4">
                                                    <div className="insight-box" key={Quality_AssuranceJsonS.id}>
                                                        <h4>{Quality_AssuranceJsonS.name}</h4>
                                                        <p dangerouslySetInnerHTML={{ __html: Quality_AssuranceJsonS.content.substr(0, 100) }}></p>
                                                        <Link to={`/PostPage/${Quality_AssuranceJsonS.slug}`} >READ MORE </Link>
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

export default QualityAssurance;