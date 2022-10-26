import React, { Component } from 'react'
import Headers from './Header';
import sunder from '../images/sunder.png'
import vishal from '../images/WhyIndiaimage/vishal.png';
import Nadella from '../images/WhyIndiaimage/Nadella.png';
import Arvind from '../images/WhyIndiaimage/Arvind.png';
import Yamini from '../images/WhyIndiaimage/Yamini.png';
import Parag from '../images/WhyIndiaimage/Parag.png';
import Shantanu from '../images/WhyIndiaimage/Shantanu.png';
import Leena from '../images/WhyIndiaimage/Leena.png';
import Ajay from '../images/WhyIndiaimage/Ajay.png';
import Subramaniam from '../images/WhyIndiaimage/Subramaniam.png';
import Anjali from '../images/WhyIndiaimage/Anjali.png';
import google from '../images/WhyIndiaimage/google.svg';
import facebook1 from '../images/WhyIndiaimage/facebook.svg';
import microsoft1 from '../images/WhyIndiaimage/microsoft.svg';
import ibm from '../images/WhyIndiaimage/ibm.svg';
import twitter1 from '../images/WhyIndiaimage/twitter.svg';
import hubspot from '../images/WhyIndiaimage/hubspot.svg';
import adobe from '../images/WhyIndiaimage/adobe.svg';
import chanel from '../images/WhyIndiaimage/chanel.svg';
import mastercard from '../images/WhyIndiaimage/mastercard.svg';
import fedex from '../images/WhyIndiaimage/fedex.svg';
import vimeo from '../images/WhyIndiaimage/vimeo.svg';
import FormPopup from '../container/FormPopup';
import { HashLink as Link } from 'react-router-hash-link';
import facebook from '../images/WhyIndiaimage/facebook.png'
import microsoft from '../images/WhyIndiaimage/microsoft.png'
import google1 from '../images/WhyIndiaimage/google.png'
import apple from '../images/WhyIndiaimage/apple.png'
import Footer from '../components/Footer';
import ReviewSec from '../container/ReviewSec';
import EuquireSec from '../container/EuquireSec';
import AwardSec from '../container/AwardSec';
import { Helmet } from "react-helmet";
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';

export default class WhyIndia extends Component {

