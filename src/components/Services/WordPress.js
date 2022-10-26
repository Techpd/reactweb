
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
import AwardFormsec from '../../container/AwardFormsec';
import { TailSpin } from 'react-loader-spinner';
import { PostCate } from '../../json/PostCate';
import Partner from '../../container/Partner';
import { Helmet } from "react-helmet";
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';

class WordPress extends Component {
    constructor(props) {
        super(props)
        this.state = {
            InsightsJson: [],
            Loading: true,
        }
    }

    componentDidMount() {
        PostCate.getWordpress().then((wordpress, err) => {
            if (!err) {
                this.setState({
                    InsightsJson: wordpress,
                    Loading: false,

                });
            }
        });
    }
    render() {
        const { InsightsJson } = this.state;

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
                        <title>Hire WordPress Developers | Dedicated WordPress Developer
                        </title>
                        <meta name="discription" content="Want to Hire a Remote Wordpress Developer? Partner with iQuincesoft to hire skilled & qualified developers at your flexibility on hourly/monthly basis. Hire Now!" />
                    </Helmet>
                    <div className="service-banner service-banner-cat">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-12" >
                                    <p>WORDPRESS</p>
                                    <h1><strong>Customized websites from plugins to theme development. We develop webistes that reveal your true spirits</strong><br /></h1>
                                    <ul>
                                        <li>Hire the best-in-business WordPress developers with cutting-edge expertise and skills to fit your business and projects.</li>
                                        <li>Customize, build and deploy new WordPress themes, Plugins, and flexible features that help you develop the ease and robust web app for sophisticated web systems.</li>
                                        <li>Hire dedicated offshore skilled WordPress Developers to outshine the competition. </li>
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
                                    <h3>Wordpress Solutions - Crafted to Perfection</h3>
                                    <p>Attractive Designs, Eye-Popping Layouts and Engaging Websites that can generate more sales and work as a virtual salesperson</p>
                                </div>

                                <OwlCarousel options={culture}>
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Preferred CMS</h4>
                                        <p>According to the manaferra, More than staggering 708 million websites are based at WordPress. This is the popularity of WordPress as a CMS. WordPress is used and popular across the industries like corporates, non-profits, publications, government portals, educational institutions and what not. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Cost-effective Maintenance</h4>
                                        <p>WordPress is highly affordable CMS. Less set-up, maintenance and customization costs makes it cost-effective. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Powerful Analytics</h4>
                                        <p>WordPress offers highly customized responsive websites. Hence, it is gives good user experience by the use of plugins like WPTouch, Jetpack, and WordPress Mobile Pack. Mobile friendly websites are uncluttered and easily readable.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Secured Websites</h4>
                                        <p>A WordPress template offers numerous themes and plugins to avoid the malware, Cross-site scripting and DDoS attacks.</p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Customizable Layouts</h4>
                                        <p>A developer can customize a WordPress website as per the need. Several additional functionalities are there to add with the help of plugins which are free to use.  </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>User-Friendly Interface</h4>
                                        <p>WordPress comes with WYSIWYG (What You See Is What You Get) interface. This can be a perfect platform for non-tech savvy people to build on their portfolio sites and add content without help of costly developers. </p>
                                    </div>


                                </OwlCarousel>


                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Preferred CMS</h4>
                                        <p>According to the manaferra, More than staggering 708 million websites are based at WordPress. This is the popularity of WordPress as a CMS. WordPress is used and popular across the industries like corporates, non-profits, publications, government portals, educational institutions and what not. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Cost-effective Maintenance</h4>
                                        <p>WordPress is highly affordable CMS. Less set-up, maintenance and customization costs makes it cost-effective. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Responsive Designs</h4>
                                        <p>WordPress offers highly customized responsive websites. Hence, it is gives good user experience by the use of plugins like WPTouch, Jetpack, and WordPress Mobile Pack. Mobile friendly websites are uncluttered and easily readable.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Secured Websites</h4>
                                        <p>A WordPress template offers numerous themes and plugins to avoid the malware, Cross-site scripting and DDoS attacks. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Customizable Layouts</h4>
                                        <p>A developer can customize a WordPress website as per the need. Several additional functionalities are there to add with the help of plugins which are free to use.  </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>User-Friendly Interface</h4>
                                        <p>WordPress comes with WYSIWYG (What You See Is What You Get) interface. This can be a perfect platform for non-tech savvy people to build on their portfolio sites and add content without help of costly developers. </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="culture-sec web-sec">
                        <h3>Wordpress Services</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12" >
                                    <OwlCarousel options={culture}>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg} /> */}
                                            <h4>Web Development</h4>
                                            <p>WordPress customized and need-based website is all you need to scale your business. We are the experts having tons of experience in offering WordPress Web solutions. Our expert developers use agile methodologies to craft tailor-made WordPress solutions per your needs. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg1} /> */}
                                            <h4>API Development</h4>
                                            <p>API development means iQuinceSoft. We have served numerous global clients with API solutions. We can integrate third-party tools and systems. We make your site more extensible.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg2} /> */}
                                            <h4>Wordpress Migration</h4>
                                            <p>We manage your file and database backups while migrating websites without losing any vital data.</p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg3} /> */}
                                            <h4>Wordpress Plugin Development</h4>
                                            <p>We adhere to best practices to create an online store with added extensions. We develop unique add-ons and tools to build a Wordpress shopping cart. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg4} /> */}
                                            <h4>e-Commerce Solutions</h4>
                                            <p>Do you want to build impeccable and astonishing market stores at WordPress? We can help you with the one. Talk to our experts, specify the needs and demands, and enjoy the highly customized e-commerce store. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Support & Maintenance</h4>
                                            <p>We have supported multiple organizations as a support and maintenance partner for the big and small WordPress projects. Do you want to seal a deal? Please pick up the call and buzz us.</p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Performance and Security</h4>
                                            <p>We prevent your website from potential malware using the best cyber practices. As WordPress professionals, we can help you restrict external threats and hacks. </p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>PSD to WordPress</h4>
                                            <p>We help you with a PSD design. We code it into a full-featured WordPress site. We offer easy, fast and scalable websites in compliance with the PSD designs. </p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Hire WordPress Developers</h4>
                                            <p>Scale your business to the heights of hiring our dedicated WordPress developers. The developers contribute as the remote in-house team. </p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>Custom Plugin Development</h4>
                                            <p>Our developers can add several customized plugins in WordPress to add more value and functionalities to the core WordPress without changing the codes. </p>
                                        </div>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            {/* <img src={webImg5} /> */}
                                            <h4>WordPress Consulting</h4>
                                            <p>We identify the best possible strategies to scale your WordPress projects. Call us for the best-suited recommendations and evaluations specific to your website. </p>
                                        </div>
                                    </OwlCarousel>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg} /> */}
                                            <h4>Web Development</h4>
                                            <p>WordPress customized and need-based website is all you need to scale your business. We are the experts having tons of experience in offering WordPress Web solutions. Our expert developers use agile methodologies to craft tailor-made WordPress solutions per your needs. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg1} /> */}
                                            <h4>API Development</h4>
                                            <p>API development means iQuinceSoft. We have served numerous global clients with API solutions. We can integrate third-party tools and systems. We make your site more extensible.</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg2} /> */}
                                            <h4>Web Migration</h4>
                                            <p>We manage your file and database backups while migrating websites without losing any vital data.
                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg4} /> */}
                                            <h4>E-Commerce Solutions</h4>
                                            <p>Do you want to build impeccable and astonishing market stores at WordPress? We can help you with the one. Talk to our experts, specify the needs and demands, and enjoy the highly customized e-commerce store. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Support & Maintenance</h4>
                                            <p>We have supported multiple organizations as a support and maintenance partner for the big and small WordPress projects. Do you want to seal a deal? Please pick up the call and buzz us.</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Performance and Security</h4>
                                            <p>We prevent your website from potential malware using the best cyber practices. As WordPress professionals, we can help you restrict external threats and hacks. </p>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>PSD to WordPress</h4>
                                            <p>We help you with a PSD design. We code it into a full-featured WordPress site. We offer easy, fast and scalable websites in compliance with the PSD designs. </p>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Hire WordPress Developers</h4>
                                            <p>Scale your business to the heights of hiring our dedicated WordPress developers. The developers contribute as the remote in-house team. </p>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>Custom Plugin Development</h4>
                                            <p>Our developers can add several customized plugins in WordPress to add more value and functionalities to the core WordPress without changing the codes..</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4"></div>

                                        <div className="col-lg-4 col-md-4">
                                            {/* <img src={webImg5} /> */}
                                            <h4>WordPress Consulting</h4>
                                            <p>We identify the best possible strategies to scale your WordPress projects. Call us for the best-suited recommendations and evaluations specific to your website. </p>
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
                                <div className="col-lg-8 col-md-10">
                                    <Accordion allowZeroExpanded preExpanded={['a']}>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                How much does it cost to develop a custom WordPress website?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                The cost of developing a custom WordPress website site varies and depends on various
                                                factors like web hosting server, domain, themes, security plan etc. If you wish to build a WordPress Website, we offer custom development services to deliver top-notch WordPress solutions. The cost of developing a custom WordPress website site varies and depends on various factors like web hosting server, domain, themes, security plan etc. If you wish to build a WordPress Website, we offer custom development services to deliver top-notch WordPress solutions.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Do you offer custom theme and plug-ins development services?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Yes. We are seasoned with the development of custom themes and plug-ins for WordPress.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Can I hire WordPress developers from you and manage them on my own?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Yes. We offer WordPress developers to hire and manage them as your extended team.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                I have a WordPress website and need to update the same. Can iQuinceSoft help?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                We can help you update and scale up your WordPress website. With enriching
                                                experience and expertise, we can offer migration to API development, SEO, third-party integration, speed optimization and module development services to take your website to the next level.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                What is the best way to choose a professional WordPress development agency?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                The best way is to get fair and impartial reviews from third-party platforms, i.e., clutch and Google. Search the social media handles of the agency as well for a clear perspective of the agency and its business.
                                                iQuinceSoft is a clutch certified agency that can take your business to the next level.
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
                                        {InsightsJson && InsightsJson.map(InsightsJsonS => {
                                            return (
                                                <div className="cult-box">
                                                    <div class="tech-dot"></div>
                                                    <h4>{InsightsJson.name}</h4>
                                                    <p dangerouslySetInnerHTML={{ __html: InsightsJsonS.content.substr(0, 100) }} ></p>
                                                    <Link to={`/PostPage/${InsightsJsonS.slug}`} >READ MORE </Link>
                                                </div>
                                            );
                                        })}
                                    </OwlCarousel>

                                    <div className="row">
                                        {InsightsJson && InsightsJson.map((InsightsJsonS, index) => {
                                            return (

                                                <div className="col-lg-4 col-md-4">
                                                    <div className="insight-box" key={InsightsJsonS.id}>
                                                        <h4>{InsightsJsonS.name}</h4>
                                                        <p dangerouslySetInnerHTML={{ __html: InsightsJsonS.content.substr(0, 100) }}></p>
                                                        <Link to={`/PostPage/${InsightsJsonS.slug}`} >READ MORE </Link>
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

export default WordPress;

