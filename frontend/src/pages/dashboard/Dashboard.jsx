import icon_deliver from "../../assets/icon_Delivered.png";
import icon_order from "../../assets/Icon_Order.png";
import icon_revenue from "../../assets/Icon_Order1.png";
import icon_group from "../../assets/Icon_group.png";
import bottomArrow from "../../assets/bottomArrow.png";
import topArrow from "../../assets/topArrow.png";
import { Card } from "antd";
import { getUserInfo } from "../../utils/authService";
import { useGetSingleUserQuery } from "../../redux/api/userApi";

const Dashboard = () => {
  const { userId } = getUserInfo();

  const { data: userData } = useGetSingleUserQuery(userId);
  return (
    <div className="">
      <div className="px-5">
        <div className="font-semibold text-[32px] text-[#464255]">
          Good Morning!
        </div>
        <div className="text-[#A3A3A3] text-[18px]">
          Hi, {userData?.data?.name}. Welcome back!
        </div>
      </div>
      <div className="flex items-center gap-5 my-12 ">
        <Card className="w-[337px] h-[172px] text-[#464255]">
          <div className="flex justify-center items-center gap-5">
            <img className="w-[85px] h-[85px]" src={icon_group} alt="" />
            <div>
              <div className="text-[46px] font-bold">75</div>
              <div className="text-base">Total Orders</div>
              <div className="text-[12px] flex items-center gap-2">
                <img className="" src={topArrow} alt="" /> 4% (30 days)
              </div>
            </div>
          </div>
        </Card>
        <Card className="w-[337px] h-[172px] text-[#464255]">
          <div className="flex justify-center items-center gap-5">
            <img className="w-[85px] h-[85px]" src={icon_deliver} alt="" />
            <div>
              <div className="text-[46px] font-bold">357</div>
              <div className="text-[14px]">Total Delivered</div>
              <div className="text-[12px] flex items-center gap-2">
                <img className="" src={topArrow} alt="" /> 4% (30 days)
              </div>
            </div>
          </div>
        </Card>
        <Card className="w-[337px] h-[172px] text-[#464255]">
          <div className="flex justify-center items-center gap-3">
            <img className="w-[85px] h-[85px]" src={icon_order} alt="" />
            <div>
              <div className="text-[46px] font-bold">65</div>
              <div className="text-[14px]">Total Cancelled</div>
              <div className="text-[12px] flex items-center gap-1">
                <img className="" src={bottomArrow} alt="" /> 25% (30 days)
              </div>
            </div>
          </div>
        </Card>
        <Card className="w-[337px] h-[172px] text-[#464255]">
          <div className="flex justify-center items-center gap-5">
            <img className="w-[85px] h-[85px]" src={icon_revenue} alt="" />
            <div>
              <div className="text-[46px] font-bold">$128</div>
              <div className="text-[14px]">Total Revenue</div>
              <div className="text-[12px] flex items-center gap-1">
                <img className="" src={bottomArrow} alt="" /> 12% (30 days)
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
