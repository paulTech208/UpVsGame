import Link from "next/link"

const CTA = () => (
  <div className="w-full flex flex-col justify-center items-center relative z-[3] mt-[30px] md:mt-[50px]">
    <div className="w-full flex flex-col md:flex-row justify-center items-center text-white gap-[10px] md:gap-[30px] md:mx-[50px] md:mr-[300px]">
      <div className="w-full flex justify-center md:justify-end items-center">
        <button
          type="button"
          className="w-full max-w-[280px] md:max-w-[320px] bg-yellow_2 p-[8px_18px] md:p-[16px_50px]
           rounded-full font-barlow text-[18px] md:text-2xl text-black font-bold
          transition duration-[300ms] hover:scale-[1.1]"
        >
          <Link href="/trade">Play to earn Crypto</Link>
        </button>
      </div>
      <div className="w-full flex justify-center md:justify-start items-center gap-[10px] md:gap-[30px]">
        <Link href="/hottoplay">
          <button
            type="button"
            className=" border-2 border-yellow p-[8px_16px] md:p-[16px_50px] rounded-full 
                  font-barlow text-[18px] md:text-2xl text-yellow_2
                  transition duration-[300ms] hover:scale-[1.1]"
          >
            How to play
          </button>
        </Link>
        <Link href="/trade">
          <button
            type="button"
            className="border-2 border-yellow p-[8px_16px] md:p-[16px_50px]
                  rounded-full font-barlow text-[18px] md:text-2xl text-yellow_2
                  transition duration-[300ms] hover:scale-[1.1]"
          >
            Be an Affiliate
          </button>
        </Link>
      </div>
    </div>
  </div>
)

export default CTA
