import React from "react";
import {FormGroup, ControlLabel, FormControl} from "react-bootstrap";

export default class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            files: []
        };
        this.encodeImageFileAsURL = this.encodeImageFileAsURL.bind(this);
    }

    encodeImageFileAsURL(element) {
        console.log(element);
        const file = element.target.files[0];
        const reader = new FileReader();
        reader.onloadend = function() {
            console.log('RESULT', reader.result);
        };
        reader.readAsDataURL(file);
    }

    render() {
        return (

            <div className="container-fluid">

                <FormGroup id={"inputForm"}>
                    <ControlLabel>File</ControlLabel>
                    <FormControl type={"file"} onChange={this.encodeImageFileAsURL}/>
                </FormGroup>

            </div>
        );
    }
}