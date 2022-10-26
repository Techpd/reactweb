
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

class opencart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            servicesJson: [],
            appjson: [],
            Questionjson: [],
            OpenCartJson: [],
            Loading: true,
        }
    }

    componentDidMount() {
        PostCate.getOpenCart().then((OpenCart, err) => {
            if (!err) {
                this.setState({
                    OpenCartJson: OpenCart,
                    Loading: false,

                });
            }
        });
    }
    render() {
        const { OpenCartJson } = this.state;

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
                        <title>Hire Opencart Developers | E-commerce Developers
                        </title>
                        <meta name="discription" content="Want to Hire a Remote Opencart Developer? Partner with iQuincesoft to hire skilled & qualified developers at your flexibility on hourly/monthly basis. Hire Now!" />
                    </Helmet>
                    <div className="service-banner service-banner-cat">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-12" >
                                    <p>OPENCART</p>
                                    <h1><strong>Beat the Heat of scorching competition with iQuinceSoft's OpenCart Expert developers.</strong><br /></h1>
                                    <ul>
                                        <li> Our skilled and seasoned developers are available on an hourly, monthly, and full-time basis for project-specific needs. </li>
                                        <li>Build an online store that can outshine the competition and create a buzz across the market about your online store with the expertise of the dedicated offshore developers from iQuinceSoft.</li>
                                    </ul>
                                </div>
                                <div className="col-lg-5 col-md-12" ><AwardFormsec /></div>
                            </div>
                        </div>
                    </div >

                    <div className="culture-sec cr-sec">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2"></div>
                                <div className="col-lg-8 col-md-12" >
                                    <h3>Why Open Cart?</h3>
                                    <p>OpenCart is one of the finest tools for e-Commerce development. It is featured with customized solutions that meet your business needs.</p>
                                </div>

                                <OwlCarousel options={culture}>
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Smooth Operations</h4>
                                        <p>OpenCart allows to carry out a series of operations with one admin panel. OpenCart offers multiple benefits with multiple features. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Multiple Payment Operations</h4>
                                        <p>OpenCart offers multiple payment gateways as a choice to the users. This choice of payment gateway helps to accomplish bulk orders with the help of safe and secure payment modes.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Multi-Store Functionality</h4>
                                        <p>This feature offers you to focus on essential activities. This feature can allow you to run multiple stores and sell products of diverse brands with one admin panel.'</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Multilingual support </h4>
                                        <p>OpenCart offers various languages and currencies with the interface. With its help, you can grow and expand your business exponentially.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Responsive</h4>
                                        <p>openCart functions exceptionally well across the devices. OpenCart is responsive and SEO friendly, thus helping the website rank higher on the Search Engine Result Pages. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Product Browsing is fun with OpenCart.</h4>
                                        <p>It allows adding multiple products and categorizing them accordingly. It also allows the reviews, comments and ratings to display about the products on the website. </p>
                                    </div>


                                </OwlCarousel>


                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Smooth Operations</h4>
                                        <p>OpenCart allows to carry out a series of operations with one admin panel. OpenCart offers multiple benefits with multiple features. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Multiple Payment Operations</h4>
                                        <p>OpenCart offers multiple payment gateways as a choice to the users. This choice of payment gateway helps to accomplish bulk orders with the help of safe and secure payment modes.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Multi-Store Functionality</h4>
                                        <p>This feature offers you to focus on essential activities. This feature can allow you to run multiple stores and sell products of diverse brands with one admin panel.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Multilingual support </h4>
                                        <p>OpenCart offers various languages and currencies with the interface. With its help, you can grow and expand your business exponentially. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Responsive</h4>
                                        <p>openCart functions exceptionally well across the devices. OpenCart is responsive and SEO friendly, thus helping the website rank higher on the Search Engine Result Pages. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Product Browsing is fun with OpenCart.</h4>
                                        <p>It allows adding multiple products and categorizing them accordingly. It also allows the reviews, comments and ratings to display about the products on the website. </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="culture-sec web-sec">
                        <h3>OpenCart Development Services</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12" >
                                    <OwlCarousel options={culture}>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>OpenCart Web Development</h4>
                                            <p>Launch your eCommerce website and build your digital marketplace from scratch. We create a long-lasting impression on your customer with our OpenCart Website development services. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>OpenCart Migration Services</h4>
                                            <p>Improve the performance, usability and security by migrating your online store to the updated version of OpenCart. We take minimal time with no loss of data.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>OpenCart App development </h4>
                                            <p>IQuinceSoft developers can offer you a highly scalable OpenCart app development solution. We ensure you an improved experience with the help of intuitive layout design and an appealing app.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>Theme Customization</h4>
                                            <p>Explore more alluring themes with iQuinceSoft theme customization services. We customize and offer the most advanced and appealing themes for your website.  </p>
                                        </div>
                                    </OwlCarousel>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            <h4>OpenCart Web Development</h4>
                                            <p>Launch your eCommerce website and build your digital marketplace from scratch. We create a long-lasting impression on your customer with our OpenCart Website development services. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>OpenCart Migration Services</h4>
                                            <p>Improve the performance, usability and security by migrating your online store to the updated version of OpenCart. We take minimal time with no loss of data.</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>OpenCart App development </h4>
                                            <p>IQuinceSoft developers can offer you a highly scalable OpenCart app development solution. We ensure you an improved experience with the help of intuitive layout design and an appealing app.
                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4"></div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>Theme Customization</h4>
                                            <p>Explore more alluring themes with iQuinceSoft theme customization services. We customize and offer the most advanced and appealing themes for your website.  </p>
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
                                                Can I hire an OpenCart developer?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Yes. We have a dedicated team of OpenCart developers for hire. Our developers are highly skilled and seasoned in making eCommerce apps that stand out from the competition.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Can I manage these developers on my own?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Yes. We ensure you control and supervise the entire process with the continuous supervision of the developers.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                How experienced are the developers from iQuinceSoft?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                We have a skilled team of OpenCart developers with an average of 7+ years.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Why choose OpenCart developer from iQuinceSoft?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                We are renowned as the best OpenCart developers with a rich legacy of building scalable, flexible, and fully-featured eCommerce stores. We ensure you a successful eCommerce store that can attract, engage and convert prospects into customers.
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
                                        {OpenCartJson && OpenCartJson.map(OpenCartJsonS => {
                                            return (
                                                <div className="cult-box">
                                                    <div class="tech-dot"></div>
                                                    <h4>{OpenCartJsonS.name}</h4>
                                                    <p dangerouslySetInnerHTML={{ __html: OpenCartJsonS.content.substr(0, 100) }}></p>
                                                    <Link to={`/PostPage/${OpenCartJsonS.slug}`} >READ MORE </Link>
                                                </div>
                                            );
                                        })}
                                    </OwlCarousel>

                                    <div className="row">
                                        {OpenCartJson && OpenCartJson.map((OpenCartJsonS, index) => {
                                            return (

                                                <div className="col-lg-4 col-md-4">
                                                    <div className="insight-box" key={OpenCartJsonS.id}>
                                                        <h4>{OpenCartJsonS.name}</h4>
                                                        <p dangerouslySetInnerHTML={{ __html: OpenCartJsonS.content.substr(0, 100) }}></p>
                                                        <Link to={`/PostPage/${OpenCartJsonS.slug}`} >READ MORE </Link>
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

export default opencart;

