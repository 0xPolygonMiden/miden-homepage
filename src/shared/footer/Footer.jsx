import React from "react";
import LogoWhite from "../../assets/Image/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

function FooterTexts({ text }) {
  return (
    <h4 className="text-primaryWhite text-[18px] xlg:text-[20px] font-medium leading-9 capitalize">
      {text}
    </h4>
  );
}

export default function Footer() {
  const QuickLinks = [
    {
      pageName: "GitHub",
      to: "https://github.com/0xPolygonMiden",
    },
    {
      pageName: "Explorer",
      to: "https://testnet.midenscan.com/",
    },
  ];

  const Resources = [
    {
      pageName: "Docs",
      to: "https://docs.polygon.technology/miden/",
    },
    {
      pageName: "Videos",
      to: "https://www.youtube.com/playlist?list=PLslsfan1R_z20bEgUU_ZyY64AHx5C6vgg",
    },
  ];


  const Legal = [
    {
      pageName: "Privacy Policy",
      to: "#",
    },
    {
      pageName: "Terms of Service",
      to: "#",
    },
  ];



  return (
<section className="bg-primaryBlack pt-[56px]">
  <div className="container mx-auto">
    <div>
      <div className='pb-[40px] flex flex-col gap-5 xlg:gap-0 xlg:flex-row justify-between relative after:absolute after:content-[""] after:w-full after:h-[1px] after:bg-primaryWhite after:left-0 after:bottom-0'>
        {/* Left Side Content */}
        <div className="flex flex-col gap-y-8 mb-8 lg:mb-0">
          <div className="w-[100px] h-[58px] lg:w-[126px] lg:h-[73px]">
            <img
              className="w-full h-full object-contain"
              src={LogoWhite}
              alt="Logo"
            />
          </div>
          <h4 className="text-primaryWhite text-[16px] max-w-[365px]">
            Privacy scales better
          </h4>
        </div>

        {/* Right Side Links */}
        <div className="flex flex-col flex-wrap lg:flex-row gap-x-0 lg:gap-x-[174px] gap-y-10 xl:gap-y-0">
          {/* Quick Links */}
          <div className="flex flex-col gap-y-8">
            <FooterTexts text="Quick Links" />
            <ul className="flex flex-col gap-y-[15px]">
              {QuickLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    className="text-primaryWhite text-[16px] font-medium leading-[26px]"
                    to={item.to}
                  >
                    {item.pageName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-y-8">
            <FooterTexts text="Resources" />
            <ul className="flex flex-col gap-y-[15px]">
              {Resources.map((item, index) => (
                <li key={index}>
                  <Link
                    className="text-primaryWhite text-[16px] font-medium leading-[26px]"
                    to={item.to}
                  >
                    {item.pageName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-y-8">
            <FooterTexts text="Legal" />
            <ul className="flex flex-col gap-y-[15px]">
              {Legal.map((item, index) => (
                <li key={index}>
                  <Link
                    className="text-primaryWhite text-[16px] font-medium leading-[26px]"
                    to={item.to}
                  >
                    {item.pageName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="py-5 flex justify-center items-center">
        <h5 className="text-primaryWhite text-[16px] md:text-[18px] leading-[30px] text-center">
          © 2024 Miden. All rights reserved.
        </h5>
      </div>
    </div>
  </div>
</section>
  );
}
