
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

class VueDev extends Component {
    constructor(props) {
        super(props)
        this.state = {
            VueJson: [],
            Loading: true,
        }
    }

    componentDidMount() {
        PostCate.getVue().then((Vues, err) => {
            if (!err) {
                this.setState({
                    VueJson: Vues,
                    Loading: false,

                });
            }
        });
    }
    render() {
        const { VueJson } = this.state;

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
                        <title>Hire Vue JS Developers - Top Rated
                        </title>
                        <meta name="discription" content="Do you want to hire dedicated Vue js Developers for your projects? Partner with iQuinceSoft & hire Monthly/hourly basis developers at your flexibility. Hire Now!" />
                    </Helmet>

                    <div className="service-banner service-banner-cat">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-12">
                                    <p>VUE</p>
                                    <h1><strong>Hire VueJS developers to build and scale super fast, light and peak performing web apps </strong><br /></h1>
                                    <ul>
                                        <li>Hire the pre-vetted, skilled, and seasoned Vue JS developers to scale and augment your team's performance.</li>
                                        <li>We ensure you get quality outcomes with our ready-to-hire VueJS developers that can deliver from day 1 of joining the team.</li>
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
                                    <h3>Why Vue.js?</h3>
                                    <p>Vue.js, as a JavaScript frame, is super easy, compatible, and blazing fast, making it the developers' preferred choice. Why choose Vue.js is a question worth answering. Excerpts:</p>
                                </div>

                                <OwlCarousel options={culture}>
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Small in Size</h4>
                                        <p>The size of the application is 18-21 kb. The small size makes it swift. Hence, it's useful for both small and big-scale application projects. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>High Performance</h4>
                                        <p>Vue.js is a framework that ensures high performance.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Easy to Learn </h4>
                                        <p>The learning curve of Vue.js is slightly easy. Hence, it is easy for anyone to keep the tabs and remove the coding errors.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Better Documentation</h4>
                                        <p>Vue.js is well-defined and documented as a framework. It helps developers understand the requisite mechanisms and create their applications seamlessly. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Future-Proof </h4>
                                        <p>It is easy to update, and the framework makes it much backward compatible as possible.
                                        </p>
                                    </div>

                                </OwlCarousel>


                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Small in Size</h4>
                                        <p>The size of the application is 18-21 kb. The small size makes it swift. Hence, it's useful for both small and big-scale application projects. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>High Performance</h4>
                                        <p>Vue.js is a framework that ensures high performance.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Easy to Learn </h4>
                                        <p>The learning curve of Vue.js is slightly easy. Hence, it is easy for anyone to keep the tabs and remove the coding errors.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Better Documentation</h4>
                                        <p>Vue.js is well-defined and documented as a framework. It helps developers understand the requisite mechanisms and create their applications seamlessly.  </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Future-Proof</h4>
                                        <p>It is easy to update, and the framework makes it much backward compatible as possible.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="culture-sec web-sec">
                        <h3>Vue.js Services</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12" >
                                    <OwlCarousel options={culture}>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg} /> */}
                                            <h4>Custom App Development</h4>
                                            <p>We are specialists in creating secure and robust Vue.js custom app development services. We architect, design, develop, deploy and manage the apps with Vue.js. We use modern tools and supporting libraries of Vue.js to build seamless applications for small and big projects. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg1} /> */}
                                            <h4>Single Page App Development</h4>
                                            <p>QuinceSoft offers great front-ends and single-page applications (SPAs) with Vue.js. We are experienced in creating adaptive UI and single-page apps that support lead generation and conversions.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg2} /> */}
                                            <h4>Interactive Dashboards</h4>
                                            <p>Easy to configure and interactive dashboards. We build it for you. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg3} /> */}
                                            <h4>Online store and Marketplaces</h4>
                                            <p>Do you need to build e-stores and marketplaces? We are the experts in offering e-store solutions. We offer customized and tailor-made e-com solutions with the help of Vue.js' high modularity and speed Vue.js. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg4} /> */}
                                            <h4>Vue.js Migration</h4>
                                            <p>If you wish to migrate your apps to Vue.js, talk to us. We help you with a smooth and streamlined migration. We have a sound track record of migrating rich enterprise apps to various environments for maximized system functionality and better performance. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Support Solutions</h4>
                                            <p>We serve businesses high-quality services like improving security, usability, and performance. We can take care of multiple facets. Talk to us if you need support solutions like writing ad-hoc queries, modifying documentation and accurate report runs, and many more. </p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4> Facing Business Challenges?</h4>
                                            <p>We are here to assist, support and help businesses. We strive to make businesses succeed. Hence, we partner with multiple businesses, regardless of their industry and business volume:  </p>
                                        </div>
                                    </OwlCarousel>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg} /> */}
                                            <h4>Custom App Development</h4>
                                            <p>We are specialists in creating secure and robust Vue.js custom app development services. We architect, design, develop, deploy and manage the apps with Vue.js. We use modern tools and supporting libraries of Vue.js to build seamless applications for small and big projects. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg1} /> */}
                                            <h4>Single Page App Development</h4>
                                            <p>QuinceSoft offers great front-ends and single-page applications (SPAs) with Vue.js. We are experienced in creating adaptive UI and single-page apps that support lead generation and conversions.</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg2} /> */}
                                            <h4>Interactive Dashboards</h4>
                                            <p>Easy to configure and interactive dashboards. We build it for you.
                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg3} /> */}
                                            <h4>Online store and Marketplaces</h4>
                                            <p>Do you need to build e-stores and marketplaces? We are the experts in offering e-store solutions. We offer customized and tailor-made e-com solutions with the help of Vue.js' high modularity and speed Vue.js. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg4} /> */}
                                            <h4>Vue.js Migration</h4>
                                            <p>If you wish to migrate your apps to Vue.js, talk to us. We help you with a smooth and streamlined migration. We have a sound track record of migrating rich enterprise apps to various environments for maximized system functionality and better performance. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Support Solutions</h4>
                                            <p>We serve businesses high-quality services like improving security, usability, and performance. We can take care of multiple facets. Talk to us if you need support solutions like writing ad-hoc queries, modifying documentation and accurate report runs, and many more. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4"> </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4> Facing Business Challenges?</h4>
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
                                                What is Vue JS used for?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Vue Js is used for web interfaces and one page applications.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Is VueJS good for web development?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                VueJS is great for web development because it is flexible, easy-to-integrate, developer-friendly and scalable.
                                                It has a model-view-viewmodel (MVVM) architecture that facilitates two-communications.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                How to choose a bankable VueJS company?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Check the client testimonials on the third party platforms like Clutch and google. Have a look at the awards, certificates and client partnerships as well.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                How much does it cost to build a VueJS based website?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                The cost depends on the various factors like UI/UX designs, web hosting providers, third-party modules, security options and other factors.
                                                You can choose our highly-efficient VueJS developer services on a monthly basis with $ 3000 per month or fixed-cost pricing model that starts at $25 per hour.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Can I hire VueJS developers from iQuinceSoft and manage them directly?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Yes. You can hire VueJS developers from iQuinceSoft and manage them as your extended team at $3000 per month or at $ 25 per hour basis.
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
                                        {VueJson && VueJson.map(VueJsonS => {
                                            return (
                                                <div className="cult-box">
                                                    <div class="tech-dot"></div>
                                                    <h4>{VueJsonS.name}</h4>
                                                    <p dangerouslySetInnerHTML={{ __html: VueJsonS.content.substr(0, 100) }}></p>
                                                    <Link to={`/PostPage/${VueJsonS.slug}`} >READ MORE </Link>
                                                </div>
                                            );
                                        })}
                                    </OwlCarousel>

                                    <div className="row">
                                        {VueJson && VueJson.map((VueJsonS, index) => {
                                            return (
                                                <div className="col-lg-4 col-md-4">
                                                    <div className="insight-box" key={index}>
                                                        <h4>{VueJsonS.name}</h4>
                                                        <p dangerouslySetInnerHTML={{ __html: VueJsonS.content.substr(0, 100) }}></p>
                                                        <Link to={`/PostPage/${VueJsonS.slug}`} >READ MORE </Link>
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

export default VueDev;

