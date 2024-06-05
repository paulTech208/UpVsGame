import { motion } from "framer-motion"
import Link from "next/link"
import PlayToButton from "../PlayToButton"

const MenuList = () => (
  <div className="w-screen h-screen fixed left-0 top-0 z-[2] bg-[rgba(0,0,0,.5)]">
    <motion.div
      className="w-full sm:w-[725px] h-[100vh] bg-black_2 text-[16px] font-radikal_light text-black cursor-pointer overflow-y-auto
          shadow-[0_0_1rem_rgba(0,0,0,.2)]"
      initial={{
        x: "-100%",
      }}
      animate={{
        x: "0%",
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
        <p className="font-barlow_bold text-white text-[58px] md:text-[100px] leading-[98%]">
          Menu
        </p>
        <div
          className="font-barlow text-white text-[13px] md:text-[20px]  md:text-[25px] 
                  flex flex-col justify-center items-center gap-[5px] py-10"
        >
          <button type="button" className="transition duration-[300ms] hover:scale-[1.1]">
            <Link href="/">
              <p className="!text-yellow_2">Home Page</p>
            </Link>
          </button>
          <button type="button" className="transition duration-[300ms] hover:scale-[1.1]">
            <Link href="/about">
              <p>About</p>
            </Link>
          </button>
          <button type="button" className="transition duration-[300ms] hover:scale-[1.1]">
            <Link href="/howtoplay">
              <p>How to Play</p>
            </Link>
          </button>
          <button type="button" className="transition duration-[300ms] hover:scale-[1.1]">
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

export default MenuList
