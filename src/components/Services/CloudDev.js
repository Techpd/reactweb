
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
import { TailSpin } from 'react-loader-spinner'
import AwardFormsec from '../../container/AwardFormsec';
import Partner from '../../container/Partner';
import Business from '../../images/Business.svg';
import Artificial from '../../images/Artificial.svg';
import Developer from '../../images/Developer.svg';
import { Helmet } from "react-helmet";
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';

class CloudDevelopment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Cloud_DevelopmentJson: [],
            Loading: true,
        }
    }

    componentDidMount() {
        PostCate.getCloud_Development().then((Cloud_Development, err) => {
            if (!err) {
                this.setState({
                    Cloud_DevelopmentJson: Cloud_Development,
                    Loading: false,

                });
            }
        });
    }
    render() {
        const { Cloud_DevelopmentJson } = this.state;

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
                        <title>Cloud Developement | iQuinceSoft
                        </title>
                        <meta name="discription" content="We provide cloud development services to help you by automate the monitoring & take the architectural flexibility with our highly skilled developers. Call Us!" />
                    </Helmet>
                    <div className="service-banner service-banner-cat">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-12" >
                                    <p>CLOUD DEVELOPMENT</p>
                                    <h1><strong>Streamline your cloud development like a conglomerate</strong><br /></h1>
                                    <ul>
                                        <li>We help you slash down the cloud cost, automate the monitoring and take the architectural flexibility to the next level.</li>
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
                                    <h3>Take your capabilities to the next level with iQuinceSoft Cloud</h3>
                                    <p>Build and scale your apps with the help of resources which require a rare skill set. To build and scale the apps, you need knowledge and experience in cloud development.

                                        <br />Let us start your cloud development with the trust of iQuinceSoft and take your business capabilities to the next level. </p>
                                </div>

                                <OwlCarousel options={culture}>
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Scalability</h4>
                                        <p>You can scale your apps swiftly in cloud computing. The conventional servers and hosting solution services are not that smooth. Cloud is the most acceptable solution to meet the ever-evolving needs, wants, and demands of businesses. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Secure</h4>
                                        <p>No risk of IT infrastructure breakdown. Cloud app development removes the fear of breakdowns and offers a robust framework. It can even help recover the deleted data swiftly, thus curbing the downtime.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Easy Deployment and Integration</h4>
                                        <p>Cloud development is renowned for its easy deployment and integration. We ensure your products get easily deployed and integrated</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Least time-to-market</h4>
                                        <p>Cloud computing ensures the time-to-market is least. It provides a perfected continuous deployment model.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>iQuinceSoft Cloud Computing</h4>
                                        <p>iQuinceSoft is renowned for using cutting edge tech stacks and state-of-the-art tools to offer you the best in the cloud computing domain.
                                            We use cloud-native app development to offer you an edge over the competition and get the benefits of the expertise of iQuinceSoft.
                                            iQuinceSoft can ensure quality and high-end cloud development services to help you attain your business goals.</p>
                                    </div>

                                </OwlCarousel>


                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Scalability</h4>
                                        <p>You can scale your apps swiftly in cloud computing. The conventional servers and hosting solution services are not that smooth. Cloud is the most acceptable solution to meet the ever-evolving needs, wants, and demands of businesses. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Secure</h4>
                                        <p>No risk of IT infrastructure breakdown. Cloud app development removes the fear of breakdowns and offers a robust framework. It can even help recover the deleted data swiftly, thus curbing the downtime.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Easy Deployment and Integration</h4>
                                        <p>Cloud development is renowned for its easy deployment and integration.  We ensure your products get easily deployed and integrated</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Least time-to-market</h4>
                                        <p>Cloud computing ensures the time-to-market is least. It provides a perfected continuous deployment model.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>iQuinceSoft Cloud Computing</h4>
                                        <p>iQuinceSoft is renowned for using cutting edge tech stacks and state-of-the-art tools to offer you the best in the cloud computing domain.
                                            We use cloud-native app development to offer you an edge over the competition and get the benefits of the expertise of iQuinceSoft.
                                            iQuinceSoft can ensure quality and high-end cloud development services to help you attain your business goals.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="culture-sec web-sec">
                        <h3> Services</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12" >
                                    <OwlCarousel options={culture}>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>Get Unparalleled Scalability with the Cloud Computing </h4>
                                            <p>Are you planning a cloud computing project? We helped hundreds of businesses to sail through. We have seasoned DevOps engineers and cloud developers who can ensure your cloud app uses the best practices and benefits scalability, flexibility, and security. </p>
                                        </div>



                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>Cloud-native Architecture</h4>
                                            <p>The best thing about the cloud architecture is it deploys frequently, and when needed, we can roll it back as well. It is accessible and utilizes the global infrastructure at less price. It scales the software following the business needs.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>Cloud Maintenance</h4>
                                            <p>Maintenance is a point of concern in the cloud. Hence, it is crucial to ensure that the web infrastructure stays resilient with updates, error prevention, and patching regularly.
                                                Cloud maintenance can keep the cost and usage down. It can also slash down the chances of production failures by a significant margin.
                                                iQuinceSoft can also ensure you implement the system updates successfully. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>Cloud Migration</h4>
                                            <p>Cloud computing allows you to scale the web app infrastructure within a fraction of the cost viz-a-viz an ongoing system. It is effortless with iQuinceSoft cloud infrastructure.
                                                iQuinceSoft cloud migration services can rapidly take the development to the next level. It can also reduce the manual efforts with the automation process.  </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>Team Augmentation</h4>
                                            <p>Are you struggling with quality resources? It is not easy to upgrade the team with the required set of skills, and simultaneously you can lose business opportunities.
                                                Leverage on the expertise of the best in class developers with an added advantage of trust from the house of iQuinceSoft.
                                                Hire the expertise of the seasoned and highly skilled cloud developers from iQuinceSoft. We offer the option to scale up or ramp down your team size on demand. We keep focusing on cloud-first software development.</p>
                                        </div>

                                    </OwlCarousel>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            <h4>Get Unparalleled Scalability with the Cloud Computing </h4>
                                            <p>Are you planning a cloud computing project? We helped hundreds of businesses to sail through. We have seasoned DevOps engineers and cloud developers who can ensure your cloud app uses the best practices and benefits scalability, flexibility, and security. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>Cloud-native Architecture</h4>
                                            <p>The best thing about the cloud architecture is it deploys frequently, and when needed, we can roll it back as well. It is accessible and utilizes the global infrastructure at less price. It scales the software following the business needs.
                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>Cloud Maintenance</h4>
                                            <p>Maintenance is a point of concern in the cloud. Hence, it is crucial to ensure that the web infrastructure stays resilient with updates, error prevention, and patching regularly.
                                                Cloud maintenance can keep the cost and usage down. It can also slash down the chances of production failures by a significant margin.
                                                iQuinceSoft can also ensure you implement the system updates successfully. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>Cloud Migration</h4>
                                            <p>Cloud computing allows you to scale the web app infrastructure within a fraction of the cost viz-a-viz an ongoing system. It is effortless with iQuinceSoft cloud infrastructure.
                                                iQuinceSoft cloud migration services can rapidly take the development to the next level. It can also reduce the manual efforts with the automation process.  </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>Team Augmentation</h4>
                                            <p>Are you struggling with quality resources? It is not easy to upgrade the team with the required set of skills, and simultaneously you can lose business opportunities.
                                                Leverage on the expertise of the best in class developers with an added advantage of trust from the house of iQuinceSoft.
                                                Hire the expertise of the seasoned and highly skilled cloud developers from iQuinceSoft. We offer the option to scale up or ramp down your team size on demand. We keep focusing on cloud-first software development.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <FormPopup />
                        <h5><Link to={'#EuquireSec'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Or, Use this form to share your requirements.<span>Get guaranteed response within 8 Hrs.</span></Link></h5>
                    </div>


                    <div className="process-sec dd">
                        <div className="container">
                            <h1>Our Process</h1>
                            <div className="row">
                                <p className="process-heading-para">The Process we use to build your dedicated development team</p>
                                <div className="col-lg-5 col-md-6">
                                    <picture><img alt="img" src={Developer} /></picture>
                                </div>
                                <div className="col-lg-1"></div>
                                <div className="col-lg-5 col-md-6">
                                    <div className="process-box txt-process-box">
                                        <span className="blue">01</span>
                                        <h3> Select from the best</h3>
                                        <p>We select the optimal developers that suit your business needs and allow you to screen, audition and interview our vetted, skilled and experienced developers. According to the project requirements, we can increase or decrease the team size. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-5 col-md-6">
                                    <div className="process-box txt-process-box">
                                        <span className="blue">02</span>
                                        <h3>Smooth Integration</h3>
                                        <p>Our developers merge with your project team and work under your supervision in the next step. We ensure that this integration of our vetted talent stays smooth, and we take care of all the overhead charges. </p>
                                    </div>
                                </div>
                                <div className="col-lg-1"></div>
                                <div className="col-lg-5 col-md-6">
                                    <picture><img alt="img" src={Business} /></picture>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-5 col-md-6">
                                    <picture><img alt="img" src={Artificial} /></picture>
                                </div>
                                <div className="col-lg-1"></div>
                                <div className="col-lg-5 col-md-6">
                                    <div className="process-box txt-process-box">
                                        <span className="blue">03</span>
                                        <h3>Scale</h3>
                                        <p>The best-fit hiring process model from iQuinceSoft ensures you can scale on-demand the team size and ramp down the team size when not needed.
                                            We make the process easy and smooth for you like a caring partner. </p>
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
                                <div className="col-lg-8 col-md-10" >
                                    <Accordion allowZeroExpanded preExpanded={['a']}>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                What is the difference between a cloud-based application and a web application?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                A web-based application is different from a cloud-based application in architecture. The web application needs the internet to use, whereas the internet is only required when you upload or download data from a cloud-based app.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                How much does it cost to develop a cloud-native application?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                According to the project needs, the cost varies. The cost variance depends on the factors like platform and cross-platform needs, support, engagement models, size and type of the app and the app's complexity.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                How to choose an offshore cloud development company?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Consider the company's website, go through the projects they have worked on, the team size, and their professionalism are the key factors to double check while choosing an offshore cloud development company.
                                                Try to communicate (if possible) to check their level of understanding and make sure to go through the third-party reviews at Clutch, GoodFirms and Google.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Why should I choose iQuinceSoft?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                iQuinceSoft has been serving and exceeding the expectation of American and European markets for more than a decade. We are skilled professionals.
                                                Our services are reviewed as one of the best on third-party platforms like Google, Clutch and GoodFirms for outstanding services.
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
                                        {Cloud_DevelopmentJson && Cloud_DevelopmentJson.map(Cloud_DevelopmentJsonS => {
                                            return (
                                                <div className="cult-box">
                                                    <div class="tech-dot"></div>
                                                    <h4>{Cloud_DevelopmentJsonS.name}</h4>
                                                    <p dangerouslySetInnerHTML={{ __html: Cloud_DevelopmentJsonS.content.substr(0, 100) + '...' }}></p>
                                                    <Link to={`/PostPage/${Cloud_DevelopmentJsonS.slug}`} >READ MORE </Link>
                                                </div>
                                            );
                                        })}
                                    </OwlCarousel>

                                    <div className="row">
                                        {Cloud_DevelopmentJson && Cloud_DevelopmentJson.map((Cloud_DevelopmentJsonS, index) => {
                                            return (

                                                <div className="col-lg-4 col-md-4">
                                                    <div className="insight-box" key={Cloud_DevelopmentJsonS.id}>
                                                        <h4>{Cloud_DevelopmentJsonS.name}</h4>
                                                        <p dangerouslySetInnerHTML={{ __html: Cloud_DevelopmentJsonS.content.substr(0, 100) + '...' }}></p>
                                                        <Link to={`/PostPage/${Cloud_DevelopmentJsonS.slug}`} >READ MORE </Link>
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

export default CloudDevelopment;

