import Link from "next/link"
import useIsMobile from "@/hooks/useIsMobile"
import Logo from "./Logo"
import MobileMenu from "../MobileMenu"
import DesktopMenu from "../DesktopMenu"

const Header = () => {
  const isMobile = useIsMobile()
  return (
    <div className="flex justify-between items-center w-full">
      <Link href="/">
        <div>
          <Logo />
        </div>
      </Link>
      <div className="flex gap-[30px] justify-end items-center">
        {isMobile ? <div /> : <DesktopMenu />}
        <MobileMenu />
      </div>
    </div>
  )
}

export default Header
