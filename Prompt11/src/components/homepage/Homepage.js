import React from "react";
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import Map from "../Tabs/Map";
import Environment from "../Tabs/Environment";

export default class Homepage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">

                <div className="homepage-header">
                    <h1>Fish</h1>
                </div>

                <Tabs>
                    <TabList>
                        <Tab>Map</Tab>
                        <Tab>Upload</Tab>
                        <Tab>Environment</Tab>
                        <Tab>Bio</Tab>
                        <Tab>To</Tab>
                        <Tab>Sleep</Tab>
                        <Tab>And cry</Tab>
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
                    <TabPanel/>
                    <TabPanel/>
                    <TabPanel/>
                </Tabs>
            </div>
        );
    }


}