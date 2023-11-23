// import React from 'react';
import {useState} from "react";
import {Layout} from 'antd';
import './helper/Api.js'
import "./App.css";
import NavBar from "./component/Navbar.jsx";
import SideBar from "./component/Sidebar.jsx";
import TopicMenu from "./component/TopicMenu.jsx";
import InputBpjs from "./view/InputBpjs.jsx";
import Pendaftaran from "./view/Pendaftaran.jsx";

const App = () => {

    const [contentIndex, setContentIndex] = useState(0);
    const [selectedKey, setSelectedKey] = useState("0");

    const topicContent = [
        <InputBpjs/>,
        <Pendaftaran/>,
        "Hello"
    ]

    const topics = [
        "BPJS",
        "Pendaftaran",
        "Third topic"
    ];
    const changeSelectedKey = (event) => {
        const key = event.key;
        setSelectedKey(key);
        setContentIndex(+key);
    };
    const Menu = (
        <TopicMenu
            topics={topics}
            selectedKey={selectedKey}
            changeSelectedKey={changeSelectedKey}
        />
    );

    return (
        <div className="App">
            <NavBar menu={Menu} />
            <Layout>
                <SideBar menu={Menu} />
                <Layout.Content className="content">
                    {topicContent[contentIndex]}
                </Layout.Content>
            </Layout>
        </div>
    );
};
export default App;