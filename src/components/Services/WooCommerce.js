
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

class WooCommerce extends Component {
    constructor(props) {
        super(props)
        this.state = {
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

        // PostCate.getWoocommerceDetails(this.state.url).then((wooCommerce, err) => {
        //     if (!err) {
        //         this.setState({
        //             CommerceJson: wooCommerce,
        //             Loading: false,

        //         });
        //     }
        // });

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
                        <title>Hire Woo-commerce Developer | E-commerce Developers
                        </title>
                        <meta name="discription" content="Want to Hire a Remote Woo-commerce Developer? Partner with iQuincesoft to hire skilled & qualified developers at your flexibility on hourly/monthly basis. Hire Now!" />
                    </Helmet>
                    <div className="service-banner service-banner-cat">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-12" >
                                    <p>WOOCOMMERCE</p>
                                    <h1><strong>Hire WooCommerce to build an online store that can Attract, Engage and Convert the visitor into customer.</strong><br /></h1>
                                    <ul>
                                        <li>Hire dedicated WooCommerce developers with the trust of iQuinceSoft to develop, customize and maintain an eCommerce store that reveals your true spirits.</li>
                                        <li>We help you achieve your business goals with the expertise of our dedicated WooCommerce developer. Hire WooCommerce developer from iQuinceSoft on an hourly, full time or project basis. </li>
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
                                    <h3>WooCommerce Development Services</h3>
                                    <p>Scale your eCom store with intuitive designs and engaging websites with high chances of customer retention and conversion optimization</p>

                                </div>

                                <OwlCarousel options={culture}>
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Open-source Development</h4>
                                        <p>More than 2 million active stores make WooCommerce the preferred eCommerce site. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Built on WordPress</h4>
                                        <p>WooCommerce is one of the most extendable, adaptable and flexible eCommerce solutions. This is built on WordPress. The stores can integrate WooCommerce within WordPress to create e-Commerce designs and templates.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Powerful Analytics</h4>
                                        <p>WooCommerce offers an intuitive and robust interface that helps businesses. It provides an analytical report that is easy to understand by business owners.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Customer Support</h4>
                                        <p>Every online business prefers WooCommerce. Customer support makes it most accessible across the globe. WooCommerce customer support team will also support you in every issue.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>WooCommerce is fast</h4>
                                        <p>ast and responsive e-commerce experience for online stores. This is a crucial benefit of WooCommerce. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Rest API</h4>
                                        <p>The developers can read and write the products, orders, coupons, shipping channels, and discounts using REST APIs. </p>
                                    </div>


                                </OwlCarousel>


                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Open-source Development</h4>
                                        <p>More than 2 million active stores make WooCommerce the preferred eCommerce site. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Built on WordPress</h4>
                                        <p>WooCommerce is one of the most extendable, adaptable and flexible eCommerce solutions. This is built on WordPress. The stores can integrate WooCommerce within WordPress to create e-Commerce designs and templates.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Powerful Analytics</h4>
                                        <p>WooCommerce offers an intuitive and robust interface that helps businesses. It provides an analytical report that is easy to understand by business owners.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Customer Support</h4>
                                        <p>Every online business prefers WooCommerce. Customer support makes it most accessible across the globe. WooCommerce customer support team will also support you in every issue. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>WooCommerce is fast</h4>
                                        <p>Fast and responsive e-commerce experience for online stores. This is a crucial benefit of WooCommerce. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Rest API</h4>
                                        <p>The developers can read and write the products, orders, coupons, shipping channels, and discounts using REST APIs. </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="culture-sec web-sec">
                        <h3>WooCommerce Services</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12" >
                                    <OwlCarousel options={culture}>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg} /> */}
                                            <h4>WooCommerce Website Customization</h4>
                                            <p>Customized features for your online stores with iQuinceSoft WooCommerce services. We create, add and apply templates, functionalities and styles with simple CSS and HTML. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg1} /> */}
                                            <h4>API Integration</h4>
                                            <p>We manage every single facet of an online store with the help of API integration. We connect the PHP app to the WooCommerce store with REST API.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg2} /> */}
                                            <h4>WooCommerce Migration</h4>
                                            <p>We ensure the migration process is perfectly executed and there is no loss of any existing data, including orders, customer details and products. We offer flawless and straightforward migration for your current eCommerce store from any platform.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg3} /> */}
                                            <h4>WooCommerce Plugin Development</h4>
                                            <p>We adhere to best practices to create an online store with added extensions. We develop unique add-ons and tools to build a WooCommerce shopping cart. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg4} /> */}
                                            <h4>Payment Gateway Integration</h4>
                                            <p>We add several secured payment gateways within your eCommerce portal. We offer your customer several gateways and carry out their shopping with easy check-out. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Hire WooCommerce Developers</h4>
                                            <p>Hire iQuinceSoft WooCommerce developers and save efforts, time and money significantly. Our developers work as per your instructions and contribute as an extended in-house team.</p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>WooCommerce Consulting</h4>
                                            <p>We offer need-based customized consulting services to help you grow with the growth of your business and improve sales. </p>
                                        </div>
                                    </OwlCarousel>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg} /> */}
                                            <h4>WooCommerce Website Customization</h4>
                                            <p>Customized features for your online stores with iQuinceSoft WooCommerce services. We create, add and apply templates, functionalities and styles with simple CSS and HTML. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg1} /> */}
                                            <h4>API Integration</h4>
                                            <p>We manage every single facet of an online store with the help of API integration. We connect the PHP app to the WooCommerce store with REST API.</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg2} /> */}
                                            <h4>WooCommerce Migration</h4>
                                            <p>We ensure the migration process is perfectly executed and there is no loss of any existing data, including orders, customer details and products. We offer flawless and straightforward migration for your current eCommerce store from any platform.
                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg3} /> */}
                                            <h4>WooCommerce Plugin Development</h4>
                                            <p>We adhere to best practices to create an online store with added extensions. We develop unique add-ons and tools to build a WooCommerce shopping cart. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg4} /> */}
                                            <h4>Payment Gateway Integration</h4>
                                            <p>We add several secured payment gateways within your eCommerce portal. We offer your customer several gateways and carry out their shopping with easy check-out. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Hire WooCommerce Developers</h4>
                                            <p>Hire iQuinceSoft WooCommerce developers and save efforts, time and money significantly. Our developers work as per your instructions and contribute as an extended in-house team.</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4"> </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>WooCommerce Consulting</h4>
                                            <p>We offer need-based customized consulting services to help you grow with the growth of your business and improve sales. </p>
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
                                                Why hire WooCommerce developers?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                A WooCommerce developer can benefit your business in diverse sections. He can develop the product and streamline the process. He can advise you correctly about the business.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                What is my benefit in hiring WooCommerce developers from iQuinceSoft?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Hire WooCommerce developers from iQuinceSoft for the following reasons
                                                <ul>
                                                    <h4>Unmatched Success Rate: </h4>
                                                    <li>As an organization, we have a more than 98% success rate. With more than 3000 successful projects to our credit, we retain clients because of the skills and development capabilities.</li>
                                                </ul>
                                                <ul>
                                                    <h4>Time-bound delivery:  </h4>
                                                    <li>No matter how complex the structure and type of the web app is, we deliver it on or before the finish line.</li>
                                                </ul>
                                                <ul>
                                                    <h4>Impeccable Post-development support:</h4>
                                                    <li>We stay in touch with the clients even after the development and support them as much as possible.</li>
                                                </ul>
                                                <ul>
                                                    <h4>Optimized Cost:</h4>
                                                    <li>Our clients prefer us for most of their projects because we help them optimize the cost of the projectsh4</li>
                                                </ul>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Do I have control over the developer and the development process?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Yes. You take control of the development process, and the developer will work according to your instructions.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Can I hire the developer on an hourly basis?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Yes. Our vetted WooCommerce developers can work on an hourly basis also, as per the project needs.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Do you integrate tools like CRM?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Yes. Our WooCommerce developers can integrate the ERP and CRM systems with the WooCommerce websites.
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

export default WooCommerce;

