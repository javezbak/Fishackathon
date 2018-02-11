import React from "react";

export default class Environment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: null
        };
    }



    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 tab-center-white ">
                        <div className="col-xs-6">
                            Water Temp (F):
                        </div>
                        <div className="col-xs-6">
                            Wind (mph):
                            direction:
                        </div>
                    </div>
                </div>
            <div className="row ">
                <div className="col-xs-12"> Algae</div>

            </div>

            </div>
        );
    }
}