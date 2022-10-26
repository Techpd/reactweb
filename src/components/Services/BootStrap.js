
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

class BootStrap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            servicesJson: [],
            appjson: [],
            Questionjson: [],
            CommerceJson: [],
            Loading: true,
            // url: this.props.match.params.post
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
                        <title>Hire Bootstrap Developers in India
                        </title>
                        <meta name="discription" content="Do you want to hire dedicated Bootstrap for your projects? Partner with iQuinceSoft & hire Monthly/hourly basis developers at your flexibility. Hire Now!" />
                    </Helmet>
                    <div className="service-banner service-banner-cat">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-12" >
                                    <p>BOOTSTRAP</p>
                                    <h1><strong>Get fast, easy and customized websites with the expertise of our vetted bootstrap developers to hire</strong><br /></h1>
                                    <ul>
                                        <li>Hire Bootstrap developers with the trust of iQuinceSoft</li>

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
                                    <h3>Why choose bootstrap?</h3>
                                    <p>Bootstrap is a free front-end framework. it ensures fast and easy web development.</p>
                                </div>

                                <OwlCarousel options={culture}>
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Mobile-first Approach</h4>
                                        <p>Bootstrap helps you design responsive, mobile-friendly websites. The designers build a website for small screen sizes and then scale it to render on large screens.
                                            This design approach meet with the users’ requirement on the primary level. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Time Saving</h4>
                                        <p>Bootstrap unpacks ready-Made themes & templates. You can opt to include inputs from outside as well. This way, bootstrap saves a lot of time as well.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Easy Installation</h4>
                                        <p>Bootstrap offers easy and hassle-free installation.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Customizable</h4>
                                        <p>Bootstrap offers you a facility to tweak the template and create your theme. You can also customize the template by changing the values to the variables.
                                        </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Open Source</h4>
                                        <p>Bootstrap ensures easy modifications according to the need of the project are easily doable. The fellow community developers also support and contribute their insights to keep it moving gradually. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Community Support</h4>
                                        <p>Bootstrap offers numerous resources. Regular updates are a salient feature of bootstrap. They keep the community posted about the updates. It invites feedback to improve the entire course of action as well. </p>
                                    </div>


                                </OwlCarousel>


                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Mobile-first Approach</h4>
                                        <p>Bootstrap helps you design responsive, mobile-friendly websites. The designers build a website for small screen sizes and then scale it to render on large screens.
                                            This design approach meet with the users’ requirement on the primary level. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Time Saving</h4>
                                        <p>Bootstrap unpacks ready-Made themes & templates. You can opt to include inputs from outside as well. This way, bootstrap saves a lot of time as well.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Easy Installation</h4>
                                        <p>Bootstrap offers easy and hassle-free installation.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Customizable</h4>
                                        <p>Bootstrap offers you a facility to tweak the template and create your theme. You can also customize the template by changing the values to the variables.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Open Source</h4>
                                        <p>Bootstrap ensures easy modifications according to the need of the project are easily doable. The fellow community developers also support and contribute their insights to keep it moving gradually. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Community Support</h4>
                                        <p>Bootstrap offers numerous resources. Regular updates are a salient feature of bootstrap. They keep the community posted about the updates. It invites feedback to improve the entire course of action as well. </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="culture-sec web-sec">
                        <h3>Bootstrap Development Services</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12" >
                                    <OwlCarousel options={culture}>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg} /> */}
                                            <h4>Bootstrap Development</h4>
                                            <p>We build more responsive websites and apps. We develop advanced features with the help of HTML and CSS to make your website visually appealing and eye-catchy designs. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg1} /> */}
                                            <h4>Bootstrap Consultancy Services</h4>
                                            <p>IQuinceSoft is a pioneer in offering Bootstrap consultancy services. We provide technical support to ensure you get the best bootstrap functionalities and framework.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg2} /> */}
                                            <h4>Bootstrap Theme Implementation  </h4>
                                            <p>We copy your old script, CSS, and image into an asset pipeline and then use HTML to design a custom theme.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg3} /> */}
                                            <h4>Bootstrap Upgrade</h4>
                                            <p>The latest version of Bootstrap 4 is in the beta stage and has advanced features. If you are using an older version, we can upgrade support. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg4} /> */}
                                            <h4>Cross-device Functionality</h4>
                                            <p>Cross-device functionality means your website works flawlessly across all devices. we make your app compatible with all the versions of smartphones and screen sizes. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Scalable and Secure website</h4>
                                            <p>We ensure that your website and app get maximum security and protection by using advanced security measures. </p>
                                        </div>
                                    </OwlCarousel>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg} /> */}
                                            <h4>Bootstrap Development</h4>
                                            <p>We build more responsive websites and apps. We develop advanced features with the help of HTML and CSS to make your website visually appealing and eye-catchy designs. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg1} /> */}
                                            <h4>Bootstrap Consultancy Services</h4>
                                            <p>iQuinceSoft is a pioneer in offering Bootstrap consultancy services. We provide technical support to ensure you get the best bootstrap functionalities and framework.</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg2} /> */}
                                            <h4>Bootstrap Theme Implementation  </h4>
                                            <p>We copy your old script, CSS, and image into an asset pipeline and then use HTML to design a custom theme.
                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg3} /> */}
                                            <h4>Bootstrap Upgrade</h4>
                                            <p>The latest version of Bootstrap 4 is in the beta stage and has advanced features. If you are using an older version, we can upgrade support. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg4} /> */}
                                            <h4>Cross-device Functionality</h4>
                                            <p>Cross-device functionality means your website works flawlessly across all devices. we make your app compatible with all the versions of smartphones and screen sizes. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Scalable and Secure website</h4>
                                            <p>We ensure that your website and app get maximum security and protection by using advanced security measures. </p>
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

export default BootStrap;

