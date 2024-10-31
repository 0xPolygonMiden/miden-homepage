import { Link, useLocation, useNavigate } from "react-router-dom";
import BgLeft from '../../../assets/Image/bannerLeftBg.png'
import BgRight from '../../../assets/Image/bannerRightBg.png'
import SubTitile from '../../common/SubTitle'
import BnnerHero from '../../../assets/Image/BannerHero.png'



export default function Banner() {
  return (
    <section className='bg-navbarBg py-[120px] lg:py-[100px] relative'>

        <div className="container mx-auto">
            <div className="flex-col gap-5 lg:gap-0 lg:flex-row flex justify-between items-center">

                <div className=' max-w-fit lg:max-w-[720px] relative z-20'>

                    <h1 className='text-primaryBlack text-[28px] md:text-[32px] lg:text-[45px] xl:text-[64px] font-bold xl:leading-[85px] mb-[33px]'>Best Selling ICO Future Of Trading<span className='text-primaryGreen'> Miden</span></h1>

                    <SubTitle texts="Miden pushed execution and state storage to the edge."/>

                    <div className=" mt-7 lg:mt-[67px]">
                        <Link className="py-3 px-[35px] xl:py-4 xl:px-[63px] rounded-[53px] bg-primaryGreen text-primaryBlack" to="https://docs..technology/miden/miden-base/introduction/get-started/prerequisites/" target="_blank">
                            Start Miden
                        </Link>
                    </div>
                </div>

                <div className="w-[auto] h-fit  xl:w-[865px] xl:h-[655px]">
                    <img className="w-full h-full object-cover" src={BnnerHero} alt="not found" />
                </div>
            </div>
        </div>


        {/* bg left */}
        <div className='h-[100%] w-[100%] lg:h-[504px] lg:w-[504px] absolute left-0 bottom-0 '>
            <img className='h-full w-full object-cover ' src={BgLeft} alt="not found" />
        </div>

        {/* bg Right */}
        <div className='h-[350px] w-[350px] lg:h-[504px] lg:w-[504px] absolute right-0 bottom-0 '>
            <img className='h-full w-full object-cover ' src={BgRight} alt="not found" />
        </div>
    </section>
  )
}
