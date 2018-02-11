import React from "react";
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {PageHeader, Image, Col} from "react-bootstrap";
import Map from "../Tabs/Map";
import Environment from "../Tabs/Environment";
import Upload from "../Tabs/Upload";
import Biology from "../Tabs/Biology";

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
                    <Image style={{height: '80px', width: "300px"}}
                           src="https://i.imgur.com/iptGdrV.png" thumbnail/>
                </PageHeader>

                <Tabs>
                    <TabList>
                        <Tab>Map</Tab>
                        <Tab>Recent Data</Tab>
                        <Tab>Environment</Tab>
                    </TabList>


                    <TabPanel>
                        <Map/>
                    </TabPanel>
                    <TabPanel>
                        <Biology/>
                    </TabPanel>
                    <TabPanel>
                        <Environment/>
                    </TabPanel>


                </Tabs>
            </div>
        );
    }


}