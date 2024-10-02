import { Button, Drawer } from "antd";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import { MenuOutlined } from "@ant-design/icons";

import "./navbar.css";

import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../../assets/Subtract.png";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const showMenuDrawer = () => {
    setVisible(!visible);
  };

  return (
    <div className="navbar lg:px-24 px-6">
      <div className=" py-2 ">
        <div className="flex justify-evenly">
          <div className="flex items-center mr-auto">
            <div>
              <Button
                className="menuButton"
                type="text"
                onClick={showMenuDrawer}
              >
                <MenuOutlined />
              </Button>
            </div>
            <div className="">
              <img className="w-12" src={logo} alt="" />
            </div>
          </div>

          <div className="leftMenu">
            <LeftMenu mode={"horizontal"} />
          </div>
          {/* right */}
          <div className="ml-auto flex items-center gap-5">
            {/* {userId ? (
              <Button >
                <LogoutOutlined className="" />
              </Button> */}

            <Link to="/login" className=" lg:block hidden">
              <Button className="bg-[#3B52CF] text-white font-bold">
                Login
              </Button>
            </Link>
          </div>

          <div>
            <Drawer
              title={<img src={logo} alt="" />}
              placement="left"
              closable={true}
              onClose={showMenuDrawer}
              open={visible}
              style={{ zIndex: 9999 }}
            >
              <LeftMenu mode={"inline"} />
              <RightMenu mode={"inline"} />
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
