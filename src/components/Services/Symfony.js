
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
import FAQ from '../../container/FAQ';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';
import { PostCate } from '../../json/PostCate';
import 'react-accessible-accordion/dist/fancy-example.css';
import { TailSpin } from 'react-loader-spinner'
import AwardFormsec from '../../container/AwardFormsec';
import Partner from '../../container/Partner';
import { Helmet } from "react-helmet";
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';


class Symfony extends Component {
    constructor(props) {
        super(props)
        this.state = {
            CommerceJson: [],
            Loading: true,
        }
    }
    componentDidMount() {
        PostCate.getSymfony().then((Symfony, err) => {
            if (!err) {
                this.setState({
                    CommerceJson: Symfony,
                    Loading: false,
                });
            }
        });

    }
    render() {
        const { CommerceJson } = this.state;
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
                        <title>Hire Symfony Developer | Hire Dedicated Symfony Developer
                        </title>
                        <meta name="discription" content="Do you want to hire dedicated Symfony Developer for your projects? Partner with iQuinceSoft & hire Monthly/hourly basis developers at your flexibility. Hire Now!" />
                    </Helmet>
                    <div className="service-banner service-banner-cat">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-12">
                                    <p>SYMFONY</p>
                                    <h1><strong>Hire Symfony developers for clean codes, and secure web apps</strong><br /></h1>
                                    <ul>
                                        <li>With the expertise of our vetted talent pool of developers, we ensure that you get the best from the top 1% of a country of more than 1 billion people.</li>
                                        <li>Hire Symfony developers for the trust and confidence of iQuinceSoft.</li>
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
                                    <h3>Why Symfony?</h3>
                                    <p>As a PHP framework, Symfony is well-organized and feature-rich that offers extensive ease and support. The architecture lays the robust foundation to build sustainable web applications with all the ease and comfort possible. </p>
                                </div>

                                <OwlCarousel options={culture}>
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Easy to use and learn</h4>
                                        <p>The Symfony framework is straightforward to install and configure on most platforms. It is easy to learn and build applications as well. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>User-friendly interface</h4>
                                        <p>Symfony has a user-friendly interface. Therefore it is compatible with many platforms. Its bundles are re-usable, following the requirements and reducing development costs. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Flexible</h4>
                                        <p>Symfony offers flexibility. It offers complete control over configuration. Symfony is compatible with database systems as well. Symfony can also add additional functionalities with all the comfort and ease. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Time-Saving</h4>
                                        <p>Symfony can speed up the time-to-market. It uses less memory and optimizes the performance. Symfony allows the users to develop robust and high-performing applications and web systems.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Community Support</h4>
                                        <p>Symfony has the backup of sound communities and developers. It offers smooth access to long-term maintenance and scalability. Symfony ensures longevity and regular updates to enhance application performance. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Comfort & Convenience</h4>
                                        <p>Symfony offers tools to resolve and remove coding errors. Hence makes it super cool among developers by making it convenient and comfortable.  </p>
                                    </div>


                                </OwlCarousel>


                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Easy to use and learn</h4>
                                        <p>The Symfony framework is straightforward to install and configure on most platforms. It is easy to learn and build applications as well. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>User-friendly interface</h4>
                                        <p>Symfony has a user-friendly interface. Therefore it is compatible with many platforms. Its bundles are re-usable, following the requirements and reducing development costs. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Flexible</h4>
                                        <p>Symfony offers flexibility. It offers complete control over configuration. Symfony is compatible with database systems as well. Symfony can also add additional functionalities with all the comfort and ease. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Time-Saving</h4>
                                        <p>Symfony can speed up the time-to-market. It uses less memory and optimizes the performance. Symfony allows the users to develop robust and high-performing applications and web systems. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Community Support</h4>
                                        <p>Symfony has the backup of sound communities and developers. It offers smooth access to long-term maintenance and scalability. Symfony ensures longevity and regular updates to enhance application performance. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Comfort & Convenience</h4>
                                        <p>Symfony offers tools to resolve and remove coding errors. Hence makes it super cool among developers by making it convenient and comfortable.  </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="culture-sec web-sec">
                        <h3>Symfony Services</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12" >
                                    <OwlCarousel options={culture}>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>Consulting and strategy</h4>
                                            <p>We assess your business needs and identify and address the requirements by suggesting high-end solutions.  </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>Application Development </h4>
                                            <p>We design, develop and support a customized web, mobile, enterprise, and cloud solution to fulfill your business needs.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>App Customization and Enhancement</h4>
                                            <p>We customize solutions as per your business needs.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>App Integrations</h4>
                                            <p>We integrate the app with CRM, ERP, and other systems.  </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>Migration</h4>
                                            <p>Migrate your current apps to Symfony.  </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>Maintenance and Support</h4>
                                            <p>We maintain the current Symfony applications and offer support for new Symfony apps. We Test, Troubleshoot and build patches for the Symfony applications. </p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>Cloud Application Development </h4>
                                            <p>We can help you transform your business with the applications. These applications are scalable and quick to build. We develop applications and integrate them into the cloud. We also optimize testing capabilities, API and microservices architecture, and DevOps.  </p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>Access to a talent pool of Symfony Developers </h4>
                                            <p>We grant you access to highly skilled and experienced Symfony developers. </p>
                                        </div>
                                    </OwlCarousel>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            <h4>Consulting and strategy</h4>
                                            <p>We assess your business needs and identify and address the requirements by suggesting high-end solutions.  </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>Application Development </h4>
                                            <p>We design, develop and support a customized web, mobile, enterprise, and cloud solution to fulfill your business needs.</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>App Customization and Enhancement</h4>
                                            <p>We customize solutions as per your business needs.
                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>App Integrations</h4>
                                            <p>We integrate the app with CRM, ERP, and other systems.  </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>Migration</h4>
                                            <p>Migrate your current apps to Symfony.  </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>Maintenance and Support</h4>
                                            <p>We maintain the current Symfony applications and offer support for new Symfony apps. We Test, Troubleshoot and build patches for the Symfony applications. </p>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <h4>Cloud Application Development </h4>
                                            <p>We can help you transform your business with the applications. These applications are scalable and quick to build. We develop applications and integrate them into the cloud. We also optimize testing capabilities, API and microservices architecture, and DevOps.  </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4"></div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>Access to a talent pool of Symfony Developers </h4>
                                            <p>We grant you access to highly skilled and experienced Symfony developers.   </p>
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
                                                Can I hire dedicated Symfony developers of my choice?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Yes. iQuinceSoft can get you to screen, interview, and hire a dedicated, skilled developer that can ensure you meet the project requirements with satisfaction.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Why should I prefer Symfony over the other web development frameworks?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Supported by a large community of developers, Symfony is an open-source framework that can build dynamic and sophisticated web apps. It has the tools to build modern templates, web apps, and tests and offers excellent dependency management.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Why should I hire dedicated Symfony developers from iQuinceSoft?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                For the iQuinceSoft advantage that enables you to:
                                                <ul>
                                                    <li>Complete control over the process</li>
                                                    <li>Quality assurance and minimal risks involved</li>
                                                    <li>Dedicated project manager to manage the project and team with no extra cost.</li>
                                                    <li>Seamless integration of the developer as your extended team</li>
                                                    <li>Reliable and professional developers.</li>
                                                </ul>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Do you sign NDAs?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Yes. We are committed to your confidentiality with the work quality. We ensure your details remain confidential forever.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                How do you check the authenticity of an agency?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Check for the client testimonials on the third-party firms like clutch and goodfirms. See what people write about them on the google reviews. Scroll their social media feeds to check the authenticity and quality of work of any agency.
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
                                    {CommerceJson.length && (
                                        <OwlCarousel options={culture}>
                                            {CommerceJson.map(CommerceJsonS => {
                                                return (
                                                    <div className="cult-box">
                                                        <div class="tech-dot"></div>
                                                        <h4>{CommerceJsonS.name}</h4>
                                                        <p dangerouslySetInnerHTML={{ __html: CommerceJsonS.content.substr(0, 100) }}></p>
                                                        <Link to={`/PostPage/${CommerceJsonS.slug}`} >READ MORE </Link>
                                                    </div>
                                                );
                                            })}
                                        </OwlCarousel>
                                    )}

                                    <div className="row">
                                        {CommerceJson && CommerceJson.map((CommerceJsonS, index) => {
                                            return (
                                                <div className="col-lg-4 col-md-4">
                                                    <div className="insight-box" key={index}>
                                                        <h4>{CommerceJsonS.name}</h4>
                                                        <p dangerouslySetInnerHTML={{ __html: CommerceJsonS.content.substr(0, 100) }}></p>
                                                        <Link to={`/PostPage/${CommerceJsonS.slug}`} >READ MORE </Link>
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

export default Symfony;

