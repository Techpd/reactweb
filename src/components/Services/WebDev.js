
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
import 'react-accessible-accordion/dist/fancy-example.css';
import { PostCate } from '../../json/PostCate';
import AwardFormsec from '../../container/AwardFormsec';
import { TailSpin } from 'react-loader-spinner';
import Partner from '../../container/Partner';
import { Helmet } from "react-helmet";
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';


class Web_Development extends Component {
    constructor(props) {
        super(props)
        this.state = {
            WebJson: [],
            Loading: true,
        }
    }

    componentDidMount() {
        PostCate.getWeb().then((Web, err) => {
            if (!err) {
                this.setState({
                    WebJson: Web,
                    Loading: false,

                });
            }
        });
    }
    render() {
        const { WebJson } = this.state;


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
                        <title>Web Development Company in India, Fully Customize Website
                        </title>
                        <meta name="discription" content="Web Development Company in India, at iQuincesoft expert web developers creates premium websites and custom applications for all types businesses from Startups to Enterprise. " />
                    </Helmet>

                    <div className="service-banner service-banner-cat">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-12" >
                                    <p>WEB DEVELOPMENT</p>
                                    <h1><strong>Optimal web solutions that suit your business</strong><br /></h1>
                                    <ul>
                                        <li>Hire web developers with a demonstrated work history to catalyse your growth</li>
                                        <li>We provide websites that can convert a first time visitor into a brand advocate.</li>
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
                                    <h3>We have the vision to visualize your business goal</h3>
                                    <p>Hire web developers from iQuinceSoft for clean codes, scalability and quick time-to-market</p>
                                </div>

                                <OwlCarousel options={culture}>
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Strategy t</h4>
                                        <p>We focus on usable and scalable options to manage your needs. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Design</h4>
                                        <p>A user experience that exceeds your expectations and reflects your business spirits</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>World Class Layouts</h4>
                                        <p>Visually appealing layouts to help your business attract more traffic and reduce the bounce rate</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Business-tailored architecture</h4>
                                        <p>We design and develop your web solutions considering your company prospects and scalable products.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Fast Iterations</h4>
                                        <p>We deliver more with the pre-made components and templates. This is the benefit of having talented developers on board. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Quality Assurance</h4>
                                        <p>QA is a precursor stage before deployment at our end with manual and automated tests. We remove the bugs and fix performance issues and conversion blockers. </p>
                                    </div>


                                </OwlCarousel>


                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Strategy</h4>
                                        <p>We focus on usable and scalable options to manage your needs. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Design</h4>
                                        <p>A user experience that exceeds your expectations and reflects your business spirits</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>World Class Layouts</h4>
                                        <p>Visually appealing layouts to help your business attract more traffic and reduce the bounce rate</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Business-tailored architecture</h4>
                                        <p>We design and develop your web solutions considering your company prospects and scalable products. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Fast Iterations</h4>
                                        <p> We deliver more with the pre-made components and templates. This is the benefit of having talented developers on board. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Quality Assurance</h4>
                                        <p>QA is a precursor stage before deployment at our end with manual and automated tests. We remove the bugs and fix performance issues and conversion blockers. </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="culture-sec web-sec">
                        <h3>Web Services</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12" >
                                    <OwlCarousel options={culture}>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg} /> */}
                                            <h4>Website Customization</h4>
                                            <p>Customized features for your online stores with iQuinceSoft Web services. We create, add and apply templates, functionalities and styles with simple CSS and HTML. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg1} /> */}
                                            <h4>API Integration</h4>
                                            <p>We manage every single facet of an online store with the help of API integration. We connect the PHP app to the Web store with REST API.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg2} /> */}
                                            <h4>Web Migration</h4>
                                            <p>We ensure the migration process is perfectly executed and there is no loss of any existing data, including orders, customer details and products. We offer flawless and straightforward migration for your current eCommerce store from any platform.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg3} /> */}
                                            <h4>Web Plugin Development</h4>
                                            <p>We adhere to best practices to create an online store with added extensions. We develop unique add-ons and tools to build a Web shopping cart. </p>
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
                                            <h4>Hire Web Developers</h4>
                                            <p>Hire iQuinceSoft Web developers and save efforts, time and money significantly. Our developers work as per your instructions and contribute as an extended in-house team.</p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Web Consulting</h4>
                                            <p>We offer need-based customized consulting services to help you grow with the growth of your business and improve sales. </p>
                                        </div>
                                    </OwlCarousel>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg} /> */}
                                            <h4>Website Customization</h4>
                                            <p>Customized features for your online stores with iQuinceSoft Web services. We create, add and apply templates, functionalities and styles with simple CSS and HTML. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg1} /> */}
                                            <h4>API Integration</h4>
                                            <p>We manage every single facet of an online store with the help of API integration. We connect the PHP app to the Web store with REST API.</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg2} /> */}
                                            <h4>Web Migration</h4>
                                            <p>We ensure the migration process is perfectly executed and there is no loss of any existing data, including orders, customer details and products. We offer flawless and straightforward migration for your current eCommerce store from any platform.
                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg3} /> */}
                                            <h4>Web Plugin Development</h4>
                                            <p>We adhere to best practices to create an online store with added extensions. We develop unique add-ons and tools to build a Web shopping cart. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg4} /> */}
                                            <h4>Payment Gateway Integration</h4>
                                            <p>We add several secured payment gateways within your eCommerce portal. We offer your customer several gateways and carry out their shopping with easy check-out. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Hire Web Developers</h4>
                                            <p>Hire iQuinceSoft Web developers and save efforts, time and money significantly. Our developers work as per your instructions and contribute as an extended in-house team.</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4"> </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Web Consulting</h4>
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
                                                Do you sign NDAs?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Yes. We have the policy to keep your data and source code secret and confidential.
                                                We sign Non-Disclosure Agreements.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Can I hire web developers from you and manage them directly?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Yes. You can hire dedicated developers from iQuinceSoft and manage them as your extended team.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                How much does a website cost?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                The cost depends on various factors like hosting provider, bandwidth and storage,
                                                domain, functionalities, themes, and tech stacks used. Once we are through with all
                                                these factors, we can quote you the exact price. Connect with us for a FREE quote. u
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                What types of web development services do you offer?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                We offer web development services that suit your business and budget. We provide a range of services that include Content Management Services (CMS), API development, CRM, inventory management, business automation, website optimization, maintenance and eCommerce portals.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                What are the technologies you use to build a website?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                We use technologies to deliver robust web solutions. We use PHP, Laravel, Codeigniter, Django, Yii, Ruby on Rails, CakePHP, Python, and Node.js for the server-side. Symfony,
                                                For the front-end, we use Angular.js, React.js, jQuery, Vue.js etc.
                                                For eCommerce, we use Magento, Shopify and WooCommerce.
                                                For CMS, we use WordPress and Drupal.
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
                                        {WebJson && WebJson.map(WebJsonS => {
                                            return (
                                                <div className="cult-box">
                                                    <div class="tech-dot"></div>
                                                    <h4>{WebJsonS.name}</h4>
                                                    <p dangerouslySetInnerHTML={{ __html: WebJsonS.content.substr(0, 100) }}></p>
                                                    <Link to={`/PostPage/${WebJsonS.slug}`} >READ MORE </Link>
                                                </div>
                                            );
                                        })}
                                    </OwlCarousel>

                                    <div className="row">
                                        {WebJson && WebJson.map((WebJsonS, index) => {
                                            return (

                                                <div className="col-lg-4 col-md-4">
                                                    <div className="insight-box" key={WebJsonS.id}>
                                                        <h4>{WebJsonS.name}</h4>
                                                        <p dangerouslySetInnerHTML={{ __html: WebJsonS.content.substr(0, 100) }}></p>
                                                        <Link to={`/PostPage/${WebJsonS.slug}`} >READ MORE </Link>
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

export default Web_Development;

