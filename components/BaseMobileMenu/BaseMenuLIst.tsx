import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/router"
import PlayToButton from "../PlayToButton"

const BaseMenuList = () => {
  const { pathname } = useRouter()

  const isAboutPage = pathname.includes("/about")
  const isHowToPlayPage = pathname.includes("/howtoplay")
  const isBecomePage = pathname.includes("/become")
  return (
    <div className="w-[100vw] h-screen fixed right-0 top-0 z-[30] bg-[rgba(0,0,0,.5)] flex">
      <motion.div
        className="w-full sm:w-[725px] h-[100vh] bg-black_8 text-[16px] font-radikal_light text-black cursor-pointer overflow-y-auto
          shadow-[0_0_1rem_rgba(0,0,0,.2)]"
        initial={{
          x: "150%",
        }}
        animate={{
          x: "calc(100vw - 100%)",
        }}
        exit={{
          x: "0%",
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <div className="w-full min-h-[100vh] flex flex-col justify-center items-center">
          <div className="w-[100px] h-[5px] bg-gradient_red" />
          <p className="font-barlow_bold text-white text-[60px] md:text-[100px] leading-[98%]">
            Menu
          </p>
          <div
            className="font-barlow text-white text-[20px] md:text-[25px] 
                  flex flex-col justify-center items-center gap-[5px] py-5 md:py-10"
          >
            <button type="button" className="transition duration-[300ms] hover:scale-[1.1]">
              <Link href="/">
                <p>Home Page</p>
              </Link>
            </button>
            <button
              type="button"
              className={`transition duration-[300ms] hover:scale-[1.1] ${
                isAboutPage && "!text-yellow_2"
              }`}
            >
              <Link href="/about">
                <p>About</p>
              </Link>
            </button>

            <button
              type="button"
              className={`transition duration-[300ms] hover:scale-[1.1] ${
                isHowToPlayPage && "!text-yellow_2"
              }`}
            >
              <Link href="/howtoplay">
                <p>How to Play</p>
              </Link>
            </button>

            <button
              type="button"
              className={`transition duration-[300ms] hover:scale-[1.1] ${
                isBecomePage && "!text-yellow_2"
              }`}
            >
              <Link href="/become">
                <p>Become an affiliate</p>
              </Link>
            </button>
          </div>

          <PlayToButton className="bg-gradient_red text-white" />
        </div>
      </motion.div>
    </div>
  )
}

export default BaseMenuList
