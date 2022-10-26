
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

class LaravelDev extends Component {
    constructor(props) {
        super(props)
        this.state = {
            LaravelJson: [],
            Loading: true,
        }
    }

    componentDidMount() {
        PostCate.getLaravel().then((Laravel, err) => {
            if (!err) {
                this.setState({
                    LaravelJson: Laravel,
                    Loading: false,

                });
            }
        });
    }
    render() {
        const { LaravelJson } = this.state;

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
                        <title>Hire Laravel Developers | Hire Dedicated Laravel Developers
                        </title>
                        <meta name="discription" content="Want to Hire a Remote Laravel Developer? Partner with iQuincesoft to hire skilled & qualified developers at your flexibility on hourly/monthly basis. Hire Now!" />
                    </Helmet>
                    <div className="service-banner service-banner-cat">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-12" >
                                    <p>LARAVEL</p>
                                    <h1><strong>Hire Laravel developers for swift delivery, and optimum business solutions </strong><br /></h1>
                                    <ul>
                                        <li>Get the tangible outcomes with the help opf our skilled developers to ensure scalable and secure web apps and systems.</li>
                                        <li>Hire Laravel developers to ensure you high growth systems and increase the capabilities.</li>
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
                                    <h3>Why Laravel?</h3>
                                    <p>Laravel scores over other frameworks because of the advanced features that facilitates swift development. We enlist a few reasons to clarify the benefits of using Laravel. </p>
                                </div>

                                <OwlCarousel options={culture}>
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Object-oriented Libraries</h4>
                                        <p>Laravel composes of 20+ libraries. It offers CSRF protection, database security, and encryption.  </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Ease of Documentation</h4>
                                        <p>Laravel comes with Model View Controller (MVC) pattern. This pattern ensures high-End architecture and neat and organized documentation efficiently. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Blade Template Engine</h4>
                                        <p>Laravel ensures easy data display and extends web layouts while maintaining the app's speed. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Unit-Testing</h4>
                                        <p>Smooth and easy to perform unit-tests of an existing web function or new feature is accessible with Laravel. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Caching</h4>
                                        <p>APC, Redis, and Memcached caching systems are easy to integrate. It helps to enhance the app's performance. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Security</h4>
                                        <p>Laravel prevents illegal access. Thus, it ensures the security of the web app and systems with proper authentication.  </p>
                                    </div>


                                </OwlCarousel>


                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Object-oriented Libraries</h4>
                                        <p>Laravel composes of 20+ libraries. It offers CSRF protection, database security, and encryption.  </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Ease of Documentation</h4>
                                        <p>Laravel comes with Model View Controller (MVC) pattern. This pattern ensures high-End architecture and neat and organized documentation efficiently. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Blade Template Engine</h4>
                                        <p>Laravel ensures easy data display and extends web layouts while maintaining the app's speed. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Unit-Testing</h4>
                                        <p>Smooth and easy to perform unit-tests of an existing web function or new feature is accessible with Laravel.  </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Caching</h4>
                                        <p>APC, Redis, and Memcached caching systems are easy to integrate. It helps to enhance the app's performance. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Security</h4>
                                        <p>Laravel prevents illegal access. Thus, it ensures the security of the web app and systems with proper authentication.  </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="culture-sec web-sec">
                        <h3>Laravel Services</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12" >
                                    <OwlCarousel options={culture}>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg} /> */}
                                            <h4>Laravel App Development</h4>
                                            <p>Laravel applications can fit your processes seamlessly. Laravel applications can generate scalable output outcomes for your organizations. We help you design, build and manage that kind of application.  </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg1} /> */}
                                            <h4>SaaS Application Development</h4>
                                            <p>We help you develop customized SaaS applications. We use Laravel Cashier, Spark, Passport, and Socialite, among such Laravel packages. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg2} /> */}
                                            <h4>Website Development</h4>
                                            <p>We add custom features to your website with the help of Laravel. We help create a customized website based on Laravel based CMS like Statamic and October. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg3} /> */}
                                            <h4>Browser Testing and automation</h4>
                                            <p>IQuinceSoft offers complete test automation of websites and applications.  </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg4} /> */}
                                            <h4>Migrate</h4>
                                            <p>From Java, Python, .NET, or any other framework, we help you migrate your apps to Laravel with no loss of any functionality or data.  </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Web Services and API Development</h4>
                                            <p>We power your iOS & Android mobile apps. We offer easy access to the platform data with safe, stable, and well-documented web services and apis. </p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Consulting</h4>
                                            <p>If your systems are not going smooth, or you seek innovative ideas for your business, we can help. We offer Laravel consulting services like pre-project and review of current services. we help you make a call to improve the business process with laravel. </p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Maintenance and Support</h4>
                                            <p>We make sure your apps run error-free. We provide all kinds of maintenance and support to keep your business on Laravel smooth and easy. </p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Full-Text Search</h4>
                                            <p>We implement fast full-text search on your website. </p>
                                        </div>
                                    </OwlCarousel>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg} /> */}
                                            <h4>Laravel App Development</h4>
                                            <p>Think of Laravel applications that fit your processes seamlessly. Think of applications that generate scalable output outcomes for your organizations. We help you design, build and manage that kind of application.  </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg1} /> */}
                                            <h4>SaaS Application Development</h4>
                                            <p>We help you develop customized SaaS applications. We use Laravel Cashier, Spark, Passport, and Socialite, among such Laravel packages. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg2} /> */}
                                            <h4>Website Development</h4>
                                            <p>We add custom features to your website with the help of Laravel. We help create a customized website based on Laravel based CMS like Statamic and October.
                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg3} /> */}
                                            <h4>Browser Testing and automation</h4>
                                            <p>IQuinceSoft offers complete test automation of websites and applications.  </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg4} /> */}
                                            <h4>Migrate</h4>
                                            <p>From Java, Python, .NET, or any other framework, we help you migrate your apps to Laravel with no loss of any functionality or data.  </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Web Services and API Development</h4>
                                            <p>We power your iOS & Android mobile apps. We offer easy access to the platform data with safe, stable, and well-documented web services and apis. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Consulting</h4>
                                            <p>If your systems are not going smooth, or you seek innovative ideas for your business, we can help. We offer Laravel consulting services like pre-project and review of current services. we help you make a call to improve the business process with laravel. </p>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Maintenance and Support</h4>
                                            <p>We make sure your apps run error-free. We provide all kinds of maintenance and support to keep your business on Laravel smooth and easy.</p>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Full-Text Search</h4>
                                            <p>We implement fast full-text search on your website.</p>
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
                                                What is Laravel, and why is it used?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Laravel is an open-source framework backed up by PHP. Laravel is a server-side framework.
                                                This is used for building customized web applications.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                What is the expected time to build a Laravel Website?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                We are the Laravel developers with extensive experience and knowledge base to complete the Laravel
                                                project within the stipulated timeframe. We follow a well-defined process to describe the time to build a website,
                                                depending upon the web requirement of functionalities and added features.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                How much cost does it take to build a Laravel website?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                The cost is a varying factor. It changes with the change in hosting services, features, third-party integrations, maintenance, UI/UX designs, etc.
                                                You can have the feature-filled, visually appealing, and engaging Laravel website with iQuinceSoft in the most cost-effective way.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                What is the benefit of outsourcing your Laravel website project?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                An offshore partner can bring freshness to the projects. A Laravel web design partner like iQuinceSoft can add
                                                value to your Laravel project with speed, amazing layouts, and an engaging website.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Why choose iQuinceSoft for my new Laravel website?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                iQuinceSoft is a team of skilled developers with in-depth knowledge.
                                                We can cater to niche-based business needs efficiently. We use agile methodology for strategic planning, development,
                                                and enhancement with significant cost savings for you, with multi-fold results.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                How to verify the authenticity of a Laravel development company?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                You can verify it with the help of client reviews on third-party platforms like clutch and Google. You can check it on the social media platforms, certifications, awards, and client partnerships.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Can I hire Laravel developers from you and manage them as my team?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                You can hire highly skilled developers from our side. Assign them with tasks and assignments and review their outputs. We can assign a service executive who’ll be your single
                                                point of contact for communications and who can manage the developers on your behalf.
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
                                        {LaravelJson && LaravelJson.map(LaravelJsonS => {
                                            return (
                                                <div className="cult-box">
                                                    <div class="tech-dot"></div>
                                                    <h4>{LaravelJsonS.name}</h4>
                                                    <p dangerouslySetInnerHTML={{ __html: LaravelJsonS.content.substr(0, 100) }}></p>
                                                    <Link to={`/PostPage/${LaravelJsonS.slug}`} >READ MORE </Link>
                                                </div>
                                            );
                                        })}
                                    </OwlCarousel>

                                    <div className="row">
                                        {LaravelJson && LaravelJson.map((LaravelJsonS, index) => {
                                            return (

                                                <div className="col-lg-4 col-md-4">
                                                    <div className="insight-box" key={LaravelJsonS.id}>
                                                        <h4>{LaravelJsonS.name}</h4>
                                                        <p dangerouslySetInnerHTML={{ __html: LaravelJsonS.content.substr(0, 100) }}></p>
                                                        <Link to={`/PostPage/${LaravelJsonS.slug}`} >READ MORE </Link>
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

export default LaravelDev;

