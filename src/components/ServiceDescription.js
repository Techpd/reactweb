
import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import FormPopup from '../container/FormPopup';
import FeatureSec from '../container/FeatureSec';
import EasySec from '../container/EasySec';
import WebSec from '../container/WebSec';
import ReviewSec from '../container/ReviewSec';
import EuquireSec from '../container/EuquireSec';
import AwardSec from '../container/AwardSec';

import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';
import { HashLink as Link } from 'react-router-hash-link';
import serBanner from '../images/ser-banner.jpg';
import servMob from '../images/serv-mob.jpg';
import arrow4 from '../images/arrow4.png';
import serDesc from '../images/ser-desc.png';
import serDesc1 from '../images/ser-desc1.png';
import serDesc2 from '../images/ser-desc2.png';
import serDesc3 from '../images/ser-desc3.png';
import serDesc4 from '../images/ser-desc4.png';
import serDesc5 from '../images/ser-desc5.png';
import servImg from '../images/service-img.png';
import stack from '../images/stack-icon.png';
import serDesc6 from '../images/ser-desc6.png';
import serDesc7 from '../images/ser-desc7.png';
import serDesc8 from '../images/ser-desc8.png';
import serDesc9 from '../images/ser-desc9.png';
import serDesc10 from '../images/ser-desc10.png';
import partIcon from '../images/partner-icon.png';
import partIcon1 from '../images/partner-icon1.png';
import partIcon2 from '../images/partner-icon2.png';
import partIcon3 from '../images/partner-icon3.png';

import { FaFacebook, FaLinkedin, FaTwitter, FaLink, FaCode } from 'react-icons/fa';

