import Layout from "@/components/Layout"
import SeoHead from "@/components/SeoHead"
import Media from "@/shared/Media"
import Header from "@/components/Header"
import UpVsDown from "./UpVsDown"
import CTA from "./CTA"
import Logos from "./Logos"
import Footer from "./Footer"

const LandingPage = () => (
  <Layout type="landing">
    <SeoHead />
    <div className="w-screen h-screen relative overflow-x-hidden">
      <UpVsDown />
      <div
        className="sm:w-full md:w-[725px] flex flex-col justify-start items-start p-[12px_12px_0px_12px] md:p-[40px_50px_0px_40px]
        md:backdrop-blur-[2px] relative z-[3]"
      >
        <Header />
        <Media
          link="/images/Landing/a24a52a195ebd0b68de6.svg"
          blurLink="/images/Landing/a24a52a195ebd0b68de6.svg"
          containerClasses="w-[80px] md:w-[186px] aspect-[186/38] mt-[1vh] md:mt-[45px]"
        />
        <p className="font-barlow_bold text-white text-[40px] md:text-[114px] leading-[100%] py-[1vh]">
          Up or down?
        </p>
        <p className="font-barlow text-white_1 text-[16px] md:text-[40px]">
          Web3 pool trading game
        </p>
        <CTA />
        <p className="font-barlow_bold text-green text-[13px] md:text-[22px] pb-[1vh] md:pb-10">
          * Выигрыши переводятся прямо на ваш цифровой кошелек
        </p>
        <Logos />
        <Footer />
      </div>
    </div>
  </Layout>
)

export default LandingPage
