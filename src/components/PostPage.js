
import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { PostCate } from '../json/PostCate';
import blog_img from '../images/cont-img1.jpg'
import arrow1 from '../images/arrow1.png';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';


class PostPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            PostPageJson: [],
            Loading: true,
            url: this.props.match.params.post
        }
    }
    componentDidMount() {
        PostCate.getWoocommerceDetails(this.state.url).then((data, err) => {
            if (!err) {
                this.setState({
                    PostPageJson: data,
                    Loading: false,
                });
            }
        });
    }
    render() {
        const { PostPageJson } = this.state;
        return (
            <>
                <Header headerClass={'job-head'} />
                {PostPageJson && PostPageJson.map(PostPageJsonS => {
                    return (
                        <div className="Post-sec">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-1"></div>
                                    <div className="col-lg-7 col-md-7">
                                        <h3><img alt="img" src={arrow1} width="24px" /><a href="/blog">Back to all the blogposts</a></h3>
                                        <h4><Moment format="D MMM YYYY" withTitle>
                                            {PostPageJsonS.date}
                                        </Moment></h4>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-2 col-md-1"></div>
                                    <div className="col-lg-7 col-md-10">
                                        <div className="Post-sec-part">
                                            <h3 className="post-sec-part-pera"><Link to="/blog">Blog</Link></h3>
                                            <h1>{PostPageJsonS.name}</h1>
                                            <img alt="img" width="100%" src={PostPageJsonS.img} />
                                        </div>
                                    </div>
                                    <div className="col-lg-2 author-section">
                                        <h5><img alt="img" src={PostPageJsonS.author_profile} /> <span><strong>{PostPageJsonS.author}</strong> {PostPageJsonS.description}</span></h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-1"></div>
                                    <div className="col-lg-8 col-md-12 post-sec-image">
                                        <p dangerouslySetInnerHTML={{ __html: PostPageJsonS.content }}></p>
                                    </div>
                                </div>
                            </div>
                        </div >
                    );
                })
                }
                <Footer />
            </>
        );
    }
}

export default PostPage;