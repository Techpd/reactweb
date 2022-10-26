
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
import android from '../../images/Android.svg';
import vue from '../../images/vuejs.svg';
import angular from '../../images/angularicon.svg';
import react from '../../images/react.svg';
import cycle from '../../images/cycle-image.svg';
import planDev from '../../images/OUTLINE.svg';
import Frontend from '../../images/Front_End_Development.svg';
import Backend from '../../images/backend_website.svg';
import software from '../../images/Software.svg';
import Graphic from '../../images/Graphic_Designing.svg';
import Web_Dev from '../../images/Web_Development.svg';
import Business from '../../images/Business.svg';
import Artificial from '../../images/Artificial.svg';
import Developer from '../../images/Developer.svg';
import Promise1 from '../../images/Promise1.svg';
import creativity from '../../images/creativity.svg';
import increase from '../../images/Increase.svg';
import Team from '../../images/Team.svg';
import Revenue from '../../images/Revenue.svg';
import php3 from '../../images/php3.svg';
import node3 from '../../images/node3.svg';
import magento2 from '../../images/magento2.svg';
import Devops from '../../images/Devops.svg';
import laravel from '../../images/Laravel.svg';
import wordpress from '../../images/Wordpress.svg';
import Assurance from '../../images/Assurance.svg';
import codeigniter from '../../images/codeigniter.svg';
import Diverse from '../../images/Diverse.svg';
import efficiency from '../../images/Efficiency.svg';
import Increase2 from '../../images/Increase2.svg';
import Cost from '../../images/Cost.svg';
import { Helmet } from "react-helmet";
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';


