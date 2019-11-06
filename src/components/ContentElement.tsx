import React, { Component } from 'react';
import * as ReactDOM from "react-dom";

class ContentElement extends Component {

    constructor(props: any) {
        super(props);

    }

    componentDidMount() {
        // this.customModal.current


    }

    render() {
        return (<div>
            <h1>ContentElement</h1>
        </div>);
    }
}



ReactDOM.render(<ContentElement />, document.getElementById("app"));