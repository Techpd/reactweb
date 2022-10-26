
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


class IOSDev extends Component {
    constructor(props) {
        super(props)
        this.state = {
            IOSJson: [],
            Loading: true,
        }
    }

    componentDidMount() {
        PostCate.getIos().then((IOS, err) => {
            if (!err) {
                this.setState({
                    IOSJson: IOS,
                    Loading: false,

                });
            }
        });
    }
    render() {
        const { IOSJson } = this.state;

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
                        <title>Hire IOS Developers | App Developers
                        </title>
                        <meta name="discription" content="Want to Hire a Remote IOS Developer? Partner with iQuincesoft to hire skilled & qualified developers at your flexibility on hourly/monthly basis. Hire Now!" />
                    </Helmet>
                    <div className="service-banner service-banner-cat">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-12" >
                                    <p>IOS</p>
                                    <h1><strong>Hire vetted iOS developers for the apps that can sets you apart.</strong><br /></h1>
                                    <ul>
                                        <li>Hire dedicated offshore iOS experts from the house of trust, commitment, and time-bound delivery - iQuinceSoft.</li>
                                        <li>Get iOS apps to take your business to the next level of traffic, leads, and enhanced business opportunities.</li>
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
                                    <h3>iOS Application Development Services</h3>
                                    <p>iOS means unparalleled user experience. Catchy UI animations, split screens to swiping, multi-layered designs engage with the users and help the businesses deliver the incredible UI experience to their customers.</p>
                                </div>

                                <OwlCarousel options={culture}>
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Unbeatable Security</h4>
                                        <p>IOS as a platform is strong enough to offer security with top-notch QA standards. A stable and conducive environment makes app development safe and secure. Thus, it ensures better productive results. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Clean apps</h4>
                                        <p>IOS offers crisp and clean apps that ensure a fast, easy and better app designing experience. It would help if you had proficiency in Swift and Xcode to create easy, clean, and real-World iOS apps. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Quality Unparalleled</h4>
                                        <p>IOS do not allow those third-party plugins and add-ons that are substandard and have a question on quality. That is why businesses prefer iOS app development and improve the overall business results and productivity.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Small Size</h4>
                                        <p>One of the best features of iOS is that it needs bite-sized teams. Hence, one or two developers can build user-friendly and intuitive apps on iOS. No big teams are required.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Free iOS SDK</h4>
                                        <p>The free iOS Software Development Kit (SDK) makes it easy to design and develop apps. The developers can download and use iOS SDK and explore the frameworks like MapKit, PushKit, FoundationKit, UIKit, and GameKit.
                                        </p>
                                    </div>
                                </OwlCarousel>


                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Unbeatable Security</h4>
                                        <p>IOS as a platform is strong enough to offer security with top-notch QA standards. A stable and conducive environment makes app development safe and secure. Thus, it ensures better productive results. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Clean apps</h4>
                                        <p>IOS offers crisp and clean apps that ensure a fast, easy and better app designing experience. It would help if you had proficiency in Swift and Xcode to create easy, clean, and real-World iOS apps. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Quality Unparalleled</h4>
                                        <p>IOS do not allow those third-party plugins and add-ons that are substandard and have a question on quality. That is why businesses prefer iOS app development and improve the overall business results and productivity.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Small Size</h4>
                                        <p>One of the best features of iOS is that it needs bite-sized teams. Hence, one or two developers can build user-friendly and intuitive apps on iOS. No big teams are required. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Free iOS SDK</h4>
                                        <p>The free iOS Software Development Kit (SDK) makes it easy to design and develop apps. The developers can download and use iOS SDK and explore the frameworks like MapKit, PushKit, FoundationKit, UIKit, and GameKit. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="culture-sec web-sec">
                        <h3>IOS Services</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12" >
                                    <OwlCarousel options={culture}>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img alt="imsrc={webImg} /> */}
                                            <h4>App Development and Deployment</h4>
                                            <p>We offer fully-featured and user-friendly iOS apps for diverse industry verticals. We have the requisite skill set and experience to develop and deploy robust iOS apps that match your need-based business. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img alt="imsrc={webImg1} /> */}
                                            <h4>IOS App Design</h4>
                                            <p>We design incredible prototypes, interfaces, and tailor-made POCs for your iOS apps. We extensively enhance the animations and logo icons with themes, backgrounds, transitions on the screen, and other core graphics to meet your expectations. Connect with us to design compelling app designs and layouts for iPads, iPhones, and other iOS devices.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img alt="imsrc={webImg2} /> */}
                                            <h4>IOS Migration Services</h4>
                                            <p>We are well-versed with porting apps to new platforms, OS, and scripting languages that slash down the maintenance cost. We increase your reach with advanced app porting services while keeping data secure, safe and intact. Connect with us for any iOS migration services.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img alt="imsrc={webImg3} /> */}
                                            <h4>IOS Consultancy Services</h4>
                                            <p>We offer consultancy services related to iOS app layout, UI/UX evaluation, database planning, documentation development, security mechanism, code reusability, and Application Lifecycle Management (ALM). Connect with us to capitalize on our skillset and experience in the iOS market. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img alt="imsrc={webImg4} /> */}
                                            <h4>IOS Maintenance Services</h4>
                                            <p>IQuinceSoft is renowned for its swift and prompt support and maintenance. We are experts in server performance optimization, security enhancement processes, and UI/UX enhancements to OS updates. Call us to ensure you are in the right company. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img alt="imsrc={webImg5} /> */}
                                            <h4>QA and Testing services</h4>
                                            <p>We test apps with a multidimensional approach. We ensure you have a bug-free launch, effective and cost-efficient testing approach that fits your budget and specific needs. We test the apps in multiple environments and devices to align them right and release them for a successful launch.</p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img alt="imsrc={webImg5} /> */}
                                            <h4>Partner with iQuinceSoft</h4>
                                            <p>We are here to assist, support and help businesses. We strive to make businesses succeed. Hence, we partner with multiple businesses, regardless of their industry and business volume:  </p>
                                        </div>
                                    </OwlCarousel>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            {/* <img alt="imsrc={webImg} /> */}
                                            <h4>App Development and Deployment</h4>
                                            <p>We offer fully-featured and user-friendly iOS apps for diverse industry verticals. We have the requisite skill set and experience to develop and deploy robust iOS apps that match your need-based business. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img alt="imsrc={webImg1} /> */}
                                            <h4>IOS App Design</h4>
                                            <p>We design incredible prototypes, interfaces, and tailor-made POCs for your iOS apps. We extensively enhance the animations and logo icons with themes, backgrounds, transitions on the screen, and other core graphics to meet your expectations. Connect with us to design compelling app designs and layouts for iPads, iPhones, and other iOS devices.</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img alt="imsrc={webImg2} /> */}
                                            <h4>IOS Migration Services</h4>
                                            <p>We are well-versed with porting apps to new platforms, OS, and scripting languages that slash down the maintenance cost. We increase your reach with advanced app porting services while keeping data secure, safe and intact. Connect with us for any iOS migration services.
                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img alt="imsrc={webImg3} /> */}
                                            <h4>IOS Consultancy Services</h4>
                                            <p>We offer consultancy services related to iOS app layout, UI/UX evaluation, database planning, documentation development, security mechanism, code reusability, and Application Lifecycle Management (ALM). Connect with us to capitalize on our skillset and experience in the iOS market. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img alt="imsrc={webImg4} /> */}
                                            <h4>IOS Maintenance Services</h4>
                                            <p>IQuinceSoft is renowned for its swift and prompt support and maintenance. We are experts in server performance optimization, security enhancement processes, and UI/UX enhancements to OS updates. Call us to ensure you are in the right company. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img alt="imsrc={webImg5} /> */}
                                            <h4>QA and Testing services</h4>
                                            <p>We test apps with a multidimensional approach. We ensure you have a bug-free launch, effective and cost-efficient testing approach that fits your budget and specific needs. We test the apps in multiple environments and devices to align them right and release them for a successful launch.</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4"> </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img alt="imsrc={webImg5} /> */}
                                            <h4>Partner with iQuinceSoft</h4>
                                            <p>We are here to assist, support and help businesses. We strive to make businesses succeed. Hence, we partner with multiple businesses, regardless of their industry and business volume:  </p>
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
                                                How do I hire an iOS developer from iQuinceSoft?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                It's pretty simple. All you need to do is share with us your requirements. Once we receive your project details, we'll contact you and select some of the vetted developers from the talent pool and allow you to interview and choose the one that suits your project needs the most.
                                                Once this process is through, we allow access to the developer and proceed with the initiation process.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                How can iQuinceSoft help me with my projects?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                We can ensure you the best iOS App Consultation, UI/UX design, testing and QA, migration and support, and custom iOS App development that can help you with the best solutions.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Can iQuinceSoft allow us to hire developers for flexible needs?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Yes. We offer flexible models to cater to the needs of your business models. We offer project-based, hourly, and fixed price models.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Why should I hire dedicated iOS developers from iQuinceSoft?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                For optimum optimization, flexibility, better outcomes, skills of the next level, and swift and prompt response, hire dedicated iOS developers from iQuinceSoft.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                How much does it cost to hire a dedicated developer?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                It depends on the various facets like the complexity of the design, features and functionality, app type, number of pages, etc.
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
                                        {IOSJson && IOSJson.map(IOSJsonS => {
                                            return (
                                                <div className="cult-box">
                                                    <div class="tech-dot"></div>
                                                    <h4>{IOSJsonS.name}</h4>
                                                    <p dangerouslySetInnerHTML={{ __html: IOSJsonS.content.substr(0, 100) }}></p>
                                                    <Link to={`/PostPage/${IOSJsonS.slug}`} >READ MORE </Link>
                                                </div>
                                            );
                                        })}
                                    </OwlCarousel>

                                    <div className="row">
                                        {IOSJson && IOSJson.map((IOSJsonS, index) => {
                                            return (

                                                <div className="col-lg-4 col-md-4">
                                                    <div className="insight-box" key={IOSJsonS.id}>
                                                        <h4>{IOSJsonS.name}</h4>
                                                        <p dangerouslySetInnerHTML={{ __html: IOSJsonS.content.substr(0, 100) }}></p>
                                                        <Link to={`/PostPage/${IOSJsonS.slug}`} >READ MORE </Link>
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

export default IOSDev;

