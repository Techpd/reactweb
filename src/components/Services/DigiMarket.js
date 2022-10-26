
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
import Partner from '../../container/Partner';
import { Helmet } from "react-helmet";
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';

class DigiMarket extends Component {
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

        return (
            this.state.Loading ? <div className="spinner"><TailSpin color="#00ccff" height={80} width={80} /></div> :
                <>
                    <Header headerClass={'serv-head'} />
                    <Helmet>
                        <title>Best Digital Marketing Agency in India
                        </title>
                        <meta name="discription" content="iQuinceSoft is a full digital marketing agency in India. We provide SEO, Social Media, Pay Per Click and Web design services at best price. Call us today." />
                    </Helmet>

                    <div className="service-banner service-banner-cat">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-12" >
                                    <p>DIGITAL MARKETING</p>
                                    <h1><strong>Increase your revenue by 40% with process-driven digital marketing services.</strong><br /></h1>
                                    <ul>
                                        <li>Build Brand Awareness, Reach a wider audience and earn more revenue with more expended custumer base. Harness the Expertise of dedicated marketers from iQuinceSoft.</li>
                                    </ul>
                                </div>
                                <div className="col-lg-5 col-md-12" ><AwardFormsec /></div>
                            </div></div>
                    </div>

                    <div className="culture-sec cr-sec">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2"></div>
                                <div className="col-lg-8 col-md-12" >
                                    <h3>What do we do?</h3>
                                    <p>We help, serve, and lift your business up. We design strategies, customize need-based planning and strategy and execute them flawlessly. We fuel our services with data and process, innovation and expertise of the tech-savvy marketers, and result-oriented analytics.
                                    </p>
                                </div>

                                <OwlCarousel options={culture}>
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>SEO</h4>
                                        <p>A website is worthless if it is not visible in the organic search results. We offer Search Engine Optimization services because we understand what search engines need. We rank your website and make your online presence felt. Hence we harness the power of the internet to help you rank higher on SERPs and grow. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>PPC</h4>
                                        <p>Craft an ad strategy and execute it. With the help of our PPC campaigns, we have helped hundreds of businesses grow and earn millions of revenue with significantly high RoI.
                                        </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Social Media Management</h4>
                                        <p>The advent of social media offers a platform for businesses to target, strategize, and customize their promotion as per the target audiences' needs, want, and demands. We make full use of it by making your brand more vocal, relevant, and specific to your target audience.
                                            We help you harness the power of extensively reaching more people and exploring diverse ideas, promotional plans, and discussion forums to promote your business. </p>
                                    </div>

                                </OwlCarousel>


                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>SEO</h4>
                                        <p>A website is worthless if it is not visible in the organic search results. We offer Search Engine Optimization services because we understand what search engines need. We rank your website and make your online presence felt. Hence we harness the power of the internet to help you rank higher on SERPs and grow. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>PPC</h4>
                                        <p>Craft an ad strategy and execute it. With the help of our PPC campaigns, we have helped hundreds of businesses grow and earn millions of revenue with significantly high RoI.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Social Media Management</h4>
                                        <p>The advent of social media offers a platform for businesses to target, strategize, and customize their promotion as per the target audiences' needs, want, and demands. We make full use of it by making your brand more vocal, relevant, and specific to your target audience.
                                            We help you harness the power of extensively reaching more people and exploring diverse ideas, promotional plans, and discussion forums to promote your business. </p>
                                    </div>
                                </div>

                            </div>
                        </div>
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
                                <div className="col-lg-8 col-md-10"
                                >
                                    <Accordion allowZeroExpanded preExpanded={['a']}>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                What are digital marketing services?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Digital Marketing services are the tools and techniques used to market and promote the services/products in the digital domain.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Which are the services used under digital marketing services?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                <ul>
                                                    <p><strong>Digital marketing is a broad spectrum of services that caters to the specific needs of businesses. It comprises the following services:</strong> </p>
                                                    <li>Web design & development</li>
                                                    <li>Search Engine Optimization·</li>
                                                    <li>Search Engine Marketing</li>
                                                    <li>Social Media Marketing</li>
                                                    <li>Paid Ads· </li>
                                                    <li>Online Reputation Management and many more.</li>
                                                </ul>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                How can you help me with digital marketing services?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                iQuinceSoft is using digital marketing services to help businesses like yours. We have served businesses of all classes and categories, helping them scale to the desired level. We help you build a strong web portfolio and increase your visibility on the search engine result pages generate traffic to your website and more footfall to your store, promote your product and services to your target audience and ultimately develop better business opportunities and increase your sales volume and customer base.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                How much do I need to spend to use the digital marketing services?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                It depends on the project needs and budget with the specific business goals. For precise business goals, connect with our customer support team to guide you and share your requirements on info@iquincesoft.com.
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
                                                    <h4>{LaravelJsonS.name}</h4>
                                                    <p dangerouslySetInnerHTML={{ __html: LaravelJsonS.content.substr(0, 100) }}></p>
                                                    <Link to={`/PostPage/${LaravelJsonS.slug}`} >READ MORE </Link>
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

export default DigiMarket;

