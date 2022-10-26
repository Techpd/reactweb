
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
import { TailSpin } from 'react-loader-spinner'
import AwardFormsec from '../../container/AwardFormsec';
import Partner from '../../container/Partner';
import SEOimage from '../../images/icp-seo.png';
import OPTIMIZATION2 from '../../images/OPTIMIZATION2.png';
import OPTIMIZATION3 from '../../images/OPTIMIZATION3.png';
import CURRENT from '../../images/CURRENT.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { faFlask } from '@fortawesome/free-solid-svg-icons';
import { faAnchor } from '@fortawesome/free-solid-svg-icons';
import { faBarChart } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from "react-helmet";
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';

class SEO extends Component {
    constructor(props) {
        super(props)
        this.state = {
            servicesJson: [],
            appjson: [],
            Questionjson: [],
            CommerceJson: [],
            Loading: true,
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
                        <title>Best SEO Company in India | SEO Agency India
                        </title>
                        <meta name="discription" content="iQuinceSoft is a process-centric, outcomes-oriented and full-scale seo company with data in the core. We strive to provide results that make a difference to your business and help you scale higher." />
                    </Helmet>

                    <div className="service-banner service-banner-cat">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-12">
                                    <p>SEARCH ENGINE OPTIMIZATION</p>
                                    <h1><strong>Get Traffic, Leads, and high revenue with our data-driven SEO services!!</strong><br /></h1>
                                    <ul>
                                        <li>Use SEO services that can help you build brand, generate leads and amplify the revenue.</li>
                                        <li>Increase your visibility Quotient that can ensure the maximum results with the optimized cost.</li>

                                    </ul>
                                </div>
                                <div className="col-lg-5 col-md-12" ><AwardFormsec /></div>
                            </div>
                        </div>
                    </div>

                    <div className="SEARCH">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-5 col-md-12">
                                    <h1><strong>Search engine optimization</strong></h1>
                                    <p>We use a methodology of strategies, techniques and tactics to divert max number of daily internet visitors
                                        from the free, organic, editorial & natural search
                                        results on search engines. And this is how we keep you in business.</p>
                                </div>
                                <div className="col-lg-1"></div>
                                <div className="col-lg-5 col-md-12">
                                    <img alt="img" src={SEOimage} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="culture-sec web-sec">
                        <h3>Our Specialized SEO Services</h3>
                        <h3><span>We offer SEO services to comprehend your business, market, competition, and customer behavior. </span></h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10 col-md-12" >
                                    <OwlCarousel options={culture}>
                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>SEO Audits and On-Page Optimization</h4>
                                            <p>Optimize the website and improve rank, traffic, and sales.
                                                Leverage the optimized audit process and optimize the vital pages to increase visibility and generate traffic.
                                                We keep your website ‘healthy.’ We help your website become visible to those looking for the same services you offer.  </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>

                                            <h4>Local SEO  </h4>
                                            <p>Be accessible for LOCAL needs.
                                                With a focus on the local searches, we use the same tactics and tools to rank your website in front of the local search queries on top of the pages. We optimize your local pages for keywords like “near me” or the location name can get you better results by aligning the search intent to help search engines understand and send the right traffic to your website.
                                            </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>Keyword Research</h4>
                                            <p>Rank high with the keyword that matter
                                                The core of the SEO process is Keyword Research. Targeting the perfect keywords can make your business super hit. We identify and target these super essential keywords for your business. These keywords can positively impact your business. We help you take your business to the next level. </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>Mobile SEO</h4>
                                            <p>Make your website mobile-friendly
                                                Mobile and tablets are the devices with the most searches. Optimize your website for mobile users. Convert the visitors on mobile into customers. We make your mobile-primed website fast, responsive, and crawlable.
                                            </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>Content Marketing</h4>
                                            <p>We craft words to meet and exceed your expectations. we use engaging and converting content that can help you reach customers and achieve business goal
                                            </p>
                                        </div>

                                        <div className="cult-box">
                                            <div class="tech-dot"></div>
                                            <h4>Technical SEO Services</h4>
                                            <p>We use a range of activities to figure out the technical errors that can impact the website rank negatively. For this, we conduct an SEO Audit. Post audit, our SEO specialists help the website with the indexation.</p>
                                        </div>
                                    </OwlCarousel>

                                    <div className="row">
                                        {/* <div className="col-lg-4 col-md-4">
                                                <h4>SEO Services</h4>
                                                <p>We offer SEO services to comprehend your business, market, competition, and customer behavior. We provide the following SEO services: </p>
                                            </div> */}

                                        <div className="col-lg-4 col-md-4">
                                            <h4>SEO Audits and On-Page Optimization</h4>
                                            <p>Optimize the website and improve rank, traffic, and sales.
                                                Leverage the optimized audit process and optimize the vital pages to increase visibility and generate traffic.
                                                We keep your website ‘healthy.’ We help your website become visible to those looking for the same services you offer.  </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>Local SEO  </h4>
                                            <p>Be accessible for LOCAL needs.
                                                With a focus on the local searches, we use the same tactics and tools to rank your website in front of the local search queries on top of the pages. We optimize your local pages for keywords like “near me” or the location name can get you better results by aligning the search intent to help search engines understand and send the right traffic to your website.
                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>Keyword Research</h4>
                                            <p>Rank high with the keyword that matter
                                                The core of the SEO process is Keyword Research. Targeting the perfect keywords can make your business super hit. We identify and target these super essential keywords for your business. These keywords can positively impact your business. We help you take your business to the next level. </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>Mobile SEO</h4>
                                            <p>Make your website mobile-friendly
                                                Mobile and tablets are the devices with the most searches. Optimize your website for mobile users. Convert the visitors on mobile into customers. We make your mobile-primed website fast, responsive, and crawlable.

                                            </p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>Content Marketing</h4>
                                            <p>We craft words to meet and exceed your expectations. we use engaging and converting content that can help you reach customers and achieve business goal</p>
                                        </div>

                                        <div className="col-lg-4 col-md-4">
                                            <h4>Technical SEO Services</h4>
                                            <p>We use a range of activities to figure out the technical errors that can impact the website rank negatively. For this, we conduct an SEO Audit. Post audit, our SEO specialists help the website with the indexation.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <FormPopup />
                        <Link to={"#EuquireSec"} target="_blank"><h5>Or, Use this form to share your requirements. <span>Get guaranteed response within 8 Hrs.</span></h5></Link>
                    </div>


                    <div className="process-sec dd line-change">
                        <div className="container">
                            <h1>Hike your business <strong>up online</strong></h1>
                            <p>Physical existence doesn’t hold ground anymore as www has evolved & narrowed the space to do business in this world, however we can create a digital world for you to showcase the best of you to the most of internet users and get you hiked up.</p>
                            <div className="row">
                                <div className="col-lg-5 col-md-6">
                                    <picture><img alt="img" width="100%" src={CURRENT} /></picture>
                                </div>
                                <div className="col-lg-7 col-md-6">
                                    <div className="process-box txt-process-box">
                                        <h3>Analysis of your current ranking on www</h3>
                                        <p>We do not make castles in the air and promise something that is impossibly impossible we instead re-engineer every aspect of your website and trace down the keywords to be hiked up for the top possible ranking ever.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-7 col-md-6">
                                    <div className="process-box txt-process-box">
                                        <h3>On page optimization </h3>
                                        <p>We refine the factors that have an effect on your Web site or Web page listing in natural search results. These factors are controlled by you or by coding on your page like actual HTML code, meta tags, keyword placement and keyword density.</p>
                                        <h5>Tactics are-</h5>
                                        <ul>
                                            <li>Meta Tag Optimization</li>
                                            <li>Content Optimization</li>
                                            <li>Images & Anchor Tag Optimization</li>
                                            <li>Optimizing Site structure and Navigation</li>
                                            <li>Robots.txt</li>
                                            <li>Sitemap creation</li>
                                            <li>ROR Files</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-6">
                                    <picture><img alt="img" width="100%" src={OPTIMIZATION2} /></picture>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-5 col-md-6">
                                    <picture><img alt="img" width="100%" src={OPTIMIZATION3} /></picture>
                                </div>
                                <div className="col-lg-7 col-md-6">
                                    <div className="process-box txt-process-box">
                                        <h3>Off page optimization </h3>
                                        <p>This can’t be controlled by you as it inherits off site
                                            factors and we just happen to master how exactly they need to be curved to get you the max results possible.</p>
                                        <h5>Tactics are-</h5>
                                        <ul>
                                            <li>Inbound Links from Authority Sites</li>
                                            <li>Anchor Text of Inbound Link</li>
                                            <li>Page Rank of Incoming Links</li>
                                            <li>Placement of Link in Web Page</li>
                                            <li>Get Links from Relevant/Related Sites</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <FormPopup />
                        <Link to={"#EuquireSec"} target="_blank"><h5>Or, Use this form to share your requirements. <span>Get guaranteed response within 8 Hrs.</span></h5></Link>
                    </div>

                    <div className="culture-sec cr-sec">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2"></div>
                                <div className="col-lg-8 col-md-12" >
                                    <h3>Benefits Of SEO</h3>
                                    <p>SEO is the artistic science that can get you loads of traffic that can increase the footfall at your physical store. Increased visibility, more traffic, conversions and increased revenue is what an optimized SEO process can do to your business.
                                    </p>
                                </div>

                                <OwlCarousel options={culture}>
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Increased Traffic</h4>
                                        <p>A website is worthless if it is not visible in the organic search results. We offer Search Engine Optimization services because we understand what search engines need. We rank your website and make your online presence felt. Hence we harness the power of the internet to help you rank higher on SERPs and grow. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>ROI</h4>
                                        <p>Our SEO services provides trackable and quantifiable results, regardless of whether for your website so there are no qualms when it comes to ROI. Our SEO strategy are able to track nearly every aspect of our strategy, like increases in rankings, traffic and conversions. Our Comprehensive analytics also provide the ability to drill down at a granular level and see demographic information and other engagement metrics for individuals who have interacted with your website. For website, you can attribute values to your lead conversions, like a ‘contact us’ form fill-out, and calculate the value of your SEO strategy that way.
                                        </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Increased site usability</h4>
                                        <p>In an effort to make your weebsite easier to navigate for the search engines, Our SEO services simultaneously helps to make your website more navigable for users as well. Our strategy SEO consists of rearranging the site’s architecture and links to make pages within the website easier to find and navigate. This not only makes it easier for search engines to crawl your site and find pages, but also makes it easier for users to find information on your website as well. </p>
                                    </div>

                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Brand Awareness</h4>
                                        <p>Your website top position rankings result in significant impressions, having your website in these top positions on the result pages translates to more exposure for your website. Plus, being on the first page for your targeted keywords not only helps users to associate your brand with those keywords, but it instills trust, since companies on the first page are generally perceived to be more trustworthy. The more your pages and content rank in high positions in the search engines, the more chances you have for users to see your content and associate with your brand.

                                        </p>
                                    </div>


                                </OwlCarousel>


                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Increased Traffic</h4>
                                        <p>A website is worthless if it is not visible in the organic search results. We offer Search Engine Optimization services because we understand what search engines need. We rank your website and make your online presence felt. Hence we harness the power of the internet to help you rank higher on SERPs and grow. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>ROI</h4>
                                        <p>Our SEO services provides trackable and quantifiable results, regardless of whether for your website so there are no qualms when it comes to ROI. Our SEO strategy are able to track nearly every aspect of our strategy, like increases in rankings, traffic and conversions. Our Comprehensive analytics also provide the ability to drill down at a granular level and see demographic information and other engagement metrics for individuals who have interacted with your website. For website, you can attribute values to your lead conversions, like a ‘contact us’ form fill-out, and calculate the value of your SEO strategy that way.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Increased site usability</h4>
                                        <p>In an effort to make your weebsite easier to navigate for the search engines, Our SEO services simultaneously helps to make your website more navigable for users as well. Our strategy SEO consists of rearranging the site’s architecture and links to make pages within the website easier to find and navigate. This not only makes it easier for search engines to crawl your site and find pages, but also makes it easier for users to find information on your website as well. </p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="cult-box">
                                        <div class="tech-dot"></div>
                                        <h4>Brand Awareness</h4>
                                        <p>Your website top position rankings result in significant impressions, having your website in these top positions on the result pages translates to more exposure for your website. Plus, being on the first page for your targeted keywords not only helps users to associate your brand with those keywords, but it instills trust, since companies on the first page are generally perceived to be more trustworthy. The more your pages and content rank in high positions in the search engines, the more chances you have for users to see your content and associate with your brand.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="EXECUTE">
                        <div className="container">
                            <h1>How we <strong>execute</strong></h1>
                            <p>We strip and evaluate each and every keyword and frame up the strategy to get you on top.</p>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="EXECUTE0-main">
                                        <div className="row">

                                            <div className="col-lg-3">
                                                <div className="EXECUTE-items">
                                                    <h1><FontAwesomeIcon icon={faKey} className="hover:text-red-500"></FontAwesomeIcon></h1>
                                                    <h4>Keyword Research</h4>
                                                    <p>This defines the probability of your appearance through dense combination.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="EXECUTE-items">
                                                    <h1><FontAwesomeIcon icon={faFlask}></FontAwesomeIcon></h1>
                                                    <h4>Onsite Optimization</h4>
                                                    <p> The Here we do whatever to top is possible you up within website.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="EXECUTE-items">
                                                    <h1><FontAwesomeIcon icon={faAnchor}></FontAwesomeIcon></h1>
                                                    <h4>Link Building</h4>
                                                    <p>We initiate the process of getting external pages to link to a page on your website.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="EXECUTE-items">
                                                    <h1><FontAwesomeIcon icon={faBarChart}></FontAwesomeIcon></h1>
                                                    <h4>Reporting and Analysis</h4>
                                                    <p>We conduct it through content, linking structure &amp; social media efforts.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <FormPopup />
                        <Link to={"#EuquireSec"} target="_blank"><h5>Or, Use this form to share your requirements. <span>Get guaranteed response within 8 Hrs.</span></h5></Link>
                    </div>


                    <div className="SEO-EXPERTS">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2"></div>
                                <div className="col-lg-8">
                                    <h1>SEO Experts</h1>
                                    <p>As experts in the search engine optimization and marketing industries, the management and employees of iQuinceSoft have
                                        a proven track record for crafting effective Internet marketing strategies with measurable, long-term results.</p>
                                </div>
                            </div>
                        </div>
                        <FormPopup />
                        <Link to={"#EuquireSec"} target="_blank"><h5>Or, Use this form to share your requirements. <span>Get guaranteed response within 8 Hrs.</span></h5></Link>
                    </div>

                    <div className="Lets">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2"></div>
                                <div className="col-lg-8">
                                    <div className="items-lets">
                                        <h2 class="lets">Lets Get Your<strong> Project Started</strong></h2>
                                        <p>We focus strongly on function and usability and train you to manage your website as a business asset. We go to great lengths to assure your content is delivered in such a way that visitors can easily and intuitively find the information they seek
                                            , resulting in a pleasant and productive user experience.</p>
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
                                                What is organic SEO?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Organic SEO is a type of SEO that allows you to rank for the keywords used by people.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                What is Local SEO?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Local SEO confines your web presence to a limited area. It targets the people residing in the local area to take any action that may lead to buying the service or the product.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Why use an SEO agency?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                SEO agency helps people reach their online and local target audience within an area. It helps the businesses to increase the traffic and revenue.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Do you offer local SEO services for businesses?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Yes! We offer digital marketing services with specialized SEO services for businesses. We have a proven track record of helping businesses rank up the ladder of success.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Do you build links?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Link building is an integral part of the SEO service. We take care of that part as well in our specialized SEO services.
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemButton>
                                                Do you keep it confidential?
                                            </AccordionItemButton>
                                            <AccordionItemPanel>
                                                Yes. We sign Non-Disclosure Agreements to keep the data and project details confidential. We keep your privacy as one of our top priorities.
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

export default SEO;