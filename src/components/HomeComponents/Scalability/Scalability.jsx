import React from "react";
import { Link } from "react-router-dom";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function ScalableText({ text }) {
  return (
    <h4 className="text-primaryBlack text-[12px] xs:text-[12px] xs:leading-4 md:leading-[32px] sm:text-[10px] lg:text-[16px] xl:text-[20px] 2xl:text-[26px] font-medium">
      {text}
    </h4>
  );
}

export default function Scalability() {
  useGSAP(() => {
    gsap.from(".circle-holder", {
      scale: 0.5,
      filter: "blur(5px)",
      duration: 2.5,
      opacity: 0,
      ease: "power3.out",
      stagger: 0.5,
    });
  });

  return (
    <section className="py-[150px] h-[70dvh] md: lg:py-[180px] lg:pt-[260px] xl:pt-[100px] xlg:mt-0 xl:h-[122dvh]  2xl:h-[130dvh]  pb-20 bg-navbarBg">
      <div className="container mx-auto">
        <div className=" w-auto xs:w-[320px] sm:w-[450px] lg:w-[600px] xlg:w-[850px] mr-5 lg:mr-14 xl:w-[1215px] relative xl:left-[-3%] 2xl:left-[-9%] mx-auto pb-11">

          <div className="w-full h-full circle-holder">
            <div className=" absolute top-[0%] sm:top-0 lg:top-[-17px] xl:top-0 left-[50%] sm:left-[50%] xl:left-[50%] translate-x-[-50%] w-[160px] lg:w-[220px] xlg:w-[250px] xl:w-[380px] 2xl:w-[500px] h-[160px] lg:h-[220px] xlg:h-[250px] xl:h-[380px] 2xl:h-[500px] flex justify-center rounded-full border-[5px] border-[#42526E]">
              <Link
                className="mt-[10%] sm:mt-[14%] xl:mt-[65px] mr-[0%] sm:mr-[0%] xl:mr-0 text-primaryBlack text-[13px] xl:text-[40px] xl:text-[26px]"
                to="#"
              >
                Scalability
              </Link>
            </div>

            <div className="absolute top-[-31px] sm:top-[0%] xl:top-[50px] right-[-25px] sm:right-[13%] lg:right-[-0.9%] xlg:right-[12.9%] xl:right-[146px] 2xl:right-[85px] text-center max-w-[138px] lg:max-w-[205px] xl:max-w-[310px]">
              <Link to="/scaling">
                <ScalableText text="Transactions are executed only once, most state is off-chain" />
              </Link>
            </div>
          </div>

          <div className="w-full h-full circle-holder">
            <div className="absolute top-[65px] sm:top-[250%] xl:top-[208px] 2xl:top-[238px]  left-[6%] xs:left-[8%] sm:left-[21%] xlg:left-[25%] xl:left-[325px] 2xl:left-[226px] w-[160px] lg:w-[220px] xlg:w-[250px] xl:w-[380px] 2xl:w-[500px]  h-[160px] lg:h-[220px] xlg:h-[250px] xl:h-[380px] 2xl:h-[500px] rounded-full border-[5px] border-[#42526E]"></div>

            <div className="relative w-fit left-[12%] xs:left-[11%] sm:left-[24%] xlg:left-[28%] xl:left-[375px] 2xl:left-[256px] top-[145px] sm:top-[133px] lg:top-[177px] xl:top-[454px] 2xl:top-[517px]">
              <Link className="text-primaryBlack w-fit text-[13px] lg:text-[16px] xl:text-[40px] xl:text-[26px]">
                Privacy
              </Link>
            </div>

            <div className="absolute top-[225px] sm:top-[183px] left-[-10px] xs:left-[] sm:left-[9%] lg:left-[-3%] xlg:left-[7%] xl:left-[110px] 2xl:left-[20px] xl:top-[504px] 2xl:top-[680px] text-center max-w-[110px] sm:max-w-[85px] lg:max-w-[145px] xl:max-w-[250px]">
              <Link to="/privacy">
                <ScalableText text="Only commitments to private data" />
              </Link>
            </div>
          </div>

          <div className="w-full h-full circle-holder">
            <div className="absolute top-[45px] sm:top-[40px] xl:top-[138px] 2xl:top-[165px]  right-[6%] xs:right-[9%] sm:right-[21%] xlg:right-[25%] xl:right-[305px] 2xl:right-[178px] w-[170px]  lg:w-[220px] xlg:w-[250px] xl:w-[380px] 2xl:w-[500px] lg:h-[220px] h-[160px] xlg:h-[250px] xl:h-[380px] 2xl:h-[500px] rounded-full border-[5px] border-[#42526E]"></div>

            <div className="absolute w-fit text-end right-[13%] sm:right-[24%] xlg:right-[28%] xl:right-[356px] 2xl:right-[260px] top-[115px] sm:top-[118px] lg:top-[142px] xl:top-[380px] 2xl:top-[460px]">
              <Link className="text-primaryBlack text-[13px] lg:text-[16px] xl:text-[40px] xl:text-[26px]">
                Safety
              </Link>
            </div>

            <div className="absolute top-[208px]  sm:top-[167px] lg:top-[167px] xl:top-[450px] 2xl:top-[634px] right-[0%] sm:right-[7%] lg:right-[-24px] xlg:right-[6%] xl:right-[86px] 2xl:right-[46px] text-center max-w-[110px] sm:max-w-[60px] lg:max-w-[148px] xl:max-w-[248px]">
              <Link to="/safety">
                <ScalableText text="Rust and in-protocol safe guards" />
              </Link>
            </div>
          </div>

          <div className="w-fit absolute left-[49%] lg:left-[51%] xlg:left-[51%] xl:left-[51%] 2xl:left-[52%] top-[170%] sm:top-[165%] lg:top-[195%] xlg:[215px] xl:top-[310px] 2xl:top-[398px] translate-x-[-51%] ">
            <Link className="text-primaryBlack font-bold text-[13px] xl:text-[36px] 2xl:text-[48px]">
              Miden
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
