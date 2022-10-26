import React, { Component } from 'react'

export default class Error extends Component {

    render() {
        return (
            <div className="error-sec">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>404</h1>
                            <h2>Not Found</h2>
                            <p>The resounce requested could not be found on this server!</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
