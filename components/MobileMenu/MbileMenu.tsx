import { useState } from "react"
import MenuList from "./MenuList"
import LanguageSetting from "./LanguageSetting"

const MobileMenu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <div
      className="w-full flex justify-between items-center cursor-pointer 
     gap-[10px]"
    >
      <LanguageSetting />
      <button
        type="button"
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        aria-label="Toggle Menu"
        className="flex flex-col justify-center items-center 
        space-y-[7px] w-[32px] h-[40px] rounded-lg cursor-pointer 
        transition duration-[300ms]"
        style={{ zIndex: 50 }}
      >
        {isOpenMenu ? (
          <div className="relative">
            <div
              className="absolute top-0 right-0 w-[22px] md:w-[32px] h-[2px] md:h-[3.5px] 
            bg-gradient_red rounded-full top-45"
            />
            <div
              className="absolute top-0 right-0 w-[22px] md:w-[32px] h-[2px] md:h-[3.5px] 
            bg-gradient_red rounded-full bottom-45"
            />
          </div>
        ) : (
          <>
            <div className="w-[22px] md:w-[32px] h-[2px] md:h-[3.5px]  bg-gradient_red rounded-full" />
            <div className="w-[22px] md:w-[32px] h-[2px] md:h-[3.5px]  bg-gradient_red rounded-full" />
            <div className="w-[22px] md:w-[32px] h-[2px] md:h-[3.5px]  bg-gradient_red rounded-full" />
          </>
        )}
      </button>
      {isOpenMenu && <MenuList />}
    </div>
  )
}

export default MobileMenu
