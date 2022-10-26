
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


class Drupal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            DrupalJson: [],
            Loading: true,
        }
    }

    componentDidMount() {
        PostCate.getDrupal().then((Drupals, err) => {
            if (!err) {
                this.setState({
                    DrupalJson: Drupals,
                    Loading: false,

                });
            }
        });
    }
    render() {
        const { DrupalJson } = this.state;

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
                        <title>Hire Drupal Developer | Hire Dedicated Drupal Developers
                        </title>
                        <meta name="discription" content="Do you want to hire dedicated Drupal Developer for your projects? Partner with iQuinceSoft & hire Monthly/hourly basis developers at your flexibility. Hire Now!" />
                    </Helmet>
                    <div className="service-banner service-banner-cat">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-12" >
                                    <p>DRUPAL</p>
                                    <h1><strong> Scalable and Optimized Drupal Solutions.</strong><br /></h1>
                                    <ul>
                                        <li>Hire our Drupal developers and architects for all your Drupal projects with the flexibility to hire on a fixed cost, project, or hourly and monthly basis.</li>
                                        <li>Get Customized, Business-Centric Web Solutions that are scalable and secure with the trust of iQuinceSoft.</li>
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
                                    <h3>Drupal Development Services</h3>
                                    <p>Build large scale web apps and websites that are Scalable and Customizable</p>
                                </div>

                                <OwlCarousel options={culture}>
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Add-on Functionalities</h4>
                                        <p>Drupal offers hundreds of free modules that provide extra functionalities. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Open-Source</h4>
                                        <p>Open to innovative influences from talented programmers. Thus Drupal is getting improved with each passing day, making it unlikely that Drupal will atrophy. Free to use as well with no worries about the license fee. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Evolving</h4>
                                        <p>Better way of working with improved functionalities. Thus we get a platform which is capable of get going with the time.
                                        </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Support eCommerce</h4>
                                        <p>Drupal supports eCommerce. Easy to integrate the payment gateways like eWay and Paypal.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Better User Experience</h4>
                                        <p>drupal is a digital experience platform that offer enhanced user experience.  </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Scalability</h4>
                                        <p>No matter what your needs are, Drupal fits all size. Whether it is a simple app with nominal traffic or it’s a huge web system with a traffic of billion users a day, Drupal works well.  </p>
                                    </div>


                                </OwlCarousel>


                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Add-on Functionalities</h4>
                                        <p>Drupal offers hundreds of free modules that provide extra functionalities. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Open-Source</h4>
                                        <p>Open to innovative influences from talented programmers. Thus Drupal is getting improved with each passing day, making it unlikely that Drupal will atrophy. Free to use as well with no worries about the license fee. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Evolving</h4>
                                        <p>Better way of working with improved functionalities. Thus we get a platform which is capable of get going with the time.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Support eCommerce</h4>
                                        <p>Drupal supports eCommerce. Easy to integrate the payment gateways like eWay and Paypal. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Better User Experience</h4>
                                        <p>Fdrupal is a digital experience platform that offer enhanced user experience.  </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Scalability</h4>
                                        <p>No matter what your needs are, Drupal fits all size. Whether it is a simple app with nominal traffic or it’s a huge web system with a traffic of billion users a day, Drupal works well.  </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="culture-sec web-sec">
                        <h3>Drupal Services</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12" >
                                    <OwlCarousel options={culture}>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img alt="imsrc={webImg} /> */}
                                            <h4>Drupal Web Development</h4>
                                            <p>Complex and Customized, SEO-friendly and mobile-responsive websites. We are a team of ace Drupal developers who are proficient enough to offer you a web solution that meet your need of a web solution.  </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img alt="imsrc={webImg1} /> */}
                                            <h4>Drupal e-Market Store</h4>
                                            <p>We offer fully-featured ecommerce sites with using multifaceted approach and well-defined workflows, data structures and displays. We offer flexibility in the functionalities like shipping, order management, inventory management, payment gateways and more. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img alt="imsrc={webImg2} /> */}
                                            <h4>Drupal Migration</h4>
                                            <p>We assess your current website with the modules that are necessary to migrate and those which are needed to build from scratch. We ensure flawless migration.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img alt="imsrc={webImg3} /> */}
                                            <h4>Drupal Staff Augmentation</h4>
                                            <p>Our staff augmentation services assists you in reducing the risk, manage the cost and add flexibility. We offer need-based tech capability for startups, communication agencies and web development teams. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img alt="imsrc={webImg4} /> */}
                                            <h4>Drupal Integrations</h4>
                                            <p>We offer integration services including API and web services integration, seamless SMS, third party integrations, CMS and CRM integration and custom development. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img alt="imsrc={webImg5} /> */}
                                            <h4>Drupal Maintenance and Support</h4>
                                            <p>Keep your applications and web systems technically sound. We fix the prevalent bugs, offer security upgrades, rules and blocks and amend user roles.</p>
                                        </div>
                                    </OwlCarousel>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            {/* <img alt="imsrc={webImg} /> */}
                                            <h4>Drupal Web Development</h4>
                                            <p>Complex and Customized, SEO-friendly and mobile-responsive websites. We are a team of ace Drupal developers who are proficient enough to offer you a web solution that meet your need of a web solution.  </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img alt="imsrc={webImg1} /> */}
                                            <h4>Drupal e-Market Store</h4>
                                            <p>We manage every single facet of an online store with the help of Drupal e-Market Store. We connect the PHP app to the WooCommerce store with SCALABILITY.</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img alt="imsrc={webImg2} /> */}
                                            <h4>Drupal Migration</h4>
                                            <p>We assess your current website with the modules that are necessary to migrate and those which are needed to build from scratch. We ensure flawless migration.
                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img alt="imsrc={webImg3} /> */}
                                            <h4>Drupal Staff Augmentation</h4>
                                            <p>Our staff augmentation services assists you in reducing the risk, manage the cost and add flexibility. We offer need-based tech capability for startups, communication agencies and web development teams. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img alt="imsrc={webImg4} /> */}
                                            <h4>Drupal Integrations</h4>
                                            <p>We offer integration services including API and web services integration, seamless SMS, third party integrations, CMS and CRM integration and custom development. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img alt="imsrc={webImg5} /> */}
                                            <h4>Drupal Maintenance and Support</h4>
                                            <p>Keep your applications and web systems technically sound. We fix the prevalent bugs, offer security upgrades, rules and blocks and amend user roles.</p>
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
                                                Where is iQuinceSoft based in?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                We are based in India. We have hundreds of in-house skilled software developers, and for Drupal, we have 25 + in-house developers with an average experience of 5 + years.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Will I have ownership of the project?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Yes. You'll be the owner of your project. We sign NDAs with you to ensure the copyright, source code, IPR, etc.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Do you offer flexible pricing models?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Yes. We offer flexible models to cater to the needs of your business models. We offer project-based, hourly, and fixed price models.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Do you re-use the code?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                No. we do not use the license keys, patented processes, trademarks, and proprietary algorithms.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Why should I use the dedicated developers from iQuinceSoft?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                We jot down some of the benefits with the help of dedicated developers from iQuinceSoft:
                                                <ul>
                                                    <li>Access to skilled and expert developers</li>
                                                    <li>The developer works as your extended in-house team</li>
                                                    <li>Dedicated project manager</li>
                                                    <li>Quality Assurance and minimal risk</li>
                                                    <li>Total control over the process</li>
                                                </ul>
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
                                        {DrupalJson && DrupalJson.map(DrupalJsonS => {
                                            return (
                                                <div className="cult-box">
                                                    <div class="tech-dot"></div>
                                                    <h4>{DrupalJsonS.name}</h4>
                                                    <p dangerouslySetInnerHTML={{ __html: DrupalJsonS.content.substr(0, 100) }}></p>
                                                    <Link to={`/PostPage/${DrupalJsonS.slug}`} >READ MORE </Link>
                                                </div>
                                            );
                                        })}
                                    </OwlCarousel>

                                    <div className="row">
                                        {DrupalJson && DrupalJson.map((DrupalJsonS, index) => {
                                            return (
                                                <div className="col-lg-4 col-md-4">
                                                    <div className="insight-box" key={DrupalJsonS.id}>
                                                        <h4>{DrupalJsonS.name}</h4>
                                                        <p dangerouslySetInnerHTML={{ __html: DrupalJsonS.content.substr(0, 100) }}></p>
                                                        <Link to={`/PostPage/${DrupalJsonS.slug}`} >READ MORE </Link>
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

export default Drupal;

