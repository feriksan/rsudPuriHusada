import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "../assets/Navbar.css";
import logo from "./../assets/react.svg";
const NavBar = ({ menu }) => {
    const [visible, setVisible] = useState(false);
    return (
        <nav className="navbar">
            <Button
                className="menu"
                type="primary"
                icon={<MenuOutlined />}
                onClick={() => setVisible(true)}
            />
            <Drawer
                title="Topics"
                placement="left"
                onClick={() => setVisible(false)}
                onClose={() => setVisible(false)}
                open={visible}
            >
                {menu}
            </Drawer>
            <a href="/"><img src={logo} className="logo" alt="logo" /></a>
        </nav>
    );
};
export default NavBar;