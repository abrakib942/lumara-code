import { Button } from "antd";
import { Link } from "react-router-dom";
import bannerImg from "../../assets/bannerImg.png";
import clientSection from "../../assets/clientSection.png";

const Banner = () => {
  return (
    <div>
      <div className="flex items-center text-[#292E47] lg:px-24">
        <div className="">
          <div className="text-[60px] font-bold">
            Empower Your Business With Stunning Design!
          </div>
          <p>
            Lumaracode is a digital design and development studio. We design and
            develop astonishing websites and mobile apps.
          </p>
          <div className="flex gap-5 mt-10">
            <Button className="bg-[#3B52CF]  text-white font-semibold">
              Get in touch
            </Button>
            <Link to="" className="text-[#6B708D] no-underline">
              see our work
            </Link>
          </div>
        </div>
        <div className="">
          <img className="w-[570px]" src={bannerImg} alt="" />
        </div>
      </div>
      <div>
        <img className="w-full" src={clientSection} alt="" />
      </div>
    </div>
  );
};

export default Banner;
