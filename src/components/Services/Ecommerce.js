
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
import image_body from '../../images/body-img3.svg';
import woocommerce from '../../images/woocommerce.svg'
import magento from '../../images/magento-icon.svg';
import { Helmet } from "react-helmet";
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';

class Ecommerce extends Component {
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
        const wanted = {
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
                        <title>E-Commerce Developers in India
                        </title>
                        <meta name="discription" content="Want to Hire a Remote E-Commerce Developer? Partner with iQuincesoft to hire skilled & qualified developers at your flexibility on hourly/monthly basis. Hire Now!" />
                    </Helmet>
                    <div className="service-banner service-banner-cat">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-12" >
                                    <p>ECOMMERCE</p>
                                    <h1><strong>iQuinceSoft allows you to work with the top 1% talent pool. We recruit the best IT talent pool from the nation to deliver you the best eCommerce development services.</strong><br /></h1>
                                    <ul>

                                        <li>Use the skills of our benchmark professionals to build, scale and conquer the categories you trade in the eCommerce sector.</li>

                                    </ul>
                                </div>
                                <div className="col-lg-5 col-md-12" ><AwardFormsec /></div>
                            </div>
                        </div>
                    </div>



                    <div className='ecom-sec'>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12">
                                    <h1>Advanced eCommerce Solutions</h1>
                                    <p>This is the best option for first-timers. We can help you with a complete set of shopping cart systems and a customizable website for your brand.
                                        You can also choose from the Promotional Tools, Content Management Tools, Shipping Options, Online Payment, Shopping Cart, Traffic Reports, and Product Database. </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-5 col-md-6">
                                    <div className="ecom-part">
                                        <h3>In addition to this, apart from the available resources, the additional features are:</h3>
                                        <ul>
                                            <li>Open-Source.</li>
                                            <li>Custom application interface programming.</li>
                                            <li>Product database integration.</li>
                                            <li>Legacy system integration.</li>
                                            <li>Scalability with total feature capacity. </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="ecom-image">
                                        <img alt="img" src={image_body} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <FormPopup />
                        <h5><Link to={'#EuquireSec'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Or, Use this form to share your requirements.<span>Get guaranteed response within 8 Hrs.</span></Link></h5>
                    </div>

                    <div className='ecom-sec'>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12">
                                    <h1>Advanced eCommerce Solutions</h1>
                                    <p>Advanced eCommerce Solutions are also considered the optimal solution for beginners. In this system, the beginner gets access to a shopping cart system, an integrated product catalog tool, and a website tailored to brand identity. </p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-5 col-md-6">
                                    <div className="ecom-part2">
                                        <div>
                                            <span><img alt="img" src={magento} /></span><h2>Magento</h2>
                                        </div>
                                        <p>If you are clear about eCommerce or your eCommerce goals, <span>Magento</span> is the optimal option. Magento is the first preference to build eCommerce systems. Magento is the largest supplier of eCommerce tools across the globe.
                                        </p>
                                        <h3>What do we have for you in the Magento Services?</h3>
                                        <ul>
                                            <li>Magento eCommerce Design & Development</li>
                                            <li>Customized Magento Theme Design & Integration</li>
                                            <li>Zero Overheads / Online Store Development
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-6">
                                    <div className="ecom-part2">
                                        <div>
                                            <span><img alt="img" src={woocommerce} /></span><h2>WooCommerce</h2>
                                        </div>
                                        <p>WooCommerce is the most popular WordPress plugin that is free to use. WooCommerce is packed full of features and integrated into a self-hosted WordPress Website. WooCommerce is practical Easy and most preferred for businesses, too.
                                        </p>
                                        <h3>What do we offer?</h3>
                                        <ul>
                                            <li>WooCommerce design & development.</li>
                                            <li>WooCommerce theme design & integration.</li>
                                            <li>Zero Overheads / Online store development with WooCommerce.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <FormPopup />
                        <h5><Link to={'#EuquireSec'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Or, Use this form to share your requirements.<span>Get guaranteed response within 8 Hrs.</span></Link></h5>
                    </div>

                    <div className="culture-sec cr-sec">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2"></div>
                                <div className="col-lg-8 col-md-12" >
                                    <h3>Why Choose eCommerce?</h3>
                                    <p>Because of the results, we deliver you. </p>
                                </div>

                                <OwlCarousel options={culture}>
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Product Features & Capabilities</h4>
                                        <p>We cover you in all the cases. Whether you have regular products or unique products. We support you whether you need customization or a complete set of custom product functionality.   </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Fast & Easy </h4>
                                        <p>We mix and use the tried and tested methods with cutting-edge techniques. Therefore, we offer lightning-fast web stores and allow customers to go from browsing to checkout in seconds and quickly and easily put more money in their wallets.  </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Manage your Content & Scale</h4>
                                        <p>We offer a well-designed Content Management System, and you can easily update the categories, products, pages, banners, posts, and more.
                                        </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>We target audiences across Platforms.</h4>
                                        <p>We built a web store for you that is responsive across the gadgets. We increase your visibility on all the platforms, but we help you scale your business.  </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Boost your Marketing</h4>
                                        <p>We customize your eCommerce website that can benefit you with the marketing capabilities. We help you with the advanced SEO tool, promotional activities, and the tools required to build landing pages and help you generate revenue. </p>
                                    </div>

                                </OwlCarousel>


                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Product Features & Capabilities</h4>
                                        <p>We cover you in all the cases. Whether you have regular products or unique products. We support you whether you need customization or a complete set of custom product functionality.   </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Fast & Easy </h4>
                                        <p>We mix and use the tried and tested methods with cutting-edge techniques. Therefore, we offer lightning-fast web stores and allow customers to go from browsing to checkout in seconds and quickly and easily put more money in their wallets.  </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Manage your Content & Scale</h4>
                                        <p>We offer a well-designed Content Management System, and you can easily update the categories, products, pages, banners, posts, and more.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>We target audiences across Platforms.</h4>
                                        <p>We built a web store for you that is responsive across the gadgets. We increase your visibility on all the platforms, but we help you scale your business.   </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Boost your Marketing</h4>
                                        <p>We customize your eCommerce website that can benefit you with the marketing capabilities. We help you with the advanced SEO tool, promotional activities, and the tools required to build landing pages and help you generate revenue. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="culture-sec web-sec">
                        <h3>Why Hire iQuinceSoft Developers?</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12" >
                                    <OwlCarousel options={culture}>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img alt="img"src={webImg} /> */}
                                            <h4>We help you take complete control</h4>
                                            <p>With iQuinceSoft, you get access to a dedicated development team under your supervision and control. You control and decide on behalf of your team, assignments, and processes. That is how you know your business's what, when, why, and how.   </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img alt="img"src={webImg1} /> */}
                                            <h4>Access to the Experts</h4>
                                            <p>We make sure that you get access to the talent pool of eCommerce developers. After stringent and challenging screening tests, these developers came on board that it isn’t easy to crack for an ordinary developer.  </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img alt="img"src={webImg2} /> */}
                                            <h4>Zero Overheads</h4>
                                            <p>We take care of all the expenses part with our developers. We take control of the perks, perquisites, payroll, and other things to keep you focused on the primary business functions. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img alt="img"src={webImg3} /> */}
                                            <h4>Ratings and Reviews</h4>
                                            <p>We are one of the best companies to hire eCommerce developers from. Our reviews and ratings are the testimonials of trust and confidence our clients have in us. We have proved our worth with every project.
                                            </p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img alt="img"src={webImg4} /> */}
                                            <h4>Hassle-free Process</h4>
                                            <p>We make sure that you face no issues from our developers and they work under the perfect working conditions.  </p>
                                        </div>
                                    </OwlCarousel>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            {/* <img alt="img"src={webImg} /> */}
                                            <h4>We help you take complete control</h4>
                                            <p>With iQuinceSoft, you get access to a dedicated development team under your supervision and control. You control and decide on behalf of your team, assignments, and processes. That is how you know your business's what, when, why, and how.   </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img alt="img"src={webImg1} /> */}
                                            <h4>Access to the Experts</h4>
                                            <p>We make sure that you get access to the talent pool of eCommerce developers. After stringent and challenging screening tests, these developers came on board that it isn’t easy to crack for an ordinary developer.  </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img alt="img"src={webImg2} /> */}
                                            <h4>Zero Overheads</h4>
                                            <p>We take care of all the expenses part with our developers. We take control of the perks, perquisites, payroll, and other things to keep you focused on the primary business functions.
                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img alt="img"src={webImg3} /> */}
                                            <h4>Ratings and Reviews</h4>
                                            <p>We are one of the best companies to hire eCommerce developers from. Our reviews and ratings are the testimonials of trust and confidence our clients have in us. We have proved our worth with every project.
                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4"></div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img alt="img"src={webImg4} /> */}
                                            <h4>Hassle-free Process</h4>
                                            <p>We make sure that you face no issues from our developers and they work under the perfect working conditions.  </p>
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
                                                Why is an eCommerce store vital for your business?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                With a tremendous increase in online shoppers, it becomes vital to register your presence in the online space. Building an eCommerce store can help you develop your opportunities and scale the business to the next level.
                                                iQuinceSoft can help you build a felt presence and attract clients to widen your customer base to help you meet your business needs and demands.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Why choose iQuinceSoft for eCommerce development?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                iQuinceSoft can help you reach the target audience with the help of the following things that complement your business development process.
                                                <ul>
                                                    <li>We offer a powerful support system.</li>
                                                    <li> We follow the standards of the international level.</li>
                                                    <li> We use the talent that can ignite the spark of success and create a buzz about your brands in the market.</li>
                                                    <li> We track your budget and create user-friendly projects in the stipulated time.</li>
                                                </ul>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Will I be in the loop during the development process?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Yes! We offer professional eCommerce developer skills to hire. You can hire a developer and supervise him.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                How much time is your eCommerce developers taking to build an appealing and engaging web store?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                It depends on the project requirements. It is usual to develop an eCommerce store within the stipulated time frame of 1 to 4 weeks.
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

                    <ReviewSec />

                    <EuquireSec />

                    <AwardSec />

                    <Footer />
                </>
        );
    }
}

