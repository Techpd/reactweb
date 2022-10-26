
import React, { Component } from 'react';
import './App.css';
import './assets/css/js_composer.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import ServiceDescription from './components/ServiceDescription';
import CaseStudy from './components/CaseStudy';
import CaseStudyDescription from './components/CaseStudyDescription';
import Blog from './components/Blog';
import ContactUs from './components/ContactUs';
import Careers from './components/Careers';
import JobOffer from './components/JobOffer';
import JobDetail from './components/JobDetail';
import PostPage from './components/PostPage';
import WhyIndia from './components/WhyIndia';

import Web_Development from './components/Services/WebDev';
import Mobile_Developement from './components/Services/MobileDev';
import CloudDevelopment from './components/Services/CloudDev';
import ProductDesign from './components/Services/ProductDesign';
import DevOps_Services from './components/Services/DevOpsDev';
import QualityAssurance from './components/Services/QualityAssurance';
import HirePHPDevelopers from './components/Services/PHPDev';
import HireLaravelDevelopers from './components/Services/LaravelDev';
import HireCodeIgniterDevelopers from './components/Services/CodeIgniter';
import HireSymfonyDevelopers from './components/Services/Symfony';
import HireNodeDevelopers from './components/Services/NodeDev';
import HireReactDevelopers from './components/Services/ReactDev';
import HireBootStrapDevelopers from './components/Services/BootStrap';
import HireVueDevelopers from './components/Services/VueDev';
import HireAngularDevelopers from './components/Services/AngularDev';
import HireReactNativeDevelopers from './components/Services/ReactNative';
import HireIosDevelopers from './components/Services/IosDev';
import HireionicDevelopers from './components/Services/IonicDev';
import HireZENDStackDevelopers from './components/Services/ZENDStack';
import HireMERNStackDevelopers from './components/Services/MernStack';
import HireDrupalDevelopers from './components/Services/Drupal';
import HireMagentoDevelopers from './components/Services/Magento';
import HireMeanstackDevelopers from './components/Services/Meanstack';
import HireopencartDevelopers from './components/Services/opencart';
import HireShopifyDevelopers from './components/Services/Shopify';
import HireWixDevelopers from './components/Services/Wix';
import HireWooCommerceDevelopers from './components/Services/WooCommerce';
import HireAndroidDevelopers from './components/Services/AndroidDev';
import HireWordpressDevelopers from './components/Services/WordPress';
import DevOps from './components/Services/DevOpsDev';
import AwardFormsec from './container/AwardFormsec';
import jobCateDetails from './components/JobCateDetails';
import BlogTabs from './components/BlogTabs';
import DigitalMarket from '../src/components/Services/DigiMarket';
import DedicateTeams from '../src/components/Services/DedicatedTeams';
// import Designers from '../src/components/Services/Designers';
import Ecommerce from '../src/components/Services/Ecommerce';
import Jobform from './container/Jobform';
import SEO from './components/Services/SEO';
import Error from './container/Error';
import PPC from './components/Services/PPC';
import SMM from './components/Services/SMM';


class App extends Component {
	render() {
		return (
			<Router >
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/jobform' component={Jobform} />
					<Route exact path='/why-india' component={WhyIndia} />
					<Route exact path='/about-iquincesoft' component={About} />
					<Route exact path='/our-services' component={Service} />
					<Route exact path='/service-Description' component={ServiceDescription} />
					<Route exact path='/case-studies' component={CaseStudy} />
					<Route exact path='/case-study-description' component={CaseStudyDescription} />
					<Route exact path='/blog' component={Blog} />
					<Route exact path='/contact-us' component={ContactUs} />
					<Route exact path='/careers' component={Careers} />
					<Route exact path='/jobOffer' component={JobOffer} />
					<Route exact path='/jobDetail' component={JobDetail} />
					{/* <Route exact path='/PostPage' component={PostPage} /> */}
					<Route exact path='/blog' component={BlogTabs} />
					<Route exact path='/blog/:post' component={PostPage} />
					<Route exact path='/jobOffer/:post' component={jobCateDetails} />
					<Route exact path='/jobDetail/:post' component={JobDetail} />
					<Route exact path='/case-study-description/:post' component={CaseStudyDescription} />


					<Route exact path='/web-development-company' component={Web_Development} />
					<Route exact path='/cloud-development' component={CloudDevelopment} />
					<Route exact path='/devops-consulting' component={DevOps_Services} />
					<Route exact path='/Hire-PHP-Developers' component={HirePHPDevelopers} />
					<Route exact path='/mobile-app-developement' component={Mobile_Developement} />
					<Route exact path='/product-design' component={ProductDesign} />
					<Route exact path='/quality-assurance' component={QualityAssurance} />
					<Route exact path='/hire-laravel-developers' component={HireLaravelDevelopers} />
					<Route exact path='/hire-node-developers' component={HireNodeDevelopers} />
					<Route exact path='/hire-react-developers' component={HireReactDevelopers} />
					<Route exact path='/hire-vue-developers' component={HireVueDevelopers} />
					<Route exact path='/hire-angular-developers' component={HireAngularDevelopers} />
					<Route exact path='/hire-react-native-developers' component={HireReactNativeDevelopers} />
					<Route exact path='/hire-ios-developers' component={HireIosDevelopers} />
					<Route exact path='/hire-ionic-developers' component={HireionicDevelopers} />
					<Route exact path='/hire-zend-stack-developers' component={HireZENDStackDevelopers} />
					<Route exact path='/hire-mern-stack-developers' component={HireMERNStackDevelopers} />
					<Route exact path='/hire-codeigniter-developers' component={HireCodeIgniterDevelopers} />
					<Route exact path='/hire-drupal-developers' component={HireDrupalDevelopers} />
					<Route exact path='/hire-magento-developers' component={HireMagentoDevelopers} />
					<Route exact path='/hire-mean-stack-developers' component={HireMeanstackDevelopers} />
					<Route exact path='/hire-open-cart-developers' component={HireopencartDevelopers} />
					<Route exact path='/hire-shopify-developers' component={HireShopifyDevelopers} />
					<Route exact path='/hire-wix-developers' component={HireWixDevelopers} />
					<Route exact path='/hire-woocommerce-developers' component={HireWooCommerceDevelopers} />
					<Route exact path='/hire-wordpress-developers' component={HireWordpressDevelopers} />
					<Route exact path='/hire-bootStrap-developers' component={HireBootStrapDevelopers} />
					<Route exact path='/hire-symfony-developers' component={HireSymfonyDevelopers} />
					<Route exact path='/hire-android-developers' component={HireAndroidDevelopers} />
					<Route exact path='/digital-marketting' component={DigitalMarket} />
					<Route exact path='/dedicated-development-Teams' component={DedicateTeams} />
					<Route exact path='/ecommerce-developers' component={Ecommerce} />
					{/* <Route exact path='/hire-designers' component={Designers} /> */}
					<Route exact path='/award-Form-sec' component={AwardFormsec} />
					<Route exact path='/seo-company-india' component={SEO} />
					<Route exact path='/smm' component={SMM} />
					<Route exact path='/pay-per-click-company' component={PPC} />
					<Route exact path='/devOps-development' component={DevOps} />
					{/* <Route exact path='*' component={Error} /> */}
				</Switch>
			</Router>


		);
	}
}

export default App;