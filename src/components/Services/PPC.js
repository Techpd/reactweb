
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
import campaign from '../../images/campaign_image.png';
import { TailSpin } from 'react-loader-spinner'
import AwardFormsec from '../../container/AwardFormsec';
import Partner from '../../container/Partner';
import benifit_image from '../../images/benifit_image.jpg';
import { Helmet } from "react-helmet";
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';

class PPC extends Component {
    constructor(props) {
        super(props)
        this.state = {
            servicesJson: [],
            appjson: [],
            Questionjson: [],
            CommerceJson: [],
            Loading: true,
        }
    }
    componentDidMount() {
        PostCate.getWoocommerce().then((wooCommerce, err) => {
            if (!err) {
                this.setState({
                    CommerceJson: wooCommerce,
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
                        <title> Pay Per Click Company in India | PPC Services
                        </title>
                        <meta name="discription" content="Get quality traffic with best Pay-Per-Click (PPC) management company. Contact for Google ads service search ad, display ad, shopping ad @(347) 960-4166." />
                    </Helmet>

                    <div className="service-banner service-banner-cat">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-12" >
                                    <p>PAY PER CLICK</p>
                                    <h1><strong>Contrary to the generalized portal PPC makes use of affiliate model making purchase possible while surfing against the driving high volume of traffic.</strong><br /></h1>
                                    <ul>
                                        <li>PPC is a very cost-effective means to get the site noticed by the target audience.Websites that utilize PPC ads search query is typed in a search field; it correlates and matches with the content of the advertiser’s keywords the PPC is displayed on the page.</li>
                                        <li>PPC Service providers are Google AdWords, Yahoo! Search Marketing, and Microsoft adCenter used to be the largest network operators.</li>

                                    </ul>
                                </div>
                                <div className="col-lg-5 col-md-12" ><AwardFormsec /></div>
                            </div>
                        </div>
                    </div>



                    <div className="culture-sec web-sec">
                        <h3>OUR PAY PER CLICK SERVICES</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12" >
                                    <OwlCarousel options={culture}>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>
                                                PPC Audits</h4>
                                            <p>Our PPC Audit process starts from understanding audit objective, coverage and leading to data analysis. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>
                                                Social Advertising</h4>
                                            <p>iQuinceSoft can help you with paid social campaigns that can drive your target audience toward much targeted desired actions. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>Google AdWord</h4>
                                            <p>Hiring us gives you the benefit of a full-time AdWords expert without the extra cost of hiring another full-time employee. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>Bing Advertising</h4>
                                            <p>Our in-house Bing ads agency team has the training and expertise you need to make the most of Bing’s popular PPC platform. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>Display Advertising</h4>
                                            <p>Your display ads will be targeting an audience that has already indicated an interest in your service or product.  </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>Remarketing & Retargeting</h4>
                                            <p>Improve ROI and increase conversions by marketing to people who have all ready visited your website.
                                            </p>
                                        </div>
                                    </OwlCarousel>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            <h4>PPC Audits</h4>
                                            <p>Our PPC Audit process starts from understanding audit objective, coverage and leading to data analysis.

                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>Social Advertising</h4>
                                            <p>iQuinceSoft can help you with paid social campaigns that can drive your target audience toward much targeted desired actions.</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>Google AdWords </h4>
                                            <p>Hiring us gives you the benefit of a full-time AdWords expert without the extra cost of hiring another full-time employee.
                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>Bing Advertising</h4>
                                            <p>Our in-house Bing ads agency team has the training and expertise you need to make the most of Bing’s popular PPC platform.
                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>Display Advertising</h4>
                                            <p>Your display ads will be targeting an audience that has already indicated an interest in your service or product.

                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>Remarketing & Retargeting</h4>
                                            <p>Improve ROI and increase conversions by marketing to people who have all ready visited your website. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <FormPopup />
                        <Link to={"#EuquireSec"} target="_blank"><h5>Or, Use this form to share your requirements. <span>Get guaranteed response within 8 Hrs.</span></h5></Link>
                    </div>

                    <div className="PPC-BENIFIT">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h1>Benefits of PPC for your Business</h1>
                                    <p>Making the website attractive to reflect the page of the advertisement before the customers.</p>
                                    <p>Make brief and eye catching product or service explanation for our model to motivate the customer to visit the website.</p>
                                    <p> You only pay when a person clicks on your advertisement with this marketing type
                                        The web owner must know the cost involved on cost click per(CPC) and Click through Rate(CTR) so that he can judge how much to spend on a keyword.</p>
                                </div>
                                <div className="col-lg-6">
                                    <img alt="img" width="100%" src={benifit_image} />
                                </div>
                            </div>

                        </div>
                        <FormPopup />
                        <Link to={"#EuquireSec"} target="_blank"><h5>Or, Use this form to share your requirements. <span>Get guaranteed response within 8 Hrs.</span></h5></Link>
                    </div>
                    <div className="campaign">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <img width="100%" alt="img" src={campaign} />
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <h1>Brief process of our pay per click campaign:</h1>
                                    <p>Our pay-per-click (PPC) management service includes the following components:  </p>
                                    <ul>
                                        <li>PPC search campaign strategy</li>
                                        <li>Keyword research and selection</li>
                                        <li>Ad creative development</li>
                                        <li>Campaign set-up</li>
                                        <li>Bid management and ROI tracking</li>
                                        <li>Landing page optimization and development</li>
                                        <li>Campaign management and analysis</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <FormPopup />
                        <Link to={"#EuquireSec"} target="_blank"><h5>Or, Use this form to share your requirements. <span>Get guaranteed response within 8 Hrs.</span></h5></Link>
                    </div>


                    <div className="Lets">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2"></div>
                                <div className="col-lg-8">
                                    <div className="items-lets">
                                        <h2 class="lets">Lets Get Your
                                            <strong> Project Started</strong></h2>
                                        <p>We will help you to achieve your goals and to grow your business.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <FormPopup />
                        <Link to={"#EuquireSec"} target="_blank"><h5>Or, Use this form to share your requirements. <span>Get guaranteed response within 8 Hrs.</span></h5></Link>
                    </div>

                    <div className="Deliverables">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2"></div>
                                <div className="col-lg-8">
                                    <h1>Deliverables</h1>
                                    <p>
                                        We report monthly on your campaign’s success regarding keyword choice and text choice, and we create a rank report so you know where you rank organically for the keywords you pay for. Additionally, after you review the report, we’ll book a one hour call with the members of your team to explain your campaign’s progress, direction, and answer any questions you may have.</p>
                                </div>
                            </div>
                        </div>
                        <FormPopup />
                        <Link to={"#EuquireSec"} target="_blank"><h5>Or, Use this form to share your requirements. <span>Get guaranteed response within 8 Hrs.</span></h5></Link>
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
                                                What pricing models do you offer to hire a Bootstrap developer at iQuinceSoft?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                IQuinceSoft offers all the flexibility to work with; we offer three engagement models: fixed Price, hourly, and project based. We charge $25/hour and $2500/month monthly project.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Can you help us increase the number of Bootstrap developers per the project needs?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Yes. We can help you increase the number of Bootstrap developers according to the project needs. We can ramp down the developers as well in case the project needs.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Do you offer a risk-free trial period?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Yes. We offer a trial period of one week to make you stress-free.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Do you sign NDA?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                We sign non-disclosure agreements with the customers to keep your source code and information intact.
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
                        <h5>Or, Use this form to share your requirements. <span>Get guaranteed response within 8 Hrs.</span></h5>
                    </div>

                    <ReviewSec />

                    <EuquireSec />

                    <AwardSec />

                    <Footer />
                </>
        );
    }
}

export default PPC;