    render() {
        return (
            <>
                <Headers />
                <Helmet>
                    <title>Why India – iQuinceSoft Technology
                    </title>
                    <meta name="discription" content="India is place of dedicated and hardworking peoples, who not only committed to their words but also ensure that task or projects they" />
                </Helmet>
                <div id="main" className="Know_more">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-6">
                                <div className="item">
                                    <div className="banner-caption">
                                        <h1>Full of Resources.<br />Easy to Adapt.<br />Prompt Response.</h1>
                                        <div className="desc">
                                            <p>India – A Land of Talent and Skills <br />that shapes Silicon Valley!!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div>
                </div>

                <div className="India">
                    <div className="container">
                        <h1>India - the land of Talented Resources, Resilient leaders, Vibrant Communicators</h1>
                        <div className="row">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-8 col-md-12">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                        <div className="India-item">
                                            <img alt="img" src={sunder} />
                                            <h3>Sunder Pichai</h3>
                                            <h6>CEO of google</h6>
                                            <img alt="img" className="India-item-img" src={google} />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                        <div className="India-item">
                                            <img alt="img" src={vishal} />
                                            <h3>Vishal Shah</h3>
                                            <h6>VP of Metaverse (Facebook)</h6>
                                            <img alt="img" className="India-item-img" src={facebook1} />
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                        <div className="India-item">
                                            <img alt="img" src={Nadella} />
                                            <h3>Satya Nadella</h3>
                                            <h6>CEO of Microsoft</h6>
                                            <img alt="img" className="India-item-img" src={microsoft1} />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                        <div className="India-item">
                                            <img alt="img" src={Arvind} />
                                            <h3>Arvind Krishna</h3>
                                            <h6>CEO of IBM</h6>
                                            <img alt="img" className="India-item-img" src={ibm} />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                        <div className="India-item">
                                            <img alt="img" src={Yamini} />
                                            <h3>Yamini Rangan</h3>
                                            <h6>CEO of Hubspot</h6>
                                            <img alt="img" className="India-item-img" src={hubspot} />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                        <div className="India-item">
                                            <img alt="img" src={Parag} />
                                            <h3>Parag Agarwal</h3>
                                            <h6>CEO of Twitter</h6>
                                            <img alt="img" className="India-item-img" src={twitter1} />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                        <div className="India-item">
                                            <img alt="img" src={Shantanu} />
                                            <h3>Shantanu Narayan</h3>
                                            <h6>CEO of Adobe</h6>
                                            <img alt="img" className="India-item-img" src={adobe} />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                        <div className="India-item">
                                            <img alt="img" src={Leena} />
                                            <h3>Leena Nair</h3>
                                            <h6>CEO of Chanel</h6>
                                            <img alt="img" className="India-item-img" src={chanel} />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                        <div className="India-item">
                                            <img alt="img" src={Ajay} />
                                            <h3>Ajay Banga</h3>
                                            <h6>Executive Chairman of MasterCard
                                            </h6>
                                            <img alt="img" className="India-item-img" src={mastercard} />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                        <div className="India-item">
                                            <img alt="img" src={Subramaniam} />
                                            <h3>Raj Subramaniam</h3>
                                            <h6>CEO of FedEx</h6>
                                            <img alt="img" className="India-item-img" src={fedex} />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                        <div className="India-item">
                                            <img alt="img" src={Anjali} />
                                            <h3>Anjali Sud</h3>
                                            <h6>CEO of Vimeo</h6>
                                            <img alt="img" className="India-item-img" src={vimeo} />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="makes">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1"></div>
                            <div className="col-lg-3 col-md-3">
                                <h2>Tech giants (Non-Tech too) love to work with Indians. But why?</h2>
                            </div>
                            <div className="col-lg-1"></div>
                            <div className="col-lg-6 col-md-9">
                                <div className="row">
                                    <div className="col-lg-5 col-md-6">
                                        <div className="work-item">
                                            <h4>Skilled
                                            </h4>
                                            <p>Indians are skilled and committed to functioning and helping businesses achieve their business goals within the timeframe.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-5 col-md-6">
                                        <div className="work-item">
                                            <h4>Value Addition
                                            </h4>
                                            <p>Indians bring value to the board. Indians are courteous, professional, and insightful, which can bring more to the team.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-5 col-md-6">
                                        <div className="work-item">
                                            <h4>Self-Driven
                                            </h4>
                                            <p>Indians give in their 100% and believe in adding value to everything they do.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-5 col-md-6">
                                        <div className="work-item">
                                            <h4>Passionate
                                            </h4>
                                            <p>Indians are passionate, dedicated, and hardworking. Indians excel in the competition with the passion they bring to the board.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-5 col-md-6">
                                        <div className="work-item">
                                            <h4>Dedication at its best
                                            </h4>
                                            <p>The Indians are the skilled force and more committed than their foreign counterparts.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-lg-5 col-md-6">
                                        <div className="work-item">
                                            <h4>Helpful
                                            </h4>
                                            <p>Indians are very helpful and can build a synergistic team and help others prosper within the team, which is beneficial for the organization they work for.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="India-facts">
                    <div className="container">
                        <h1>Some facts and figures</h1>
                        <div className="row">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-9 col-md-12">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <img alt="img" src={microsoft} />
                                        <p><strong>20%</strong> of engineers in Microsoft are Indians.</p>
                                    </div>
                                    <div className="col-lg-3">
                                        <img alt="img" src={google1} />
                                        <p> <strong>30% </strong> of engineers in Google are Asian, and most are Indian.</p>
                                    </div>
                                    <div className="col-lg-3">
                                        <img alt="img" src={facebook} />
                                        <p>Facebook employs more than engineers. <strong>12000</strong> engineers.</p>
                                    </div>
                                    <div className="col-lg-3">
                                        <img alt="img" src={apple} />
                                        <p>Apple has <strong>1 out of 3</strong> Indian engineers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="frequent-sec">
                    <h3>Frequently Asked Questions</h3>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-md-1"></div>
                            <div className="col-lg-8 col-md-10" >
                                <Accordion allowZeroExpanded preExpanded={['a']}>
                                    <AccordionItem>
                                        <AccordionItemButton>
                                            Is communication a challenge with Indians?
                                        </AccordionItemButton>
                                        <AccordionItemPanel>
                                            No. India has one of the highest English-speaking population with highly talented tech talents.
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemButton>
                                            Does time zone difference create any problems?
                                        </AccordionItemButton>
                                        <AccordionItemPanel>
                                            Indian talents are flexible and adaptable to work according to the time zones that suit you.
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemButton>
                                            How can I hire a developer of my choice from your Indian firm?
                                        </AccordionItemButton>
                                        <AccordionItemPanel>
                                            Shoot us your requirement to iQuinceSoft. We can take care of the other things that matter to you.
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Accordion>
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
        )
    }
}
