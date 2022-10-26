
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
import { TailSpin } from 'react-loader-spinner';
import FAQ from '../../container/FAQ';
import Partner from '../../container/Partner';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';

class ProductDesign extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Product_DesignJson: [],
            Loading: true,
        }
    }

    componentDidMount() {
        PostCate.getProduct_Design().then((Product_Design, err) => {
            if (!err) {
                this.setState({
                    Product_DesignJson: Product_Design,
                    Loading: false,

                });
            }
        });
    }
    render() {
        const { Product_DesignJson } = this.state;

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
                                    <p>PRODUCT DESIGN</p>
                                    <h1><strong>You Ideate, We Create Your Product</strong><br /></h1>
                                    <ul>
                                        <li>We get into every minute detail of your ideation and make it a successful product that earns you profits and fame. Our top skilled professionals brainstorm to fetch you the ultimate product design, get it in the market, and scale it iteratively.</li>
                                    </ul>
                                </div>
                                <div className="col-lg-5 col-md-12" ><AwardFormsec /></div>
                            </div>
                        </div>
                    </div>



                    <div className="culture-sec web-sec">
                        <h3>Product Design Services</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12" >
                                    <OwlCarousel options={culture}>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg} /> */}
                                            <h4>MVP Development</h4>
                                            <p>iQuinceSoft is a leading agency that serves Startups and SMEs with global clientele with the MVP development services. Our MVP service includes pilot MVP development, single feature MVP design, prototype design, and POC demo that allow organizations to comprehend the product-market fit and help them grow exponentially. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg1} /> */}
                                            <h4>Product Testing</h4>
                                            <p>iQuinceSoft offers test plans, test cases, risk assessment, defect analysis and recommendations that ensure adaptability and smooth performance security and increase the utility of your products.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg2} /> */}
                                            <h4>Product design & Engineering</h4>
                                            <p>iQuinceSoft designers are aligned with the skillset that maps user flows and creates style guides, sketches, and wireframes to develop UI designs that scale the scalability across platforms and devices.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg3} /> */}
                                            <h4>Product Deployment</h4>
                                            <p>iQuinceSoft leverages the skills and experience to implement best-in-class product solutions. We deploy software solutions that thrive and help clients attain their business goals. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg4} /> */}
                                            <h4>Product Transformation</h4>
                                            <p>We offer remodeling and re-engineering services to assist our global clientele in substituting their old product designs with cutting-edge architecture to maximize profitability.
                                            </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Product Support & Maintenance</h4>
                                            <p>We have a team of consultants that can strategize your business launch products with slashed downtime to market. We also deliver maintenance services, including design enhancements, migration, data warehouse support, and bug-fixing.</p>
                                        </div>

                                    </OwlCarousel>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg} /> */}
                                            <h4>MVP Development</h4>
                                            <p>iQuinceSoft is a leading agency that serves Startups and SMEs with global clientele with the MVP development services. Our MVP service includes pilot MVP development, single feature MVP design, prototype design, and POC demo that allow organizations to comprehend the product-market fit and help them grow exponentially. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg1} /> */}
                                            <h4>Product Testing</h4>
                                            <p>iQuinceSoft offers test plans, test cases, risk assessment, defect analysis and recommendations that ensure adaptability and smooth performance security and increase the utility of your products.</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg2} /> */}
                                            <h4>Product design & Engineering</h4>
                                            <p>iQuinceSoft designers are aligned with the skillset that maps user flows and creates style guides, sketches, and wireframes to develop UI designs that scale the scalability across platforms and devices.
                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg3} /> */}
                                            <h4>Product Deployment</h4>
                                            <p>iQuinceSoft leverages the skills and experience to implement best-in-class product solutions. We deploy software solutions that thrive and help clients attain their business goals. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg4} /> */}
                                            <h4>Product Transformation</h4>
                                            <p>We offer remodeling and re-engineering services to assist our global clientele in substituting their old product designs with cutting-edge architecture to maximize profitability.
                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Product Support & Maintenance</h4>
                                            <p>We have a team of consultants that can strategize your business launch products with slashed downtime to market. We also deliver maintenance services, including design enhancements, migration, data warehouse support, and bug-fixing. </p>
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
                                                Should outsourced product development be used?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Outsourced product development is in trend because of the low cost, better on-demand talent and scaling up or decreasing the team size. Various MNCs use outsourcing for their product development demands to save time, cost, and effort and deliver an insightful product from a mere idea.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Is my product idea safe with iQuinceSoft?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Yes. We keep your product idea completely safe with Non-Disclosure Agreements. We keep your product, source code, and idea intact and safe with us – Guaranteed!
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Why should I choose iQuinceSoft over others?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                iQuinceSoft has served the American and European markets for over a decade. We serve in the broad categories of Cloud & DevOps, Product Development, Software Development, and Web and Mobile development.
                                                We are rated and reviewed by third-party firms like Clutch, GoodFirms, and Google for quality services.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                How much time do you take to develop a product?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                It depends on the complexity of the product, stacks used, and platforms. It varies on the factors like the type of products you need etc.
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
                                        {Product_DesignJson && Product_DesignJson.map(Product_DesignJsonS => {
                                            return (
                                                <div className="cult-box">
                                                    <div class="tech-dot"></div>
                                                    <h4>{Product_DesignJsonS.name}</h4>
                                                    <p dangerouslySetInnerHTML={{ __html: Product_DesignJsonS.content.substr(0, 100) }}></p>
                                                    <Link to={`/PostPage/${Product_DesignJsonS.slug}`} >READ MORE </Link>
                                                </div>
                                            );
                                        })}
                                    </OwlCarousel>

                                    <div className="row">
                                        {Product_DesignJson && Product_DesignJson.map((Product_DesignJsonS, index) => {
                                            return (

                                                <div className="col-lg-4 col-md-4">
                                                    <div className="insight-box" key={Product_DesignJsonS.id}>
                                                        <h4>{Product_DesignJsonS.name}</h4>
                                                        <p dangerouslySetInnerHTML={{ __html: Product_DesignJsonS.content.substr(0, 100) }}></p>
                                                        <Link to={`/PostPage/${Product_DesignJsonS.slug}`} >READ MORE </Link>
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

export default ProductDesign;

