import React from "react";
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import Map from "../Tabs/Map";
import Environment from "../Tabs/Environment";
import {PageHeader} from "react-bootstrap";

export default class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mapNode: null
        };
    }

    render() {
        return (
            <div className="container-fluid">

                <PageHeader className="text-center">
                    Fishx
                </PageHeader>

                <Tabs>
                    <TabList>
                        <Tab>Map</Tab>
                        <Tab>Upload</Tab>
                        <Tab>Environment</Tab>
                        <Tab>Bio</Tab>
                    </TabList>


                    <TabPanel>
                        <Map/>
                    </TabPanel>

                    <TabPanel>
                        <p>abc</p>
                    </TabPanel>

                    <TabPanel>
                        <Environment/>
                    </TabPanel>

                    <TabPanel/>
                </Tabs>
            </div>
        );
    }


}