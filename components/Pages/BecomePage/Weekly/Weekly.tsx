import HowToPageContainer from "@/components/HowToPageContainer"
import StartNowButton from "@/components/StartNowButton"
import useIsMobile from "@/hooks/useIsMobile"
import Media from "@/shared/Media"

const Weekly = () => {
  const isMobile = useIsMobile()
  return (
    <div className="w-full bg-white relative">
      <HowToPageContainer className="md:py-[80px]">
        <div className="w-full md:grid grid-cols-2 justify-ccneter items-center gap-[40px]">
          <div className="col-span-1 flex flex-col justify-center items-center md:items-start">
            <div className="w-[100px] md:w-[250px] h-[3px] md:h-[5px] bg-gradient_red" />
            <p className=" font-barlow_black  text-[38px] md:text-[82px] leading-[100%] text-center md:text-left leading-[90%] mt-[10px] md:mt-[30px]">
              {`WEEKLY \n JACKPOT`}
            </p>
            <p className="font-barlow_black text-[16px] md:text-[36px] py-[20px] leading-[110%] text-shadow">
              WHEN YOUR FRIENDS WITH <br />
              THE JACKPOT YOU ALSO WIN!
            </p>
            {isMobile && (
              <div className="col-span-1 w-full h-full flex justify-center items-center">
                <Media
                  link="/images/become/37da7d7f593eec3324f9.png"
                  blurLink="/images/become/37da7d7f593eec3324f9.png"
                  containerClasses="w-[300px] aspect-[353/350]"
                />
              </div>
            )}
            <StartNowButton />
          </div>
          {!isMobile && (
            <div className="col-span-1 w-full h-full flex justify-center items-center">
              <Media
                link="/images/become/84d68e0742e5b1c76cf0.png"
                blurLink="/images/become/84d68e0742e5b1c76cf0.png"
                containerClasses="w-[570px] aspect-[570/500]"
              />
            </div>
          )}
        </div>
      </HowToPageContainer>
    </div>
  )
}

export default Weekly