export default Ecommerce;

{/* <div className="want-sec">
    <div className="container">
        <div className="row">
            <div className='col-lg-1'></div>
            <di className="col-lg-10">
                <h1>If you want to build an online store, but you aren’t sure where to start, here are some common problems people have & what you should avoid</h1>
            </di>
        </div>

        <div className="row">
            <OwlCarousel options={wanted}>
                <div className="want-txt">
                    <div>
                        <span>01</span>
                        <p>They have a layout this isn’t <strong>aesthetic, usable, or quick-loading.</strong></p>
                    </div>
                </div>
                <div className="want-txt">
                    <div>
                        <span>01</span>
                        <p>They have a layout this isn’t <strong>aesthetic, usable, or quick-loading.</strong></p>
                    </div>
                </div>
                <div className="want-txt">
                    <div>
                        <span>01</span>
                        <p>They have a layout this isn’t <strong>aesthetic, usable, or quick-loading.</strong></p>
                    </div>
                </div>
                <div className="want-txt">
                    <div>
                        <span>01</span>
                        <p>They have a layout this isn’t <strong>aesthetic, usable, or quick-loading.</strong></p>
                    </div>
                </div>
                <div className="want-txt">
                    <div>
                        <span>01</span>
                        <p>They have a layout this isn’t <strong>aesthetic, usable, or quick-loading.</strong></p>
                    </div>
                </div>
            </OwlCarousel>

            <div class="col-lg-4 col-md-6">
                <div class="want-part">
                    <div>
                        <span>01</span>
                        <p>They have a layout this isn’t <strong>aesthetic, usable, or quick-loading.</strong></p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="want-part">
                    <div>
                        <span>01</span>
                        <p>They have a layout this isn’t <strong>aesthetic, usable, or quick-loading.</strong></p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="want-part">
                    <div>
                        <span>01</span>
                        <p>They have a layout this isn’t <strong>aesthetic, usable, or quick-loading.</strong></p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="want-part">
                    <div>
                        <span>01</span>
                        <p>They have a layout this isn’t <strong>aesthetic, usable, or quick-loading.</strong></p>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <FormPopup />
    <h5><Link to={'#EuquireSec'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Or, Use this form to share your requirements.<span>Get guaranteed response within 8 Hrs.</span></Link></h5>
</div> */}