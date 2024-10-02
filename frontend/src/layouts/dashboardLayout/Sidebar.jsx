/* eslint-disable react/prop-types */
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import logo from "../../assets/Foody..png";
import { Link } from "react-router-dom";
import icon1 from "../../assets/Icon1.png";
import icon2 from "../../assets/Icon2.png";
import icon3 from "../../assets/Icon3.png";
import icon4 from "../../assets/Icon4.png";
import icon5 from "../../assets/Icon5.png";
import icon6 from "../../assets/Icon6.png";
import icon11 from "../../assets/Vector.png";

const Sidebar = ({ collapsed }) => {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      collapsedWidth="0"
      width={250}
      style={{
        background: "white",
        paddingLeft: "20px",
      }}
    >
      <img className="w-[60%] my-6 ml-5" src={logo} alt="" />

      <Menu className="text-[18px] text-[#464255]" theme="light" mode="inline">
        <Menu.Item key="1">
          <Link to="/dashboard">
            <img className="mr-5" src={icon11} alt="" />
            Dashbord
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/dashboard">
            {" "}
            <img className="mr-5" src={icon1} alt="" />
            Order List
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/dashboard">
            {" "}
            <img className="mr-5" src={icon2} alt="" />
            Analytics
          </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/dashboard">
            {" "}
            <img className="mr-5" src={icon3} alt="" />
            Foods
          </Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/dashboard">
            {" "}
            <img className="mr-5" src={icon4} alt="" />
            Calendar
          </Link>
        </Menu.Item>
        <Menu.Item key="6">
          <Link to="/dashboard">
            {" "}
            <img className="mr-5" src={icon5} alt="" />
            Chat
          </Link>
        </Menu.Item>
        <Menu.Item key="7">
          <Link to="/dashboard">
            {" "}
            <img className="mr-5" src={icon6} alt="" />
            Wallet
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
