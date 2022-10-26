
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
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';

class ReactNative extends Component {
    constructor(props) {
        super(props)
        this.state = {
            servicesJson: [],
            appjson: [],
            Questionjson: [],
            ReactNativeJson: [],
            Loading: true,
        }
    }

    componentDidMount() {
        PostCate.getReactNative().then((ReactNative, err) => {
            if (!err) {
                this.setState({
                    ReactNativeJson: ReactNative,
                    Loading: false,

                });
            }
        });
    }
    render() {
        const { ReactNativeJson } = this.state;

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
                    <div className="service-banner service-banner-cat">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-12" >
                                    <p>REACT NATIVE</p>
                                    <h1><strong>Hire Skilled React Native Specialists for Fast Development, Cost-Effective Process, and Tested Solutions.</strong><br /></h1>
                                    <ul>
                                        <li>Hire our skilled React Native developers for Hybrid, Custom or Native apps with saving your time, cost, and efforts with seamless fitting in the development team to work on the projects.</li>
                                        <li>Hire us to get Scalable, Secure, and high-end apps to conquer the competition.</li>
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
                                    <h3>React Native Development Services</h3>
                                    <p>For Fast loading Apps that can streamline with the tight budget, less development complexities and responsive UI, iQuinceSoft trusts React Native</p>
                                </div>

                                <OwlCarousel options={culture}>
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Fast Development</h4>
                                        <p>React Native builds apps at a swift pace with the help of JavaScript. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Cost-Effective</h4>
                                        <p>React Native enables iOS to compile and suit with Android software and vice-versa. Hence, it slashes down the development time and maintenance costs significantly.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Single Codebase for Mobile OS</h4>
                                        <p>React Native offers a platform to write a single code base and deploy it to several mobile OS like iOS, Android, and Windows. It enables the developer to reuse any component and any stage.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Cross-Platform</h4>
                                        <p>Suitable for cross-platform app development. Once written on React Native, a code can run flawlessly on Android and iOS. Perfect framework for building platform-specific apps.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Reusable Codes</h4>
                                        <p>React Native is a platform where developers need not write specific code-specific apps. React Native developers can use the pre-loaded components as per the needs to write new apps. This ensures faster development. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Community driven</h4>
                                        <p>React Native community is extensive. The community members can fix technical glitches and offer valuable support on the advancements. It is free to access the blogs, videos, talks, new libraries, and apps from the React Native Community. </p>
                                    </div>


                                </OwlCarousel>


                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Fast Development</h4>
                                        <p>React Native builds apps at a swift pace with the help of JavaScript. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Cost-Effective</h4>
                                        <p>React Native enables iOS to compile and suit with Android software and vice-versa. Hence, it slashes down the development time and maintenance costs significantly.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Single Codebase for Mobile OS</h4>
                                        <p>React Native offers a platform to write a single code base and deploy it to several mobile OS like iOS, Android, and Windows. It enables the developer to reuse any component and any stage.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Cross-Platform</h4>
                                        <p>Suitable for cross-platform app development. Once written on React Native, a code can run flawlessly on Android and iOS. Perfect framework for building platform-specific apps. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Reusable Codes</h4>
                                        <p>React Native is a platform where developers need not write specific code-specific apps. React Native developers can use the pre-loaded components as per the needs to write new apps. This ensures faster development. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Community driven</h4>
                                        <p>React Native community is extensive. The community members can fix technical glitches and offer valuable support on the advancements. It is free to access the blogs, videos, talks, new libraries, and apps from the React Native Community. </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="culture-sec web-sec">
                        <h3>React Native Services</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12" >
                                    <OwlCarousel options={culture}>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg} /> */}
                                            <h4>Custom App Development</h4>
                                            <p>We offer end-to-end React Native solutions that include prototyping, designing UIs, developing iOS, Android, and cross-platform apps for development. We deliver innovative and intuitive apps to meet your business needs and help you provide value to your end-user. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg1} /> */}
                                            <h4>Migration Services</h4>
                                            <p>We offer mobile app migration services to React Native. It provides enhanced UI/UX. Our solution architects can help you with migration services with new-age technology and revitalize your existing apps.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg2} /> */}
                                            <h4>Support and Maintenance</h4>
                                            <p>iQuinceSoft has emerged as a solution provider that delivers premium quality support and maintenance services for React Native projects. We exceed the expectations every time with our exclusive support and maintenance services. Connect with our solution providers to get over the issues you have been facing for a long.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg3} /> */}
                                            <h4>Consulting</h4>
                                            <p>A blend of experience and young Turks makes us one of the best consulting teams in React Native. We assess your business processes. We suggest changes as per the current market trends and the tech stacks needed to keep your project functional and ensure business profits. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg4} /> */}
                                            <h4>API Development</h4>
                                            <p>We offer API development services for mobile apps with the help of React Native. We are a team of skilled professionals that build custom API services for your mobile app. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Hire Dedicated React Native Developers</h4>
                                            <p>Share your load and get access to iQuinceSoft advantages by hiring a dedicated React Native developer. We ease down hiring on an hourly, part-time, and project basis. </p>
                                        </div>

                                    </OwlCarousel>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg} /> */}
                                            <h4>Custom App Development</h4>
                                            <p>We offer end-to-end React Native solutions that include prototyping, designing UIs, developing iOS, Android, and cross-platform apps for development. We deliver innovative and intuitive apps to meet your business needs and help you provide value to your end-user. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg1} /> */}
                                            <h4>Migration Services</h4>
                                            <p>We offer mobile app migration services to React Native. It provides enhanced UI/UX. Our solution architects can help you with migration services with new-age technology and revitalize your existing apps.</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg2} /> */}
                                            <h4>Support and Maintenance</h4>
                                            <p>iQuinceSoft has emerged as a solution provider that delivers premium quality support and maintenance services for React Native projects. We exceed the expectations every time with our exclusive support and maintenance services. Connect with our solution providers to get over the issues you have been facing for a long.
                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg3} /> */}
                                            <h4>Consulting</h4>
                                            <p>A blend of experience and young Turks makes us one of the best consulting teams in React Native. We assess your business processes. We suggest changes as per the current market trends and the tech stacks needed to keep your project functional and ensure business profits. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg4} /> */}
                                            <h4>API Development</h4>
                                            <p>We offer API development services for mobile apps with the help of React Native. We are a team of skilled professionals that build custom API services for your mobile app. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Hire Dedicated React Native Developers</h4>
                                            <p>Share your load and get access to iQuinceSoft advantages by hiring a dedicated React Native developer. We ease down hiring on an hourly, part-time, and project basis. </p>
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
                                                Which are the pricing models you offer to hire a React Native developer?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                We offer three pricing models, which are as follows:
                                                <ul>
                                                    <li>The fixed cost pricing model</li>
                                                    <li>The hourly cost pricing model</li>
                                                    <li>Project-based pricing model.</li>
                                                </ul>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                How much time is required to develop a React Native app?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Time is not defined in developing an app based on React Native. It varies from app to app according to the size and model of the project. Usually, an app may take three to 6 weeks, depending upon the size, integration, feature, functionalities, and complexity of the app project.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Can I supervise the app development process?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Yes. We keep you in the loop during the development process, plus you can take timely insights from the developer about the development process and communicate at your convenience too.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Do I own the app you develop?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Yes. We ensure you complete ownership of the project. We provide you with the copyright, NDA, Intellectual Property Rights, and Source Code.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                What if I don't like the work of your developer?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                In the entire course of our client interaction and service deliveries across the years, this has never happened. Yet, if you don't like anything about our developer's skills and approach, we will replace the developer with another one.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                What if I want to change the developer in the mid of the development process?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                In the entire course of our client interaction and service deliveries across the years, this has never happened. Yet, if you don't like anything about our developer's skills and approach, we will replace the developer with another one.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Do you sign NDAs?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                In the entire course of our client interaction and service deliveries across the years, this has never happened. Yet, if you don't like anything about our developer's skills and approach, we will replace the developer with another one.
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
                                        {ReactNativeJson && ReactNativeJson.map(ReactNativeJsonS => {
                                            return (
                                                <div className="cult-box">
                                                    <div class="tech-dot"></div>
                                                    <h4>{ReactNativeJsonS.name}</h4>
                                                    <p dangerouslySetInnerHTML={{ __html: ReactNativeJsonS.content.substr(0, 100) }}></p>
                                                    <Link to={`/PostPage/${ReactNativeJsonS.slug}`} >READ MORE </Link>
                                                </div>
                                            );
                                        })}
                                    </OwlCarousel>

                                    <div className="row">
                                        {ReactNativeJson && ReactNativeJson.map((ReactNativeJsonS, index) => {
                                            return (

                                                <div className="col-lg-4 col-md-4">
                                                    <div className="insight-box" key={ReactNativeJsonS.id}>
                                                        <h4>{ReactNativeJsonS.name}</h4>
                                                        <p dangerouslySetInnerHTML={{ __html: ReactNativeJsonS.content.substr(0, 100) }}></p>
                                                        <Link to={`/PostPage/${ReactNativeJsonS.slug}`} >READ MORE </Link>
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

export default ReactNative;

