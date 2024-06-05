import useIsMobile from "@/hooks/useIsMobile"
import Media from "@/shared/Media"
import Link from "next/link"

const Introduction = () => {
  const isMobile = useIsMobile()
  return (
    <div className="w-full flex flex-col justify-center md:justify-start items-center relative mb-[50px] md:mb-[150px]">
      <p className="font-barlow text-[16px] md:text-[30px] text-white font-bold leading-[130%] z-[10] text-center">
        MEET OUR{" "}
        <span className="text-green_1">
          WEB3 MULTY LEVEL <br /> AFFILIATE PROGRAM
        </span>
      </p>
      <div className="w-full md:grid grid-cols-12 justify-ccneter items-center z-[10] md:mt-[50px] md:px-[40px]">
        <div className="col-span-5 flex flex-col justify-center items-center md:items-start md:pl-[100px]">
          <p
            className="font-barlow_extra text-[30px] md:text-[75px] leading-[100%] text-center md:text-left 
          text-white mt-[10px] md:mt-[30px]"
          >
            YOU HAVE SOCIAL FRIENDS?
            <span className="text-green_1">IF YES,</span>
            MAKE MONEY NOW!
          </p>
          {isMobile && (
            <div className="w-full flex justify-center items-center">
              <Media
                link="/images/become/149074ff15178e493751.png"
                blurLink="/images/become/149074ff15178e493751.png"
                containerClasses="w-[300px] aspect-[353/350] mt-[20px]"
              />
            </div>
          )}
          <p
            className="font-barlow font-bold text-[16px] md:text-[30px] leading-[110%] text-center md:text-left 
          text-white py-[10px] md:py-[30px]"
          >
            <span className="text-red">IF NOT,</span> GO FIND NEW FRIENDS & <br />
            COME BACK TO US!
          </p>
          <div className="flex justify-center items-center mt-[20px]">
            <button
              type="button"
              className="bg-gradient_red p-[10px_30px] md:p-[16px_50px] rounded-full 
                  font-barlow_bold text-[16px] md:text-[26px] font-bold text-white
                  transition duration-[300ms] hover:scale-[1.1]"
            >
              <Link href="/trade">
                <p className="mx-9">Start Now</p>
              </Link>
            </button>
          </div>
        </div>
        {!isMobile && (
          <div className="col-span-7 w-full h-full flex justify-center items-center">
            <Media
              link="/images/become/149074ff15178e493751.png"
              blurLink="/images/become/149074ff15178e493751.png"
              containerClasses="w-[613px] aspect-[613/700]"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Introduction
