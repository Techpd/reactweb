import React, { Component } from 'react'

export default class Jobform extends Component {
    render() {
        return (
            <div className="jobform">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3"></div>
                        <div className="col-lg-6">
                            <div className="form">
                                <button className="button modal-close">
                                    <font>
                                        X
                                    </font>
                                </button>
                                <header className="modal-header">
                                    <h1 className="title h3">
                                        <font>
                                            <font>
                                                You are applying for Senior Symfony PHP Developer
                                            </font>
                                        </font>
                                    </h1>
                                </header>
                                <div role="form" lang="en-US" dir="ltr">
                                    <div className="screen-reader-response">
                                        <hr></hr>
                                    </div>
                                </div>
                                <label>Required:</label>
                                <div type="form">
                                    <input></input>
                                    <input></input>
                                    <input></input>
                                    <label for="enter"></label>
                                    <input type="file" name="enter"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
