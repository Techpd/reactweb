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

class CodeIgniter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            CodeigniterJson: [],
            Loading: true,
        }
    }

    componentDidMount() {
        var id = 20;
        PostCate.getCodeigniter(id).then((Codeigniters, err) => {
            if (!err) {
                this.setState({
                    CodeigniterJson: Codeigniters,
                    Loading: false,

                });
            }
        });
    }
    render() {
        const { CodeigniterJson } = this.state;

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
                        <title>Hire Codelgniter Developer | Hire Dedicated Codelgniter Developer
                        </title>
                        <meta name="discription" content="Want to Hire a Remote Codelgniter Developer? Partner with iQuincesoft to hire skilled & qualified developers at your flexibility on hourly/monthly basis. Hire Now!" />
                    </Helmet>
                    <div className="service-banner service-banner-cat">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-12" >
                                    <p>CODEIGNITER</p>
                                    <h1><strong>Vetted CodeIgniter developers for hire to get scalable, secure and performing apps</strong><br /></h1>
                                    <ul>
                                        <li>Stop wasting time searching for average developers when you have the chance to hire someone who is skilled and maps according to the assigned projects.</li>
                                        <li>Hire CodeIgniter developers from a company known for offshore services in backend development. </li>
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
                                    <h3>Why CodeIgniter?</h3>
                                    <p>CodeIgniter developers are the most sought after professionals because it provides simplest methods to use the modular methods. It is easy to manage errors too.</p>
                                </div>

                                <OwlCarousel options={culture}>
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Secured Framework </h4>
                                        <p>It keeps you safe against CSRF and XSS attacks because of the in-built protection.  </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>User-friendly Interface</h4>
                                        <p>CodeIgniter offers a user-friendly interface. It offers vibrant functionality and a responsive platform.
                                        </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Customization</h4>
                                        <p>It easily customizes existing libraries, shortcodes, and writing newer libraries. Thus, it is preferred across the available PHP frameworks.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Less Coding needed</h4>
                                        <p>It needs short and more petite codes. Thus Codeigniter offers fast development.
                                        </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Sound Performance </h4>
                                        <p>Codeigniter is lightweight and a better performer across the frameworks. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>SEO Friendly</h4>
                                        <p>It helps your website rank faster on the SERPs. Thus, offers better chances to be more visible to the target audience that leads to more web traffic and more conversions. </p>
                                    </div>


                                </OwlCarousel>


                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Secured Framework </h4>
                                        <p>It keeps you safe against CSRF and XSS attacks because of the in-built protection.  </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>User-friendly Interface</h4>
                                        <p>CodeIgniter offers a user-friendly interface. It offers vibrant functionality and a responsive platform.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Customization</h4>
                                        <p>It easily customizes existing libraries, shortcodes, and writing newer libraries. Thus, it is preferred across the available PHP frameworks.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Less Coding needed</h4>
                                        <p>It needs short and more petite codes. Thus offers fast development.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Sound Performance</h4>
                                        <p>lightweight and a better performer across the frameworks. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>SEO Friendly</h4>
                                        <p>It helps your website rank faster on the SERPs. Thus, offers better chances to be more visible to the target audience that leads to more web traffic and more conversions. </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="culture-sec web-sec">
                        <h3>CodeIgniter Services</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12" >
                                    <OwlCarousel options={culture}>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>Web Development</h4>
                                            <p>We create beautiful websites with the help of the CI framework. We create websites across the length and breadth of industries like eCommerce, brands and profiles.  </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>App Development</h4>
                                            <p>Create scalable, secured and error-free applications with iQuinceSoft. We serve your business goals with a customized, tailor-made app to help you grow. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>Cloud Solutions</h4>
                                            <p>We offer cloud solutions to businesses. We excel in a wide range of services, from small app development to massive web systems. We are experienced and skilled enough to serve with the need-based cloud solutions. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>Migration</h4>
                                            <p>We help you migrate your apps from the peer frameworks to CodeIgniter with no loss of any data or functionality.
                                            </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>Customized Database Development</h4>
                                            <p>We create the need-based customized database with the help of popular databases like microsoft sql server, db2, oracle and many more.
                                            </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>CodeIgniter Unit and Automated Testing</h4>
                                            <p>We create and make sure to develop you error-free apps. we use selenium as well to run automated tests as well.</p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>Maintenance & Support</h4>
                                            <p>You stay focused on business; we'll keep your apps error-free. we will take care of the issues, security, performance, backups and bug removal with server updates.   </p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>Consulting</h4>
                                            <p>We help you to get the benefits of CodeIgniter into your business. We offer project consultations and reviews of the current applications and projects.    </p>
                                        </div>
                                    </OwlCarousel>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            <h4>Web Development</h4>
                                            <p>We create beautiful websites with the help of the CI framework. We create websites across the length and breadth of industries like eCommerce, brands and profiles.  </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>App Development</h4>
                                            <p>Create scalable, secured and error-free applications with iQuinceSoft. We serve your business goals with a customized, tailor-made app to help you grow. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>Cloud Solutions</h4>
                                            <p>We offer cloud solutions to businesses. We excel in a wide range of services, from small app development to massive web systems. We are experienced and skilled enough to serve with the need-based cloud solutions.
                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>Migration</h4>
                                            <p>We help you migrate your apps from the peer frameworks to CodeIgniter with no loss of any data or functionality.
                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>Customized Database Development</h4>
                                            <p>We create the need-based customized database with the help of popular databases like microsoft sql server, db2, oracle and many more.
                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>CodeIgniter Unit and Automated Testing</h4>
                                            <p>We create and make sure to develop you error-free apps. we use selenium as well to run automated tests as well.</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>Maintenance & Support</h4>
                                            <p>You stay focused on business; we'll keep your apps error-free. we will take care of the issues, security, performance, backups and bug removal with server updates.   </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4"></div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>Consulting</h4>
                                            <p>We help you to get the benefits of CodeIgniter into your business. We offer project consultations and reviews of the current applications and projects.    </p>
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
                                                Why hire dedicated CodeIgniter developers?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Hiring a dedicated offshore developer can save you the effort, time, and money. You can get fast time-to-market, optimized costs, and a much involved skilled team that can ensure peak performance.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Does the hired developer work exclusively on my projects?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Yes. The dedicated developer works exclusively on your projects only.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Can I hire the CodeIgniter developer on flexible payment models?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Yes. iQuinceSoft enables you to choose from the fixed pricing model, hourly model, or project base models. We ensure you get the liberty to choose that suits your business and budget.

                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                What will be the frequency and mode of communication?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Whenever you wish to get in touch with the hired developer, you can text, WhatsApp, mail, call or use any mode of your preference to get insights, discuss the development, and other things.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                How to choose the best CodeIgniter development agency?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Check the authentic reviews on third-party sites like goodfirms and clutch. Check the client testimonials on Google and other social media platforms.
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
                                        {CodeigniterJson && CodeigniterJson.map(CodeigniterJsonS => {
                                            return (
                                                <div className="cult-box">
                                                    <div class="tech-dot"></div>
                                                    <h4>{CodeigniterJsonS.name}</h4>
                                                    <p dangerouslySetInnerHTML={{ __html: CodeigniterJsonS.content.substr(0, 100) + '...' }}></p>
                                                    <Link to={`/PostPage/${CodeigniterJsonS.slug}`} >READ MORE </Link>
                                                </div>
                                            );
                                        })}
                                    </OwlCarousel>

                                    <div className="row">
                                        {CodeigniterJson && CodeigniterJson.map((CodeigniterJsonS, index) => {
                                            return (
                                                <div className="col-lg-4 col-md-4">
                                                    <div className="insight-box" key={index}>
                                                        <h4>{CodeigniterJsonS.name}</h4>
                                                        <p dangerouslySetInnerHTML={{ __html: CodeigniterJsonS.content.substr(0, 100) + '...' }}></p>
                                                        <Link to={`/PostPage/${CodeigniterJsonS.slug}`} >READ MORE </Link>
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

export default CodeIgniter;

