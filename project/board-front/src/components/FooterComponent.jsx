import React, { Component } from 'react'

export default class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <footer className="footer">
                    <span className="text-muted">Started 2020</span>
                </footer>
            </div>
        )
    }
}