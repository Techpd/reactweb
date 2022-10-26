
import React, { Component } from 'react';
import FormPopup from '../container/FormPopup';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';
import { HashLink as Link } from 'react-router-hash-link';


import { CaseStudies } from '../json/CaseStudies';

class WorkSec extends Component {

    constructor(props) {
        super(props)
        this.state = {
            workJson: []
        }
    }

    componentDidMount() {
        CaseStudies.getCase().then((work, err) => {
            if (!err) {
                this.setState({
                    workJson: work,
                });
            }
        });
    }

    render() {
        const { workJson } = this.state;
        const workSlide = {
            items: 5,
            responsive: {
                1200: { items: 5, },
                992: { items: 4, },
                768: { items: 3 },
                480: { items: 2 },
                320: { items: 1.6, }
            },
            nav: true,
            loop: true,
            center: true,
            autoplay: true
        };

        return (
            <div className="work-sec">
                <h3>Case Studies & Stories</h3>
                {workJson && workJson.map(workJsons => {
                    return (
                        <>
                            {workJsons.name === 'Untitled' ? <Link to="#"><p dangerouslySetInnerHTML={{ __html: workJsons.content }}></p></Link> : null}
                        </>
                    );
                })}

                {workJson.length && (
                    <OwlCarousel loop options={workSlide}>
                        {workJson.map(workJsons => {
                            return (
                                workJsons.name === 'Untitled' ? null :
                                    <div key={workJsons.id} className="work-box" >
                                        <Link to={`/case-study-description/${workJsons.slug}`}>
                                            <img alt="img" width="100%" src={workJsons.img} />
                                            <h6>{workJsons.corporate}</h6>
                                            <h4>{workJsons.name.substr(0, 32) + '...'}</h4>
                                            <p dangerouslySetInnerHTML={{ __html: workJsons.content.substr(0, 128) + '...' }}></p>
                                        </Link>
                                    </div>
                            );
                        })}
                    </OwlCarousel>
                )
                }
                <a class="view-btn" href="/case-Studies">View All Case Studies</a> <FormPopup />
            </div >

        );
    }
}

export default WorkSec;