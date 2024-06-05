import { useState } from "react"
import BaseMenuList from "./BaseMenuLIst"

const BaseMobileMenu = () => {
  const [isOpenBaseMenu, setIsOpenBaseMenu] = useState(false)
  return (
    <div
      className="w-full flex justify-between items-center cursor-pointer 
       gap-[10px] px-2"
    >
      <button
        type="button"
        onClick={() => setIsOpenBaseMenu(!isOpenBaseMenu)}
        aria-label="Toggle Menu"
        className="flex flex-col justify-center items-center 
          space-y-[7px] w-[50px] h-[40px] rounded-lg cursor-pointer"
        style={{ zIndex: 9999 }}
      >
        {isOpenBaseMenu ? (
          <div className="relative">
            <div className="absolute top-0 right-0 w-[24px] md:w-[42px] h-[3px] md:h-[5px] bg-yellow rounded-full top-45" />
            <div className="absolute top-0 right-0 w-[24px] md:w-[42px] h-[3px] md:h-[5px] bg-yellow rounded-full bottom-45" />
          </div>
        ) : (
          <div className="flex flex-col items-end justify-center gap-[6px] md:gap-[9px]">
            <div className="w-[20px] md:w-[30px] h-[3px] md:h-[5px] bg-yellow rounded-full" />
            <div className="w-[20px] md:w-[30px] h-[3px] md:h-[5px] bg-yellow rounded-full" />
            <div className="w-[20px] md:w-[30px] h-[3px] md:h-[5px] bg-yellow rounded-full" />
          </div>
        )}
      </button>
      {isOpenBaseMenu && <BaseMenuList />}
    </div>
  )
}

export default BaseMobileMenu