class DedicatedTeams extends Component {
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
        const Designer = {
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
                    <Header headerClass={'serv-head dd'} />
                    <Helmet>
                        <title>Dedicated Development Team
                        </title>
                        <meta name="discription" content="Do you want to hire dedicated Development Team for your projects? Partner with iQuinceSoft & hire Monthly/hourly basis developers at your flexibility. Hire Now!" />
                    </Helmet>
                    <div className="service-banner service-banner-cat">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-12" >
                                    <h1><strong>Dedicated Development Teams:</strong><br /></h1>
                                    <h4 className="service-h4">We offer you a platform to hire dedicated developers. Use their top-notch skills as per hourly or fixed cost projects. Manage them as your extended remote team. </h4>
                                    <ul>
                                        <li>Hire development developers with a hands-on experience like your own. </li>
                                        <li>Slash down the time to market. </li>
                                        <li>Keep control over the projects, milestones and deliverables. </li>
                                        <li>Eliminate the overhead, admin and hiring costs.</li>
                                        <li>Augment the in-house teams with skilled experts in the specific subject. </li>
                                    </ul>
                                </div>
                                <div className="col-lg-5 col-md-12" ><AwardFormsec /></div>
                            </div>
                        </div>
                    </div>

                    <div className="culture-sec cr-sec cr-sec-2 dd">
                        <div className="container">
                            <div className="row ">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12" >
                                    <h2>Hire Web and Graphic designers and use their skills to enhance your business revenue and branding purposes. Get reduced costs and enhanced business revenues.</h2>
                                </div>
                            </div>
                            <div className="row mid-border">
                                <div className="col-lg-2"></div>
                                <div className="col-lg-4 col-md-12">
                                    <ul>
                                        <li><img alt="img" src={Promise1} /> <span>Work with some of the best creative minds in the industry</span></li>
                                        <li><img alt="img" src={creativity} /> <span>Build your designer team and clear your creative bottlenecks.</span></li>
                                        <li><img alt="img" src={Team} /> <span>Increase your productivity.</span></li>
                                    </ul>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <ul>
                                        <li><img alt="img" src={Revenue} /> <span>Hire dedicated designers and use their skills to benefit your brand directly.</span></li>
                                        <li><img alt="img" src={increase} /> <span>Higher revenues by a significant margin.</span></li>
                                    </ul>
                                </div>
                                <div className="col-lg-1">
                                </div>
                            </div>
                        </div>
                        <FormPopup />
                        <h5><Link to={'#EuquireSec'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Or, Use this form to share your requirements.<span>Get guaranteed response within 8 Hrs.</span></Link></h5>
                    </div>

                    <div className="build-sec">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12">
                                    <h1>Build Your Dedicated Team With
                                        Our Top Tech Skills</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-5 col-md-12">
                                    <div className="build-box">
                                        <div className="build-part1">
                                            <img alt="img" src={php3} />
                                        </div>
                                        <div className="build-part2">
                                            <p>
                                                Hire highly skilled developers in Laravel, Symphony, Codeigniter, Yii, Zend, WordPress, Drupal, and Magento. </p>
                                            <Link to={"/HirePHPDevelopers"}>Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12">
                                    <div className="build-box">
                                        <div className="build-part1">
                                            <img alt="img" src={codeigniter} />
                                        </div>
                                        <div className="build-part2">
                                            <p>
                                                It is the one of the best PHP framework offering an open source development platform. We ensure you get the simplest way to use the modular methods and get an explicit function. </p>
                                            <Link to={"/HireCodeIgniterDevelopers"}>Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-5 col-md-12">
                                    <div className="build-box">
                                        <div className="build-part1">
                                            <img alt="img" src={node3} />
                                        </div>
                                        <div className="build-part2">
                                            <p>
                                                Node.js is a preferred choice of developers who wish to build real-time, scalable and collaborative apps and tools. </p>
                                            <Link to={"/HireNodeDevelopers"}>Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12">
                                    <div className="build-box">
                                        <div className="build-part1">
                                            <img alt="img" src={laravel} />
                                        </div>
                                        <div className="build-part2">
                                            <p>
                                                The best advantage of Laravel is that it follows – Model, View and Controller-based architectural pattern and beautiful syntax</p>
                                            <Link to={"/HireLaravelDevelopers"}>Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-5 col-md-12">
                                    <div className="build-box">
                                        <div className="build-part1">
                                            <img alt="img" src={magento2} />
                                        </div>
                                        <div className="build-part2">
                                            <p>
                                                Hire iQuinceSoft developers for the best Magento solutions that can help online merchants scale high in the spheres of eCommerce. </p>
                                            <Link to={"/HireMagentoDevelopers"}>Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12">
                                    <div className="build-box">
                                        <div className="build-part1">
                                            <img alt="img" src={react} />
                                        </div>
                                        <div className="build-part2">
                                            <p>
                                                Hire React developers to build interactive UI, simple views and component-based structures. </p>
                                            <Link to={"/HireReactDevelopers"}>Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-5 col-md-12">
                                    <div className="build-box">
                                        <div className="build-part1">
                                            <img alt="img" src={angular} />
                                        </div>
                                        <div className="build-part2">
                                            <p>
                                                Hire our Angular developers to create dynamic Single Page Applications (SPAs) - for web and mobile. </p>
                                            <Link to={"/HireAngularDevelopers"}>Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12">
                                    <div className="build-box">
                                        <div className="build-part1">
                                            <img alt="img" src={vue} />
                                        </div>
                                        <div className="build-part2">
                                            <p>
                                                The go-to choice for developing next-gen apps that are small and robust. </p>
                                            <Link to={"/HireVueDevelopers"}>Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-5 col-md-12">
                                    <div className="build-box">
                                        <div className="build-part1">
                                            <img alt="img" src={Devops} />
                                        </div>
                                        <div className="build-part2">
                                            <p>
                                                Hire DevOps developers who are experts in Docker, Kubernetes, AWS, GCP, Azure, GitLab CI/CD, Jenkins and more.  </p>
                                            <Link to={"/DevOps"}>Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12">
                                    <div className="build-box">
                                        <div className="build-part1">
                                            <img alt="img" src={Assurance} />
                                        </div>
                                        <div className="build-part2">
                                            <p>
                                                Automation software and manual testing services, including security, functional, server-side, etc.  </p>
                                            <Link to={"/QualityAssurance"}>Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-5 col-md-12">
                                    <div className="build-box">
                                        <div className="build-part1">
                                            <img alt="img" src={android} />
                                        </div>
                                        <div className="build-part2">
                                            <p>
                                                Hire developers with a specialization in iOS, Android, Xamarin, Apache Cordova, PWA, Flutter, Ionic, React Native and more </p>
                                            <Link to={"/Mobile_Developement"}>Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12">
                                    <div className="build-box">
                                        <div className="build-part1">
                                            <img alt="img" src={wordpress} />
                                        </div>
                                        <div className="build-part2">
                                            <p>
                                                Hire our WordPress developers and have a sigh of relief from the concept, development, QA and delivery part.  </p>
                                            <Link to={"/HireWordpressDevelopers"}>Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="Design-sec">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12">
                                    <h3>Offshore Software Development & IT Outsourcing Services</h3>
                                </div>
                            </div>

                            <div className="row">
                                <OwlCarousel options={Designer}>
                                    <div className="Design-owl">
                                        <img alt="img" src={planDev} />
                                        <h4>Hire Dedicated Developers</h4>
                                        <p>Hire dedicated developers and use their expertise in the Front end, Back-end, UI/UX, QA, DevOps, Digital Marketing and much more. </p>
                                    </div>
                                    <div className="Design-owl">
                                        <img alt="img" src={Frontend} />
                                        <h4>Front-end Development</h4>
                                        <p>Build interactive, modern and reliable user interfaces across all the business domains with us. We use modern tools and frameworks like React.js, Vue.js, and Angular, for designing and developing robust, fast, and engaging user-friendly interfaces.</p>
                                    </div>
                                    <div className="Design-owl">
                                        <img alt="img" src={Backend} />
                                        <h4>Backend Development</h4>
                                        <p>From API integration to database migration to set up server-side technologies, a backend developer plays a vital role in getting your project.  </p>
                                    </div>
                                    <div className="Design-owl">
                                        <img alt="img" src={software} />
                                        <h4>Software Development</h4>
                                        <p>Meet your business needs with custom functionality and features. We offer custom software services that help you address your business needs. </p>
                                    </div>
                                    <div className="Design-owl">
                                        <img alt="img" src={Graphic} />
                                        <h4>Custom Graphic Designs</h4>
                                        <p>Let us know your design needs, and we’ll deliver that requirement. We recruit some of the best creative minds from the cream layer of the talent pools. We can help you differentiate your brand from the rest of the crowd and make it a top-ranked brand with no extra costs. </p>
                                    </div>
                                    <div className="Design-owl">
                                        <img alt="img" src={Web_Dev} />
                                        <h4>Web Development</h4>
                                        <p>Get the benefit of state-of-the-art technologies and development practices to create custom web apps and systems for your business. We conceptualize and create apps from scratch that meet your business needs.’ now. You can put your information online at a place, but you can not override the power of the printed brochures.
                                            iQuincesoft can deliver you all types of brochures in full color.  </p>
                                    </div>
                                </OwlCarousel>

                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12" >
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="design-box">
                                                <img alt="img" src={planDev} />
                                                <h4>Hire Dedicated Developers</h4>
                                                <p>Hire dedicated developers and use their expertise in the Front end, Back-end, UI/UX, QA, DevOps, Digital Marketing and much more.</p>
                                                <Link className="design-btn" to={'/DedicatedDevelopmentTeams'}>Learn More</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="design-box">
                                                <img alt="img" src={Frontend} />
                                                <h4>Front-end Development</h4>
                                                <p>Build interactive, modern and reliable user interfaces across all the business domains with us. We use modern tools and frameworks like React.js, Vue.js, and Angular, for designing and developing robust, fast, and engaging user-friendly interfaces.</p>
                                                <Link className="design-btn" to="/HireReactDevelopers">Learn More</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="design-box">
                                                <img alt="img" src={Backend} />
                                                <h4>Backend Development</h4>
                                                <p>From API integration to database migration to set up server-side technologies, a backend developer plays a vital role in getting your project.  </p>
                                                <Link className="design-btn" to="/HireNodeDevelopers">Learn More</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="design-box">
                                                <img alt="img" src={software} />
                                                <h4>Software Development</h4>
                                                <p>Meet your business needs with custom functionality and features. We offer custom software services that help you address your business needs. </p>
                                                <Link className="design-btn" to="#">Learn More</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="design-box">
                                                <img alt="img" src={Graphic} />
                                                <h4>Custom Graphic Designs</h4>
                                                <p>Let us know your design needs, and we’ll deliver that requirement. We recruit some of the best creative minds from the cream layer of the talent pools. We can help you differentiate your brand from the rest of the crowd and make it a top-ranked brand with no extra costs. </p>
                                                <Link className="design-btn" to="/HireDesigners">Learn More</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="design-box">
                                                <img alt="img" src={Web_Dev} />
                                                <h4>Web Development</h4>
                                                <p>Get the benefit of state-of-the-art technologies and development practices to create custom web apps and systems for your business. We conceptualize and create apps from scratch that meet your business needs.’ now. You can put your information online at a place, but you can not override the power of the printed brochures.
                                                    iQuincesoft can deliver you all types of brochures in full color.  </p>
                                                <Link className="design-btn" to="/Web_Development">Learn More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <FormPopup />
                        <h5><Link to={'#EuquireSec'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Or, Use this form to share your requirements.<span>Get guaranteed response within 8 Hrs.</span></Link></h5>
                    </div>

                    <div className="process-sec dd">
                        <div className="container">
                            <h1>Our Process</h1>
                            <div className="row">
                                <p className="process-heading-para">The Process we use to build your dedicated development team</p>
                                <div className="col-lg-5 col-md-6">
                                    <picture><img alt="img" src={Developer} /></picture>
                                </div>
                                <div className="col-lg-1"></div>
                                <div className="col-lg-5 col-md-6">
                                    <div className="process-box txt-process-box">
                                        <span className="blue">01</span>
                                        <h3>Choose Developers</h3>
                                        <p>We serve businesses across the globe with the help of our dedicated developers. Screen, Scrutinize and interview the selected ones from our pre-vetted talent pool and finalize who will work and help you. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-5 col-md-6">
                                    <div className="process-box txt-process-box">
                                        <span className="blue">02</span>
                                        <h3>Smooth Integration:</h3>
                                        <p>The chosen developers gel well in the form of your extended teams and fit into your existing processes. The developers function as your in-house team under your direct supervision. </p>
                                    </div>
                                </div>
                                <div className="col-lg-1"></div>
                                <div className="col-lg-5 col-md-6">
                                    <picture><img alt="img" src={Business} /></picture>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-5 col-md-6">
                                    <picture><img alt="img" src={Artificial} /></picture>
                                </div>
                                <div className="col-lg-1"></div>
                                <div className="col-lg-5 col-md-6">
                                    <div className="process-box txt-process-box">
                                        <span className="blue">03</span>
                                        <h3>Scale on-demand:</h3>
                                        <p>iQuinceSoft offers best-fit hiring models to meet all your business needs. Hire developers from the best talent pool to meet your business needs and your business needs and budget. We help you scale on-demand and grow the team following the high-workload periods and ramp down the team size when required. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="dedicate-sec">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12">
                                    <h1>Benefits of a hiring a dedicated development team from iQuinceSoft</h1>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-2"></div>
                                <div className="col-lg-8 col-md-12">
                                    <ul>
                                        <li>
                                            <label><img alt="img" src={Diverse} /> Diverse Teams</label>
                                            <p>According to your project specifications, our diverse and versatile teams will deliver you result-driven solutions with expertise in key skills like PHP, Python, Django, NodeJS, Angular, WordPress, React Native, and other services areas.</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-2"></div>
                            </div>

                            <div className="row">
                                <div className="col-lg-2"></div>
                                <div className="col-lg-8 col-md-12">
                                    <ul>
                                        <li>
                                            <label><img alt="img" src={efficiency} /> Efficient Delivery</label>
                                            <p>We are a highly skilled and efficient team that leads the clients to forge long-term relations with us, from full-scale software development to quick customizations of pre-designed platforms.</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-2"></div>
                            </div>


                            <div className="row">
                                <div className="col-lg-2"></div>
                                <div className="col-lg-8 col-md-12">
                                    <ul>
                                        <li>
                                            <label><img alt="img" src={Increase2} /> Quick Ramp-ups</label>
                                            <p>We can swiftly ramp up your development projects by implementing the business transformations significantly in the blink of an eye. We leverage our developers to complete the tasks with minimum time to market. </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-2"></div>
                            </div>
                            <div className="row">
                                <div className="col-lg-2"></div>
                                <div className="col-lg-8 col-md-12">
                                    <ul>
                                        <li>
                                            <label><img alt="img" src={Cost} /> Transparent Costing</label>
                                            <p>We offer transparent and fair costing at all stages of software development. We charge what is reasonably right and suit your budget by matching our highest quality benchmarks.  </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-2"></div>
                            </div>
                        </div>
                    </div>


                    <WebSec />

                    <EasySec />

                    <div className="frequent-sec">
                        <h3>Frequently Asked Questions</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2 col-md-1"></div>
                                <div className="col-lg-8 col-md-10" >
                                    <Accordion allowZeroExpanded preExpanded={['a']}>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Who are iQuinceSoft?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                iQuinceSoft is a renowned offshore software development company that support, assist and provide high-end IT and consulting services.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Can you help in staff augmentation?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Yes. We take all your hiring responsibilities and you get pre-vetted candidates to work for your project (Once you screen and clear them with the screening process).

                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                What is my benefit in hiring a dedicated development team?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                The benefits are enormous. Some of them are listed below:
                                                <ul>
                                                    <li>Minimized operational costs. </li>
                                                    <li>No need to engage the staff recruitment.</li>
                                                    <li>No need to hire and fire augmented staff.</li>
                                                    <li>Admin support from vendor.</li>
                                                    <li>Clear communication with the augmented team. </li>
                                                    <li>Easily scale up the team.</li>
                                                </ul>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                How much does it cost to hire a dedicated team?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Hiring a dedicated developer is easy with iQuinceSoft. The cost to hire a dedicated developer team depends on various factors, out of which some are as follows:
                                                <ul>
                                                    <li>Tenure of engagement</li>
                                                    <li>Nature of development</li>
                                                    <li>Full-time or part-time development</li>
                                                    <li>The number of specialists hired</li>
                                                    <li>The experience and skills of developers</li>
                                                </ul>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Do you offer no-risk trial period for the developers?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                We ensure you stay safe and offer risk-free culture with one week no-risk trial period for the developers.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                        <FormPopup />
                        <h5><Link to={'#EuquireSec'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Or, Use this form to share your requirements.<span>Get guaranteed response within 8 Hrs.</span></Link></h5>
                    </div>


                    <WorkSec />


                    <ReviewSec />

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
                                                    <h4>{LaravelJson.name}</h4>
                                                    <p dangerouslySetInnerHTML={{ __html: LaravelJsonS.content }}></p>
                                                    <Link to="#">Read More</Link>
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


                    <EuquireSec />

                    <AwardSec />

                    <Footer />
                </>
        );
    }
}

export default DedicatedTeams;
