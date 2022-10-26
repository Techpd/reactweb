
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
import { PostCate } from '../../json/PostCate';
import FAQ from '../../container/FAQ';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';
import AwardFormsec from '../../container/AwardFormsec';
import 'react-accessible-accordion/dist/fancy-example.css';
import { TailSpin } from 'react-loader-spinner'
import Partner from '../../container/Partner';
import { Helmet } from "react-helmet";
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';

class ZENDStack extends Component {
    constructor(props) {
        super(props)
        this.state = {
            InsightsJson: [],
            Loading: true,
        }
    }

    componentDidMount() {
        PostCate.getZEND().then((Zend, err) => {
            if (!err) {
                this.setState({
                    InsightsJson: Zend,
                    Loading: false,
                });
            }
        });
    }
    render() {
        const { InsightsJson } = this.state;

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
                        <title>Hire Dedicated Zend Developer
                        </title>
                        <meta name="discription" content="Want to Hire a Remote Zend Developer? Partner with iQuincesoft to hire skilled & qualified developers at your flexibility on hourly/monthly basis. Hire Now!" />
                    </Helmet>

                    <div className="service-banner service-banner-cat">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-12" >
                                    <p>ZEND STACK</p>
                                    <h1><strong>Scalable Architect, Fast Development and Optimized Costs.</strong><br /></h1>
                                    <ul>
                                        <li>Hire the ZEND developers from the house of iQuinceSoft. We offer you project mapping on-demand skills to meet your development needs, wants, and demands.</li>
                                        <li>We are skilled, experienced, and vetted team of talented ZEND developers. We ensure comfort, clear communication, and ease of working with our developers. Manage the best 1% of the ZEND developers as your remote team.</li>
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
                                    <h3>Zend Development Services</h3>
                                    <p>Zend offers the benefits of Extended Class, feel the Goodness of Object Orientation and standard and Guidelines.</p>
                                </div>

                                <OwlCarousel options={culture}>
                                    <div className="cult-box">
                                        <div className="tech-dot"></div>
                                        <h4>Highly flexible & Secure </h4>
                                        <p>Zend is an OOP-based framework. This offer Zend advanced features that enable developers to build highly flexible and secure web application. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div className="tech-dot"></div>
                                        <h4>MVC features </h4>
                                        <p>Multiple components are available to build fully-featured web apps, catering to multiple enterprise goals.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div className="tech-dot"></div>
                                        <h4>Transparent </h4>
                                        <p>Zend comprises vast classes and libraries collection that aided the developers in building multi-functional web apps.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div className="tech-dot"></div>
                                        <h4>Integration </h4>
                                        <p>Zend helps to integrate third-party applications into web applications seamlessly.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div className="tech-dot"></div>
                                        <h4>Cost-effective </h4>
                                        <p>Zend helps to build web applications in a short time at affordable prices.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div className="tech-dot"></div>
                                        <h4>Multiple Database Support </h4>
                                        <p>Zend supports Multiple Databases compatible with all databases like SQLite, PostgreSQL, MySQL, Oracle, etc. </p>
                                    </div>


                                </OwlCarousel>


                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div className="tech-dot"></div>
                                        <h4>Highly flexible & Secure </h4>
                                        <p>Zend is an OOP-based framework. This offer Zend advanced features that enable developers to build highly flexible and secure web application. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div className="tech-dot"></div>
                                        <h4>MVC features </h4>
                                        <p>Multiple components are available to build fully-featured web apps, catering to multiple enterprise goals.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div className="tech-dot"></div>
                                        <h4>Transparent </h4>
                                        <p>Zend comprises vast classes and libraries collection that aided the developers in building multi-functional web apps.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div className="tech-dot"></div>
                                        <h4>Integration </h4>
                                        <p>Zend helps to integrate third-party applications into web applications seamlessly. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div className="tech-dot"></div>
                                        <h4>Cost-effective </h4>
                                        <p>Zend helps to build web applications in a short time at affordable prices. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div className="tech-dot"></div>
                                        <h4>Multiple Database Support </h4>
                                        <p>Zend supports Multiple Databases compatible with all databases like SQLite, PostgreSQL, MySQL, Oracle, etc. </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="culture-sec web-sec">
                        <h3>Zend Services</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12" >
                                    <OwlCarousel options={culture}>
                                        <div className="cult-box">
                                            <div className="tech-dot"></div>
                                            <h4>Zend CMS Development</h4>
                                            <p>Zend framework offer CMS solutions with great effectiveness. It enables the users to handle their projects efficiently and apply the updates well. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div className="tech-dot"></div>
                                            <h4>Zend Support & Maintenance</h4>
                                            <p>iQuinceSoft offers round-the-clock support in the ongoing and post-project development phase to remain focused on your business. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div className="tech-dot"></div>
                                            <h4>Zend Enterprise Solutions</h4>
                                            <p>Get scalable and secure enterprise-level web apps according to the need of your business.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div className="tech-dot"></div>
                                            <h4>Zend Web Development</h4>
                                            <p>iQuinceSoft provides scalable, secure, and fully-featured Zend web applications. We can deliver competitive and latest web development services. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div className="tech-dot"></div>
                                            <h4>Zend Migration Services</h4>
                                            <p>Migrate your website to visually appealing UI from a platform to Zend.  </p>
                                        </div>


                                    </OwlCarousel>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            <h4>Zend CMS Development</h4>
                                            <p>Zend framework offer CMS solutions with great effectiveness. It enables the users to handle their projects efficiently and apply the updates well. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>Zend Support & Maintenance</h4>
                                            <p>We manage every single facet of an online store with the help of API integration. We connect the PHP app to the Zend store with REST API.</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>Zend Enterprise Solutions</h4>
                                            <p>Get scalable and secure enterprise-level web apps according to the need of your business.
                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>Zend Web Development</h4>
                                            <p>iQuinceSoft provides scalable, secure, and fully-featured Zend web applications. We can deliver competitive and latest web development services. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4"></div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>Zend Migration Services</h4>
                                            <p>Migrate your website to visually appealing UI from a platform to Zend.  </p>
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
                                                Should I hire Zend developers?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                For versatility and easy customization, hire Zend developers from iQuinceSoft. It is an open-source platform that is backed by a large number of programmers also.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Which are the industries we can serve with Zend developers?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Zend fits well to serve industries like travel, hospitality, shopping, media & entertainment, banking & finance, logistics and transportation, and education. You can develop and scale up web and mobile apps and systems with the help of Zend developers from iQuinceSoft.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                How much does iQuinceSoft cost for a dedicated Zend developer?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                We offer three pricing models to start with. We are helping businesses with great flexibility and ease. iQuinceSoft offers project-based models, hourly models, and monthly engagement models.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Can I have a trial period?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Yes. We offer a 7-day trial period to all the customers.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Do you sign NDA?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Yes. For the safety of the source code, IPR, copyright, and ownership of your project, we sign non-disclosure agreements.
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
                                        {InsightsJson && InsightsJson.map((InsightsJsonS, index) => {
                                            return (
                                                <div className="cult-box" key={index}>
                                                    <div className="tech-dot"></div>
                                                    <h4>{InsightsJsonS.name}</h4>
                                                    <p dangerouslySetInnerHTML={{ __html: InsightsJsonS.content.substr(0, 100) + '...' }}></p>
                                                    <Link to={`/PostPage/${InsightsJsonS.slug}`} >READ MORE </Link>
                                                </div>
                                            );
                                        })}
                                    </OwlCarousel>

                                    <div className="row">
                                        {InsightsJson && InsightsJson.map((InsightsJsonS, index) => {
                                            return (

                                                <div className="col-lg-4 col-md-4">
                                                    <div className="insight-box" key={index}>
                                                        <h4>{InsightsJsonS.name}</h4>
                                                        <p dangerouslySetInnerHTML={{ __html: InsightsJsonS.content.substr(0, 100) + '...' }}></p>
                                                        <Link to={`/PostPage/${InsightsJsonS.slug}`} >READ MORE </Link>
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

export default ZENDStack;