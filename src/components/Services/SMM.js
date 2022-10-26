
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
import { TailSpin } from 'react-loader-spinner'
import AwardFormsec from '../../container/AwardFormsec';
import Partner from '../../container/Partner';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';

class SMM extends Component {
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
                    <div className="service-banner service-banner-cat">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-12" >
                                    <p>SEARCH ENGINE OPTIMIZATION</p>
                                    <h1><strong>Get Traffic, Leads, and high revenue with our data-driven SEO services!!</strong><br /></h1>
                                    <ul>
                                        <li>Use SEO services that can help you build brand, generate leads and amplify the revenue.</li>

                                    </ul>
                                </div>
                                <div className="col-lg-5 col-md-12" ><AwardFormsec /></div>
                            </div>
                        </div>
                    </div>



                    <div className="culture-sec web-sec">
                        <h3>SEO SERVICES</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12" >
                                    <OwlCarousel options={culture}>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>SEO Services</h4>
                                            <p>We offer SEO services to comprehend your business, market, competition, and customer behavior. We provide the following SEO services: </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>On-Page SEO Services</h4>
                                            <p>We optimize your website with on-page SEO services. We update the needs and wants of the algorithms of search engines to comply with them. Once done, the website becomes pro to humans and robots. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>

                                            <h4>Off-Page SEO Services  </h4>
                                            <p>We use agile methodology to use proper backlinks, guest posting options, and other processes to get you ranked high in the search engine result pages.
                                                We help you get better DA/PA scores with the optimized off-page listing, bookmarking, and directory submission. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>Local SEO Services</h4>
                                            <p>We help you get registered with the Google my business option to rank on top for all the ‘near me’ searches. We help you get featured on the local search results to get instant traffic to your website and store for maximum benefits. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>National SEO Services</h4>
                                            <p>The expertise of skilled and seasoned marketers can help you rank in the national-level search results. We can get you the results you desire with our national SEO services. We can help you appear in the top rank searches on the search engine result pages.  </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>International SEO Services</h4>
                                            <p>We use the tools and techniques to help you rank for the international keywords. We use the optimal keyword density and lower the competition level to help you sell more services and products to feature on the global result pages. </p>
                                        </div>
                                    </OwlCarousel>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            <h4>SEO Services</h4>
                                            <p>We offer SEO services to comprehend your business, market, competition, and customer behavior. We provide the following SEO services: </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>On-Page SEO Services</h4>
                                            <p>iQuinceSoft is a pioneer in offering Bootstrap consultancy services. We provide technical support to ensure you get the best bootstrap functionalities and framework.</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>Off-Page SEO Services  </h4>
                                            <p>We use agile methodology to use proper backlinks, guest posting options, and other processes to get you ranked high in the search engine result pages.
                                                We help you get better DA/PA scores with the optimized off-page listing, bookmarking, and directory submission.
                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>Local SEO Services</h4>
                                            <p>We help you get registered with the Google my business option to rank on top for all the ‘near me’ searches. We help you get featured on the local search results to get instant traffic to your website and store for maximum benefits. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>National SEO Services</h4>
                                            <p>The expertise of skilled and seasoned marketers can help you rank in the national-level search results. We can get you the results you desire with our national SEO services. We can help you appear in the top rank searches on the search engine result pages.  </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>International SEO Services</h4>
                                            <p>We use the tools and techniques to help you rank for the international keywords. We use the optimal keyword density and lower the competition level to help you sell more services and products to feature on the global result pages. </p>
                                        </div>
                                    </div>
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

export default SMM;