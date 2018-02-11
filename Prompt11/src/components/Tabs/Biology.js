import React from "react";
import Button from 'react-bootstrap/lib/Button';
import {Form, FormGroup, ControlLabel, FormControl, Grid, Row, Col, Image} from 'react-bootstrap'


export default class Environment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: null,
            files: []
        };
        this.encodeImageFileAsURL = this.encodeImageFileAsURL.bind(this);

    }

    encodeImageFileAsURL(element) {
        console.log(element);
        const file = element.target.files[0];
        const reader = new FileReader();
        reader.onloadend = function () {
            console.log('RESULT', reader.result);
        };
        reader.readAsDataURL(file);
    }


    render() {
        return (
            <div className="container-fluid">
                <ControlLabel>Add Fishkill Information</ControlLabel>

                <div className="row">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Date</th>
                            <th scope="col">Location</th>
                            <th scope="col">Bass</th>
                            <th scope="col">Scope</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>02/10/2018</td>
                            <td>Lake Carp</td>
                            <td>Lake Michigan</td>
                            <td>10-50</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>02/07/2018</td>
                            <td>Blue Gill</td>
                            <td>Huron River</td>
                            <td>10-50</td>
                        </tr>

                        </tbody>
                    </table>
                </div>

                <ControlLabel>Add Fishkill Information</ControlLabel>
                <FormControl
                    type="Species"
                    value={this.state.value}
                    placeholder="Enter fishkill species"
                    onChange={this.handleChange}
                />
                <FormGroup controlId="formControlsSelect">

                    <ControlLabel>Select Scope</ControlLabel>
                    <FormControl componentClass="select" placeholder="select">
                        <option value="0-10">0-10</option>
                        <option value="11-50">11-50</option>
                        <option value="51-100">0-10</option>
                    </FormControl>
                    <Button bsStyle="info">Submit</Button>

                </FormGroup>


                <ControlLabel>Submitted Photos</ControlLabel>

                <Grid>
                    <Row>

                        <Col xs={6} md={4}>
                            <Image src="http://dfw.state.or.us/news/images/2014/061214_wallowa_tagged_rainbow.jpg"
                                   thumbnail/>
                        </Col>
                        <Col xs={6} md={4}>
                            <Image
                                src="http://images.newindianexpress.com/uploads/user/imagelibrary/2017/5/27/original/alien_fishes_telangana_EPS.JPG"
                                thumbnail/>
                        </Col>
                    </Row>
                </Grid>

                <FormGroup id={"inputForm"}>
                    <ControlLabel>File</ControlLabel>
                    <FormControl type={"file"} onChange={this.encodeImageFileAsURL}/>
                </FormGroup>

            </div>
        );
    }
}