class ServiceDescription extends Component {
	render() {
		const servSlide = {
			items: 1,
			responsive: {
				320: { items: 1, }
			},
			loop: true
		};

		const stackSlide = {
			items: 3,
			responsive: {
				1200: { items: 3, },
				768: { items: 3 },
				480: { items: 2 },
				320: { items: 1, }
			},
			loop: true
		};

		const culture = {
			items: 1,
			responsive: {
				480: { items: 2 },
				320: { items: 1, }
			},
			loop: true,
			autoplay: true
		};

		return (
			<>
				<Header headerClass={'serv-head'} />

				<div className="about-banner">
					<div className="about-box">
						<div className="container">
							<div className="row">
								<div className="col-lg-5 col-md-7" >
									<h4><img alt="img" src={arrow4} /> SERVICES</h4>
									<h1>Hire PHP Developers</h1>
									<p>Hire Developers on a full-time, hourly, or fixed cost project basis and manage them as your extended team.</p>
								</div>

								<div className="col-lg-7 col-md-5" ><Link to="#"><FaFacebook /></Link>  <Link to="#"><FaLinkedin /></Link>  <Link to="#"><FaTwitter /></Link>  <Link to="#"><FaLink /></Link> </div>
							</div>
						</div>
					</div>
					<img alt="img" className="abt-img" width="100%" src={serBanner} />
					<img alt="img" className="abt-mob" width="100%" src={servMob} />
				</div>

				<FeatureSec />

				<div className="culture-sec web-sec">
					<h3>Why Choose PHP?</h3>
					<div className="container">
						<div className="row">
							<div className="col-lg-1"></div>
							<div className="col-lg-10 col-md-12" >
								<OwlCarousel options={culture}>
									<div className="cult-box">
										<div class="tech-dot"></div>
										<img alt="img" src={serDesc} />
										<p><span>Opensource</span> This is why most agencies prefer to work with PHP. Its cost-free with no license fee or third-party charges making it a better choice for most business owners.</p>
									</div>

									<div className="cult-box">
										<div class="tech-dot"></div>
										<img alt="img" src={serDesc5} />
										<p><span>Opensource</span> This is why most agencies prefer to work with PHP. Its cost-free with no license fee or third-party charges making it a better choice for most business owners.</p>
									</div>

									<div className="cult-box">
										<div class="tech-dot"></div>
										<img alt="img" src={serDesc4} />
										<p><span>Powers 80% of the Web</span> As of August 2019, PHP was used as the server-side programming language on 79.1% of websites.</p>
									</div>

									<div className="cult-box">
										<div class="tech-dot"></div>
										<img alt="img" src={serDesc3} />
										<p><span>Cross-Platform</span> PHP’s cross-platform integration is excellent as it can work on different platforms such as Linux, UNIX, Solaris, and Windows.</p>
									</div>

									<div className="cult-box">
										<div class="tech-dot"></div>
										<img alt="img" src={serDesc2} />
										<p><span>Scalable</span> PHP can be deployed to scale horizontally to accommodate additional users and traffic without any decline performance.</p>
									</div>

									<div className="cult-box">
										<div class="tech-dot"></div>
										<img alt="img" src={serDesc1} />
										<p><span>Rapid Development</span> PHP offers several frameworks for Rapid Application Development including PRADO, CakePHP, Symfony, CodeIgniter, Laravel, Yii Framework, Phalcon, and Zend Framework.</p>
									</div>
								</OwlCarousel>

								<div className="row">
									<div className="col-lg-4 col-md-4">
										<img alt="img" src={serDesc} />
										<p><span>Opensource</span> This is why most agencies prefer to work with PHP. Its cost-free with no license fee or third-party charges making it a better choice for most business owners.</p>
									</div>

									<div className="col-lg-4 col-md-4">
										<img alt="img" src={serDesc5} />
										<p><span>Powers 80% of the Web</span> As of August 2019, PHP was used as the server-side programming language on 79.1% of websites.</p>
									</div>

									<div className="col-lg-4 col-md-4">
										<img alt="img" src={serDesc4} />
										<p><span>Built for the Web</span> PHP is fundamentally an Internet-aware system with built-in modules for accessing FTP servers and many database servers, including PostgreSQL, MySQL, Microsoft SQL Server, LDAP servers, and others.</p>
									</div>

									<div className="col-lg-4 col-md-4">
										<img alt="img" src={serDesc3} />
										<p><span>Cross-Platform</span> PHP’s cross-platform integration is excellent as it can work on different platforms such as Linux, UNIX, Solaris, and Windows.</p>
									</div>

									<div className="col-lg-4 col-md-4">
										<img alt="img" src={serDesc2} />
										<p><span>Scalable</span> PHP can be deployed to scale horizontally to accommodate additional users and traffic without any decline performance.</p>
									</div>

									<div className="col-lg-4 col-md-4">
										<img alt="img" src={serDesc1} />
										<p><span>Rapid Development</span> PHP offers several frameworks for Rapid Application Development including PRADO, CakePHP, Symfony, CodeIgniter, Laravel, Yii Framework, Phalcon, and Zend Framework.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="serv-sec serv-des" >
					<div className="container">
						<div className="row">
							<div className="col-lg-4 col-md-6">
								<h3>PHP Services</h3>
								<p>We offer our diverse client-base leading PHP development services including:</p>
								<em><Link to="#">Schedule an Appointment</Link> </em>
								<em><Link to="#">Read Case Study</Link> </em>

								<OwlCarousel options={servSlide}>
									<div className="serv-txt">
										<h4><span><FaCode /></span> CMS based Websites</h4>
										<p>Our developers have experience building websites for almost every industry and virtually every platform, including WordPress, Drupal, and Joomla.</p>
										<Link to="#">Learn more about CMS based Websites</Link>
									</div>

									<div className="serv-txt">
										<h4><span><FaCode /></span> Front-end Development</h4>
										<p>We work with modern frameworks like React.js, Angular, Vue.js, Nuxt, Next, and Gatsby to create next-generation user experiences that integrate and interact seamlessly with your database and APIs.</p>
										<Link to="#">Learn more about CMS based Websites</Link>
									</div>

									<div className="serv-txt">
										<h4><span><FaCode /></span> Back-end Development</h4>
										<p>Leverage our expertise with Cloud, DevOps, PHP, Node.js, Python, .NET, Java, and RoR to build custom, secure and reliable backends and APIs for web or mobile apps across multiple domains.</p>
										<Link to="#">Learn more about CMS based Websites</Link>
									</div>

									<div className="serv-txt">
										<h4><span><FaCode /></span> ECommerce Applications</h4>
										<p>If you have a store or need a new one, our web application development services can surely help you. We can create a store for you from scratch or leverage popular platforms such as WooCommerce, Shopify, or Magento.</p>
										<Link to="#">Learn more about CMS based Websites</Link>
									</div>

									<div className="serv-txt">
										<h4><span><FaCode /></span> Web Applications</h4>
										<p>As a web application development company, we have built all sorts of web applications, from online forms and workflows to whole management systems. We work on projects both big and small.</p>
										<Link to="#">Learn more about CMS based Websites</Link>
									</div>

									<div className="serv-txt">
										<h4><span><FaCode /></span> Business Automation</h4>
										<p>Do you have a manual process that you need to automate? Our web application development team can develop a customized, secure, and scalable system as per your business needs.</p>
										<Link to="#">Learn more about CMS based Websites</Link>
									</div>

									<div className="serv-txt">
										<h4><span><FaCode /></span> API Development and Documentation</h4>
										<p>We can help you if you need to build or consume an API. Our teams have worked with all sort of APIs, including Voice, Video, Payment, Cloud, Accounting, etc</p>
										<Link to="#">Learn more about CMS based Websites</Link>
									</div>

									<div className="serv-txt">
										<h4><span><FaCode /></span> Software Development</h4>
										<p>Our engineering team has a lot of experience developing complex web-based business systems with multiple users and roles and that connect with CRM, Accounting, Inventory, and Other Systems.</p>
										<Link to="#">Learn more about CMS based Websites</Link>
									</div>

									<div className="serv-txt">
										<h4><span><FaCode /></span> Dedicated Web Developer</h4>
										<p>Hiring dedicated Web developers remotely can help your business scale faster. You can hire dedicated Web developers 40h/week at a fixed monthly rate.</p>
										<Link to="#">Learn more about CMS based Websites</Link>
									</div>

									<div className="serv-txt">
										<h4><span><FaCode /></span> Integrations and Extensions</h4>
										<p>Extend the power of our CRM platform. With more than 875+ integrations and the ability to create custom apps, you can customize HubSpot to fit your business.</p>
										<Link to="#">Learn more about CMS based Websites</Link>
									</div>
								</OwlCarousel>
							</div>

							<div className="col-lg-4 col-md-6">
								<div className="serv-txt">
									<h4><span><FaCode /></span> CMS based Websites</h4>
									<p>Our developers have experience building websites for almost every industry and virtually every platform, including WordPress, Drupal, and Joomla.</p>
									<Link to="#">Learn more about CMS based Websites</Link>
								</div>
							</div>

							<div className="col-lg-4 col-md-6">
								<div className="serv-txt">
									<h4><span><FaCode /></span> Front-end Development</h4>
									<p>We work with modern frameworks like React.js, Angular, Vue.js, Nuxt, Next, and Gatsby to create next-generation user experiences that integrate and interact seamlessly with your database and APIs.</p>
									<Link to="#">Learn more about CMS based Websites</Link>
								</div>
							</div>

							<div className="col-lg-4 col-md-6">
								<div className="serv-txt">
									<h4><span><FaCode /></span> Back-end Development</h4>
									<p>Leverage our expertise with Cloud, DevOps, PHP, Node.js, Python, .NET, Java, and RoR to build custom, secure and reliable backends and APIs for web or mobile apps across multiple domains.</p>
									<Link to="#">Learn more about CMS based Websites</Link>
								</div>
							</div>

							<div className="col-lg-4 col-md-6">
								<div className="serv-txt">
									<h4><span><FaCode /></span> ECommerce Applications</h4>
									<p>If you have a store or need a new one, our web application development services can surely help you. We can create a store for you from scratch or leverage popular platforms such as WooCommerce, Shopify, or Magento.</p>
									<Link to="#">Learn more about CMS based Websites</Link>
								</div>
							</div>

							<div className="col-lg-4 col-md-6">
								<div className="serv-txt">
									<h4><span><FaCode /></span> Web Applications</h4>
									<p>As a web application development company, we have built all sorts of web applications, from online forms and workflows to whole management systems. We work on projects both big and small.</p>
									<Link to="#">Learn more about CMS based Websites</Link>
								</div>
							</div>

							<div className="col-lg-4 col-md-6">
								<div className="serv-txt">
									<h4><span><FaCode /></span> Business Automation</h4>
									<p>Do you have a manual process that you need to automate? Our web application development team can develop a customized, secure, and scalable system as per your business needs.</p>
									<Link to="#">Learn more about CMS based Websites</Link>
								</div>
							</div>

							<div className="col-lg-4 col-md-6">
								<div className="serv-txt">
									<h4><span><FaCode /></span> API Development and Documentation</h4>
									<p>We can help you if you need to build or consume an API. Our teams have worked with all sort of APIs, including Voice, Video, Payment, Cloud, Accounting, etc</p>
									<Link to="#">Learn more about CMS based Websites</Link>
								</div>
							</div>

							<div className="col-lg-4 col-md-6">
								<div className="serv-txt">
									<h4><span><FaCode /></span> Software Development</h4>
									<p>Our engineering team has a lot of experience developing complex web-based business systems with multiple users and roles and that connect with CRM, Accounting, Inventory, and Other Systems.</p>
									<Link to="#">Learn more about CMS based Websites</Link>
								</div>
							</div>

							<div className="col-lg-4 col-md-6">
								<div className="serv-txt">
									<h4><span><FaCode /></span> Dedicated Web Developer</h4>
									<p>Hiring dedicated Web developers remotely can help your business scale faster. You can hire dedicated Web developers 40h/week at a fixed monthly rate.</p>
									<Link to="#">Learn more about CMS based Websites</Link>
								</div>
							</div>

							<div className="col-lg-8 col-md-12">
								<div className="serv-txt">
									<div className="row">
										<div className="col-lg-6 col-md-6">
											<h4><span><FaCode /></span> Integrations and Extensions</h4>
											<p>Extend the power of our CRM platform. With more than 875+ integrations and the ability to create custom apps, you can customize HubSpot to fit your business.</p>
											<Link to="#">Learn more about CMS based Websites</Link>
										</div>
										<div className="col-lg-6 col-md-6"><img alt="img" src={servImg} /></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<FormPopup />
					<h5><Link to={'#EuquireSec'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Or, Use this form to share your requirements.<span>Get guaranteed response within 8 Hrs.</span></Link></h5>
				</div>

				<div className="stack-sec" >
					<h3>We Work With Several PHP Frameworks</h3>
					<div className="container">
						<div className="row">
							<div className="col-lg-1"></div>
							<div className="col-lg-10 col-md-12">
								<OwlCarousel options={stackSlide}>
									<div>
										<div className="team-box">Laravel <img alt="img" src={stack} /></div>
										<div className="team-box">VueJS <img alt="img" src={serDesc8} /></div>
									</div>

									<div>
										<div className="team-box">DotNet <img alt="img" src={serDesc6} /></div>
										<div className="team-box">WordPress <img alt="img" src={serDesc9} /></div>
									</div>

									<div>
										<div className="team-box">Python <img alt="img" src={serDesc7} /></div>
										<div className="team-box">Magento <img alt="img" src={serDesc10} /></div>
									</div>
								</OwlCarousel>
							</div>
						</div>
					</div>
					<FormPopup />
					<h5><Link to={'#EuquireSec'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Or, Use this form to share your requirements.<span>Get guaranteed response within 8 Hrs.</span></Link></h5>
				</div>

				<div className="culture-sec web-sec partner-sec">
					<h3>Partner With iQuinceSOFT</h3>
					<div className="container">
						<div className="row">
							<div className="col-lg-12 col-md-12">
								<OwlCarousel options={culture}>
									<div className="cult-box">
										<div class="tech-dot"></div>
										<img alt="img" src={partIcon} />
										<p><span>Startups</span> We are a one-stop shop for your project, helping you at every stage of the entrepreneurial adventure - from crafting your idea, through design and development, up to product launch and scaling your business.</p>
									</div>

									<div className="cult-box">
										<div class="tech-dot"></div>
										<img alt="img" src={partIcon1} />
										<p><span>Small Businesses</span> Small and Mid-Sized businesses need top development skills for scaling their products. We set up dedicated teams that handle new features, maintenance, and scaling for you.</p>
									</div>

									<div className="cult-box">
										<div class="tech-dot"></div>
										<img alt="img" src={partIcon2} />
										<p><span>Enterprise</span> We help enterprise clients achieve better results, automate processes, and cut costs with solutions that bring actionable business insight and pave the way to scaling any business.</p>
									</div>

									<div className="cult-box">
										<div class="tech-dot"></div>
										<img alt="img" src={partIcon3} />
										<p><span>Software Companies</span> We know how difficult it is to source talent. We provide developer teams to support in-house resources or create interdisciplinary, self-reliant tech units to address your needs.</p>
									</div>
								</OwlCarousel>

								<div className="row">
									<div className="col-lg-3 col-md-6" >
										<div className="partner-box">
											<img alt="img" src={partIcon} />
											<p><span>Startups</span> We are a one-stop shop for your project, helping you at every stage of the entrepreneurial adventure - from crafting your idea, through design and development, up to product launch and scaling your business.</p>
										</div>
									</div>

									<div className="col-lg-3 col-md-6" >
										<div className="partner-box">
											<img alt="img" src={partIcon1} />
											<p><span>Small Businesses</span> Small and Mid-Sized businesses need top development skills for scaling their products. We set up dedicated teams that handle new features, maintenance, and scaling for you.</p>
										</div>
									</div>

									<div className="col-lg-3 col-md-6" >
										<div className="partner-box">
											<img alt="img" src={partIcon2} />
											<p><span>Enterprise</span> We help enterprise clients achieve better results, automate processes, and cut costs with solutions that bring actionable business insight and pave the way to scaling any business.</p>
										</div>
									</div>

									<div className="col-lg-3 col-md-6" >
										<div className="partner-box">
											<img alt="img" src={partIcon3} />
											<p><span>Software Companies</span> We know how difficult it is to source talent. We provide developer teams to support in-house resources or create interdisciplinary, self-reliant tech units to address your needs.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<FormPopup />
				</div>

				<EasySec />

				<WebSec />

				<ReviewSec />

				<EuquireSec />

				<AwardSec />

				<Footer />
			</>
		);
	}
}

export default ServiceDescription;