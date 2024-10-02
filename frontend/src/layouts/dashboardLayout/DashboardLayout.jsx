/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Button, Input } from "antd";
import Sidebar from "./Sidebar";
import { Outlet, useNavigate } from "react-router-dom";

import { useGetSingleUserQuery } from "../../redux/api/userApi";
import { getUserInfo, removeUserInfo } from "../../utils/authService";
import CustomButton from "../../components/CustomButton";
import { SearchOutlined } from "@ant-design/icons";
import headerIcons from "../../assets/icon_dashboard.png";

const { Content } = Layout;
const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const navigate = useNavigate();

  const { userId } = getUserInfo();

  const { data: userData } = useGetSingleUserQuery(userId);

  const logOut = () => {
    removeUserInfo("accessToken");

    navigate("/login");
  };

  return (
    <Layout className="h-screen bg-[#F2F5F7]">
      <Sidebar collapsed={collapsed} />
      <Layout>
        {/* header */}
        <div
          className="flex  items-center pr-6"
          style={{
            padding: 0,
            background: "#F5F5F5",
            borderBottom: "3px solid white",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <div>
            <Input
              className="w-[600px] mx-12 bg-white rounded-lg"
              addonAfter={<SearchOutlined className="" />}
              placeholder="Search here"
            />
          </div>
          <div className="flex items-center gap-5">
            <img src={headerIcons} alt="" />
            <CustomButton onClick={logOut} className="">
              {" "}
              Log out{" "}
            </CustomButton>
          </div>
        </div>

        {/* content */}
        <Content
          style={{
            // marginTop: "5px",
            padding: 24,
            minHeight: 280,
            background: "#F5F5F5",
            // borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
