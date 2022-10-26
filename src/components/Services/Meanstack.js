
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


class Meanstack extends Component {
    constructor(props) {
        super(props)
        this.state = {
            MeanStackJson: [],
            Loading: true,
        }
    }

    componentDidMount() {
        PostCate.getMeanStack().then((MeanStack, err) => {
            if (!err) {
                this.setState({
                    MeanStackJson: MeanStack,
                    Loading: false,

                });
            }
        });
    }
    render() {
        const { MeanStackJson } = this.state;

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
                        <title>Hire Dedicated MEAN Stack Developer
                        </title>
                        <meta name="discription" content="Need to hire a dedicated MERN Stack Developer? iQuinceSoft provides MERN stack developers specialized in MongoDB, ExpressJS, Angular and Node with highly experienced skills. Call us today +1 (347) 960-4166." />
                    </Helmet>
                    c
                    <div className="service-banner service-banner-cat">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-12" >
                                    <p>MEAN STACK</p>
                                    <h1><strong>Hire skilled MEAN Stack developers for Quality Codes, Performing Apps and Systems, Optimized enterprise solutions. </strong><br /></h1>
                                    <ul>
                                        <li>We are a team of experts in MongoDB, Express JS, Angular, and Node JS that can serve your project needs with the optimal skillsets that match the project needs and offer you scalable, secure, and user-friendly web applications. </li>
                                        <li>Hire our MEAN developers to take your capabilities and business to the next level and manage the hired talents as your extended remote team.</li>
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
                                <div className="col-lg-8 col-md-12" data-aos="fade-right">
                                    <h3>MEAN Stack Development Services</h3>
                                    <p>MEAN STACK means Fast and Robust Web Applications</p>
                                </div>

                                <OwlCarousel options={culture}>
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Fast and Scalable</h4>
                                        <p>MEAN Stack has several libraries, frameworks, and reusable modules. These modules help you develop software cycles fast and increase scalability. MEAN Stack offers result-driven and ready-to-use that save resources and time.  </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Reduced Development Cost</h4>
                                        <p>MEAN Stack is free and open-source. One can use it at no extra cost. Also, provide code reusability, thus saving time and effort, and thus facilitates fast developments deployments.
                                        </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Flexibility</h4>
                                        <p>MEAN Stack offers high development flexibility and efficiency. It facilitates easy task switching. Improves performances and increases collaborations with simplification of tasks. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Performance</h4>
                                        <p>MEAN Stack means Performance. Thanks to Node.JS</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Front-end Development</h4>
                                        <p>MEAN Stack is extensively used across businesses because of the engaging and attractive user interfaces. MEAN Stack is one of the most efficient and famous frontend technologies.  </p>
                                    </div>


                                </OwlCarousel>


                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Fast and Scalable</h4>
                                        <p>MEAN Stack has several libraries, frameworks, and reusable modules. These modules help you develop software cycles fast and increase scalability. MEAN Stack offers result-driven and ready-to-use that save resources and time.  </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Reduced Development Cost</h4>
                                        <p>MEAN Stack is free and open-source. One can use it at no extra cost. Also, provide code reusability, thus saving time and effort, and thus facilitates fast developments deployments.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Flexibility</h4>
                                        <p>MEAN Stack offers high development flexibility and efficiency. It facilitates easy task switching. Improves performances and increases collaborations with simplification of tasks. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Performance</h4>
                                        <p>MEAN Stack means Performance. Thanks to Node.JS </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Front-end Development</h4>
                                        <p>MEAN Stack is extensively used across businesses because of the engaging and attractive user interfaces. MEAN Stack is one of the most efficient and famous frontend technologies.  </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="culture-sec web-sec">
                        <h3>MEAN Stack Services</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12" >
                                    <OwlCarousel options={culture}>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>MEAN Stack Web Development</h4>
                                            <p>Are you looking for scalable MEAN Stack web development? We serve you with the same. We create fast, secure and feature-rich web apps. From Logistics, Edutech and eCommerce, we earn appreciation from industry leaders. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>MEAN Stack eCommerce Development</h4>
                                            <p>We serve the industry verticals with MEAN Stack eCommerce development services. We build intuitive, comprehensive and fast-paced eCommerce web portals.
                                                Connect with iQuinceSoft, if you wish to build a marketplace with features and an excellent user experience. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>MEAN Stack API Development</h4>
                                            <p>We configure APIs for mobile and web apps. We resolve business logic, data sharing, content, and communications issues.
                                            </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>Migration</h4>
                                            <p>We migrate and port multiple enterprises to MEAN Stack frameworks. We ensure cost-effective migration of current platforms to MEAN Stack with analysis, testing and safety of data and information. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>Maintenance and Support</h4>
                                            <p>App maintenance is not an area of concern now with iQuinceSoft. We offer support and maintenance services for fault analysis, upgrades, cover design updates and software maintenance with testing.
                                            </p>
                                        </div>
                                    </OwlCarousel>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            <h4>MEAN Stack Web Development</h4>
                                            <p>Are you looking for scalable MEAN Stack web development? We serve you with the same. We create fast, secure and feature-rich web apps. From Logistics, Edutech and eCommerce, we earn appreciation from industry leaders. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>MEAN Stack eCommerce Development</h4>
                                            <p>We serve the industry verticals with MEAN Stack eCommerce development services. We build intuitive, comprehensive and fast-paced eCommerce web portals.
                                                Connect with iQuinceSoft, if you wish to build a marketplace with features and an excellent user experience. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>MEAN Stack API Development</h4>
                                            <p>We configure APIs for mobile and web apps. We resolve business logic, data sharing, content, and communications issues.

                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>Migration</h4>
                                            <p>We migrate and port multiple enterprises to MEAN Stack frameworks. We ensure cost-effective migration of current platforms to MEAN Stack with analysis, testing and safety of data and information. </p>
                                        </div>

                                        <div className="col-lg-4 col-lg-4"></div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>Maintenance and Support</h4>
                                            <p>App maintenance is not an area of concern now with iQuinceSoft. We offer support and maintenance services for fault analysis, upgrades, cover design updates and software maintenance with testing.
                                            </p>
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
                                                Do you have experienced MEAN stack developers at iQuinceSoft?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                We have MEAN stack developers with an average of 7+ years of experience. Our MEAN stack experts have built numerous MEAN stack web applications that are highly scalable, intuitive, and robust.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Do you offer a flexible pricing model to choose from?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Once we assess the project needs and demands, we choose the most appropriate developers that suit your project needs. You can again conduct screening tests and interviews at this stage to find their suitability. Once you are through with this stage, we will sign the legal formalities and allow you access to the developer to start working together.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                What is the estimated cost of building a web app with your MEAN stack developer?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                It depends on size, type, complexities, features, and functionalities.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Do you sign NDAs?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Yes.We shield the source code and IPR with the project's trademark and other confidential data by signing a non-disclosure agreement with the clients.
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
                                        {MeanStackJson && MeanStackJson.map(MeanStackJsonS => {
                                            return (
                                                <div className="cult-box">
                                                    <div class="tech-dot"></div>
                                                    <h4>{MeanStackJsonS.name}</h4>
                                                    <p dangerouslySetInnerHTML={{ __html: MeanStackJsonS.content.substr(0, 100) }}></p>
                                                    <Link to={`/PostPage/${MeanStackJsonS.slug}`} >READ MORE </Link>
                                                </div>
                                            );
                                        })}
                                    </OwlCarousel>

                                    <div className="row">
                                        {MeanStackJson && MeanStackJson.map((MeanStackJsonS, index) => {
                                            return (

                                                <div className="col-lg-4 col-md-4">
                                                    <div className="insight-box" key={MeanStackJsonS.id}>
                                                        <h4>{MeanStackJsonS.name}</h4>
                                                        <p dangerouslySetInnerHTML={{ __html: MeanStackJsonS.content.substr(0, 100) }}></p>
                                                        <Link to={`/PostPage/${MeanStackJsonS.slug}`} >READ MORE </Link>
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

export default Meanstack;