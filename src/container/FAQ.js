
import React, { Component } from 'react';
import FormPopup from './FormPopup';
import 'react-owl-carousel2/src/owl.carousel.css';
import { serviceapi } from '../json/serviceapi';
import { HashLink as Link } from 'react-router-hash-link';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
class FAQ extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Questionjson: [],
        }
    }
    componentDidMount() {
        serviceapi.getQuestion().then((Question, err) => {
            if (!err) {
                this.setState({
                    QuestionJson: Question,
                });
            }
        });
    }
    render() {
        const { QuestionJson } = this.state;
        return (
            <>
                <div className="frequent-sec">
                    <h3>Frequently Asked Questions</h3>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-md-1"></div>
                            <div className="col-lg-8 col-md-10" >
                                <Accordion allowZeroExpanded preExpanded={['a']}>
                                    {QuestionJson && QuestionJson.map(QuestionJsonS => {
                                        return (
                                            <AccordionItem>
                                                <AccordionItemButton>{QuestionJsonS.name}</AccordionItemButton>
                                                <AccordionItemPanel>
                                                    <p dangerouslySetInnerHTML={{ __html: QuestionJsonS.content }}></p>
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                        );
                                    })}
                                </Accordion>
                            </div>
                        </div>
                    </div>
                    <FormPopup />
                    <h5><Link to={'#EuquireSec'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Or, Use this form to share your requirements.<span>Get guaranteed response within 8 Hrs.</span></Link></h5>
                </div>
            </>
        );

    }
}

export default FAQ;