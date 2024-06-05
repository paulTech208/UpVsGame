import BaseMobileMenu from "@/components/BaseMobileMenu"
import useIsMobile from "@/hooks/useIsMobile"
import Link from "next/link"
import { useRouter } from "next/router"

const BaseHeader = () => {
  const { pathname } = useRouter()
  const isMobile = useIsMobile()
  const isAboutPage = pathname.includes("/about")
  const isHowToPlayPage = pathname.includes("/howtoplay")
  const isBecomePage = pathname.includes("/become")

  return (
    <div className="bg-none w-full absolute top-0 left-0 flex">
      <div className="w-full relative flex">
        {!isMobile && (
          <div
            className="w-full flex justify-center items-center  mt-[50px] mb-[80px] gap-[50px] 
            font-borlow_extra text-[22px] font-500 text-white z-[20]"
          >
            <button
              type="button"
              className="
              transition duration-[300ms] hover:scale-[1.1]"
            >
              <Link href="/">
                <p>Home page</p>
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
                <p>How to play</p>
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
        )}

        <div className="absolute top-[20px] right-[0px] flex gap-[30px] justify-end items-center">
          <BaseMobileMenu />
        </div>
      </div>
    </div>
  )
}

export default BaseHeader
