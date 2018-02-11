import React from "react";
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {PageHeader} from "react-bootstrap";
import Map from "../Tabs/Map";
import Environment from "../Tabs/Environment";
import Upload from "../Tabs/Upload";

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
                        <Tab>Environment</Tab>
                        <Tab>Bio</Tab>
                        <Tab>Upload</Tab>
                    </TabList>


                    <TabPanel>
                        <Map/>
                    </TabPanel>

                    <TabPanel>
                        <Environment/>
                    </TabPanel>

                    <TabPanel/>

                    <TabPanel>
                        <Upload/>
                    </TabPanel>

                </Tabs>
            </div>
        );
    }


}