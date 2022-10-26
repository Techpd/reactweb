
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

class DevOpsDev extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Devops_ServicesJson: [],
            Loading: true,
        }
    }

    componentDidMount() {
        PostCate.getDevops_Services().then((Devops_Services, err) => {
            if (!err) {
                this.setState({
                    Devops_ServicesJson: Devops_Services,
                    Loading: false,

                });
            }
        });
    }
    render() {
        const { Devops_ServicesJson } = this.state;

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
                        <title>DevOps Development Company in India| Dev Ops Companies
                        </title>
                        <meta name="discription" content="iQuinceSoft is the best devOps development company in India. Our aim offering an unhackable cloud based solutions and DevOps. Call us at +1 (347) 960-4166. " />
                    </Helmet>

                    <div className="service-banner service-banner-cat">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5 col-md-12" >
                                    <p>DEVOPS</p>
                                    <h1><strong>Hire Dedicated DevOps Developers to get favourable busines outcomes</strong><br /></h1>
                                    <ul>
                                        <li>Software Development and Operations approach like never before.
                                        </li>
                                        <li>Hire dedicated devOps developers to take your business on the next level of successful business goal attainment.</li>
                                    </ul>
                                </div>
                                <div className="col-lg-2"></div>
                                <div className="col-lg-5 col-md-12" ><AwardFormsec /></div>
                            </div>
                        </div>
                    </div>

                    <div className="culture-sec cr-sec">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2"></div>
                                <div className="col-lg-8 col-md-12" >
                                    <h3>Why DevOps</h3>
                                    <p>DevOps is the perfect blend of Software Development and Operations to enable swift development and easy maintenance of new and existing deployments. </p>
                                </div>

                                <OwlCarousel options={culture}>
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Flexible Development</h4>
                                        <p>DevOps offers you the benefits of swapping, modifying and replacing the components without refactoring.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Security</h4>
                                        <p>DevOps offers secure services so that you needn’t build from scratch.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Smooth Delivery</h4>
                                        <p>Slash down the development time with enormous services</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Speedy matters</h4>
                                        <p>Cut down the time-to-market within a perfected development model.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Fully Scalable</h4>
                                        <p>Your apps automatically scale up or ramp down the resources in response to the need and usage. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Optimize the cost</h4>
                                        <p>Pay as you use. It helps you optimize the cost by avoiding the idle server time charges. </p>
                                    </div>


                                </OwlCarousel>


                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Flexible Development</h4>
                                        <p>DevOps offers you the benefits of swapping, modifying and replacing the components without refactoring.</p>
                                    </div>

                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Security</h4>
                                        <p>DevOps offers secure services so that you needn’t build from scratch.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Smooth Delivery</h4>
                                        <p>Slash down the development time with enormous services</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Speedy matters</h4>
                                        <p>Cut down the time-to-market within a perfected development model.</p>
                                    </div>

                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Fully Scalable</h4>
                                        <p>Your apps automatically scale up or ramp down the resources in response to the need and usage. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Optimize the cost</h4>
                                        <p>Pay as you use. It helps you optimize the cost by avoiding the idle server time charges. </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="culture-sec web-sec">
                        <h3>DevOps Services</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12" >
                                    <OwlCarousel options={culture}>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>Hire DevOps Developers</h4>
                                            <p>Hire iQuinceSoft DevOps developers and save efforts, time and money significantly. Our developers work as per your instructions and contribute as an extended in-house team.</p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>Assessment and Planning</h4>
                                            <p>We customize a DevOps Assessment roadmap to visualise the state and identify the traceable KPIs.</p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>CI/CD Pipeline</h4>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>DevOps Consulting</h4>
                                            <p>We offer need-based customized consulting services to help you grow with the growth of your business and improve sales. </p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>Process Automation</h4>
                                            <p>Automate your whole process pipeline from code generation to production, builds, test cases, QA checks, and security with the expertise of iQuinceSoft. </p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>Process Implementation</h4>
                                            <p>Leverage the expertise of iQuinceSoft for the analysis, design, build, automation and implementation in the specific areas. </p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>Security Integration</h4>
                                            <p>We offer end-to-end security integration to your systems and process with the expertise of our DevOps engineers at iQuinceSoft. </p>
                                        </div>

                                    </OwlCarousel>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            <h4>Hire DevOps Developers</h4>
                                            <p>Hire iQuinceSoft DevOps developers and save efforts, time and money significantly. Our developers work as per your instructions and contribute as an extended in-house team.</p>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <h4>Assessment and Planning</h4>
                                            <p>We customize a DevOps Assessment roadmap to visualise the state and identify the traceable KPIs.</p>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <h4>CI/CD Pipeline</h4>
                                            <p>We bridge the gap between the development and operations with continuous development, testing, integration, and deployment.</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>DevOps Consulting</h4>
                                            <p>We offer need-based customized consulting services to help you grow with the growth of your business and improve sales. </p>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <h4>Process Automation</h4>
                                            <p>Automate your whole process pipeline from code generation to production, builds, test cases, QA checks, and security with the expertise of iQuinceSoft. </p>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <h4>Process Implementation</h4>
                                            <p>Leverage the expertise of iQuinceSoft for the analysis, design, build, automation and implementation in the specific areas. </p>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <h4>Security Integration</h4>
                                            <p>We offer end-to-end security integration to your systems and process with the expertise of our DevOps engineers at iQuinceSoft. </p>
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
                                                What are DevOps services?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                DevOps refers to the practices and policies involved in the software development process. DevOps services include implementing strategies
                                                like planning, developing, integrating, testing and deploying the product.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                How does DevOps work?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                The DevOps model works by collaborating the development team of the organization and the operations team to achieve a common goal and offer value.
                                                DevOps removes the barriers between the operations team and development.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Can I hire DevOps developers from iQuinceSoft?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Yes. You can hire our seasoned and skilled DevOps developers.
                                                You can manage them as your extended team on your projects. In addition to this,
                                                we offer a free-of-cost project manager to you as a single point of contact for you.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                What type of DevOps services you offer?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                The DevOps services that we offer are environment configuration with the help of AWS, Google Cloud, end-to-end DevOps testing, continuous integration, DevOps maintenance and monitoring, reliable support solutions and DevOps consulting.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                What are the technologies you use for DevOps solutions?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                We help businesses with the help of implementing DevOps strategies that include the following tech stacks like:
                                                • GitHub, BitBucket (for Source Code Repository)
                                                • AWS Backup, Storage Gateway (for Backup)
                                                • Jenkins, Gitlab CI (for continuous Deployment)
                                                • Gradle, Ant (for Build)
                                                • Selenium, WireMock (for Automated Testing)
                                                • AWS, GCP (for Clouds)
                                                • Sonar, Black Duck (for Code Analysis)
                                                • Datadog, Zabbix (for Monitoring)
                                                • Windows Server Family, Oracle Linux (for Security Scanning)
                                                • Argo (for Workflow Automation)
                                                • Okta, AWS Security Hub (for Security)
                                                • Terraform, Cloudformation (for IAC & Configuration Management)
                                                • AWS ECR, Azure Container Registry (for Container Image Registry)
                                                • ElasticSearch, Fluentd (For Log Management)
                                                • Clair, Nessus (for Security Scanning)
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
                                        {Devops_ServicesJson && Devops_ServicesJson.map(Devops_ServicesJsonS => {
                                            return (
                                                <div className="cult-box">
                                                    <div class="tech-dot"></div>
                                                    <h4>{Devops_ServicesJsonS.name}</h4>
                                                    <p dangerouslySetInnerHTML={{ __html: Devops_ServicesJsonS.content.substr(0, 100) + '...' }}></p>
                                                    <Link to={`/PostPage/${Devops_ServicesJsonS.slug}`} >READ MORE </Link>
                                                </div>
                                            );
                                        })}
                                    </OwlCarousel>

                                    <div className="row">
                                        {Devops_ServicesJson && Devops_ServicesJson.map((Devops_ServicesJsonS, index) => {
                                            return (

                                                <div className="col-lg-4 col-md-4">
                                                    <div className="insight-box" key={Devops_ServicesJsonS.id}>
                                                        <h4>{Devops_ServicesJsonS.name}</h4>
                                                        <p dangerouslySetInnerHTML={{ __html: Devops_ServicesJsonS.content.substr(0, 100) + '...' }}></p>
                                                        <Link to={`/PostPage/${Devops_ServicesJsonS.slug}`} >READ MORE </Link>
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

export default DevOpsDev;

