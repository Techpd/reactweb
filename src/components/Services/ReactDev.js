
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
import { TailSpin } from 'react-loader-spinner'
import Partner from '../../container/Partner';
import { Helmet } from "react-helmet";
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';

class ReactDev extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ReactJson: [],
            Loading: true,
        }
    }

    componentDidMount() {
        PostCate.getReact().then((React, err) => {
            if (!err) {
                this.setState({
                    ReactJson: React,
                    Loading: false,

                });
            }
        });
    }
    render() {
        const { ReactJson } = this.state;

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
                        <title>Hire React Native Developers | React Dedicated Native Developers
                        </title>
                        <meta name="discription" content="Want to Hire a Remote React Native Developer? Partner with iQuincesoft to hire skilled & qualified developers at your flexibility on hourly/monthly basis. Hire Now!" />
                    </Helmet>
                    <div className="service-banner service-banner-cat">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-12" >
                                    <p>REACT</p>
                                    <h1><strong> Hire React developers for peak performance and clean code</strong><br /></h1>
                                    <ul>
                                        <li>Hire dedicated React.JS developers can save your time, cost, and efforts with seamless fitting in the development team to work on the projects.</li>
                                        <li>Leverage the skills and expertise of our vetted react JS developers to scale and automate your business process with fast, scalable and vertically-integrated options.</li>
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
                                <div className="col-lg-8 col-md-12">
                                    <h3>Our React Framework Expertise</h3>
                                </div>

                                <OwlCarousel options={culture}>
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>NEXT.js</h4>
                                        <p>An optimal option if you wish to build a static-site and server-side rendering with serverless deployment. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Gatsby</h4>
                                        <p>Famous static site generator based on React and offers various popular developer-friendly plugins.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Custom</h4>
                                        <p>We can craft your applications as per your needs.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>TypeScript</h4>
                                        <p>TypeScript with React can enhance development speed, improve code readability and much more.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>React Native</h4>
                                        <p>ast and responsive e-commerce experience for online stores. This is a crucial benefit of React.js. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Redux</h4>
                                        <p>Consistent applications are compatible to run on various environments (client, server and Native) as well as are easy to test. </p>
                                    </div>


                                </OwlCarousel>


                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>NEXT.js</h4>
                                        <p>An optimal option if you wish to build a static-site and server-side rendering with serverless deployment. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Gatsby</h4>
                                        <p>Famous static site generator based on React and offers various popular developer-friendly plugins.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Custom</h4>
                                        <p>We can craft your applications as per your needs.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>TypeScript</h4>
                                        <p>TypeScript with React can enhance development speed, improve code readability and much more. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>React Native</h4>
                                        <p> Optimal choice to build mobile apps that can be deployed on Apple and Google Play Stores. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Redux</h4>
                                        <p>Consistent applications are compatible to run on various environments (client, server and Native) as well as are easy to test. </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="culture-sec web-sec">
                        <h3>React.js Development Services</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12" >
                                    <OwlCarousel options={culture}>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg} /> */}
                                            <h4>React.js Website Customization</h4>
                                            <p>iQuinceSoft is a leading organization that offer interactive React.js development services to build modern, reliable and interactive user interfaces across the industry domains. We have a team of experienced and proficient developers that can serve from remote locations. Our remote React.js developers can contribute as your in-house team members. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg1} /> */}
                                            <h4>Active Contribution</h4>
                                            <p>Our dedicated React.js developers can help you reduce the cost by a significant margin. The developers work as your in-house team under your supervision.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg2} /> */}
                                            <h4>Testing & Quality Assurance</h4>
                                            <p>Get compliant and secure UI/UX with us. We offer updated and fast React.js architecture. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg3} /> */}
                                            <h4>Architecture and Design</h4>
                                            <p>We offer state-of-the-art web interfaces that suit the user experience checklists. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg4} /> */}
                                            <h4>React.js Development</h4>
                                            <p>Explore the iQuinceSoft expertise with tailor-made React Web Applications. We have developed and delivered applications across the industrial domains. Connect with us for your high-performance application. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Test-Driven Development</h4>
                                            <p>With the help of Enzyme and Jest, we make sure the right set of the codebase. Thus, you get a stable and error-free application. </p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Migrate</h4>
                                            <p>We can help you to migrate your running applications to React. Our developers can assist with APIs creation as per the clients’ needs.  </p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>PWA & SPA Development</h4>
                                            <p>Whether a progressive web application (PWA) or single page application (SPA), we give you an edge through responsive designs that resonate with the clients. </p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Maintenance & Support</h4>
                                            <p>We assist you with our maintenance and support services. Call us, and we’ll tailor a specific plan to meet your needs. </p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>DevOps for React.js</h4>
                                            <p>We are specialists working with all major cloud platforms such as AWS, Azure, and GCP. </p>
                                        </div>
                                    </OwlCarousel>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg} /> */}
                                            <h4>React.js Website Customization</h4>
                                            <p>Customized features for your online stores with iQuinceSoft React.js services. We create, add and apply templates, functionalities and styles with simple CSS and HTML. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg1} /> */}
                                            <h4>Active Contribution</h4>
                                            <p>Our dedicated React.js developers can help you reduce the cost by a significant margin. The developers work as your in-house team under your supervision.</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg2} /> */}
                                            <h4>Testing & Quality Assurance</h4>
                                            <p>Get compliant and secure UI/UX with us. We offer updated and fast React.js architecture.
                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg3} /> */}
                                            <h4>Architecture and Design</h4>
                                            <p>We offer state-of-the-art web interfaces that suit the user experience checklists. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg4} /> */}
                                            <h4>React.js Development</h4>
                                            <p>Explore the iQuinceSoft expertise with tailor-made React Web Applications. We have developed and delivered applications across the industrial domains. Connect with us for your high-performance application. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Test-Driven Development</h4>
                                            <p>With the help of Enzyme and Jest, we make sure the right set of the codebase. Thus, you get a stable and error-free application. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4"> </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Migrate</h4>
                                            <p>We can help you to migrate your running applications to React. Our developers can assist with APIs creation as per the clients’ needs.  </p>
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
                                                What is React JS?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                React JS is a JavaScript library. It was created by Facebook in 2011. It was developed to create user interfaces for the
                                                web but it is used to build frontend and visual development for web and apps.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Do you offer React JS developers to hire services?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Yes. We offer React JS developers to hire on hourly, monthly and project basis.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Do you share your developer’s profile with us?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Yes. The skillset of our developers will be matched with your project needs and after screening from your end, our developers will be an extended part of your team.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                What if we are not satisfied with the quality of work?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                In case you are not satisfied with the quality of work of our developer, we will replace the developer as early as possible.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Do you sign NDAs?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Yes. We sign Non-Disclosure Agreements with the clients to secure the confidentiality of the data, source code and project details.
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
                                        {ReactJson && ReactJson.map(ReactJsonS => {
                                            return (
                                                <div className="cult-box">
                                                    <div class="tech-dot"></div>
                                                    <h4>{ReactJsonS.name}</h4>
                                                    <p dangerouslySetInnerHTML={{ __html: ReactJsonS.content.substr(0, 100) }}></p>
                                                    <Link to={`/PostPage/${ReactJsonS.slug}`} >READ MORE </Link>
                                                </div>
                                            );
                                        })}
                                    </OwlCarousel>

                                    <div className="row">
                                        {ReactJson && ReactJson.map((ReactJsonS, index) => {
                                            return (

                                                <div className="col-lg-4 col-md-4">
                                                    <div className="insight-box" key={ReactJsonS.id}>
                                                        <h4>{ReactJsonS.name}</h4>
                                                        <p dangerouslySetInnerHTML={{ __html: ReactJsonS.content.substr(0, 100) }}></p>
                                                        <Link to={`/PostPage/${ReactJsonS.slug}`} >READ MORE </Link>
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

export default ReactDev;

